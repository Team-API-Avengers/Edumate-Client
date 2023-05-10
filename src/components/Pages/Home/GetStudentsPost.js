import React, { useEffect, useState } from "react";
import CommentModal from "../../Modals/CommentModal";
import { TfiCommentAlt } from "react-icons/tfi";

const GetStudentsPost = () => {
  const [student, setStudent] = useState();
  const [allPost, setPost] = useState([]);
  //   console.log(allPost);
  const [comments, setComment] = useState([]);

  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/searching-teacher`)
      .then((res) => res.json())
      .then((data) => setPost(data?.data));
  }, []);

  const handleComment = (data) => {
    setStudent(data);
    // alert(data?._id);
  };

  return (
    <div className="lg:mx-10 mx-5">
      {/*TODO: Top Text Content */}
      <div className="my-3">
        <h2 id="title" className="text-4xl dark:text-gray-200">
          Student's Post
        </h2>
        <p className=" dark:text-[#00A99D] font-semibold mb-4">
          Building a stronger education community together
        </p>
      </div>

      {/*TODO: Show All Post's Card */}
      {allPost?.map((post, idx) => (
        <article
          key={idx}
          className="rounded-xl max-w-screen-xl mx-auto my-3 hover:shadow-md shadow-slate-500 border-2 border-gray-100 bg-white"
        >
          {/*TODO: Card Body */}
          <div className="flex items-start  gap-4 p-4 sm:p-6 lg:p-8">
            {post?.authorImage ? (
              <img
                alt="img/author"
                src={post?.authorImage}
                className="h-14 w-14 rounded-lg object-cover"
              />
            ) : (
              <img
                alt="img/author"
                src="https://png.pngitem.com/pimgs/s/111-1114658_person-png-outline-outline-of-person-face-transparent.png"
                className="h-14 w-14 rounded-lg object-cover"
              />
            )}

            <div>
              <h3 className="text-xs text-start  text-[#1AA3D0] dark:text-[#00A99D]">
                {post?.category}
              </h3>
              <p className="font-bold text-start sm:text-lg text-[#1AA3D0] dark:text-[#00A99D]">
                {post?.authorName}
              </p>
              <p className="line-clamp-2 text-start text-sm text-gray-700">
                {post?.description}
              </p>

              {/*TODO: Bottom Comment author name */}
              <div className="mt-2 sm:flex sm:items-center sm:gap-2"></div>
            </div>
          </div>

          {/*TODO: Bottom right style */}

          <div className="flex gap-10 justify-end">
            <div>
              <label
                htmlFor="commentModal"
                onClick={() => handleComment(post)}
                className="flex items-center gap-1 text-gray-500 cursor-pointer  border-r-0  rounded-r-none rounded-ee-xl rounded-ss-xl border-b-0 rounded bg-blue-100 border py-3 px-10  hover:text-gray-700"
              >
                <p className="text-xl flex mt-1 gap-2">
                  <TfiCommentAlt className="" />
                  <span className="text-xl -mt-1 font-bold text-[#1AA3D0] dark:text-[#00A99D]">
                    Comment
                  </span>
                </p>
              </label>
            </div>
            {/* <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>

              <span className="text-[10px] font-medium sm:text-xs">
                Edumate special service
              </span>
            </strong> */}
          </div>
        </article>
      ))}

      {/*TODO:  Modal  */}
      <CommentModal student={student} />
    </div>
  );
};

export default GetStudentsPost;
