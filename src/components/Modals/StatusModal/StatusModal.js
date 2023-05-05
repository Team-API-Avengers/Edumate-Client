import React, { useContext } from 'react';
// import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';



const StatusModal = () => {

    const {user, logUser} = useContext(AuthContext)
// console.log(user?.displayName)
    


	//! Time Adjustment
	const time = String(new Date().toLocaleTimeString());
	const day = String(new Date());


    const handleStatus = e => {
        e.preventDefault();

        const status = {
            category: e.target.category?.value,
            location: e.target.location?.value,
            authorName: user?.displayName,
            authorRole: logUser?.role,
            authorImage: user?.photoURL,
            authorEmail: user?.email,
            description: e.target.text.value,
            uploadedDay: day,
            uploadedTime: time,
        }

        console.log(status);
        //! Save addedStatus info to the database....
					// fetch('https://smart-thrill-social-media-server.vercel.app/status', {
					// 	method: 'POST',
					// 	headers: {
					// 		'content-type': 'application/json',
					// 	},
					// 	body: JSON.stringify(status),
					// })
					// 	.then((res) => res.json())
					// 	.then((result) => {
                    //         if (result.acknowledged) {
                    //             e.target.reset()
                    //             toast.success('Successfully posted your status')
                    //             window.location.reload(true);
                    //         }
                    //     });
        
        
    }
    return (
        <div>
        <input type="checkbox" id="Status-Modal" className="modal-toggle" />
        
        <div className="modal">
          <div className="modal-box relative bg-white text-black border-0 ">

            {/* User info */}
            <button className="btn gap-2">
            {user?.displayName}
            <div className="badge badge-secondary">{logUser?.role}</div>
            </button>

            {/* Close button */}
            <label htmlFor="Status-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


            {/* Form */}
            <form onSubmit={handleStatus} className="modal-box shadow-none bg-transparent w-full mx-auto ">


                {/* Department Field */}
            <div className="flex justify-center my-3">
            <div className='form-control w-full max-w-xs'>

            <select name='category' className="select select-bordered w-full max-w-xs">
            <option disabled selected>Choose a department</option>
            <option>Science</option>
            <option>Commerce</option>
            <option>Arts</option>
            </select>

            </div>
            </div>



            {/* Location Field */}
                <div className="flex justify-center mb-3">
                <div className='form-control w-full max-w-xs'>
                <input 
                type="text"
                name='location'
                placeholder="Your Location"
                className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white "
              />
                </div>
                </div>



                {/* Status Field */}
                <div className="flex justify-center">
                <div className='form-control w-full max-w-xs'>
                <input
                    type='text'
                    name='text'
                    placeholder={`What's on your mind,  ${logUser?.name}?`}
                    className='input input-bordered w-full max-w-xs h-20'
                    required
                />
                
                </div>
                </div>





                {/* Submit Button */}
                <button type="submit" className='w-full'>
                <label htmlFor="Status-Modal" className="modal-action flex justify-center btn bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-4"> Post</label>

                </button>
            </form>
          </div>
        </div>
        </div>
    );
};

export default StatusModal;