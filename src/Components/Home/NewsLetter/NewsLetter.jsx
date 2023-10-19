import React from 'react';
import style from './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='my-5 '>
        <h1 className="mb-3 text-center text-3xl font-bold">Exclusive News Letter </h1>
                <div className='text-center'>
                <div className="join">
  <input className="input input-success text-[#4ade80] input-bordered join-item   hover:w-96 focus:w-96" placeholder="Email"/>
  <button className="btn bg-[#4ade80] hover:bg-[#3b8054] border-none join-item rounded-full ml-2 ">Subscribe</button>
</div>   
                </div>
        </div>
    );
};

export default NewsLetter;