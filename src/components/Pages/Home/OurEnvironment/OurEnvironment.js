import React from 'react';
import { BsArrowRight, BsSearch } from 'react-icons/bs';

const OurEnvironment = () => {
    return (
        <div className='mx-16'>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">


                <div className='relative w-1/2'>
                <img src="https://www.findmy-tutor.com/wp-content/uploads/2022/11/My-project-1-165.png" className="max-w-sm w-32 rotate-45 h-32 absolute top-[-120px] left-16  border-b-4 border-r-8 border-purple-600 rounded-lg shadow-2xl" />

                <img src="https://llt.imgix.net/v1/1657590644-varsity-tutors-for-schools-teacher-assigned-one-pager-edited.png?ixlib=rb-3.3.1&fit=&auto=format%2Ccompress&w=960&crop=focalpoint&fp-x=0.6&fp-y=0.97&h=540&ar=1.7777777777777777" className="max-w-sm w-36 rotate-45 h-32 absolute top-0 right-48 border-b-4 border-r-8 border-green-600   rounded-lg shadow-2xl" />


                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUZJLolJdEbyfxXZYqRsZ4ySYowpufmbTPJzgIHiJAid9y5wNlWowcSJWKmAI7hkH2C4&usqp=CAU" className="max-w-sm w-28 border-b-4 border-r-8 border-orange-600 rotate-45 h-28 absolute bottom-32 left-36 rounded-lg shadow-2xl" />

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXascVm9qN8p4OxksfLYxRUYvpZiJMFYpW09GCKTmhCWzEEblhHPYaYqsiEHsQLiLokYY&usqp=CAU" className="max-w-sm w-52 rotate-45 h-52 border-b-4 border-r-8 border-blue-700 absolute bottom-[-10px] right-12 rounded-lg shadow-2xl" />
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