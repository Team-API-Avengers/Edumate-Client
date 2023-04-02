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
						name: data.name,
						category: data.category,
						fee: data.fee,
						location: data.location,
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
			<h1 className='mb-5 text-2xl'>Add Your Information</h1>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content grid grid-cols-1 lg:grid-cols-2-col'>
					<div className='card grid grid-cols-1 lg:grid-cols-2-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form
							onSubmit={handleSubmit(handleAddedProduct)}
							className='card-body'
						>
							    <div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Name</span>
									</label>
									<input
										type='text'
										{...register('name', {
											required: 'name is Required',
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.name && (
										<p className='text-red-500'>{errors.name?.message}</p>
									)}
								</div>

							    <div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Email</span>
									</label>
									<input
										type='text'
										{...register('email', {
											required: 'email is Required',
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.email && (
										<p className='text-red-500'>{errors.email?.message}</p>
									)}
								</div>


							    <div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Background</span>
									</label>
									<select
										{...register('background', {
											required: true,
										})}
										className='select input-bordered w-full max-w-xs'
									>
										<option>Science</option>
										<option>Commerce</option>
										<option>Humanity</option>
									</select>
									{errors.background && (
										<p className='text-red-500'>{errors.background.message}</p>
									)}
								</div>




								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'> Fee :</span>
									</label>
									<input
										type='number'
										{...register('fee', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.fee && (
										<p className='text-red-500'>
											{errors.fee.message}
										</p>
									)}
								</div>



							
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Location</span>
									</label>
									<input
										type='text'
										{...register('location', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.location && (
										<p className='text-red-500'>{errors.location.message}</p>
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
								value='Submit'
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
