import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../Context/AuthProvider';

const AllStudents = () => {

    const {loading} = useContext(AuthContext)

    const [allInstructor, setInstructors] = useState({});


//https://edumate-second-server.vercel.app/api/v1/user/dash/teacher

    useEffect(() => {
      fetch(`https://edumate-second-server.vercel.app/api/v1/user/dash/student`)
        .then((res) => res.json())
        .then((data) => setInstructors(data?.data))
    }, []);



    

    if (loading) {
      return <Loader />;
    }

console.log(allInstructor);

    return (
        <div className=' my-16 mx-6  dark:bg-[#350573]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-8 pb-8 pr-8 '>

          


           {
            allInstructor?.map(data =>  <div className="card  shadow-md shadow-dark-mid shadow-black transform hover:scale-105 transition duration-300 border rounded-none">
            <Link><figure className="px-2 pt-2">
                <img className='w-full h-52' src={data?.image} alt="Img" />
            </figure></Link>
            <div className="card-body text-start">
                <Link to=''><p className="card-title text-lg">Name: <span className='text-sm'>{data?.name}</span></p></Link>
                <Link to=''><p className="card-title text-lg">Email: <span className='text-sm'>{data?.email}</span></p></Link>
                <p className="card-title text-lg">Location: <span className='text-sm'>{data?.location}</span></p>
                

            </div>
            </div>)
           }

            

            </div>
        </div>
    );
};

export default AllStudents;