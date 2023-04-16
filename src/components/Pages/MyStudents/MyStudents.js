import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
const MyStudents = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.email);

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://edumate-second-server.vercel.app/api/v1/bookings/teacher/email?email=${user?.email}`
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
    <div className=" dark:bg-[#350573]">
      <section class="bg-white max-w-screen">
        <div class="container mx-auto">
          <div class=" flex flex-wrap">
            <div class="w-full">
              <div class="max-w-full overflow-x-auto">
                <table class="w-full table-auto">
                  <thead>
                    <tr class="bg-blue-500 text-center">
                      <th class="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Student Info
                      </th>

                      <th class="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {students?.map((student) => (
                      <tr>
                        <td class="text-dark flex  justify-center items-center gap-5 border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          <div className="avatar">
                            <div className="w-12 rounded-full ">
                              <img
                                alt="teacherImage"
                                src={student?.studentImage}
                              />
                            </div>
                          </div>

                          <div className="text-start">
                            <p className="font-bold">{student?.studentName}</p>
                            <p className="">{student?.studentEmail}</p>
                          </div>
                        </td>
                        <td className="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          <a className="border-blue-600 text-primary hover:bg-green-600 inline-block rounded border py-2 px-6 hover:text-white">
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
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
