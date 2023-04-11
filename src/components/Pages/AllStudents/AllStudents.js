import React from 'react';
import { Link } from 'react-router-dom';

const AllStudents = () => {
    return (
        <div className=' my-16 mx-6  dark:bg-[#350573]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-8 pb-8 pr-8 '>

                <div className="card  shadow-md shadow-dark-mid shadow-black transform hover:scale-105 transition duration-300 border rounded-none">
                    <Link><figure className="px-2 pt-2">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Shoes" />
                    </figure></Link>
                    <div className="card-body text-start">
                        <Link to=''><p className="card-title text-lg">Name: <span className='text-sm'>Black Adam</span></p></Link>
                        <p className="card-title text-lg">Location: <span className='text-sm'>Chittagong</span></p>
                        <p className="card-title text-lg">Subject: <span className='text-sm'>science</span></p>

                    </div>
                </div>
                <div className="card  shadow-md shadow-dark-mid shadow-black transform hover:scale-105 transition duration-300 border rounded-none">
                    <Link><figure className="px-2 pt-2">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Shoes" />
                    </figure></Link>
                    <div className="card-body text-start">
                        <Link to=''><p className="card-title text-lg">Name: <span className='text-sm'>Black Adam</span></p></Link>
                        <p className="card-title text-lg">Location: <span className='text-sm'>Chittagong</span></p>
                        <p className="card-title text-lg">Subject: <span className='text-sm'>science</span></p>

                    </div>
                </div>
                <div className="card  shadow-md shadow-dark-mid shadow-black transform hover:scale-105 transition duration-300 border rounded-none">
                    <Link><figure className="px-2 pt-2">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Shoes" />
                    </figure></Link>
                    <div className="card-body text-start">
                        <Link to=''><p className="card-title text-lg">Name: <span className='text-sm'>Black Adam</span></p></Link>
                        <p className="card-title text-lg">Location: <span className='text-sm'>Chittagong</span></p>
                        <p className="card-title text-lg">Subject: <span className='text-sm'>science</span></p>

                    </div>
                </div>
                <div className="card  shadow-md shadow-dark-mid shadow-black transform hover:scale-105 transition duration-300 border rounded-none">
                    <Link><figure className="px-2 pt-2">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Shoes" />
                    </figure></Link>
                    <div className="card-body text-start">
                        <Link to=''><p className="card-title text-lg">Name: <span className='text-sm'>Black Adam</span></p></Link>
                        <p className="card-title text-lg">Location: <span className='text-sm'>Chittagong</span></p>
                        <p className="card-title text-lg">Subject: <span className='text-sm'>science</span></p>

                    </div>
                </div>
                <div className="card  shadow-md shadow-dark-mid shadow-black transform hover:scale-105 transition duration-300 border rounded-none">
                    <Link><figure className="px-2 pt-2">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Shoes" />
                    </figure></Link>
                    <div className="card-body text-start">
                        <Link to=''><p className="card-title text-lg">Name: <span className='text-sm'>Black Adam</span></p></Link>
                        <p className="card-title text-lg">Location: <span className='text-sm'>Chittagong</span></p>
                        <p className="card-title text-lg">Subject: <span className='text-sm'>science</span></p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllStudents;