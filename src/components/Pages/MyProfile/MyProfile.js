import React, { useContext } from "react";
// import ProfileEditModal from "./ProfileEditModal";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
// import { BsFillBookmarkStarFill } from 'react-icons/bs';
// import MyAccess from './MyProfileTable';

const MyProfile = () => {
  const { user, logUser } = useContext(AuthContext);

  // const [editEmail, setEditEmail] = useState();

  console.log(logUser);
  return (
    // <div className=" border p-20 m-10 shadow-md shadow-black">
    //   <div>
    //     <div className="card">

    //       <div className="grid grid-cols-4">
    //         <div className="col-span-1 flex justify-center">
    //           {user ? (
    //             <img
    //               className=" w-40 h-40 m-5 rounded-full"
    //               src={user?.photoURL}
    //               alt="Album"
    //             />
    //           ) : (
    //             <img
    //               className=" w-40 h-40 m-5 rounded-full"
    //               src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png"
    //               alt="Album"
    //             />
    //           )}
    //         </div>

    //         <div className=" col-span-3" >
    //           <div >
    //             {
    //               logUser?._id &&
    //               <p className="text-start text-small mb-2">
    //               User ID : <span className=" font-bold my-10">WBC-{logUser?._id?.slice(16, -1)}</span>
    //               {/* Slice from 16 to last character */}
    //             </p>
    //             }

    //           </div>
    //           <div >
    //             {
    //               user?.displayName ?
    //             <p className="text-start mb-2 ">
    //               Name : <span className="font-bold">{user?.displayName}</span>
    //             </p>
    //             :
    //             <p className="text-start mb-2 ">
    //               Name : <span className="font-bold">New Guest</span>
    //             </p>
    //             }
    //           </div>

    //           <div>
    // {
    //   user?.email ?
    // <>
    // <p className="text-start mb-2">
    //   Email  : <span className="font-bold">{user?.email}</span>
    // </p>
    // <div className="grid grid-cols-12">
    //   {
    //     logUser?.role &&
    // <p className="text-start col-span-10 font-serif font-semibold flex">
    //   Role : {logUser?.role}
    // </p>
    //   }
    //           </div>
    //             </>
    //             :
    //             <p className="text-start mb-2">
    //               Email  : <span className="font-bold">guest@gmail.com</span>
    //             </p>
    //             }
    //           </div>

    //         </div>

    //       </div>

    //     </div>
    //   </div>
    // </div>

    /* ------------------------------ trial version ----------------------------- */
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />

      <main class="profile-page bg-green-200">
        <section class="relative block h-96">
          <div class="absolute top-0 w-full h-full bg-center bg-cover">
            <span class="h-full absolute opacity-50 "></span>
          </div>
          <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-blue-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section class="relative py-14 bg-blue-200">
          <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full py-28  rounded-lg -mt-64">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div class="relative">
                      {user ? (
                        <img
                          class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
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
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 mt-32 sm:mt-0">
                      <Link to='/dashboard/skill-assessments'>
                      <button
                        class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Skill Test
                      </button>
                      </Link>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span class="text-sm text-blueGray-400">Friends</span>
                      </div>
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span class="text-sm text-blueGray-400">Photos</span>
                      </div>
                      <div class="lg:mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span class="text-sm text-blueGray-400">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center ">
                  {user?.displayName ? (
                    <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                      <span className="font-bold">{user?.displayName}</span>
                    </h3>
                  ) : (
                    <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                      Name : <span className="font-bold">Guest</span>
                    </h3>
                  )}
                  {user?.email ? (
                    <h3 class="text-xl  font-semibold leading-normal mb-2 text-gray-700 ">
                      <span className="font-bold">{user?.email}</span>
                    </h3> 
                  ) : (
                    <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                      <span className="font-bold">guest@gmail.com</span>
                    </h3>
                  )}
                  {logUser?.role && (
                    <p className="text-lg ">Role : {logUser?.role}</p>
                  )}

                  <div class="mb-2 text-blue-600 ">
                    {logUser?._id && (
                      <p className=" text-small mb-2">
                        User ID :
                        <span className=" font-bold my-10">
                          WBC-{logUser?._id?.slice(16, -1)}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyProfile;
