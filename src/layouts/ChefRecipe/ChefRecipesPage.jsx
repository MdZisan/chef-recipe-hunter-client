import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipesPage = () => {
    const [chef,setChef] =useState();
    const {id}=useParams();
    // console.log(id);
    const chefrecipes= useLoaderData()
    console.log(chefrecipes);

useEffect(()=>{
    fetch(`http://localhost:5000/chefs/${id}`)
    .then(res=>res.json())
    .then(data=>setChef(data))
    .catch(error=>console.log(error))
},[])

console.log(chef);
    return (
        <div>
            {/* banner */}
         {
            chef &&    <div className="hero min-h-screen  bg-green-50 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={chef.chef_image} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
         }
        </div>
    );
};

export default ChefRecipesPage; 