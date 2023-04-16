import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const MyTeachers = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.email);

  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://edumate-second-server.vercel.app/api/v1/bookings/email?email=${user?.email}`
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

  if (loading) {
    return <Loader />;
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
                        User
                      </th>
                      <th class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Background
                      </th>
                      <th class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Location
                      </th>
                      <th class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Fee
                      </th>
                      <th class="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Payment
                      </th>
                      <th class="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {teachers?.map((teacher) => (
                      <tr>
                        <td class="text-dark flex gap-5 border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                              <img alt="teacher Image" src={teacher?.image} />
                            </div>
                          </div>

                          <div className="text-start">
                            <p className="font-bold">{teacher?.name}</p>
                            <p className="">{teacher?.email}</p>
                          </div>
                        </td>
                        <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          {teacher?.background}
                        </td>
                        <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                          {teacher?.location}
                        </td>
                        <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          {teacher?.fee}
                        </td>
                        <td class="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          <a class="border-blue-600 px-10 text-primary hover:bg-green-600 inline-block rounded border py-2  hover:text-white">
                            Pay
                          </a>
                        </td>
                        <td class="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                          <a class="border-blue-600 text-primary hover:bg-green-600 inline-block rounded border py-2 px-6 hover:text-white">
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

export default MyTeachers;
