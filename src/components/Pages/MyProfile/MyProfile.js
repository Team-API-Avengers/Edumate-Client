import React, { useState } from 'react';
import ProfileEditModal from './ProfileEditModal';
// import { BsFillBookmarkStarFill } from 'react-icons/bs';
// import { AuthContext } from '../../../Context/AuthProvider';
// import MyAccess from './MyProfileTable';

const MyProfile = () => {
	// const { user, logUser } = useContext(AuthContext);


    const [editName, setEditName] = useState()
    const [editEmail, setEditEmail] = useState()

	// console.log(logUser);
	return (
		<div>
			<div className='card lg:card-side mb-10 lg:w-full w-96 bg-base-100 shadow-xl'>
				<div className=''>
					<img
						className='w-28 h-28 rounded-full'
						src=''
						alt='Album'
					/>
				</div>

				<div className='card-body'>
					<h2 className='card-title lg:flex hidden text-start '>
						Hey <h2 className=' font-serif font-bold'>User</h2> !
						Here's your details
					</h2>

					<div className='grid grid-cols-12'>
						<p className='text-start col-span-10'>
							Full Name : 
						</p>
						<p className='col-span-2 text-blue-500 hover:text-blue-600'>
							<label onClick={()=> setEditName('Name')} htmlFor='profileEdit' className='cursor-pointer'>
								Edit
							</label>
						</p>
					</div>

					<div className='grid grid-cols-12'>
						<p className='text-start col-span-10'>
							Email Address : 
						</p>
						<p className='col-span-2 text-blue-500 hover:text-blue-600'>
							<label onClick={()=> setEditEmail('Email')} htmlFor='profileEdit' className='cursor-pointer'>
								Edit
							</label>
						</p>
					</div>

					<div className='grid grid-cols-12'>
						<p className='text-start col-span-10'>
							Phone :
							{/* {user?.number ? <span>{logUser?.number}</span> : <span>N/A</span>} */}
						</p>
						<p className='col-span-2 text-blue-500 hover:text-blue-600'>
							<label htmlFor='' className='cursor-pointer text-gray-400'>
								Edit
							</label>
						</p>
					</div>
					<div className='grid grid-cols-12'>
						<p className='text-start col-span-10'>
							Password :
							{/* {logUser?.password ? (
								<span>{user?.number}</span>
							) : (
								<span> ******</span>
							)} */}
						</p>
						<p className='col-span-2 text-blue-500 hover:text-blue-600'>
							<label htmlFor='' className='cursor-pointer text-gray-400'>
								Edit
							</label>
						</p>
					</div>
					<div className='grid grid-cols-12'>
						<p className='text-start col-span-10 font-serif font-semibold flex'>
							{/* Role : {logUser?.role}
							{logUser?.role === 'Admin' && (
								<BsFillBookmarkStarFill className='text-green-600 mt-1 ml-2'></BsFillBookmarkStarFill>
							)} */}
						</p>
					</div>

					<div className='card-actions justify-end'>
						<progress
							className='progress progress-success w-56'
							value='70'
							max='100'
						></progress>
					</div>
				</div>
			</div>
			{/* <MyAccess></MyAccess> */}
			<ProfileEditModal
             editName = {editName}
             editEmail = {editEmail}
             ></ProfileEditModal>
		</div>
	);
};

export default MyProfile;
