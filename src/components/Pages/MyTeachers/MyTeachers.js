import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const MyTeachers = () => {
  const { loading, user } = useContext(AuthContext);
  // console.log(user);
  const teachersDetails = useLoaderData();
  console.log(teachersDetails);

  // const url = `https://edumate-second-server.vercel.app/api/v1/bookings?id=${user?.uid}`;

  // const { data: users = [] } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://edumate-second-server.vercel.app/api/v1/user`
  //     );
  //     const data = res.json();
  //     return data;
  //   },
  // });

  // const { data: bookings = [] } = useQuery({
  //   queryKey: ["bookings", user?.email],
  //   queryFn: async () => {
  //     const res = fetch(url, {
  //       headers: {},
  //     });
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // console.log(bookings);
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

                  {teachersDetails?.data?.map((teacher) => {
                    if (loading) {
                      return <Loader />;
                    }
                    return (
                      <tbody>
                        <tr>
                          <td class="text-dark flex gap-5 border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                            {teacher?.image ? (
                              <>
                                <div className="avatar">
                                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                      alt="teacher Image"
                                      src={teacher?.image}
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <img src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png" />
                              </>
                            )}
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
                      </tbody>
                    );
                  })}
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
