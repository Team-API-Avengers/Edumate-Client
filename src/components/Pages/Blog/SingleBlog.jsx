import React from 'react';

const singleBlog = ({ blog }) => {
    console.log(blog);
    const { author, id, comment, url, title, date } = blog;



    return (
        <div>
            <div className="p-6 bg-white rounded-xl">
                <a href="#" className="group">
                    <div className="overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1636467204130-edf8ee206dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="w-full h-auto hover:scale-105 transition transition-all duration-200 ease-in-out" alt="Sample Cover" />
                    </div>
                    <h3 className="mt-6 group-hover:text-purple-400 font-semibold text-xl lg:text-4xl line-clamp-3 transition translation-all duration-200 ease-in-out" title="Lorem Ipsum is simply dummy text of the printing">
                        {title}
                    </h3>
                </a>
                <div className="mt-6">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <time className="text-gray-600" dateTime="2021-11-06T08:29:56+00:00">
                            {date}
                        </time>
                        <a href="#" className="inline-block text-gray-600 hover:text-purple-400">
                            {comment} Comments
                        </a>
                        <a href="#" className="flex items-center">
                            <div className="h-6 w-6 rounded-full bg-purple-400" />
                            <span className="ml-2 text-gray-600">
                                {author}
                            </span>
                        </a>
                    </div>
                    <p className="mt-6 leading-normal line-clamp-3 text-lg text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi explicabo ipsa laudantium maxime nemo non numquam praesentium quia quidem reiciendis sint tempora temporibus tenetur, totam unde vel velit voluptas? Alias.
                    </p>
                </div>
                <a href="#" className="inline-block mt-6 text-purple-500 hover:text-purple-400">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default singleBlog;