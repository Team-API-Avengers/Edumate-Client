import React, { useContext } from "react";
import { BsFillDpadFill, BsFillExclamationSquareFill, BsFillPersonVcardFill } from "react-icons/bs";
import bannerPic from "../../../Assets/BannerPic.png";
import { AuthContext } from "../../../Context/AuthProvider";
import { Link } from "react-router-dom";

const Hero = () => {
  const {user} = useContext(AuthContext)
  // const [menu, setMenu] = useState(false);
  return (
    <div>
      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0">
          <img
            className="absolute w-full inset-0 h-full object-cover object-center"
            src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
            alt="we care family"
          />

          <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                className="mx-auto"
                src={bannerPic}
                alt="img"
              />
            </div>

            <div role="contentinfo" className="w-full pt-5 bg-white dark:bg-green-900 rounded-lg lg:w-1/2 h-full">
              <p tabIndex="0" className="text-gray-800 dark:text-white uppercase text-2xl mb-4">
                Let's find your
              </p>
              <h1 tabIndex="0" className="text-gray-800 dark:text-white text-4xl lg:text-6xl font-black mb-8">
                home teacher
              </h1>
              <p tabIndex="0" className="text-gray-800 mx-5 dark:text-white font-regular mb-8">
                Online tutors, trusted, vetted and instantly bookable to support maths, english, science and a host of
                other academic, vocational and pastoral tuition.
              </p>

              <div className="bg-base-200 lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg dark:rounded-b-lg">
                <div className="sm:flex items-center py-2">
                  {
                    user ?
                    <a href="#review" className="flex items-center dark:text-[#05733c]">
                    <BsFillExclamationSquareFill className=" mx-1" />
                    <span>Feedback</span>
                  </a>
                  :
                  <Link to={'/authentication/login'}>
                  <button className="learn-more mx-5">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text dark:text-white">
                  Login
                  </span>
                  </button>
                  </Link>
                  }

                  <a href="#beATeacher" className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0 dark:text-[#05733c]">
                    <BsFillDpadFill className="mx-1" />
                    <span>Be a teacher</span>
                  </a>

                  {
                    user &&
                    <a href="#contact" className="flex items-center dark:text-[#05733c]">
                    <BsFillPersonVcardFill className="mx-1" />
                    <span>Contact</span>
                  </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
