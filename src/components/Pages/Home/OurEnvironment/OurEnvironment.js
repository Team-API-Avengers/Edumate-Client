import React from 'react';
import { BsArrowRight, BsSearch } from 'react-icons/bs';

const OurEnvironment = () => {
    return (
        <div className='mx-16'>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">


                <div className='relative w-1/2'>
                <img src="https://www.tutorstorm.com/wp-content/uploads/2020/08/subject-tutoring-1.jpg" className="max-w-sm w-32 object-cover rotate-45 h-32 absolute top-[-120px] left-16  border-b-4 border-r-8 border-purple-600 rounded-lg shadow-2xl" />

                <img src="https://www.tutorstorm.com/wp-content/uploads/2020/08/exam-and-sac-preparation-1.jpg" className="max-w-sm w-36 rotate-45 h-32 absolute top-0 right-48 object-cover border-b-4 border-r-8 border-green-600   rounded-lg shadow-2xl" />


                <img src="http://hometutor.co.tz/wp-content/uploads/2020/02/HOME-TUTOR-LOGO-01.png" className="max-w-sm w-28 border-b-4 border-r-8 border-orange-600 rotate-45 h-28 object-cover absolute bottom-32 left-36 rounded-lg shadow-2xl" />

                <img src="https://www.tutorstorm.com/wp-content/uploads/2020/08/online-tutoring.jpg" className="max-w-sm w-52 rotate-45 h-52 border-b-4 border-r-8 border-blue-700 object-cover absolute bottom-[-10px] right-12 rounded-lg shadow-2xl" />
                </div>



                <div className=' w-1/2'>
                <div className="flex">
                <h1 className="text-5xl font-bold text-start">Find Your <br /> Tutor</h1> 
                <div className="divider  bg-black  w-1 divider-horizontal"></div>
                </div> 

                <p className="py-6 text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                <button className="btn btn-primary justify-start flex group">
                    <span>Get Started</span>
                    <BsArrowRight className='group-hover:flex hidden mx-3' />
                </button>

                <form className="flex border my-10 border-gray-400 bg-white w-80 rounded-lg">
                <input
                  type="text"
                  placeholder="Search your subject"
                  className="input w-full max-w-xs focus:outline-0 text-blue-600"
                />
              
                <button className=""><BsSearch className="text-4xl mx-2 hover:text-blue-700" /></button>
              </form>

                </div>
            </div>
            </div>
        </div>
    );
};

export default OurEnvironment;