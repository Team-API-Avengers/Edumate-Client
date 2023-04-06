import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const Reviews = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const { email, displayName } = user;
    // console.log(email, displayName);


    const handleSubmitData = (data) => {

        const name = data.name;
        const email = data.email;
        const message = data.message;
        const userReview = { email, name, message };
        // console.log(userReview);
        fetch('http://localhost:5000/userReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

    };

    return (
        <div className='border px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32'>
            <div className="grid md:grid-cols-1 lg:grid-cols-2">
                <div className="text-center lg:text-left p-12">
                    <h1 className="text-5xl font-bold">Give Your Feedback</h1>
                    <p className="py-6">We want to hear form you ! You can share with us what you feel about our services.</p>
                </div>
                <div className="card shadow-lg">
                    <form onSubmit={handleSubmit(handleSubmitData)} className="card-body">
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input
                                type="text"

                                {...register("name", {
                                    required: "Name is requiresd"
                                })
                                } defaultValue={displayName} disabled
                                placeholder="Full name" className=" w-full p-3 rounded-lg border border-gray-300 " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email"
                                {...register("email", {
                                    required: "Email is required"
                                })
                                }
                                defaultValue={email} disabled
                                placeholder='Email'
                                className="w-full p-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label"> <span className='label-text'>Message</span> </label><br />
                                <textarea name='message' {...register("message")} rows="3" className="w-full p-3  rounded-lg " placeholder='Message'></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-outline btn-info w-full mt-4' value='Submit' type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;


{/* <div className=" border px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  bg-sky-300 ">
    <div className='text-5xl font-extrabold mb-3'>
        <h1>Give Your Feedback</h1>
    </div>
    <form onSubmit={handleSubmit(handleSubmitData)} className=' shadow-xl rounded-lg py-16'>
        <div>
            <label for="name" className="text-sm">Full name</label><br />
            <input id="name" type="text"
                {...register("name", {
                    required: "Name is requiresd"
                })
                }
                placeholder="" className=" w-1/2 p-3 rounded-full " />
        </div>
        <div className='my-2'>
            <label for="email" className="text-sm">Email</label><br />
            <input name='email' type="email"
                {...register("email", {
                    required: "Email is required"
                })
                }
                className="w-1/2 p-3 rounded-full" />
        </div>
        <div className='my-2'>
            <label for="email" className="text-sm">Facebook Link</label><br />
            <input name='facebook'
                {...register("facebook")}
                type="text" className="w-1/2 p-3 rounded-full" />
        </div>
        <div className='my-2'>
            <label for="email" className="text-sm">Twitter Link</label><br />
            <input name='twitter' {...register("twitter")} type="text" className="w-1/2 p-3 rounded-full" />
        </div>
        <div className='my-2'>
            <label for="email" className="text-sm">Instagram Link</label><br />
            <input name='instagram' {...register("instagram")} type="text" className="w-1/2 p-3 rounded-full" />
        </div>
        <div>
            <label for="message" className="text-sm">Message</label><br />
            <textarea name='message' {...register("message")} rows="3" className="w-1/2 p-3  rounded-xl "></textarea>
        </div>
        <input className='btn btn-outline btn-primary w-1/2 mt-4' value='Submit' type="submit" />

    </form>
</div> */}