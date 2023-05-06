import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const PostsForMobile = () => {
  const [allPost, setPost] = useState([]);
  console.log(allPost);

  useEffect(() => {
    fetch(`https://edumate-second-server.vercel.app/api/v1/searching-teacher`)
      .then((res) => res.json())
      .then((data) => setPost(data?.data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        className=""
        // style={{
        //   backgroundColor: "#ddd",
        //   padding: "10px",
        // }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div>
      <h2 id="title" className="text-4xl">
        {" "}
        All Posts
      </h2>
      <p>Building a stronger education community together</p>

      <Slider className="max-w-screen-xl mt-20 mx-auto" {...settings}>
        {allPost?.map((post) => (
          <div class="  mb-5 ">
            <div class=" flex  bg-green-50 flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0  p-3 max-w-xs md:max-w-3xl mx-auto border ">
              <div class="w-full   grid place-items-center">
                <img
                  className=" border h-[300px] w-[290px]"
                  src={post?.authorImage}
                  alt="tailwind logo"
                />
              </div>
              <div class="w-full md:w-2/3  flex flex-col space-y-2 p-3">
                <div class="flex justify-between item-center">
                  <p class="text-gray-500 font-medium hidden md:block">
                    Vacations
                  </p>
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p class="text-gray-600 font-bold text-sm ml-1">
                      4.96
                      <span class="text-gray-500 font-normal">
                        (76 reviews)
                      </span>
                    </p>
                  </div>
                  <div class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-pink-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                    Superhost
                  </div>
                </div>
                <h3 class="text-start ml-5 font-bold text-gray-800 md:text-3xl text-xl">
                  {post?.authorName}
                </h3>
                <h3 class=" text-gray-800 text-start ml-5 md:text-lg text-base">
                  {post?.authorEmail}
                </h3>
                <p class="md:text-lg h-11 text-start ml-5 mb-5 text-gray-500 text-base">
                  {post?.description}
                </p>
                <p class="text-lg text-start ml-5   text-gray-500">
                  {post?.date.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PostsForMobile;
