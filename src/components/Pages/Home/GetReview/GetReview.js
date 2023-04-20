import React, { useEffect, useState } from 'react';
import { BsArrowRightShort, BsFacebook, BsFillStarFill, BsInstagram, BsTwitter } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';
import TestimonialModal from '../../../Modals/TestimonialModal/TestimonialModal';

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
        <div>
            <section>
  <div class="mx-auto max-w-screen-xl border dark:border-0 px-4 py-8 sm:px-6 lg:px-8">
    <h2 class="text-xl font-bold sm:text-2xl">Students Reviews</h2>

    <div class="mt-4 flex items-center gap-4">
      <p class="text-3xl font-medium">
        3.8
        <span class="sr-only"> Average review score </span>
      </p>

      <div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>

        <p class="mt-0.5 text-xs text-gray-500">Based on {data?.length} reviews</p>
      </div>
    </div>




    <div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-3">
        {
            data?.slice(0, 3)?.map((feedback, idx) => (
                <blockquote key={idx} className=''>
        <header class="sm:flex sm:items-center sm:gap-4">
          <div class="flex dark:text-yellow-400">
          { feedback?.rate === 1 && <BsFillStarFill /> }
                    { feedback?.rate === 2 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </>
                    ) }
                    { feedback?.rate === 3 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </>
                    ) }
                    { feedback?.rate === 4 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </>
                    ) }
                    { feedback?.rate === 5 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </>
                    ) }
          </div>

          <p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p>
        </header>

        <p class="mt-2 text-gray-700 dark:text-white">
        { feedback?.message.slice(0, 50) }
        { feedback?.message.length >= 51 && <span>. . .</span> }

        { feedback?.message.length >= 51 && (
                      <label
                        onClick={ () => setModalData(feedback) }
                        htmlFor="TestimonialModal"
                        className="cursor-pointer text-gray-400"
                      >
                        see more
                      </label>
                    ) }
        </p>

        <footer className="my-8 flex">
        <img
        alt=""
        className="self-center mx-3 ring ring-green-800 ring-offset-base-100 ring-offset-2 flex-shrink-0 w-12   bg-center bg-cover rounded-full "
        src={ feedback?.image }
        />
          <p className='text-start'>
          <span className="text-xs block text-gray-500 dark:text-white">{ feedback?.name }</span>
          <span className="text-xs block text-gray-500 dark:text-white"> 12th January, 2024</span>
          </p>
        </footer>
               </blockquote>
            ))
        }
      

    </div>

    <div className="my-10">
    { showAll ? (
            <div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                { data?.slice(3)?.map((feedback, idx) => (
                  <blockquote key={idx} className=''>
                  <header class="sm:flex sm:items-center sm:gap-4">
                    <div class="flex dark:text-yellow-400">
                    { feedback?.rate === 1 && <BsFillStarFill /> }
                              { feedback?.rate === 2 && (
                                <>
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                </>
                              ) }
                              { feedback?.rate === 3 && (
                                <>
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                </>
                              ) }
                              { feedback?.rate === 4 && (
                                <>
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                </>
                              ) }
                              { feedback?.rate === 5 && (
                                <>
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                  <BsFillStarFill />
                                </>
                              ) }
                    </div>
          
                    <p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p>
                  </header>
          
                  <p class="mt-2 text-gray-700 dark:text-white">
                  { feedback?.message.slice(0, 50) }
                  { feedback?.message.length >= 51 && <span>. . .</span> }
          
                  { feedback?.message.length >= 51 && (
                                <label
                                  onClick={ () => setModalData(feedback) }
                                  htmlFor="TestimonialModal"
                                  className="cursor-pointer text-gray-400"
                                >
                                  see more
                                </label>
                              ) }
                  </p>
          
                  <footer className="my-8 flex">
                <img
                alt=""
                className="self-center ring ring-green-800 ring-offset-base-100 ring-offset-2 flex-shrink-0 w-12 h-12 mx-3 bg-center bg-cover rounded-full "
                src={ feedback?.image }
                />
                <p className='text-start'>
                <span className="text-xs block text-gray-500 dark:text-white">{ feedback?.name }</span>
                <span className="text-xs block text-gray-500 dark:text-white"> 12th January, 2024</span>
                </p>
                </footer>
                  </blockquote>
                )) }
              </div>

              <button
                className="hover:underline group text-blue-700 dark:text-white text-2xl flex mx-auto w-sm mt-10"
                title="Hide"
                onClick={ handleCloseClick }
              >
                Close
                <BsArrowRightShort className="group-hover:text-blue-700 dark:group-hover:text-white text-white mt-2" />
              </button>
            </div>
          ) : (
            <button
              className="hover:underline group text-blue-700 dark:text-white text-2xl flex mx-auto w-sm mb-4 lg:mb-0"
              title="See all"
              onClick={ handleShowAllClick }
            >
              See All Feedbacks
              <BsArrowRightShort className="group-hover:text-blue-700 dark:group-hover:text-white text-white mt-2" />
            </button>
          ) }
    </div>
  </div>
  <TestimonialModal modalData={ modalData } />
</section>

        </div>
    );
};

export default GetReview;