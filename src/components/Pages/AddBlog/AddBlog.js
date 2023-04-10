import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

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

          console.log(blogDetails);
        }
        fetch(`https://edumate-second-server.vercel.app/api/v1/blogs`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addBlog),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        toast.success("Successfully added your blog");
        navigate("/blog");
      });
  };

  return (
    <div>
      <section className=" py-1 bg-blueGray-50">
        <div className="text-4xl font-extrabold">Drop your Blog</div>
        <p className="mt-3">Contribute to our community with your blog post</p>
        <div className="w-full lg:w-8/12 mt-10 px-4 mx-auto ">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100  border-green-400 border">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(addBlog)}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Blog Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Author Name
                      </label>
                      <input
                        {...register("Name")}
                        type="text"
                        defaultValue={user?.displayName}
                        readOnly
                        required
                        className=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        readOnly
                        required
                        defaultValue={user?.email}
                        className=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="w-full space-y-0.5">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Image
                      </label>
                      <input
                        {...register("photo")}
                        type="file"
                        // required
                        className="block w-full cursor-pointer border border-green-400 appearance-none rounded-md  bg-white px-3 py-2 text-sm transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Author Profession
                      </label>
                      <input
                        type="text"
                        {...register("profession")}
                        required
                        className=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog title
                      </label>
                      <input
                        {...register("title")}
                        type="text"
                        required
                        className=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog category
                      </label>
                      <input
                        type="text"
                        {...register("category")}
                        required
                        className=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog Details
                      </label>
                      <textarea
                        type="text"
                        {...register("details")}
                        required
                        className=" border-green-400 border px-3 h-32 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <div className=" mt-5">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-16 ml-4 py-4 text-white focus:outline-none focus:ring active:bg-blue-500"
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
