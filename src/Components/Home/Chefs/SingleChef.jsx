import React from 'react';
import { Link } from 'react-router-dom';

const SingleChef = ({chef}) => {
     
    const {id,chef_name,years_of_experience,number_of_recipes,likes,chef_image} =chef;


    return (
        <div>
            
            <div className="card card-side bg-base-100 shadow-xl h-72">
  <figure ><img src={chef_image} alt="Movie" className='rounded-lg h-56 ml-3' loading='lazy'/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{chef_name}</h2>
    <p className='font-semibold'>Expreience: {years_of_experience}</p>
    <p className='font-semibold'>Total Recipes: {number_of_recipes}</p>
    <p className='font-semibold'>Likes: {likes}</p>
    <div className="card-actions ">
      <button className="text-white btn btn-success">
       <Link to={`/chefrecipes/${id}`}>View Chef Recipes</Link>
        </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleChef;