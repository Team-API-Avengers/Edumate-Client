import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlog] = useState({});
  useEffect(() => {
    fetch("blogdata.json")
      .then((res) => res.json())
      .then((blog) => setBlog(blog));
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-5">
        {blogs.map((singleBlog) => (
          <article class="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
            <div class="flex items-start sm:gap-8">
              <div>
                <strong class="rounded border text-start text-white border-blue-500 bg-blue-500 px-3 py-1.5 text-[10px] font-medium ">
                  {singleBlog.blogCategory}
                </strong>

                <h3 class="mt-4 text-2xl  text-start font-bold ">
                  <Link to={"/"} class="hover:underline">
                    {singleBlog?.title}
                  </Link>
                </h3>

                <p class="mt-1 text-start text-sm text-gray-700">
                  {singleBlog?.blogDetails.slice(0, 98)} .....
                </p>

                <div class="mt-4 flex justify-between">
                  <div>
                    <p className="text-start font-bold">{singleBlog?.author}</p>
                    <p className="text-start font-medium">
                      {singleBlog?.authorProfession}
                    </p>
                  </div>
                  <div class="flex items-center gap-1 text-gray-500">
                    <p class="text-md text-black  font-medium">
                      {singleBlog?.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
