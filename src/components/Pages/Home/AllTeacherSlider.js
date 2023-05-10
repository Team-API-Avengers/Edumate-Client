import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AllTeacherSlider = () => {
  const [allTeachers, setAllTeachers] = useState([]);

  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
      .then((res) => res.json())
      .then((data) => setAllTeachers(data?.data));
  }, []);

  console.log(allTeachers);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    duration: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const mobile = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    duration: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      {/* Large */}

      <div className="hidden lg:block">
        <div className="mx-5 lg:mx-10">
          <Slider {...settings}>
            {allTeachers?.map((teacher, idx) => (
              <div key={idx}>
                <a href="#f" className="group relative block bg-black">
                  <img
                    alt="Developer"
                    src={teacher?.image}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-[#1AA3D0] dark:text[#00A99D]">
                        {teacher?.background}
                      </p>

                      <p className="text-xl font-bold text-white sm:text-2xl">{teacher?.name}</p>
                    </div>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">{teacher?.location}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden block">
        <div className="w-96 mx-auto">
          <Slider {...mobile}>
            {allTeachers?.map((teacher, idx) => (
              <div key={idx}>
                <a href="#f" className="group relative block bg-black">
                  <img
                    alt="Developer"
                    src={teacher?.image}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-[#1AA3D0] dark:text[#00A99D]">
                      {teacher?.background}
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl">{teacher?.name}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">{teacher?.location}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AllTeacherSlider;
