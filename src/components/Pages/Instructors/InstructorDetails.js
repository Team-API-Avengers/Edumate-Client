import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  BsArrowRight,
  BsHourglassSplit,
  BsTelephoneFill,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const InstructorDetails = () => {
  const details = useLoaderData();
  // console.log(details.data.name);

  const bookTeacher = (data) => {
    const name = data.name;
    const email = data.email;
    const location = data.location;
    const phone = data.phone;
    const image = data.image;
    const experience = data.experience;
    const background = data.background;

    const bookingData = {
      name,
      email,
      location,
      phone,
      image,
      experience,
      background,
    };

    console.log(bookingData);
    fetch(``, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("booked");
        }
      });
  };

  return (
    <div>
      {/* {details?.data?.map((instructorDetail) => { */}
      <div>
        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="teacher"
                class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={details?.data?.image}
              />
              <div class="lg:w-1/2 w-full space-y-2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-md font-bold text-start text-green-700 ">
                  {details?.data?.background}
                </h2>
                <div className="flex justify-between">
                  <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                    {details?.data?.name}
                  </h1>
                  <div class="flex mb-4">
                    <AiFillStar class="w-4 h-4 text-green-700" />
                    <AiFillStar class="w-4 h-4 text-green-700" />
                    <AiFillStar class="w-4 h-4 text-green-700" />
                    <AiFillStar class="w-4 h-4 text-green-700" />
                  </div>
                </div>
                <div className="text-start">
                  <p className="flex ">
                    <BsTelephoneFill className="mt-1 mr-1" />
                    {details?.data?.phone}
                  </p>

                  <p className="flex ">
                    <BsHourglassSplit className="mt-1 mr-1" />
                    {details?.data?.experience} years experience
                  </p>
                  <p className="flex ">
                    <HiLocationMarker className="mt-1 mr-1" />
                    {details?.data?.location}
                  </p>
                  <p className="flex ">
                    <MdMarkEmailUnread className="mt-1 mr-1" />
                    {details?.data?.email}
                  </p>
                </div>
                <p class="leading-relaxed text-start">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>

                <div class="flex mt-8">
                  <button
                    // onClick={() => bookTeacher(instructorDetail)}
                    class="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-500"
                  >
                    <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                      <BsArrowRight />
                    </span>

                    <span class="text-sm font-medium transition-all group-hover:mr-4">
                      Book Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* // })} */}
    </div>
  );
};

export default InstructorDetails;
