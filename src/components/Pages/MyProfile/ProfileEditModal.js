import React from 'react';

const ProfileEditModal = ({editName, editEmail}) => {
    return (
			<div>
				<input type='checkbox' id='profileEdit' className='modal-toggle' />
				<div className='modal'>
					<div className='modal-box relative'>
						<label
							htmlFor='profileEdit'
							className='btn btn-sm btn-circle btn-error text-white absolute right-2 top-2'
						>
							✕
						</label>
						{editName && !editEmail &&
						<p>Update Your {editName}</p>
                         }
						
						{ editEmail && 
						<p>Update Your {editEmail}</p>
                         }
						
						<form className='text-lg font-bold'>
							<input
								type='text'
								className='input input-bordered rounded-none input-primary  h-12 w-full max-w-xs'
							/>
							<input type='submit' value='Submit' className='px-3 h-12 bg-blue-600' />
							
						</form>
					</div>
				</div>
			</div>
		);
};

export default ProfileEditModal;