import React, { useEffect, useState } from "react";
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

  // //! Get all comments for this post by student post ID

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

  console.log(comments);

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
          toast.success("Comment added");
          // console.log("comment post", data);
          form.reset();
        }
      });
  };

  // console.log(student?.displayName);
  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div>
      <input type="checkbox" id="commentModal" className="modal-toggle" />
      <div className="modal max-w-screen-md mx-auto bg-opacity-0">
        <div className="w-full border shadow-2xl dark:bg-gray-900 bg-white h-[600px] rounded-lg relative">
          <label
            htmlFor="commentModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl text-[#1AA3D0] dark:text-[#00A99D] mt-5 font-bold">
            {student?.authorName}'s post
          </h3>

          <div
            className="max-w-screen-xl mx-auto overflow-y-auto"
            style={{ maxHeight: "400px" }}
          >
            <p className="mt-2 font-semibold ">{comments?.length} Comments</p>
            {comments.reverse()?.map((comment, idx) => (
              <div key={idx} className="flex justify-center p-5 gap-5">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full">
                    <img src={comment?.authorImage} alt="CommenterImage" />
                  </div>
                </div>

                <div className="text-start px-3 border w-[600px] py-5 rounded-xl bg-gray-200 dark:text-gray-900">
                  <p className="text-black font-bold ">{comment?.authorName}</p>

                  <small className="text-black">{comment?.comment}</small>
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
                  <MdSend className="text-[#1AA3D0] dark:text-[#00A99D] mt-8 -ml-10 text-3xl" />
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
