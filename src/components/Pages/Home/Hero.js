import React, { useContext } from "react";
import { BsFillDpadFill, BsFillExclamationSquareFill, BsFillPersonVcardFill } from "react-icons/bs";
import { FcFaq } from "react-icons/fc";
import bannerPic from "../../Assets/BannerPic.png";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";

const Hero = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <section>
        <div className="w-full relative bg-[#04516B] dark:bg-black pb-16 px-6 xl:px-0">
          <img
            className="absolute w-full inset-0 h-full object-cover object-center"
            src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
            alt=""
          />

          <div className="pt-2 lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img className="mx-auto" src={bannerPic} alt="img" />
            </div>



           {/* TODO: Right side card */}
            <div role="contentinfo" className="w-full pt-5 text-black bg-transparent rounded-lg lg:w-1/2 h-full">
              <p tabIndex="0" className="text-gray-800 uppercase text-2xl mb-4">
                Let's find
              </p>
              <h1 tabIndex="0" className=" text-4xl text-[#1aa3d0] lg:text-6xl font-black mb-8 uppercase">
                your teacher
              </h1>
              <p tabIndex="0" className="text-gray-800 mx-5 font-regular mb-8">
                Online tutors, trusted, vetted and instantly bookable to support maths, english, science and a host of
                other academic, vocational and pastoral tuition.
              </p>

              <div className="bg-base-200 lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg dark:rounded-b-lg">
                <div className="sm:flex items-center py-2">
                  {user ? (
                    <a href="#review" className="flex items-center dark:text-[#1aa3d0] ">
                      <BsFillExclamationSquareFill className=" mx-1" />
                      <span>Feedback</span>
                    </a>
                  ) : (
                    <Link to={"/authentication/login"}>
                      <button className="learn-more mx-5">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text dark:text-[#bb86fc]">Login</span>
                      </button>
                    </Link>
                  )}

                  <a
                    href="#beATeacher"
                    className="flex items-center sm:mx-4 xl:mx-5 my-6 lg:my-0 text-[#1AA3D0] dark:text-[#05733c]"
                  >
                    <BsFillDpadFill className="mx-1" />
                    <span>Be a teacher</span>
                  </a>

                  {user && (
                    <a href="#studentsPost" className="flex items-center sm:mx-4 xl:mx-5  dark:text-[#1AA3D0]">
                      <BsFillPersonVcardFill className="mx-1" />
                      <span>Students post</span>
                    </a>
                  )}

                  <a
                    href="#faq"
                    className="flex items-center sm:mx-4 xl:mx-5 my-6 lg:my-0 text-[#1AA3D0] dark:text-[#05733c]"
                  >
                    <FcFaq className="mx-1" />
                    <span>FAQ</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div
        className="banner h-[550px]"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-green-education-blackboard-stereoscopic-image_20770.jpg')",
          filter: "brightness(70%)",
        }}
      >
        <h1 className="banner-title">Welcome to My Website</h1>
      </div> */}
    </div>
  );
};

export default Hero;
