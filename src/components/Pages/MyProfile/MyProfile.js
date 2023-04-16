import React, { useContext, useState } from "react";
import ProfileEditModal from "./ProfileEditModal";
import { AuthContext } from "../../Context/AuthProvider";
// import { BsFillBookmarkStarFill } from 'react-icons/bs';
// import MyAccess from './MyProfileTable';

const MyProfile = () => {
  const { user, logUser } = useContext(AuthContext);
  // const { user, logUser } = useContext(AuthContext);

  const [editName, setEditName] = useState();
  const [editEmail, setEditEmail] = useState();

  // console.log(logUser);
  return (
    <div className="card lg:card-side mb-10  dark:bg-[#350573] lg:w-full w-96 bg-base-100 shadow-xl dark:shadow-slate-300 dark:shadow-sm">
      <div>
        <div className="card  dark:bg-[#350573] ">
          <div className="flex gap-12 justify-center items-center">
            <div>
              {user ? (
                <img
                  className="w-28 h-28 m-5 rounded-full"
                  src={user?.photoURL}
                  alt="Album"
                />
              ) : (
                <img
                  className="w-28 h-28 m-5 rounded-full"
                  src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png"
                  alt="Album"
                />
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <p className="text-start col-span-10">
                  Full Name : {user?.displayName}
                </p>
                <p className="col-span-2 text-blue-500 hover:text-blue-600">
                  <label
                    onClick={() => setEditName("Name")}
                    htmlFor="profileEdit"
                    className="cursor-pointer"
                  >
                    Edit
                  </label>
                </p>
              </div>

              <div className="grid grid-cols-12">
                <p className="text-start col-span-10">
                  Email Address : {user?.email}
                </p>
                <p className="col-span-2 text-blue-500 hover:text-blue-600">
                  <label
                    onClick={() => setEditEmail("Email")}
                    htmlFor="profileEdit"
                    className="cursor-pointer"
                  >
                    Edit
                  </label>
                </p>
              </div>

              <div className="grid grid-cols-12">
                {/* <p className='text-start col-span-10'>
							Phone :
							{logUser?.phone?.length === 1 ? <span>{logUser?.phone}</span> : <span>N/A</span>}
						</p> */}
                <p className="text-start col-span-10">
                  Phone :<span className="mx-1">0{logUser?.phone}</span>
                </p>
                <p className="col-span-2 text-blue-500 hover:text-blue-600">
                  <label htmlFor="" className="cursor-pointer text-gray-400">
                    Edit
                  </label>
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-start col-span-10">
                  Password :
                  {logUser?.password ? (
                    <span>{user?.number}</span>
                  ) : (
                    <span> ******</span>
                  )}
                </p>
                <p className="col-span-2 text-blue-500 hover:text-blue-600">
                  <label htmlFor="" className="cursor-pointer text-gray-400">
                    Edit
                  </label>
                </p>
              </div>
              <div className="grid grid-cols-12">
                <p className="text-start col-span-10 font-serif font-semibold flex">
                  Role : {logUser?.role}
                  {/* {logUser?.role === 'Admin' && (
								<BsFillBookmarkStarFill className='text-green-600 mt-1 ml-2'></BsFillBookmarkStarFill>
							)} */}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="card-actions justify-end">
            <progress
              className="progress progress-success w-56"
              value="70"
              max="100"
            ></progress>
          </div> */}
        </div>
      </div>
      {/* <MyAccess></MyAccess> */}
      <ProfileEditModal
        editName={editName}
        editEmail={editEmail}
      ></ProfileEditModal>
    </div>
  );
};

export default MyProfile;
