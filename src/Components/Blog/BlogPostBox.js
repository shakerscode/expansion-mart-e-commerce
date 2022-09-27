import React from 'react';
import { ReadMoreBtn } from '../exporter';

const BlogPostBox = ({ blog }) => {
    return (
        <div className='flex justify-start items-center gap-5 my-4 shadow p-4 cursor-pointer h-60 rounded-lg'>
            <img src={blog?.image} alt="" className='blog-img'/>
            <div className=''>
                <p className='bg-primary w-24 text-center text-white text-[14px] rounded-xl my-2'>{blog?.tag}</p>
                <h1 className='text-2xl font-bold text-black '>{blog?.title}</h1>
                <p className='py-2'>{blog?.post.slice(0,80)}...</p>
                <p className='text-gray py-2'>{blog?.date}</p> 
                <ReadMoreBtn mainBlog={true}>Read More</ReadMoreBtn>
            </div>
        </div>
    );
};

export default BlogPostBox;