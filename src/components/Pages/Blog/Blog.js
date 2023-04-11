import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const Blog = () => {
  const { loading } = useContext(AuthContext);
  const [blogs, setBlog] = useState(null);
  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/blogs`)
      .then((res) => res.json())
      .then((blog) => setBlog(blog.data));
  }, []);

  // console.log(blogs);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="m-5 min-h-screen">
      <h1 className="text-5xl font-bold">
        Popular <span className="border-b-8 border-blue-600">Articles</span>
      </h1>
      <div className="max-w-screen-xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {blogs?.map((singleBlog, i) => (
          <Link to={`/blog/${singleBlog?._id}`}>
            <article class="rounded-xl border h-72 border-green-100  bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
              <div class="flex items-start sm:gap-8">
                <div>
                  <strong class="rounded border text-start text-white border-blue-500 bg-blue-500 px-3 py-1.5 text-[10px] font-medium ">
                    {singleBlog?.category}
                  </strong>

                  <h3 class="mt-4  hover:text-green-600 text-2xl hover:underline text-start font-bold ">
                    {singleBlog?.title}
                  </h3>

                  <p class="mt-1 text-start text-sm text-gray-700">
                    {singleBlog?.details?.slice(0, 98)}.....
                  </p>

                  <div class="mt-4 flex  justify-between">
                    <div>
                      <p className="text-start font-bold">
                        {singleBlog?.authorName}
                      </p>
                      <p className="text-start font-medium">
                        {singleBlog?.authorRole}
                      </p>
                    </div>
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-md text-black  font-medium">
                        {singleBlog?.createdAt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
