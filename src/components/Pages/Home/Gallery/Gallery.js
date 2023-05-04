import React, { useEffect, useState } from 'react';
import Loader from '../../../Shared/Loader/Loader';

const Gallery = () => {

      
//   const [allInstructor, setInstructors] = useState({});

  const [allStudents, SetStudent] = useState([]);

  const [allUser, setAllUser] = useState({});

// console.log('allInstructor', allInstructor);

// console.log('allStudents', allStudents);

  const [loading, setLoading] = useState(false);


    const handleStudents = () => {
        // alert('students')
        setLoading(true);
    fetch(`https://edumate-second-server.vercel.app/api/v1/user/dash/student`)
      .then((res) => res.json())
      .then((data) => setAllUser(data?.data))
      .finally(() => {
        setLoading(false);
      });
    }


    useEffect(() => {
        fetch(`https://edumate-second-server.vercel.app/api/v1/user/dash/student`)
      .then((res) => res.json())
      .then((data) => SetStudent(data?.data))
    },[])

    
    const handleTeachers = () => {
    //    alert('Teachers')
            setLoading(true);
            fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
              .then((res) => res.json())
              .then((data) => setAllUser(data?.data))
              .finally(() => {
                setLoading(false);
              });
          
    }

    console.log(allStudents);

if(loading){
    return <Loader />
}

    return (
        <div>
            <div className="flex">
                <button onClick={handleStudents} className="btn mx-3">Students</button>
                <button onClick={handleTeachers} className="btn mx-3">Teachers</button>
            </div>
            {
                allUser[1] ?
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div class="-m-1 flex flex-wrap md:-m-2">

                <div class="flex w-1/2 flex-wrap">
                    
                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[1]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[2]?.image} />
                </div>

                <div class="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[3]?.image} />
                </div>

                </div>

                <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-96 w-full rounded-lg object-cover object-center"
                    src={allUser[4]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[5]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allUser[6]?.image} />
                </div>

                </div>
            </div>
            </div>
            :
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div class="-m-1 flex flex-wrap md:-m-2">

                <div class="flex w-1/2 flex-wrap">
                    
                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src='https://cdn-icons-png.flaticon.com/512/2154/2154466.png' />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src='https://cdn-icons-png.flaticon.com/512/2154/2154466.png' />
                </div>

                <div class="w-full p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src='https://cdn-icons-png.flaticon.com/512/2154/2154466.png' />
                </div>

                </div>

                <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src='https://cdn-icons-png.flaticon.com/512/2154/2154466.png' />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src='https://cdn-icons-png.flaticon.com/512/2154/2154466.png' />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="g"
                    class="block border h-full w-full rounded-lg object-cover object-center"
                    src='https://cdn-icons-png.flaticon.com/512/2154/2154466.png' />
                </div>

                </div>
            </div>
            </div>
            }
        </div>
    );
};

export default Gallery;