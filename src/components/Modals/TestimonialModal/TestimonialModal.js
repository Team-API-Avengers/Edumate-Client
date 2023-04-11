import React from 'react';
import { BsFillStarFill, BsFillXSquareFill } from 'react-icons/bs';

const TestimonialModal = ({modalData}) => {
    return (
        <div className=' dark:text-[#350573]'>
            <input type="checkbox" id="TestimonialModal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{modalData?.name}</h3>
                    <p className="flex justify-center text-orange-400 dark:text-[#350573] my-2">
                  {modalData?.rate === 1 &&
                  <BsFillStarFill />
                  }
                  {modalData?.rate === 2 &&
                  <>
                  <BsFillStarFill />
                  <BsFillStarFill />
                  </>
                  }
                  {modalData?.rate === 3 &&
                  <>
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  </>
                  }
                  {modalData?.rate === 4 &&
                  <>
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  </>
                  }
                  {modalData?.rate === 5 &&
                  <>
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  </>
                  }
                    </p>
                    <p className="py-4">{modalData?.message}</p>
                    <div className="modal-action">
                    <label htmlFor="TestimonialModal" >
                        <BsFillXSquareFill className='text-red-600 text-2xl md:text-4xl cursor-pointer' /> 
                    </label>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default TestimonialModal;