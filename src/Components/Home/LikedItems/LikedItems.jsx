import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LikedItemCard from './LikedItemCard';

const LikedItems = () => {
    const [likedItems, setLikedItems] = useState([]);
    useEffect(()=>{
        fetch('./recipe.json')
        .then(res=>res.json())
        .then(data=>setLikedItems(data.slice(1,5)))
    },[])
    // console.log(likedItems);
    return (
        <div className='my-5'>
             <h1 className="mb-3 text-center text-3xl font-bold">Most Liked Items</h1>
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-10 w-[1000px] mx-auto'>
                {
                    likedItems.map(item=><LikedItemCard key={item.id} item={item}></LikedItemCard>)
                }
            </div>
        </div>
    );
};

export default LikedItems;