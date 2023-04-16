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
			{/* <div className='hero min-h-screen '>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					
					<div className='card flex-shrink-0 w-full shadow-2xl '>
						<form
							onSubmit={handleSubmit}
							className='card-body'
						>
							<div className='form-control w-96'>
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
							<div className='form-control w-96'>
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
							<div className='form-control w-96'>
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
							<div className='form-control w-96'>
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
			</div> */}



			<div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Contact Form
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                className=" w-full block px-16 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                className=" block w-full mt-2 px-16 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="john.cooks@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                className=" block w-full mt-2 px-16 py-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200  focus:ring-opacity-50 "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className=" h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
            >
              Contact Us
            </button>
          </div>
          <div></div>
        </form>
      </div>
            </div>










		</div>
	);
};

export default Contact;