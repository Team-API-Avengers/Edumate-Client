import React from 'react';
import FAQBanner from './FAQBanner/FAQBanner';

const FAQ = () => {
    return (
        <div className='mx-10 lg:mx-20'>
            <div class="space-y-4">
                <FAQBanner />
            <details
                class="group border-l-8 rounded-xl border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
            >
                <summary class="flex items-center justify-between cursor-pointer">
                <h2 class="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span
                    class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!
                </p>
            </details>

            
            <details
                class="group rounded-xl border-l-8 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                
            >
                <summary class="flex items-center justify-between cursor-pointer">
                <h2 class="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span
                    class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!
                </p>
            </details>

            
            <details
                class="group rounded-xl border-l-8 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                
            >
                <summary class="flex items-center justify-between cursor-pointer">
                <h2 class="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span
                    class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!
                </p>
            </details>

            
            <details
                class="group rounded-xl border-l-8 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            
            >
                <summary class="flex items-center justify-between cursor-pointer">
                <h2 class="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>

                <span
                    class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!
                </p>
            </details>

            
            </div>

        </div>
    );
};

export default FAQ;