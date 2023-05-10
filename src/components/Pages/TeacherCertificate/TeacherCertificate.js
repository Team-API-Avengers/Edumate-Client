import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import premeumLogo from '../../Assets/Images/premeium-award.png'


const TeacherCertificate = () => {
    const {user} = useContext(AuthContext)
    return (
        <div >
            <h1>My Achievement</h1>
            <div className='border m-3 grid grid-cols-11 certificate'>

                <div className='border w-full col-span-9 flex items-center justify-center overflow-visible h-[370px] mt-3 border-black bg-red-100'>
                    <div className="content">
                    <h1>API Avengers </h1>
                    <h2>Certificate of Completion</h2>
                    <h1>Name: {user?.displayName} </h1>
                    <h1>Email: {user?.email}</h1>
                    </div>
                </div>



                <div className='border w-96 col-span-2 overflow-visible border-black h-[400px] bg-red-100'>
                    <div className='border w-96 overflow-visible h-[400px] rounded-l-3xl bg-blue-100'>

                    <div className="avatar mt-36 ml-[-380px]">
                    <div className="w-40 rounded-full ring-offset-base-100 ring-offset-2">
                        <img src={premeumLogo} alt='' />
                    </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherCertificate;