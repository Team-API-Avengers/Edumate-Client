import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const Reviews = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const handleSubmitData = (data) => {

        const name = data.name;
        const email = data.email;
        const message = data.message;
        const userReview = { email, name, message };
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
                                } defaultValue={user?.displayName} disabled
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
                                defaultValue={user?.email}
                                disabled
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
