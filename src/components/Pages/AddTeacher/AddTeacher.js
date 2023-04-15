import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { BsArrowRight } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthProvider";

const AddTeacher = () => {
  const { register, handleSubmit } = useForm();

  const { user, logUser } = useContext(AuthContext);

  //! from .env.local file====>
  const imgHostKey = process.env.REACT_APP_Imgbb_key;
  console.log(imgHostKey);

  console.log(user);
  console.log(logUser);

  const addTeacher = (data) => {
    const img = data.photo[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

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
            experience: data.experience,
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
              if (data.data) {
                toast.success("success");
              }
            });
        }
      });
  };
  return (
    <div className="bg-base-200  dark:bg-[#350573]  dark:text-[#fcf9ff]">
      <form onSubmit={handleSubmit(addTeacher)}>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div class="container max-w-screen-lg mx-auto">
            <div>
              <h2 class="font-semibold text-5xl text-gray-900">Be a teacher</h2>
              <p class="text-gray-800 mt-2 mb-6">
                Empowering Generations, Start Your Teaching Journey Now
              </p>

              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class=" gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"></div>
                    <div className="grid grid-cols-2 mt-2 gap-2">
                      <div class="">
                        <label>Full Name</label>
                        <input
                          defaultValue={user?.displayName}
                          readOnly
                          type="text"
                          {...register("name")}
                          class="h-12 border border-green-400 mt-1 rounded px-4 w-full bg-sky-50"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div class="">
                        <label>Email Address</label>
                        <input
                          defaultValue={user?.email}
                          type="email"
                          readOnly
                          {...register("email")}
                          class="h-12 border border-green-400 mt-1 rounded px-4  w-full bg-sky-50"
                          placeholder="email@domain.com"
                        />
                      </div>
                      <div class="">
                        <label>Background</label>
                        <select
                          {...register("background")}
                          className="select  h-11 border border-green-400 mt-1 rounded   w-full bg-sky-50 "
                        >
                          <option disabled selected>
                            Choose your background
                          </option>
                          <option>Science</option>
                          <option>Commerce</option>
                          <option>Arts</option>
                        </select>
                      </div>

                      <div class="">
                        <label>Address / Street</label>
                        <input
                          type="text"
                          {...register("location")}
                          class="h-12 border border-green-400 mt-1 rounded px-4  w-full bg-sky-50"
                          placeholder="Sitakunda, Chittagong"
                        />
                      </div>

                      <div class="">
                        <label>Average fee</label>
                        <input
                          type="text"
                          {...register("fee")}
                          class="h-12 border border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="Average fee"
                        />
                      </div>
                      <div class="">
                        <label>Experience</label>
                        <input
                          type="text"
                          {...register("experience")}
                          class="h-12 border border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="2 years*"
                        />
                      </div>
                      <div class="">
                        <label>Mobile number</label>
                        <input
                          type="text"
                          {...register("number")}
                          class="h-12 border border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="01100233534*"
                        />
                      </div>
                      <div class="w-full space-y-0.5">
                        <label>You should add an unique image</label>
                        <input
                          {...register("photo")}
                          type="file"
                          class="block h-12 border border-green-400 w-full cursor-pointer appearance-none rounded-md   bg-sky-50 px-3 py-3 text-sm transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed  disabled:opacity-75"
                        />
                      </div>
                    </div>{" "}
                    <div className="mt-2">
                      <label>Describe yourself</label>
                      <div class="">
                        <textarea
                          name="message"
                          {...register("bio")}
                          placeholder="Describe yourself*"
                          class="w-full h-32 bg-sky-50  border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                        ></textarea>
                      </div>{" "}
                      <div class="flex mt-8">
                        <button
                          type="submit"
                          class="group relative inline-flex items-center overflow-hidden border border-black bg-green-600 px-12 py-4 text-white focus:outline-none focus:ring active:bg-blue-500"
                        >
                          <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                            <BsArrowRight />
                          </span>

                          <span class="text-sm font-medium transition-all group-hover:mr-4">
                            Submit
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
