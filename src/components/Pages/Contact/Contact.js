import React from 'react';
import { useForm } from '@formspree/react';
import { toast } from 'react-toastify';

const Contact = () => {

	const [state, handleSubmit] = useForm("xpzeajqz");
	if (state.succeeded) {
		toast.success('Thanks for contact')
	};

	return (
		<div id='contact' className=' min-h-screen'>
			<h1 className='text-start font-serif font-bold flex justify-center pt-20 text-2xl'>For any query or information</h1>
			<h1 className='text-start font-serif font-bold flex justify-center text-2xl'>Please contact with us</h1>
			<div className='hero min-h-screen '>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='text-center lg:text-left'>
						<p className='py-6'>
							To contact with me please provide your email address.
						</p>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl cardBG '>
						<form
							onSubmit={handleSubmit}
							className='card-body'
						>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text '>Full Name</span>
								</label>
								<input
									type='text'
									name='name'
									placeholder='Your full name'
									className='input text-gray-800 focus:outline-none focus:border-none input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text '>Email</span>
								</label>
								<input
									type='email'
									name='email'
									placeholder='Your email'
									className='input text-gray-800 focus:outline-none focus:border-none input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text '>Subject</span>
								</label>
								<input
									type='text'
									name='subject'
									placeholder='Subject'
									className='input text-gray-800 focus:outline-none focus:border-none input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text '>message</span>
								</label>
								<textarea
									name='message'
									className='textarea text-gray-800 textarea-bordered'
									placeholder='Your message for me'
									required
								></textarea>
							</div>

							<div className='form-control mt-6'>
								<button type='submit' className='bg-green-500 hover:bg-green-700 p-3'>
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;