import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader";
const MyStudents = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.email);

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://edumate-second-server.vercel.app/api/v1/bookings/teacher/email?email=${ user?.email }`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result?.data);
        if (result.data !== undefined) {
          setStudents(result?.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email]);

  console.log(students);

  if (loading) {
    return <Loader />;
  }
  if (students?.length === 0) {
    return (
      <p className="mt-40 font-bold text-4xl">You have not any student.</p>
    );
  }
  return (
    <div className=" bg-white dark:bg-black dark:text-white">
      <section className="bg-white max-w-screen">
        <div className="container mx-auto">
          <div className=" flex flex-wrap">
            <div className="w-full">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-blue-500 text-center">
                      <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Student Info
                      </th>

                      <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    { students?.map((student, idx) => (
                      <tr key={ idx }>
                        <td className="text-dark flex  justify-center items-center gap-5 border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          <div className="avatar">
                            <div className="w-12 rounded-full ">
                              <img
                                alt="teacherImage"
                                src={ student?.studentImage }
                              />
                            </div>
                          </div>

                          <div className="text-start">
                            <p className="font-bold">{ student?.studentName }</p>
                            <p className="">{ student?.studentEmail }</p>
                          </div>
                        </td>
                        <td className="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          <a className="border-blue-600 text-primary hover:bg-green-600 inline-block rounded border py-2 px-6 hover:text-white">
                            Delete
                          </a>
                        </td>
                      </tr>
                    )) }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyStudents;
