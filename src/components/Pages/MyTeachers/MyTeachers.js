import React from "react";

const MyTeachers = () => {
  return (
    <div className=" dark:bg-[#350573]">
      <section class="bg-white ">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
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
                    <tr>
                      <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        <p> Yusuf Bin Imam</p>
                        <p className="">yusufbinemamstk@gmail.com</p>
                      </td>
                      <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        Science
                      </td>
                      <td class="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
                        Sitakund
                      </td>
                      <td class="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
                        5000
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
