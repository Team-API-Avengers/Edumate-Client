import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader";
import { toast } from "react-toastify";
import PaymentModal from "../../Modals/PaymentModal";

const MyTeachers = () => {
  const { user } = useContext(AuthContext);
  const [teachers, setTeachers] = useState([]);
  const [modalData, setModalData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://edumate-second-server.vercel.app/api/v1/bookings/student/email?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result?.data);
        if (result.data !== undefined) {
          setTeachers(result?.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email]);

  // console.log(bookings);

  // ! Delete Student
  const handleDelete = (data) => {
    // console.log(data);
    fetch(
      `https://edumate-second-server.vercel.app/api/v1/bookings/${data?._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          toast.success("delete successfully!!");
          window.location.reload(true);
        }
      });
  };

  if (loading) {
    return <Loader />;
  }
  if (teachers?.length === 0) {
    return (
      <p className="mt-40 font-bold text-4xl">You didn't booked any teacher</p>
    );
  }

  const handlePaymentModalData = (data) => {
    setModalData(data);
  };

  return (
    <div className=" dark:bg-[#350573] ">
      <section className="bg-white max-w-screen">
        <div className="container mx-auto">
          <div className=" flex flex-wrap">
            <div className="w-full">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-blue-500 text-center">
                      <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Teachers Info
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Background
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Location
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Fee
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Payment
                      </th>
                      <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {teachers?.map((teacher, idx) => (
                      <tr key={idx}>
                        <td className="text-black flex gap-5 border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          <div className="avatar">
                            <div className="w-12 rounded-full  ">
                              <img
                                alt="teacherImage"
                                src={teacher?.teacherimage}
                              />
                            </div>
                          </div>

                          <div className="text-start">
                            <p className="font-bold">{teacher?.teachername}</p>
                            <p className="">{teacher?.teacheremail}</p>
                          </div>
                        </td>
                        <td className="border-b border-[#E8E8E8] text-black bg-white py-5 px-2 text-center text-base font-medium">
                          {teacher?.teacherbackground}
                        </td>
                        <td className="border-b border-[#E8E8E8] text-black bg-[#F3F6FF] py-5  text-center text-base font-medium">
                          {teacher?.teacherlocation}
                        </td>
                        <td className="border-b border-[#E8E8E8] text-black bg-white py-5 px-2 text-center text-base font-medium">
                          {teacher?.teacherfee}
                        </td>
                        <td className="border-b border-r text-black border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          <label
                            htmlFor="PaymentModal"
                            className="border-blue-600 px-10  bg-blue-600 inline-block rounded border py-2  text-white"
                            onClick={() => handlePaymentModalData(teacher)}
                          >
                            Pay
                          </label>
                        </td>
                        <td
                          onClick={() => handleDelete(teacher)}
                          className="border-b border-r text-black border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium"
                        >
                          <p className=" text-white  inline-block rounded border py-2 px-6 bg-red-700">
                            Delete
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <PaymentModal modalData={modalData} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyTeachers;
