import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { motion } from "framer-motion";
import review from "../../Assets/reviews.jpg";
import { BsArrowRight } from "react-icons/bs";
const Reviews = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const handleSubmitData = (data) => {
    const name = data.name;
    const email = data.email;
    const message = data.message;

    const userReview = {
      email,
      name,
      message,
    };

    fetch("http://localhost:5000/userReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="border px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        <div className="text-center lg:text-left p-12">
          <motion.h1
            className="font-bold"
            initial={{ y: -250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, fontSize: "30px" }}
            transition={{ delay: 0.3, type: "spring", duration: 1.5 }}
          >
            Give Your Feedback
          </motion.h1>
          <motion.p
            className="py-3"
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", duration: 1.5 }}
          >
            We want to hear form you ! You can share with us what you feel about
            our services.
          </motion.p>
          <img src={review} className="bg-none" alt="" />
        </div>
        <motion.div
          className="card "
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", duration: 3 }}
        >
          <form
            onSubmit={handleSubmit(handleSubmitData)}
            className=" mt-16 card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                defaultValue={user?.displayName}
                disabled
                placeholder="Full name"
                className=" w-full p-3 h-14  rounded border border-green-400 "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                defaultValue={user?.email}
                disabled
                placeholder="Email"
                className="w-full p-3 h-14  border border-green-400 rounded"
              />
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>{" "}
                </label>
                <textarea
                  name="message"
                  {...register("message")}
                  rows="3"
                  className="w-full p-3   border border-green-400 rounded "
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div class="flex  mt-5">
              <button
                type="submit"
                class="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-12 py-3 text-white focus:outline-none focus:ring active:bg-blue-500"
              >
                <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <BsArrowRight />
                </span>

                <span class="text-sm font-medium  transition-all group-hover:mr-4">
                  Send
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
