import React, { useEffect, useState } from "react";
import CommentModal from "../../Modals/CommentModal";

const GetStudentsPost = () => {
  const [allPost, setPost] = useState([]);
  //   console.log(allPost);

  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/searching-teacher`)
      .then((res) => res.json())
      .then((data) => setPost(data?.data));
  }, []);

  const [student, setStudent] = useState();

  const handleComment = (data) => {
    setStudent(data);
    // alert(data?._id);
  };

  return (
    <div className="lg:mx-10 mx-5">
      {/*TODO: Top Text Content */}
      <div className="my-3">
        <h2 id="title" className="text-4xl">
          Student's Post
        </h2>
        <p>Building a stronger education community together</p>
      </div>

      {/*TODO: Show All Post's Card */}
      {allPost?.map((post, idx) => (
        <article
          key={idx}
          className="rounded-xl my-3 hover:shadow-md shadow-slate-500 border-2 border-gray-100 bg-white"
        >
          {/*TODO: Card Body */}
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            {post?.authorImage ? (
              <img alt="img/author" src={post?.authorImage} className="h-14 w-14 rounded-lg object-cover" />
            ) : (
              <img
                alt="img/author"
                src="https://png.pngitem.com/pimgs/s/111-1114658_person-png-outline-outline-of-person-face-transparent.png"
                className="h-14 w-14 rounded-lg object-cover"
              />
            )}

            <div>
              <h3 className="font-medium text-start sm:text-lg">{post?.category}</h3>

              <p className="line-clamp-2 text-start text-sm text-gray-700">{post?.description}</p>

              {/*TODO: Bottom Comment author name */}
              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <label
                  htmlFor="commentModal"
                  onClick={() => handleComment(post)}
                  className="flex items-center gap-1 text-gray-500 cursor-pointer underline hover:text-gray-700"
                >
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
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>

                  <p className="text-xs">14 comments</p>
                </label>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                  Posted by
                  <a href="#a" className="font-medium mx-2 underline hover:text-gray-700">
                    {post?.authorName}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/*TODO: Bottom right style */}
          <div className="flex justify-end">
            <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
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

              <span className="text-[10px] font-medium sm:text-xs">Edumate special service</span>
            </strong>
          </div>
        </article>
      ))}

      {/*TODO:  Modal  */}
      <CommentModal student={student} />
    </div>
  );
};

export default GetStudentsPost;
