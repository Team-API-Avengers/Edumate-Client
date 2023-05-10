import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../Context/AuthProvider";
import CommentModal from "../../Modals/CommentModal";
import GetComments from "./GetComments";

const StudentPost = () => {
  // const { user } = useContext(AuthContext);
  //   console.log(user);

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
  };

  return (
    <div>
      <h2 id="title" className="text-4xl">
        All Posts
      </h2>
      <p>Building a stronger education community together</p>

      {allPost?.map((post) => (
        <div class="  w-full mt-10 border border-black max-w-screen-xl mx-auto grid grid-cols-3  rounded bg-white bg-clip-border text-gray-700 shadow-md">
          {/* <div class="relative flex w-full max-w-screen-xl mx-auto flex-row  rounded bg-white bg-clip-border text-gray-700 shadow-md"> */}
          <div class="relative m-0  shrink-0 overflow-hidden rounded rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={post?.authorImage}
              alt="studentImage"
              class="h-96 p-5  object-cover"
            />
          </div>
          <div class=" p-5 space-y-2 col-span-2 text-start">
            <h4 class="mb-2 block font-sans uppercase text-3xl font-bold ">
              {post?.authorName}
            </h4>
            <h4 class="mb-2 block  text-lg font-semibold ">
              Email : {post?.authorEmail}
            </h4>
            <h4 class="mb-2 block  text-lg font-semibold ">
              Department : {post?.category}
            </h4>
            <h4 class="mb-2   text-md  ">{post?.description}</h4>
            <div className="mt-10">
              <label
                htmlFor="commentModal"
                onClick={() => handleComment(post)}
                className="py-5 w-2/3 mt-5 border border-black rounded-full "
              >
                <span className="px-7">Write a comment</span>
              </label>
            </div>
            <GetComments />
          </div>
        </div>
      ))}
      <CommentModal student={student} />
    </div>
  );
};

export default StudentPost;
