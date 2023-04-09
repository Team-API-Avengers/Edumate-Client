import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { motion } from "framer-motion";
import review from "../../Assets/reviews.jpg";
import { BsArrowRight } from "react-icons/bs";
import { toast } from "react-toastify";

const Reviews = () => {
  const { user } = useContext(AuthContext);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;
    const message = e.target.message.value;

    const userReview = {
      email,
      name,
      image,
      message,
    };
    console.log(userReview);

    fetch("https://edumate-second-server.vercel.app/api/v1/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          form.reset();
          toast.success("Thanks for your feedback!");
        }
      });
  };

  return (
    <div className="border px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        <div className="text-center lg:text-left p-12">
          <motion.h1
            className="font-bold"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, fontSize: "30px", color: "blue" }}
            transition={{ delay: 0.3, type: "spring", duration: 1.5 }}
          >
            Give Your Feedback
          </motion.h1>
          <motion.p
            className="py-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", duration: 1.5 }}
          >
            We want to hear form you ! You can share with us what you feel about our services.
          </motion.p>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", duration: 2 }}
          >
            <img src={review} className="bg-none" alt="" />
          </motion.div>
        </div>
        <motion.div
          className="card mt-14"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", duration: 2 }}
        >
          <form onSubmit={handleReview} className="card w-96 border border-blue-200 p-4 bg-blue-100">
            <div className="my-2">
              <label className="flex justify-start mb-3">Name</label>
              <input
                className="block border border-gray-300 w-full h-10 px-5 py-3 rounded-md outline-none"
                readOnly
                defaultValue={user?.displayName}
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="my-2">
              <label className="flex justify-start mb-3">Email</label>
              <input
                className="block border border-gray-300 w-full h-10 px-5 py-3 rounded-md outline-none"
                readOnly
                defaultValue={user?.email}
                type="text"
                name="email"
                id=""
              />
            </div>
            <div className="my-2">
              <label className="flex justify-start mb-3">Reviews</label>
              <textarea
                required
                className="block cursor-pointer border border-gray-300 w-full px-5 rounded-md"
                name="message"
                id=""
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <button
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 border-0 h-10 rounded-full text-white "
              type="submit"
            >
              Sent
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
