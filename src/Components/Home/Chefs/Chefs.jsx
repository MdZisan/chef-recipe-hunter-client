import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';

const Chefs = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))

    },[])


// console.log(chefs);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 m-6 '>
            {
                chefs.map(chef=><SingleChef key={chef.id} chef={chef}></SingleChef>)
            }
        </div>
    );
};

export default Chefs;