import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import BlogAnimation from "../../Assets/Animation/BlogAnimation.json";
import Lottie from "lottie-react";

const AddBlog = () => {
  const { register, handleSubmit } = useForm();
  const { user, logUser } = useContext(AuthContext);
  const imgBBkEY = process.env.REACT_APP_Imgbb_key;
  const navigate = useNavigate();

  const addBlog = (data) => {
    const img = data?.photo[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?&key=${imgBBkEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData?.success) {
          const blogDetails = {
            authorName: user?.displayName,
            authorEmail: user?.email,
            authorRole: logUser?.role,
            authorImage: user?.photoURL,
            title: data?.title,
            category: data?.category,
            details: data?.details,
            blogImage: imgData?.data?.url,
          };

          // console.log(blogDetails);

          fetch(`https://edumate-second-server.vercel.app/api/v1/blogs`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(blogDetails),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
          toast.success("Successfully added your blog");
          navigate("/blog");
        }
      });
  };

  return (
    <div>
      <section className=" py-1 mt-8 bg-blueGray-50  dark:bg-black dark:text-black">
        <div
          id="title"
          className="text-4xl font-extrabold text-[#1AA3D0] dark:text-[#00A99D]"
        >
          Drop your Blog
        </div>
        <p className="mt-3 dark:text-[#ffffff]">
          Contribute to our community with your blog post
        </p>
        <div className="grid grid-cols-1 mt-10 px-4 mx-16 border shadow-lg shadow-[#1AA3D0] rounded-md ">
          <div className="flex justify-center items-center">
            <Lottie animationData={BlogAnimation} loop={true}></Lottie>
          </div>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-blueGray-100  ">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(addBlog)}>
                <h6 className="text-[#1AA3D0] dark:text-[#00A99D] text-lg  mt-3 mb-6 font-bold uppercase">
                  Blog Information
                </h6>
                <div className="flex justify-between  ">
                  <div className=" w-full mb-3 me-4">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 dark:text-[#00A99D]">
                      Author Name
                    </label>
                    <input
                      {...register("Name")}
                      type="text"
                      defaultValue={user?.displayName}
                      readOnly
                      required
                      className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white border-2   border-[#1AA3D0]  focus:outline-none focus:border-[#00A99D]"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      readOnly
                      required
                      defaultValue={user?.email}
                      className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white border-2   border-[#1AA3D0]  focus:outline-none focus:border-[#00A99D]"
                    />
                  </div>
                </div>


                <div className="flex justify-between items-center mb-3">
                  <div className="w-full">
                    <div >
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2 ">
                        Blog category
                      </label>
                      <input
                        type="text"
                        {...register("category")}
                        required
                        className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white border-2   border-[#1AA3D0]  focus:outline-none focus:border-[#00A99D]"
                      />
                    </div>
                  </div>

                  {/* Author profession */}
                  <div className="w-full ms-3 ">
                    <div className="relative w-full ">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Author Profession
                      </label>
                      <input
                        type="text"
                        {...register("profession")}
                        required
                        className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white border-2   border-[#1AA3D0]  focus:outline-none focus:border-[#00A99D]"
                      />
                    </div>
                  </div>
                </div>


                {/* Blog image input */}

                <div className="flex gap-3 mb-3">
                  <div className="w-full  ">
                    <div className="w-full ">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog Image
                      </label>
                      <input
                        {...register("photo")}
                        type="file"
                        // required
                        className="input input-bordered w-full px-4 py-2 rounded-md dark:bg-white border-2   border-[#1AA3D0]  focus:outline-none focus:border-[#00A99D]"
                      />
                    </div>
                  </div>
                </div>

                {/* Blog title input */}

                <div className="flex flex-wrap">
                  <div className="w-full ">
                    <div className="relative w-full mb-3">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog title
                      </label>
                      <input
                        {...register("title")}
                        type="text"
                        required
                        className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white border-2   border-[#1AA3D0]  focus:outline-none focus:border-[#00A99D]"
                      />
                    </div>
                  </div>

                  {/* <div className="w-full lg:w-6/12 px-4">
                    <div className="w-full space-y-0.5">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog Image
                      </label>
                      <input
                        {...register("photo")}
                        type="file"
                        // required
                        className="input input-bordered w-full px-4 py-3 rounded-md dark:bg-white border-2   border-[#1AA3D0]  focus:outline-none focus:border-[#00A99D]"
                      />
                    </div>
                  </div> */}

                  <div className="w-full lg:w-12/12 ">
                    <div className="relative w-full mb-3">
                      <label className="block dark:text-[#00A99D] uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog Details
                      </label>
                      <textarea
                        type="text"
                        {...register("details")}
                        required
                        className="input input-bordered w-full px-4 py-12 rounded-md dark:bg-white border-2   border-[#1AA3D0]  focus:outline-none focus:border-[#00A99D]"
                      />
                    </div>
                  </div>
                </div>

                <div className=" mt-5">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center overflow-hidden rounded bg-[#1AA3D0] dark:bg-[#00A99D] px-16 ml-4 py-4 text-white focus:outline-none focus:ring active:bg-blue-500"
                  >
                    <span className="absolute right-0  translate-x-full transition-transform group-hover:-translate-x-4">
                      <BsArrowRight className="text-2xl font-bold" />
                    </span>

                    <span className="text-md font-bold transition-all group-hover:mr-4">
                      Publish
                    </span>
                  </button>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBlog;
