import React, { useContext, useEffect, useState } from "react";
// import ProfileEditModal from "./ProfileEditModal";
import { AuthContext } from "../../Context/AuthProvider";
// import { Link } from "react-router-dom";
// import { BsFillBookmarkStarFill } from 'react-icons/bs';
// import MyAccess from './MyProfileTable';
import DynamicLogo from '../../Assets/Images/premeium-award.png'

const MyProfile = () => {
  const { user, logUser } = useContext(AuthContext);

  const [data, setData] = useState()

  console.log('Score', data);

  
  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/assesment/email?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data?.data))
      .finally(() => {});
  }, [user?.email]);

  // const [editEmail, setEditEmail] = useState();

  console.log(data);
  return (
    <div className=" border text-gray-200 bg-gradient-to-r from-[#1AA3D0] to-[#00A99D] ... lg:p-20 m-10 w-3/4 mx-auto rounded-3xl border-none">
      <div>
        <div className="card">


          <div className="flex justify-between lg:mb-[-55px] lg:mt-[-55px]">
            <div></div>
            <div>
              {data?.map((scoreData, idx) => 
              <img key={idx} className="w-24 rounded-full" src ={DynamicLogo} alt="" />
              )}
            </div>
          </div>


          
          <div className="grid grid-cols-1 p-10 md:grid-cols-4">
            <div className="col-span-1 flex justify-center">
              {user ? (
                <img className=" w-40 h-40 m-5 rounded-full" src={user?.photoURL} alt="Album" />
              ) : (
                <img
                  className=" w-40 h-40 m-5 rounded-full"
                  src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png"
                  alt="Album"
                />
              )}
            </div>

            <div className=" mt-10 mx-5 col-span-3">
              <div className="flex justify-between">
                <div>

                {data?.map((scoreData, idx) => <p className="border-b my-3 border-yellow-200 inline">
                    <span className="font-bold"> Assessment :</span> <span className="mx-2">{scoreData?.score}</span>
                  </p>)}


                  {logUser?._id && (
                    <p className="text-start font-bold text-small mb-2">
                      ID : <span className="  my-10"> WBC-{logUser?._id?.slice(16, -1)}</span>
                      {/* Slice from 16 to last character */}
                    </p>
                  )}

                  
                  <div>
                    {user?.displayName ? (
                      <p className="text-start font-bold mb-2 ">
                        Name : <span className="font-bold">{user?.displayName}</span>
                      </p>
                    ) : (
                      <p className="text-start font-bold mb-2 ">
                        Name : <span className="font-bold">New Guest</span>
                      </p>
                    )}
                  </div>
                </div>
                
              </div>
              

              <div>
                {user?.email ? (
                  <>
                    <p className="text-start  font-bold mb-2">
                      Email : <span className="font-bold">{user?.email}</span>
                    </p>
                    <div className="grid grid-cols-12">
                      {logUser?.role && (
                        <p className="text-start col-span-10 font-serif font-semibold flex">Role : {logUser?.role}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="text-start mb-2">
                    Email : <span className="font-bold">guest@gmail.com</span>
                  </p>
                )}
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>

  );
};

export default MyProfile;
