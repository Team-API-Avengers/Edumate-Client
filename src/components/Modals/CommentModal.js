import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const CommentModal = ({ student }) => {
  //! Time Adjustment
  const time = String(new Date().toLocaleTimeString());
  const day = String(new Date());
  console.log(student._id);

  const { user } = useContext(AuthContext);

  const [comments, setComment] = useState([]);
  console.log(comments);

  //! Get all comments for this post by student email address
  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
        console.log(data);
      });
  }, []);

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
      .then((data) => console.log(data));
  };

  // console.log(student?.displayName);

  return (
    <div>
      <input type="checkbox" id="commentModal" className="modal-toggle" />
      <div className="modal">
        <div className="w-full bg-white h-full relative">
          <label htmlFor="commentModal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <p className="py-4">
            <form onSubmit={addComment} className="bottom-0 left-0 right-0 absolute m-5">
              <div>
                <textarea
                  name="comment"
                  placeholder="write your comment if you are a teacher"
                  className="textarea textarea-bordered textarea-md w-full"
                ></textarea>
              </div>
              <button className="btn btn-primary w-full">
                {/* <label htmlFor="commentModal" className="btn btn-outline w-full"> */}
                Add Comment
                {/* </label> */}
              </button>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
