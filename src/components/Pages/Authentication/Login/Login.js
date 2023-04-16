import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";


const Login = () => {
	const googleProvider = new GoogleAuthProvider();
	const { register, formState: { errors }, handleSubmit } = useForm();
	const { signIn, signInWithGoogle } = useContext(AuthContext);
	const [loginError, setLoginError] = useState('');
	// const [loginUserEmail, setLoginUserEmail] = useState('');
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || '/';

	const [recaptcha, setRecaptcha ] = useState()

	const captchaRef = useRef(null)

	//! react-google-recaptcha
	function onChange(value) {
		// console.log("Captcha value:", value);
		if(value === null){
			return toast.error('You are a root')
		}else{
			setRecaptcha(value);
			window.setTimeout(function() {// <-- remove this delay and the error goes away
				window.grecaptcha.reset();
			});
		}

	  }






	 //! Email Login Form
	const handleLogin = data => {
		console.log(data);
		setLoginError('');
		signIn(data.email, data.password)
			.then(result => {
				// const user = result.user;
				// console.log(user);

				if(result){
					toast.success('Login successful')
					// navigate('/')

					// form.reset();
				navigate(from, { replace: true });
				// setLoginUserEmail(data.email);
				}

			})
			.catch(error => {
				console.error(error.message);
				setLoginError(error.message);
				toast.error('Email Failed to login')
			});
	};





	//! Google Login Form
	const handleGoogle = () => {
		const role = 'Teacher';

		signInWithGoogle(googleProvider)
			.then(result => {
				const user = result.user;
				console.log(user);

				const addedUser = {
					name:user?.displayName,
					email:user?.email,
					role,
					phone: 0,
					image: user?.photoURL,
				  };


              //! Save User info to the database....
              fetch("https://edumate-second-server.vercel.app/api/v1/user", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(addedUser),
              })
                .then((res) => res.json())
                .then((result) => {
					console.log(result.data);
                  if(result){
					toast.success('Google Login successful')
					navigate(from, { replace: true });
                  }

                  
                });
				  
				
			})
			.catch(error => {
				console.error(error)
				toast.error('Failed to login')
			});
	};




	return (
		<div>
			 
			
				<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-white">
			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">
						Please Do it!
					</h2>
				  <div className='hidden lg:flex justify-center'>
				  <ReCAPTCHA
			      sitekey="6LfZE2glAAAAACGKH4fqAYxMk2cMqyPFihFIAo5C"
			      onChange={onChange}
			      ref={captchaRef}
				  />
				  </div>
					
				</div>
				<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
			</div>
			<div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-lg  ">
				
			 

				<div className="flex justify-around py-5">
				<Link to='/signup' className="text-2xl border rounded-lg shadow-md dark:shadow-slate-50 border-gray-600 p-3 font-bold text-center">Sign Up</Link>
				<h3 className="text-2xl text-gray-400 border rounded-lg shadow-md dark:shadow-slate-50 border-gray-600 p-3 font-bold text-center">Login</h3>
				</div>
				
				<form onSubmit={handleSubmit(handleLogin)}>
				<div className="text-sm">
					<label className="flex m-2 ">Email</label>
					<input
						type="text"
						{...register("email", {
							required: "Email Address is required"
						})}
						placeholder="Email"
						name="email"
						className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white "
					/>
					{errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
				</div>
				<div className="mt-3 ms-1 text-sm ">
					<label className="flex m-2  ">Password</label>
					<input
						type="text"
						{...register("password", {
							required: 'Password is required',
							minLength: { value: 6, message: 'Password must be 6 characters or longer' }
						})}
						placeholder="Password"
						name="password"
						className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white "
					/>
					{errors.password && <p className='text-red-600 mb-3'>{errors.password?.message}</p>}
					<div className="flex mt-2 mb-5 text-xs ">
						<Link to="">Forgot Password?</Link>
					</div>
				</div>
				<input className='btn btn-primary w-full p-3 text-center rounded-full ' value='Login' type="submit" />
				<div>
					{loginError && <p className='text-red-600'>{loginError}</p>}
				</div>
			</form>
				
				

				
				<div className="flex items-center pt-4 space-x-1">
				<div className="flex-1 h-px sm:w-16 "></div>
				<p onClick={handleGoogle} className="btn btn-outline text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 border-none w-full px-3 text-sm  rounded-full">
					Login with Google
				</p>
				<div className="flex-1 h-px sm:w-16 "></div>
			   </div>
				

				{/* <div className="flex justify-center space-x-4">
					<button aria-label="Log in with Google" className="p-3 rounded-sm">
						
					</button>
					<button aria-label="Log in with Twitter" className="p-3 rounded-sm">
						<BsTwitter className="text-2xl" />
					</button>
					<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
						<BsGithub className="text-2xl" />
					</button>
				</div> */}
				<p className="text-xl text-center sm:px-6 ">
					Don't have an account?
					<Link
						to="/signup"
						className="hover:underline mx-2"
					>
						Sign up
					</Link>
				</p>
			</div>
		    </div>
			
			
			
		</div>
	);
};

export default Login;