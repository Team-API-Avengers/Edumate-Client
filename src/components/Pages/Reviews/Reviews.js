import React from 'react';
import { useForm } from 'react-hook-form';

const Reviews = () => {
    const { register, handleSubmit } = useForm();

    const handleSubmitData = (data) => {

        const name = data.name;
        const email = data.email;
        const facebook = data.facebook;
        const twitter = data.twitter;
        const instagram = data.instagram;
        const message = data.message;
        const userReview = (email, name, facebook, twitter, instagram, message);
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
        <div className=" border px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  bg-sky-300 ">
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
        </div>
    );
};

export default Reviews;