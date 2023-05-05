import React from "react";
import { BsFillStarFill, BsFillXSquareFill } from "react-icons/bs";

const TestimonialModal = ({ modalData }) => {
  return (
    <div className="">
      <input type="checkbox" id="TestimonialModal" className="modal-toggle" />
      <div className="modal">
        <div className="">
          <div className="p-8 flex flex-col justify-center w-96 rounded-xl text-center border border-green-400 bg-white dark:text-black cursor-pointer">
            <img
              alt=""
              className="self-center ring ring-green-800 ring-offset-base-100 ring-offset-2 flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full "
              src={modalData?.image}
            />

            <div className="flex-1 my-4">
              <p className="text-xl font-semibold leading-snug">
                {modalData?.name}
              </p>
              <p className="flex justify-center text-orange-400 dark:text-[#350573] my-2">
                {modalData?.rate === 1 && <BsFillStarFill />}
                {modalData?.rate === 2 && (
                  <>
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </>
                )}
                {modalData?.rate === 3 && (
                  <>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </>
                )}
                {modalData?.rate === 4 && (
                  <>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </>
                )}
                {modalData?.rate === 5 && (
                  <>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </>
                )}
              </p>
              <h1>
                <p>{modalData?.message}</p>
              </h1>
            </div>
            <div className="modal-action">
              <label htmlFor="TestimonialModal">
                <BsFillXSquareFill className="text-red-600 text-2xl md:text-4xl cursor-pointer" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
