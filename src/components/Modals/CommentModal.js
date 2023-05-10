import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import { MdSend } from "react-icons/md";

const CommentModal = ({ student }) => {
  //! Time Adjustment
  const time = String(new Date().toLocaleTimeString());
  const day = String(new Date());
  console.log(student?._id);

  const { user } = useContext(AuthContext);

  const [comments, setComment] = useState([]);
  console.log(comments);

  //! Get all comments for this post by student post ID
  useEffect(() => {
    fetch(
      `https://edumate-second-server.vercel.app/api/v1/comment/${student?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setComment(data?.data);
        console.log(data?.data);
      });
  }, [student?._id]);

  //! Handle function for add comment
  const addComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    // alert(comment);

    const commentInfo = {
      authorName: user?.displayName,
      postId: student?._id,
      authorEmail: user?.email,
      authorImage: user?.photoURL,
      studentName: student?.authorName,
      studentEmail: student?.authorEmail,
      studentImage: student?.authorImage,
      comment,
      time,
      day,
    };
    // console.log(commentInfo);

    // ! Comment posting in database
    fetch("https://edumate-second-server.vercel.app/api/v1/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("comment successfully posted");
          console.log("comment post", data);
          form.reset();
        }
      });
  };

  // console.log(student?.displayName);

  return (
    <div className="">
      <input type="checkbox" id="commentModal" className="modal-toggle" />
      <div className="modal max-w-screen-md mx-auto bg-opacity-0">
        <div className="w-full border shadow-2xl dark:bg-gray-900 bg-white h-[600px] rounded-lg relative">
          <label
            htmlFor="commentModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-black dark:text-white mt-5 font-bold">
            {student?.authorName}'s post
          </h3>

          <div
            className="max-w-screen-xl mx-auto overflow-y-auto"
            style={{ maxHeight: "400px" }}
          >
            {comments.reverse()?.map((comment, idx) => (
              <div className="flex justify-center p-5 gap-5">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full">
                    <img src={comment?.authorImage} alt="CommenterImage" />
                  </div>
                </div>

                <div className="text-start px-3 border w-[600px] py-5 rounded-lg bg-gray-200">
                  <p className="text-black dark:text-white">
                    {comment?.authorName}
                  </p>
                  <small className="text-black dark:text-white">
                    {comment?.comment}
                  </small>
                </div>
              </div>
            ))}
          </div>

          <p className="py-4">
            <form
              onSubmit={addComment}
              className="bottom-0 left-0 right-0 absolute m-5"
            >
              <div className="flex">
                <textarea
                  name="comment"
                  placeholder="Write your comment"
                  className="textarea textarea-bordered textarea-md w-full"
                ></textarea>
                <button>
                  {" "}
                  <MdSend className="text-black mt-8 -ml-10 text-xl" />
                </button>
              </div>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
