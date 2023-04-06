import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddBlog = () => {
  // author,authorEmail,authorProfession,authorImage,title,date,blogCategory,

  return (
    <div>
      <section class=" py-1 bg-blueGray-50">
        <div className="text-4xl font-extrabold">Drop your Blog</div>
        <p className="mt-3">Contribute to our community with your blog post</p>
        <div class="w-full lg:w-8/12 mt-10 px-4 mx-auto ">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100  border-green-400 border">
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Blog Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Author Name
                      </label>
                      <input
                        type="text"
                        class=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        class=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="w-full space-y-0.5">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Author image
                      </label>
                      <input
                        id="photo"
                        type="file"
                        class="block w-full cursor-pointer border border-green-400 appearance-none rounded-md  bg-white px-3 py-2 text-sm transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Author Profession
                      </label>
                      <input
                        type="text"
                        class=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog title
                      </label>
                      <input
                        type="text"
                        class=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Phone number
                      </label>
                      <input
                        type="number"
                        class=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog category
                      </label>
                      <input
                        type="text"
                        class=" border-green-400 border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Blog Details
                      </label>
                      <textarea
                        type="text"
                        class=" border-green-400 border px-3 h-32 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <Link to={"/"}>
                  <div class=" mt-5">
                    <button class="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-16 ml-4 py-4 text-white focus:outline-none focus:ring active:bg-blue-500">
                      <span class="absolute right-0  translate-x-full transition-transform group-hover:-translate-x-4">
                        <BsArrowRight className="text-2xl font-bold" />
                      </span>

                      <span class="text-md font-bold transition-all group-hover:mr-4">
                        Publish
                      </span>
                    </button>
                  </div>
                </Link>

                <hr class="mt-6 border-b-1 border-blueGray-300" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBlog;
