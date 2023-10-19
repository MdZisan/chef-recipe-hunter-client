import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';

const Chefs = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{

        fetch('https://chef-recipe-hunter-server-drbo5yt7e-mdzisan.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))

    },[])


// console.log(chefs);

    return (<>
    
    <h1 className="m-6 text-center text-3xl font-bold">Our Chefs</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3  '>
            {
                chefs.map(chef=><SingleChef key={chef.id} chef={chef}></SingleChef>)
            }
        </div></>
    );
};

export default Chefs;