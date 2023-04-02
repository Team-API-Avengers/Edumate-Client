import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 md:my-12 lg:px-16 xl:px-32">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div >Vivamus in nisl metus? Phasellus.</div>
                </div>
                <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
            </div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-xl ">
                <h1 className="text-2xl font-bold text-center">Signup</h1>
                <form >
                    <div className="text-sm">
                        <label className="flex m-2 dark:text-black">Name</label>
                        <input type="text" placeholder="Name" name="Name" className="input input-bordered w-full px-4 py-3 rounded-md  dark:bg-white dark:text-black" />
                    </div>
                    <div className="text-sm">
                        <label className="flex m-2 dark:text-black">Email</label>
                        <input type="text" placeholder="Email" name="Email" className="input input-bordered w-full px-4 py-3 rounded-md  dark:bg-white dark:text-black" />
                    </div>
                    <div className="mt-3 ms-1 text-sm">
                        <label className="flex m-2 dark:text-black ">Password</label>
                        <input type="text" placeholder="Password" name="password" className="input input-bordered w-full px-4 py-3 rounded-md  dark:bg-white dark:text-black" />
                    </div>
                    <button className="btn my-5 btn-primary w-full p-3 text-center rounded-full ">Sign up</button>
                </form>
                <p className="text-xl text-center sm:px-6 ">Already have an account?
                    <Link to='/login' className="hover:underline mx-2">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;