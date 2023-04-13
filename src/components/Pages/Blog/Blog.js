import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import { motion } from "framer-motion";

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
    <div className="m-4 min-h-screen">
      <motion.h1
        className=" font-bold"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 2.1, translateY: 20 }}
        transition={{ duration: 1.5 }}
      >
        Popular <span className="border-b-8 border-blue-600">Articles</span>
      </motion.h1>
      <motion.div
        className="max-w-screen-xl mx-auto mt-36 grid grid-cols-1 lg:grid-cols-2 gap-5"
        whileInView={{ translateY: -70 }}
        transition={{ duration: 2 }}
      >
        {blogs?.map((singleBlog, i) => (
          <Link to={`/blog/${singleBlog?._id}`}>
            <motion.article
              class="rounded-xl border h-72 border-green-100  bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8"
              whileHover={{ background: "linear-gradient(270deg, #439370 0%, #3a3276 100%)", color: "white" }}
            >
              <div class="flex items-start sm:gap-8">
                <div>
                  <strong class="rounded border text-start text-white border-blue-500 bg-blue-500 px-3 py-1.5 text-[10px] font-medium ">
                    {singleBlog?.category}
                  </strong>

                  <h3 class="mt-4  hover:text-green-600 text-2xl hover:underline text-start font-bold ">
                    {singleBlog?.title}
                  </h3>

                  <p class="mt-1 text-start text-sm text-gray-400 hover:text-base-100">
                    {singleBlog?.details?.slice(0, 98)}.....
                  </p>

                  <div class="mt-4 flex  justify-between">
                    <div>
                      <p className="text-start font-bold">{singleBlog?.authorName}</p>
                      <p className="text-start font-medium">{singleBlog?.authorRole}</p>
                    </div>
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-md text-black  font-medium">
                        <span className="mx-1">{singleBlog?.createdAt?.slice(11, 16)}</span>
                        <span className="mx-1">{singleBlog?.createdAt?.slice(0, 10)}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
