import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";

const AddTeacher = () => {
  const { register, handleSubmit } = useForm();

  const addTeacher = (data) => {
    const img = data.photo[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?&key=d1492118b3a4839b4618065890540ec1`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData.data.url);
        if (imgData.success) {
          const teacherDetails = {
            name: data.name,
            email: data.email,
            phone: data.number,
            experience: data.experience,
            fee: data.fee,
            image: imgData.data.url,
            location: data.location,
            bio: data.bio,
            background: data.background,
          };
          console.log(teacherDetails);
        }
        fetch(``, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addTeacher),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        alert("success");
      });
  };
  return (
    <div className="bg-base-200">
      <form onSubmit={handleSubmit(addTeacher)}>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div class="container max-w-screen-lg mx-auto">
            <div>
              <h2 class="font-semibold text-5xl text-gray-900">Be a teacher</h2>
              <p class="text-gray-800 mt-2 mb-6">
                Empowering Generations, Start Your Teaching Journey Now
              </p>

              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="text-gray-600">
                    <p class="font-medium text-black text-2xl">
                      Personal Details
                    </p>
                    <p className="text-black mt-1">
                      Please fill out all the fields.
                    </p>
                  </div>

                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div class="md:col-span-5">
                        <label>Full Name</label>
                        <input
                          type="text"
                          required
                          {...register("name")}
                          class="h-12 border border-green-400 mt-1 rounded px-4 w-full bg-green-50"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div class="md:col-span-5">
                        <label>Email Address</label>
                        <input
                          type="text"
                          required
                          {...register("email")}
                          class="h-12 border border-green-400 mt-1 rounded px-4  w-full bg-sky-50"
                          placeholder="email@domain.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 mt-2 gap-2">
                      <div class="">
                        <label>Background</label>
                        <select
                          {...register("background")}
                          className="select required h-11 border border-green-400 mt-1 rounded   w-full bg-sky-50 "
                        >
                          <option disabled selected>
                            Choose your background
                          </option>
                          <option>Science</option>
                          <option>Commerce</option>
                          <option>Humanity</option>
                        </select>
                      </div>

                      <div class="">
                        <label>Address / Street</label>
                        <input
                          type="text"
                          required
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
                          required
                          class="h-12 border border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="Average fee"
                        />
                      </div>
                      <div class="">
                        <label>Experience</label>
                        <input
                          type="text"
                          required
                          {...register("experience")}
                          class="h-12 border border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="2 years*"
                        />
                      </div>
                      <div class="">
                        <label>Mobile number</label>
                        <input
                          type="text"
                          required
                          {...register("number")}
                          class="h-12 border border-green-400 mt-1  px-4 rounded   w-full bg-sky-50"
                          placeholder="01100233534*"
                        />
                      </div>
                      <div class="w-full space-y-0.5">
                        <label>Your photo</label>
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
                          required
                          placeholder="Describe yourself*"
                          class="w-full h-32 bg-sky-50  border border-green-400 text-gray-900  p-3 rounded focus:outline-none focus:shadow-outline"
                        ></textarea>
                      </div>{" "}
                      <div class="flex mt-8">
                        <button
                          type="submit"
                          class="group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-500"
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
        </div>{" "}
      </form>
    </div>
  );
};

export default AddTeacher;
