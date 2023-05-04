import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from './SingleBlog';

const Blogs = () => {
    const blogs =  useLoaderData()
    console.log(blogs);

    return (
        <div className='text-center min-h-screen'>
            <h1 className='text-3xl font-bold'>ALL Blogs</h1>
            <div>
                {
                    blogs.map(blog=><SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Blogs;