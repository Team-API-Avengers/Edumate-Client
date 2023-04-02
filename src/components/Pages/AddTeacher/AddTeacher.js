import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
// import { AuthContext } from '../../../Context/AuthProvider';
// import Loader from '../../../Loader/Loader';

const AddTeacher = () => {
	// const { user, loading, logUser } = useContext(AuthContext);
	// console.log(logUser[0].permission);
	const { register, handleSubmit, formState: { errors } } = useForm();

	const time = String(new Date()).slice(8, 21);

	const navigate = useNavigate();
	//! from .env.local file====>
	const imgHostKey = process.env.REACT_APP_Imgbb_key;
	// console.log(imgHostKey);

	const handleAddedProduct = (data) => {
		const image = data?.img[0];
		// console.log(image);
		const formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				// console.log(imgData);
				if (imgData.success) {
					// console.log(imgData.data.url)

					const addedProduct = {
						// verification: logUser.permission,
						// role: logUser.role,
						// author: user.displayName,
						// email: user.email,
						title: data.title,
						category: data.category,
						price: data.price,
						description: data.description,
						image: imgData.data.url,
						time,
					};
					// console.log(addedProduct);

					//! Save addedProducts info to the database....
					fetch('https://car-house-server-omega.vercel.app/products', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(addedProduct),
					})
						.then((res) => res.json())
						.then((result) => {
							// console.log(result);
							navigate('/dashboard/myProduct');
							toast.success('Successfully created a new Product!!');
						});
				}
			});
	};

	// if (loading) {
	// 	return <Loader></Loader>;
	// }

	return (
		<div className='bg-base-200'>
			<br />
			<h1 className='mb-5 text-2xl'>Add Your Product</h1>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content grid grid-cols-1 lg:grid-cols-2-col'>
					<div className='card grid grid-cols-1 lg:grid-cols-2-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form
							onSubmit={handleSubmit(handleAddedProduct)}
							className='card-body'
						>
							    <div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Product Title</span>
									</label>
									<input
										type='text'
										{...register('title', {
											required: 'Title is Required',
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.title && (
										<p className='text-red-500'>{errors.title?.message}</p>
									)}
								</div>


							    <div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Categories</span>
									</label>
									<select
										{...register('category', {
											required: true,
										})}
										className='select input-bordered w-full max-w-xs'
									>
										<option>Ferrari</option>
										<option>Audi</option>
										<option>BMW</option>
										<option>Lamborghini</option>
										<option>Tesla</option>
										<option>Mercedes_Benz</option>
										<option>Rolls_Royce</option>
										<option disabled>**** (comming soon)</option>
										<option disabled>**** (comming soon)</option>
										<option disabled>**** (comming soon)</option>
										<option disabled>**** (comming soon)</option>
										<option disabled>**** (comming soon)</option>
									</select>
									{errors.category && (
										<p className='text-red-500'>{errors.category.message}</p>
									)}
								</div>




								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'> Price :</span>
									</label>
									<input
										type='number'
										{...register('price', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.price && (
										<p className='text-red-500'>
											{errors.price.message}
										</p>
									)}
								</div>



							
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Description</span>
									</label>
									<input
										type='text'
										{...register('description', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.description && (
										<p className='text-red-500'>{errors.description.message}</p>
									)}
								</div>


								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Photo</span>
									</label>
									<input
										type='file'
										{...register('img', {
											required: 'Photo is Required',
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.img && (
										<p className='text-red-500'>{errors.img.message}</p>
									)}
								</div>
							

							<input
								className='btn bg-green-500 hover:bg-green-600 border-0 text-white w-full mt-4'
								value='Add product'
								type='submit'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddTeacher;
