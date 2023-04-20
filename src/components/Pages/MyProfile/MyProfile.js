import React, { useContext } from "react";
// import ProfileEditModal from "./ProfileEditModal";
import { AuthContext } from "../../Context/AuthProvider";
// import { BsFillBookmarkStarFill } from 'react-icons/bs';
// import MyAccess from './MyProfileTable';

const MyProfile = () => {
  const { user, logUser } = useContext(AuthContext);
  // const { user, logUser } = useContext(AuthContext);

  // const [editName, setEditName] = useState();
  // const [editEmail, setEditEmail] = useState();

  // console.log(logUser);
  return (
    <div className=" border p-20 m-10 shadow-md shadow-black">
      <div>
        <div className="card">

          <div className="grid grid-cols-4">
            <div className="col-span-1 flex justify-center">
              {user ? (
                <img
                  className=" w-40 h-40 m-5 rounded-full"
                  src={user?.photoURL}
                  alt="Album"
                />
              ) : (
                <img
                  className="img-fluid m-5 rounded-full"
                  src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png"
                  alt="Album"
                />
              )}
            </div>

            <div className=" col-span-3" >
              <div >
                <p className="text-start text-small mb-2">
                  User ID : <span className=" font-bold my-10">WBC-{logUser?._id?.slice(16, -1)}</span> 
                  {/* Slice from 16 to last character */}
                </p>
              </div>
              <div >
                <p className="text-start mb-2 ">
                  Name : <span className="font-bold">{user?.displayName}</span>
                </p>
              </div>

              <div>
                <p className="text-start mb-2">
                  Email  : <span className="font-bold">{user?.email}</span>
                </p>
              </div>

              <div >
                <p className="text-start mb-2">
                  Phone : <span className=" font-bold">0{logUser?.phone}</span>
                </p>
              </div>

              <div className="grid grid-cols-12">
                <p className="text-start col-span-10 font-serif font-semibold flex">
                  Role : {logUser?.role}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;

{/* <div className="card lg:card-side m-10 lg:w-full w-96 bg-transparent">
      <div>
        <div className="card">
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
              </div>

              <div className="grid grid-cols-12">
                <p className="text-start col-span-10">
                  Email Address : {user?.email}
                </p>
              </div>

              <div className="grid grid-cols-12">
                <p className="text-start col-span-10">
                  Phone :<span className="mx-1">0{logUser?.phone}</span>
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
                
              </div>
              <div className="grid grid-cols-12">
                <p className="text-start col-span-10 font-serif font-semibold flex">
                  Role : {logUser?.role}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div> */}