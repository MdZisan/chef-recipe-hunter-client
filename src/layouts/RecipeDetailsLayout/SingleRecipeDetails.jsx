import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SingleRacipeCard from "./SingleRacipeCard";



const SingleRecipeDetails = () => {
    const navigate = useNavigate();
const back = () => {
  navigate(-1);
}
  const details = useLoaderData();
  console.log(details);

  const [chef, setChef] = useState();
  const { id } = useParams();
 useEffect(() => {
    fetch(`http://localhost:5000/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);


// const location =  useLocation();
// console.log(location);



  return (
    <div className="bg-green-50 px-5">
     
 
      {/* banner */}
      {chef && (
        
        <div className="card card-side bg-green-50 shadow-xl  ">
  <figure className="h-[250px] my-auto ml-2"><img src={chef.chef_image} alt="food" /></figure>
  <div className="card-body">
  <h1 className="text-xl font-bold">{chef.chef_name}</h1>
           
           <p className="py-1 font-semibold  text-sm">" <span className="text-slate-400">{chef.chef_bio}</span> "</p>
           <p className="py-1 font-semibold text-xl">Expreience: {chef.years_of_experience}</p>
           <p className="py-1 font-semibold text-xl">
             Total Recipes: {chef.number_of_recipes}
           </p>
           <p className="py-1 font-semibold text-xl">Likes: {chef.likes}</p>
           <div className="card-actions justify-end">
           <button
        onClick={back}
        className="btn ml-3 bg-green-300 hover:bg-green-500  text-black border-none mt-3"
      >
        <FaArrowLeft /> View More Recipes of this chef
      </button>
      </div>
  </div>
</div>
      )}
 {/* banner */}
{/*recipe details*/}
<div>

<SingleRacipeCard key={details.id} details={details} ></SingleRacipeCard>


</div>

    </div>
  );
};

export default SingleRecipeDetails;
