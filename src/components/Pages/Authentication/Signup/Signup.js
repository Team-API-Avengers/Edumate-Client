import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    // const [createdUserEmail, setCreatedUserEmail] = useState('')

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('user Created Succesfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message);
            });

    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // setCreatedUserEmail(email);
                console.log(data);
            })
    };

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
                <form onSubmit={handleSubmit(handleSignUp)} >
                    <div className="text-sm">
                        <label className="flex m-2 dark:text-black">Name</label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is requires"
                            })
                            }
                            placeholder="Name" name="name" className="input input-bordered w-full px-4 py-3 rounded-md  dark:bg-white dark:text-black" />
                    </div>
                    <div className="text-sm">
                        <label className="flex m-2 dark:text-black">Email</label>
                        <input type="text" {...register("email", {
                            required: "Email is required"
                        })} placeholder="Email" name="email" className="input input-bordered w-full px-4 py-3 rounded-md  dark:bg-white dark:text-black" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="mt-3 ms-1 text-sm">
                        <label className="flex m-2 dark:text-black ">Password</label>
                        <input type="text" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "password must be 6 character long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong' }
                        })} placeholder="Password" name="password" className="input input-bordered w-full px-4 py-3 rounded-md  dark:bg-white dark:text-black" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn my-5 btn-primary w-full p-3 text-center rounded-full ' value='Signup' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className="text-xl text-center sm:px-6 ">Already have an account?
                    <Link to='/login' className="hover:underline mx-2">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;