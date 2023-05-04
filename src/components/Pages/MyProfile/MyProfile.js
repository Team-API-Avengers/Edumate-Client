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
                  className=" w-40 h-40 m-5 rounded-full"
                  src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png"
                  alt="Album"
                />
              )}
            </div>

            <div className=" col-span-3" >
              <div >
                {
                  logUser?._id &&
                  <p className="text-start text-small mb-2">
                  User ID : <span className=" font-bold my-10">WBC-{logUser?._id?.slice(16, -1)}</span> 
                  {/* Slice from 16 to last character */}
                </p>
                }
                
              </div>
              <div >
                {
                  user?.displayName ?
                <p className="text-start mb-2 ">
                  Name : <span className="font-bold">{user?.displayName}</span>
                </p>
                :
                <p className="text-start mb-2 ">
                  Name : <span className="font-bold">New Guest</span>
                </p>
                }
              </div>

              <div>
                {
                  user?.email ?
                <>
                <p className="text-start mb-2">
                  Email  : <span className="font-bold">{user?.email}</span>
                </p>
                <div className="grid grid-cols-12">
                  {
                    logUser?.role &&
                <p className="text-start col-span-10 font-serif font-semibold flex">
                  Role : {logUser?.role}
                </p>
                  }
              </div>
                </>
                :
                <p className="text-start mb-2">
                  Email  : <span className="font-bold">guest@gmail.com</span>
                </p>
                }
              </div>

              
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;