import React, { useEffect, useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import ServiceCard from './ServiceCard';


const Service = () => {
    const [services,setServies] =useState([])

    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>setServies(data))
    },[])
// console.log(services);

    return (<div>

        <h2 className='text-center text-3xl mb-3 font-bold'>Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3  mx-5 gap-5 '>
                
           {
            services.map((service,index)=><ServiceCard key={index} services={service}></ServiceCard>)
           }
         
          
        </div>
        </div>
    );
};

export default Service;