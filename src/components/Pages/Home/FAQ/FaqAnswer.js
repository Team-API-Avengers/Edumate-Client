import React from "react";
import Lottie from "lottie-react";
import FaqAnimation from "../../../Assets/Animation/faq.json";
import { motion } from "framer-motion";

const FaqAnswer = () => {
  return (
    <section className="mt-40 dark:text-[#fff]">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 px-10"
        initial={{ opacity: 0 }}
        whileInView={{ translateY: -100, opacity: 1 }}
        transition={{ type: "spring", stiffness: 15 }}
      >
        <div className="">
          <div className="mb-8 h-[38vw] w-4/5">
            <Lottie animationData={FaqAnimation} loop={true}></Lottie>
          </div>

          <p className="text-start mt-32 lg:mt-0">
            We have listed here the answers to some of your common questions. We request you to read this list once
            before asking questions. Then you don't have to wait for our reply and save your precious time.
          </p>
        </div>

        <div className="">
          <h2 className="text-start mb-8 text-4xl font-bold mt-8">Frequently asked questions</h2>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-green-400 to-teal-500 hover:from-pink-500 hover:to-yellow-500 ...">
              How do I access a Edumate?
            </div>
            <div className="collapse-content dark:text-[#000] bg-gradient-to-r from-green-300 to-teal-300 ...">
              <p className="text-start">
                You can access a fitness tracking web application by logging into the application's website on your
                computer or mobile device with an internet connection.
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-green-400 to-teal-500 hover:from-pink-500 hover:to-yellow-500 ...">
              Who uses Edumate?
            </div>
            <div className="collapse-content dark:text-[#000] bg-gradient-to-r from-green-300 to-teal-300 ...">
              <p className="text-start">
                Edumate are used by both teacher and student who want to monitor their tution activity.
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-green-400 to-teal-500 hover:from-pink-500 hover:to-yellow-500 ...">
              Why you use Edumate?
            </div>
            <div className="collapse-content dark:text-[#000] bg-gradient-to-r from-green-300 to-teal-300 ...">
              <p className="text-start">
                |Edumate can help you keep track of your progress, set and achieve educational goals
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-green-400 to-teal-500 hover:from-pink-500 hover:to-yellow-500 ...">
              How can it help you?
            </div>
            <div className="collapse-content dark:text-[#000] bg-gradient-to-r from-green-300 to-teal-300 ...">
              <p className="text-start">Edumate is a tution searching website that help you to search a tution.</p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-green-400 to-teal-500 hover:from-pink-500 hover:to-yellow-500 ...">
              How do you contact with us?
            </div>
            <div className="collapse-content dark:text-[#000] bg-gradient-to-r from-green-300 to-teal-300 ...">
              <p className="text-start">You can contact with us by your email.</p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-5 ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-green-400 to-teal-500 hover:from-pink-500 hover:to-yellow-500 ...">
              How can you get support?
            </div>
            <div className="collapse-content dark:text-[#000] bg-gradient-to-r from-green-300 to-teal-300 ...">
              <p className="text-start">
                Our support system is very good. We can not copromise with any support. You can get any support in our
                team members.
              </p>
            </div>
          </div>

          <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box ">
            <div className="collapse-title text-xl font-medium bg-gradient-to-r from-green-400 to-teal-500 hover:from-pink-500 hover:to-yellow-500 ...">
              Who can get our certificate?
            </div>
            <div className="collapse-content dark:text-[#000] bg-gradient-to-r from-green-300 to-teal-300 ...">
              <p className="text-start">
                Only teachers can get certificate. To get certificate you need to perticifate our exam and must be get
                above 80% mark. Otherwise we cant not consider you for get a certificate.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqAnswer;
