import React from 'react';
import logo from '../../Assets/edumateLogo.png'

const WelcomeDashboard = () => {
    return (
       			<div
				className='hero min-h-screen'
				style={{
					backgroundImage: `url("https://cdn.dribbble.com/users/1195128/screenshots/14971635/__________________1.png")`,
				}}
			>
				<div className='hero-overlay bg-opacity-30'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md'>
						<h1 className='mb-5 text-4xl font-bold text-white'>
							Welcome to Deshboard
						</h1>
					</div>
				</div>
			</div>
    );
};

export default WelcomeDashboard;