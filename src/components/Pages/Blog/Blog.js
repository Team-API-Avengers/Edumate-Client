import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import { motion } from "framer-motion";

const Blog = () => {
  const [blogs, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // fetch(`blogdata.json`)
    fetch(`https://edumate-second-server.vercel.app/api/v1/blogs`)
      .then((res) => res.json())
      .then((blog) => setBlog(blog?.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }

  // console.log(blogs);

  return (
    <div className="m-4 min-h-screen dark:text-gray-700">
      <motion.h1
        className=" dark:text-white font-bold"
        initial={ { scale: 0.5 } }
        whileInView={ { scale: 2.1, translateY: 20 } }
        transition={ { duration: 1.5 } }
      >
        Popular <span className="border-b-4 border-blue-600">Articles</span>
      </motion.h1>
      <motion.div
        className="max-w-screen-xl mx-auto mt-36 grid grid-cols-1 lg:grid-cols-2 gap-5"
        whileInView={ { translateY: -70 } }
        transition={ { duration: 2 } }
      >
        { blogs &&
          blogs.map((singleBlog, i) => (
            <Link key={ i } to={ `/blog/${ singleBlog?._id }` }>
              <motion.article
                className="rounded-xl border h-72 border-green-100  bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8"
                whileHover={ {
                  background: "linear-gradient(270deg, #88F8C6 0%, #6151D3 100%)",
                  color: "white",
                } }
              >
                <div className="flex items-start sm:gap-8">
                  <div>
                    <strong className="rounded  text-start text-blue-500  px-3 py-1 text-md font-medium ">
                      { singleBlog?.category }
                    </strong>

                    <h3 className="mt-4  hover:text-black text-2xl hover:underline text-start font-bold ">
                      { singleBlog?.title }
                    </h3>

                    <p className="mt-1 text-start text-sm hover:text-white ">
                      { singleBlog?.details?.slice(0, 98) }.....
                    </p>

                    <div className="mt-4 flex  justify-between">
                      <div>
                        <p className="text-start font-bold">
                          { singleBlog?.authorName }
                        </p>
                        <p className="text-start font-medium">
                          { singleBlog?.authorRole }
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <p className="text-md text-black  font-medium">
                          <span className="mx-1">
                            { singleBlog?.createdAt?.slice(11, 16) }
                          </span>
                          <span className="mx-1">
                            { singleBlog?.createdAt?.slice(0, 10) }
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          )) }
      </motion.div>
    </div>
  );
};

export default Blog;
