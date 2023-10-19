import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(()=>{
        fetch('./recipe.json')
        .then(res=>res.json())
        .then(data=>setGallery(data))
    },[])
    return (
        <div className='my-5'>
        <h1 className="mb-3 text-center text-3xl font-bold">Gallery</h1>
        <div className='flex flex-wrap '>

        {
        gallery.map(item=><>
           <div className="relative group" key={item.id}>
      <img
        src={item.food_img}
        alt="Food"
        className="w-52 mr-2 mb-2 rounded-lg mx-auto"
      />
      <div className=" mr-2 mb-2 rounded-lg  absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex items-center justify-center text-white">
        <p className="">{item.recipe_name}</p>
      </div>
    </div>
        </>)
        }
        </div>



        </div>
    );
};

export default Gallery;