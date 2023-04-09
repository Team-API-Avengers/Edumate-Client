import React, { useEffect, useState } from "react";
import { BsFacebook, BsFillStarFill, BsInstagram, BsTwitter } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
import TestimonialModal from "../../../Modals/TestimonialModal/TestimonialModal";
import { motion } from "framer-motion";

const Testimonial = () => {


  const [data, setData] = useState()

  const [modalData, setModalData] = useState()



  useEffect(()=>{
    fetch('https://edumate-second-server.vercel.app/api/v1/feedback')
    .then(res => res.json())
    .then(result => {
      // console.log(result);
      setData(result.data);
    })
  },[])


console.log('modalData', modalData?.name);





  return (
    <div>
      <section>
        <div className="container flex bg-green-50 flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <motion.p
            className="p-2 text-sm font-medium tracking-wider text-center uppercase mb-4"
            initial={{ x: 700 }}
            whileInView={{ x: 0, fontSize: "30px" }}
            transition={{ duration: 2 }}
          >
            Student's Reviews
          </motion.p>
          <motion.h1
            className="leading-none text-center sm:text-5xl"
            initial={{ x: -700 }}
            whileInView={{ x: 0, fontSize: "40px" }}
            transition={{ duration: 2 }}
          >
            Our students share with us their feedbacks
          </motion.h1>
          <motion.div
            className="flex flex-row flex-wrap-reverse justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, type: "spring", duration: 3 }}
          >


          {
            data?.map(feedback => 
              <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 border border-green-400 bg-green-100 hover:shadow-2xl cursor-pointer">
              <img
                alt=""
                className="self-center ring ring-green-800 ring-offset-base-100 ring-offset-2 flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full "
                src="https://source.unsplash.com/100x100/?portrait?0"
              />

              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">{feedback?.name}</p>
                <p className="flex justify-center text-orange-400 my-2">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </p>
                <p className="flex justify-center text-green-700">
                  <ImQuotesLeft />
                </p>
                <h1>
                  <p>
                    {feedback?.message.slice(0,50)}
                     {feedback?.message.length >= 51 &&
                  <span>. . .</span> 
                  }
                  </p>

                  {feedback?.message.length >= 51 &&
                  <label onClick={()=>setModalData(feedback)} htmlFor="TestimonialModal" className="cursor-pointer text-gray-400">
                  see more
                </label>
                }
                  
                </h1>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-green-300">
                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                  <BsFacebook />
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                  <BsTwitter />
                </a>
                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                  <BsInstagram />
                </a>
              </div>
            </div>
              )}

            







          </motion.div>
          <TestimonialModal modalData={modalData} />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
