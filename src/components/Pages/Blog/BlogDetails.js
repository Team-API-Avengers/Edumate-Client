import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader";

const BlogDetails = () => {
  const detailsData = useLoaderData();

  // console.log(detailsData.data);
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }

  // console.log(detailsData.data);
  return (
    <div>
      <div className=" w-full max-w-screen-xl px-5 py-24 mx-auto lg:px-32">
        <div className="flex flex-col w-full mx-auto mb-2 prose text-left prose-md">
          <div className="mb-5 border-b border-gray-200">
            <div className="flex justify-between items-baseline -mt-2">
              <div className="flex ">
                <div className="avatar">
                  <div className="w-12 mr-5 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                    <img src={ detailsData?.data?.authorImage } alt="" />
                  </div>
                </div>
                <div>
                  <p className="font-bold">{ detailsData?.data?.authorName }</p>
                  <p>{ detailsData?.data?.authorRole }</p>
                </div>
              </div>
              <h5 className="flex">
                <span className="mx-1">{ detailsData?.data?.createdAt?.slice(11, 16) }</span>
                <span className="mx-1">{ detailsData?.data?.createdAt?.slice(0, 10) }</span>
              </h5>
            </div>
          </div>
          <h1 className="text-4xl  font-bold">{ detailsData?.data?.title }</h1>

          <p className="mt-5">{ detailsData?.data?.details }</p>
          <Link to={ "/blog" }>
            <button className="px-12  mt-10 py-3 border-black bg-blue-600 rounded text-white">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
