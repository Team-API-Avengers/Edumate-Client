import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-black">
			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">
						Let's talk!
					</h2>
					<div className="dark:text-gray-400">
						Vivamus in nisl metus? Phasellus.
					</div>
				</div>
				<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
			</div>
			<div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-lg  ">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form>
					<div className="text-sm">
						<label className="flex m-2 ">Email</label>
						<input
							type="text"
							placeholder="Email"
							name="Email"
							className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white "
						/>
					</div>
					<div className="mt-3 ms-1 text-sm ">
						<label className="flex m-2  ">Password</label>
						<input
							type="text"
							placeholder="Password"
							name="password"
							className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white "
						/>
						<div className="flex mt-2 mb-5 text-xs ">
							<Link to="">Forgot Password?</Link>
						</div>
					</div>
					<button className="btn btn-primary w-full p-3 text-center rounded-full ">
						Sign in
					</button>
				</form>

				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 "></div>
					<p className="btn btn-outline text-white bg-blue-600 hover:bg-blue-700 border-none w-full px-3 text-sm  rounded-full">
						Login with Facebook
					</p>
					<div className="flex-1 h-px sm:w-16 "></div>
				</div>

				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 "></div>
					<p className="btn btn-outline text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 border-none w-full px-3 text-sm  rounded-full">
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
	);
};

export default Login;