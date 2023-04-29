import React, { useEffect, useState } from 'react';
import Loader from '../../../Shared/Loader/Loader';

const Gallery = () => {

      
  const [allInstructor, setInstructors] = useState({});

  const [allStudents, SetStudent] = useState([]);

console.log('allInstructor', allInstructor);

console.log('allStudents', allStudents);

  const [loading, setLoading] = useState(false);


    const handleStudents = () => {
        // alert('students')
        setLoading(true);
    fetch(`https://edumate-second-server.vercel.app/api/v1/user/dash/student`)
      .then((res) => res.json())
      .then((data) => console.log(data))
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
              .then((data) => setInstructors(data?.data?.reverse().slice(0, 6)))
              .finally(() => {
                setLoading(false);
              });
          
    }

    console.log(allStudents[1]?.image);

if(loading){
    return <Loader />
}

    return (
        <div>
            <div className="flex">
                <button onClick={handleStudents} className="btn mx-3">Students</button>
                <button onClick={handleTeachers} className="btn mx-3">Teachers</button>
            </div>
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div class="-m-1 flex flex-wrap md:-m-2">

                <div class="flex w-1/2 flex-wrap">
                    
                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[1]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[2]?.image} />
                </div>

                <div class="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[3]?.image} />
                </div>

                </div>

                <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[4]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[5]?.image} />
                </div>

                <div class="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src={allStudents[6]?.image} />
                </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default Gallery;