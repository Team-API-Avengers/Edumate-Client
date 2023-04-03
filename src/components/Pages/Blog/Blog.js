import React, { useEffect, useState } from 'react';
import SingleBlog from "./SingleBlog";


const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogdata.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // console.log(blogs); blogs is available here

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {
                    blogs?.map((blog, index) => <SingleBlog blog={blog} />)
                }
            </div>

        </div>
    );
};

export default Blog;