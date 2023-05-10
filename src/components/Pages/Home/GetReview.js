import React, { useEffect, useState } from "react";
import { BsArrowRightShort, BsFillStarFill } from "react-icons/bs";
import TestimonialModal from "../../Modals/TestimonialModal";

const GetReview = () => {
  const [data, setData] = useState();

  const [modalData, setModalData] = useState();

  //! FIXME: ----- START ------ FIXME:
  // By Clicking see all button display all categories data and by clicking close button hidden all categories data

  const [, setCategoryData] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const getCategoryData = async () => {
    const response = await fetch(
      "https://edumate-second-server.vercel.app/api/v1/feedback"
    );
    const data = await response.json();
    setCategoryData(data);
  };

  // console.log("all", categoryData);

  const handleShowAllClick = () => {
    setShowAll(true);
    getCategoryData();
  };

  const handleCloseClick = () => {
    setShowAll(false);
    setCategoryData([]);
  };

  // FIXME: --------END------ FIXME:

  useEffect(() => {
    fetch("https://edumate-second-server.vercel.app/api/v1/feedback")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setData(result.data);
      });
  }, []);

  return (
    <div className="mx-5 lg:mx-10">
      <section>
        <div className="mx-auto max-w-screen-xl border dark:border-0 px-4 py-8 sm:px-6 lg:px-8">
          <h2 id="title" className="text-4xl  font-bold text-[#1AA3D0] ">
            Students Reviews
          </h2>
          <p className="font-bold">
            Real opinions, real influence. Explore user reviews and make
            informed decisions.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <p className="text-3xl font-medium animated-text">
              3.8
              <span className="sr-only"> Average review score </span>
            </p>

            <div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <p className="mt-0.5 text-s font-bold text-[#00A99D] dark:text-[#00A99D]">
                Based on {data?.length} reviews
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-3">
            {data?.slice(7, 10)?.map((feedback, idx) => (
              <blockquote key={idx} className="card-body">
                <header className="sm:flex sm:items-center sm:gap-4">
                  <img
                    alt=""
                    className="self-center mx-3 ring ring-green-800 ring-offset-base-100 ring-offset-2 flex-shrink-0 w-12   bg-center bg-cover rounded-full "
                    src={feedback?.image}
                  />
                  <p className="text-start">
                    <span className="text-s block text-gray-500 dark:text-[#F0F5FF]">
                      {feedback?.name}
                    </span>
                    <span className="text-s font-bold block text-[#00A99D] dark:text-[#00A99D]">
                      12th January, 2024
                    </span>
                  </p>

                  {/* <p className="mt-2 font-medium sm:mt-0">The best thing money can buy!</p> */}
                </header>

                <p className="mt-2 text-gray-700 dark:text-[#DBDBDB]">
                  {feedback?.message.slice(0, 50)}
                  {feedback?.message.length >= 51 && <span>. . .</span>}

                  {feedback?.message.length >= 51 && (
                    <label
                      onClick={() => setModalData(feedback)}
                      htmlFor="TestimonialModal"
                      className="cursor-pointer font-bold text-[#00A99D]"
                    >
                      see more
                    </label>
                  )}
                </p>

                <footer className="my-1 flex">
                  <div className="flex dark:text-yellow-400">
                    {feedback?.rate === 1 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                      </>
                    )}
                    {feedback?.rate === 2 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                      </>
                    )}
                    {feedback?.rate === 3 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                      </>
                    )}
                    {feedback?.rate === 4 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                      </>
                    )}
                    {feedback?.rate === 5 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </>
                    )}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="my-10">
            {showAll ? (
              <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                  {data?.slice(3)?.map((feedback, idx) => (
                    <blockquote key={idx} className="card-body">
                      <header className="sm:flex sm:items-center sm:gap-4">
                        <img
                          alt=""
                          className="self-center ring ring-green-800 ring-offset-base-100 ring-offset-2 flex-shrink-0 w-12 h-12 mx-3 bg-center bg-cover rounded-full "
                          src={feedback?.image}
                        />
                        <p className="text-start">
                          <span className="text-xs block text-gray-500 dark:text-gray-200">
                            {feedback?.name}
                          </span>
                          <span className="text-s font-bold block text-[#00A99D] dark:text-[#00A99D]">
                            12th January, 2024
                          </span>
                        </p>

                        {/* <p className="mt-2 font-medium sm:mt-0">The best thing money can buy!</p> */}
                      </header>

                      <p className="mt-2 text-gray-700 dark:text-[#DBDBDB]">
                        {feedback?.message.slice(0, 50)}
                        {feedback?.message.length >= 51 && <span>. . .</span>}

                        {feedback?.message.length >= 51 && (
                          <label
                            onClick={() => setModalData(feedback)}
                            htmlFor="TestimonialModal"
                            className="cursor-pointer text-[#00A99D] dark:text-[#00A99D] font-bold"
                          >
                            see more
                          </label>
                        )}
                      </p>

                      <footer className="my-1 flex">
                        <div className="flex dark:text-yellow-400">
                          {feedback?.rate === 1 && (
                            <>
                              <BsFillStarFill />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                            </>
                          )}
                          {feedback?.rate === 2 && (
                            <>
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                            </>
                          )}
                          {feedback?.rate === 3 && (
                            <>
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                            </>
                          )}
                          {feedback?.rate === 4 && (
                            <>
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill className="text-gray-300 dark:text-white " />
                            </>
                          )}
                          {feedback?.rate === 5 && (
                            <>
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill />
                            </>
                          )}
                        </div>
                      </footer>
                    </blockquote>
                  ))}
                </div>

                <button
                  className="hover:underline group text-[#00A99D] dark:text-[#00A99D] text-2xl flex mx-auto w-sm mt-10"
                  title="Hide"
                  onClick={handleCloseClick}
                >
                  Close
                  <BsArrowRightShort className="group-hover:text-[#1AA3D0] dark:group-hover:text-white text-white mt-2" />
                </button>
              </div>
            ) : (
              <button
                className="hover:underline group text-[#1AA3D0] dark:text-[#1AA3D0] font-bold text-2xl flex mx-auto w-sm mb-4 lg:mb-0"
                title="See all"
                onClick={handleShowAllClick}
              >
                See All Feedbacks
                <BsArrowRightShort className="group-hover:text-[#1AA3D0] dark:group-hover:text-[#1AA3D0] text-[#00A99D] mt-2" />
              </button>
            )}
          </div>
        </div>
        <TestimonialModal modalData={modalData} />
      </section>
    </div>
  );
};

export default GetReview;
