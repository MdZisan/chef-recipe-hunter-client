import React from 'react';
import { FaMixer } from 'react-icons/fa';

const ServiceCard = ({services}) => {

    const {service,description} =  services;
    return (
        <div>
            <div className="card w-auto my-4 bg-white shadow-xl">
  <figure className='text-5xl  mt-3'><FaMixer/></figure>
  <div className="card-body text-center">
    <h2 className="text-xl font-bold text-center" >{service}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;