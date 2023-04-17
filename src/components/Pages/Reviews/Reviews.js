import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { motion } from "framer-motion";
import review from "../../Assets/reviews.jpg";
import { BsArrowRight, BsFillStarFill } from "react-icons/bs";
import { toast } from "react-toastify";

const Reviews = () => {
  const { user, refetch } = useContext(AuthContext);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;
    const message = e.target.message.value;
    const rate = e.target.rate.value;

    const userReview = {
      email,
      name,
      image,
      message,
      rate,
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
          refetch();
          toast.success("Thanks for your feedback!");
        }
      });
  };

  return (
    <div className=" border border-blue-400 dark:border-0 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-10 lg:m-20 shadow-md ">
      <div className="container flex flex-col lg:flex-row  justify-evenly">
        <div className="text-center lg:text-left p-12 -ml-14 lg:ml-0">
          <motion.h1
            className="font-bold"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, fontSize: "30px", color: "blue" }}
            transition={{ delay: 0.3, type: "spring", duration: 1.5 }}
          >
            Give Your Feedback
          </motion.h1>
          <motion.p
            className="py-3 text-2xl lg:text-base"
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
          className="card mt-14 -ml-8 lg:ml-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", duration: 2 }}
        >
          <form
            onSubmit={handleReview}
            className="card  w-full border border-blue-200 dark:border-0 p-4 lg:p-8 bg-slate-200  shadow-md rounded-none"
          >
            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-black">Name</label>
              <input
                className="block border border-t-0 border-blue-400 dark:text-black w-full h-10 px-5 py-3 rounded-md outline-none"
                readOnly
                defaultValue={user?.displayName}
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-black">Email</label>
              <input
                className="block border border-t-0 border-blue-400 shadow-md dark:text-black  w-full h-10 px-5 py-3 rounded-md outline-none"
                readOnly
                defaultValue={user?.email}
                type="text"
                name="email"
                id=""
              />
            </div>

            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-black">How was your experience?</label>
              <input
                name="rate"
                type="range"
                min="1"
                max="5"
                className="range range-success dark:range-info"
                step="1"
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>
                  {" "}
                  <BsFillStarFill className="text-orange-400 dark:text-[#350573]" />{" "}
                </span>
                <span>
                  {" "}
                  <BsFillStarFill className="text-orange-400 dark:text-[#350573]" />{" "}
                </span>
                <span>
                  {" "}
                  <BsFillStarFill className="text-orange-400 dark:text-[#350573]" />{" "}
                </span>
                <span>
                  {" "}
                  <BsFillStarFill className="text-orange-400 dark:text-[#350573]" />{" "}
                </span>
                <span>
                  {" "}
                  <BsFillStarFill className="text-orange-400 dark:text-[#350573]" />{" "}
                </span>
              </div>
            </div>

            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-black">Reviews</label>
              <textarea
                required
                className="block dark:text-black border border-t-0 border-blue-400 cursor-pointer w-full p-5 rounded-md"
                name="message"
                id=""
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <button
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 border-0 h-10 rounded-full text-white mt-4"
              type="submit"
            >
              Sent
            </button>
          </form>
        </motion.div>
      </div>
    </div >
  );
};

export default Reviews;
