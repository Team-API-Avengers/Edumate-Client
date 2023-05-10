import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader";




const AddTeacher = () => {
  const { user, logUser, loading } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

 
  const [submitting, setSubmitting] = useState(false);

  //! from .env.local file====>
  const imgHostKey = process.env.REACT_APP_Imgbb_key;
  // console.log(imgHostKey);

  console.log(submitting);
  // console.log(logUser);



  

  const addTeacher = (data) => {

    setSubmitting(true);

    const img = data.photo[0];

    const formData = new FormData();

    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${ imgHostKey }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData.data.url);
        if (imgData.success) {
          const teacherDetails = {
            name: user?.displayName,
            email: user?.email,
            role: logUser?.role,
            phone: data.number,
            qualification: data.qualification,
            experience: data.experience,
            gender: data.gender,
            fee: data.fee,
            image: imgData.data.url,
            location: data.location,
            bio: data.bio,
            background: data.background,
          };

          console.log(teacherDetails);

          fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(teacherDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data?.data) {
                toast.success("Data inserted Successfully");
                setSubmitting(false);
              }
            });
        }
      });
  };


  

  if(loading){
    return <Loader />;
  }
  return (
    <div className="bg-base-200 dark:bg-black dark:text-[#bb86fc]">
      <form onSubmit={ handleSubmit(addTeacher) }>
        <div className="min-h-screen p-6 bg-gray-100 dark:bg-black dark:text-[#bb86fc] flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-5xl text-gray-900 dark:text-[#bb86fc]">Be a teacher</h2>
              <p className="text-gray-800 dark:text-[#bb86fc] mt-2 mb-6">
                Empowering Generations, Start Your Teaching Journey Now
              </p>

              <div className="bg-white dark:bg-black dark:text-[#bb86fc] rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className=" gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"></div>
                    <div className="grid grid-cols-2 mt-2 gap-2">

                      <div className="">
                        <label>Full Name</label>
                        <input
                          defaultValue={ user?.displayName }
                          readOnly
                          type="text"
                          { ...register("name") }
                          className="h-12 border text-gray-800 border-green-400 mt-1 rounded px-4 w-full bg-sky-50"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="">
                        <label>Email Address</label>
                        <input
                          defaultValue={ user?.email }
                          type="email"
                          readOnly
                          { ...register("email") }
                          className="h-12 border text-gray-800 border-green-400 mt-1 rounded px-4  w-full bg-sky-50"
                          placeholder="email@domain.com"
                        />
                      </div>

                      <div>
                        <label className="block">Background</label>
                         <select
                          { ...register("background") }
                          className="select  h-11 text-gray-800 border border-green-400 mt-1 rounded w-full bg-sky-50"
                        >
                          <option disabled selected>
                            Choose your background
                          </option>
                          <option>Science</option>
                          <option>Commerce</option>
                          <option>Arts</option>
                        </select> 
                      </div>

                      <div className="">
                        <label>Address / Street</label>
                        <input
                          type="text"
                          { ...register("location") }
                          className="h-12 border text-gray-800 border-green-400 mt-1 rounded px-4  w-full bg-sky-50"
                          placeholder="Chittagong"
                        />
                      </div>

                      <div className="">
                        <label>Qualification</label>
                        <input
                          type="text"
                          { ...register("qualification") }
                          className="h-12 border text-gray-800 border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="Average fee"
                        />
                      </div>
                      
                      <div className="">
                        <label>Gender</label>
                        <input
                          type="text"
                          { ...register("gender") }
                          className="h-12 border text-gray-800 border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="Average fee"
                        />
                      </div>

                      <div className="">
                        <label>Average fee</label>
                        <input
                          type="text"
                          { ...register("fee") }
                          className="h-12 border text-gray-800 border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="Average fee"
                        />
                      </div>

                      <div className="">
                        <label>Experience</label>
                        <input
                          type="text"
                          { ...register("experience") }
                          className="h-12 border text-gray-800 border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="2 years*"
                        />
                      </div>

                      <div className="">
                        <label>Mobile number</label>
                        <input
                          type="text"
                          defaultValue={ logUser?.phone }
                          { ...register("number") }
                          className="h-12 border text-gray-800 border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="01100233534*"
                        />
                      </div>

                      <div className="w-full mt-1">
                        <label>Drop your professional image</label>
                        <input
                          { ...register("photo") }
                          type="file"
                          className="block h-12 text-gray-800 border border-green-400 w-full cursor-pointer appearance-none rounded   bg-sky-50 px-3 py-3 text-sm transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed  disabled:opacity-75"
                        />
                      </div>

                    </div>


                    <div className="mt-2">
                      <label>Describe yourself</label>
                      <div className="">
                        <textarea
                          name="message"
                          { ...register("bio") }
                          placeholder="Describe yourself*"
                          className="w-full h-32 bg-sky-50  border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                        ></textarea>
                      </div>
                      <div className="flex mt-8">
                        <button
                          type="submit"
                          className="group relative inline-flex items-center overflow-hidden border border-black bg-green-600 px-12 py-4 text-white focus:outline-none focus:ring active:bg-blue-500"
                        >
                          <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                            <BsArrowRight />
                          </span>

                          <span className="text-sm font-medium transition-all group-hover:mr-4">
                            Submit
                          </span>
                        </button>
                        {/* {submitting && (
                          <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="text-white font-bold text-lg">
                              Submitting data, please wait...
                            </div>
                          </div>
                        )} */}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <QuestionModal /> */}
      {/* {isModalOpen && (
         <QuestionModal onClose={handleModalClose}>
         <h2>You selected: {selectedOption}</h2>
         </QuestionModal>
      )} */}
      </form>
    </div>
  );
};

export default AddTeacher;
