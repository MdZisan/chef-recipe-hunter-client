import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import LazyLoad from "react-lazy-load";

const ChefRecipesPage = () => {
  const [chef, setChef] = useState();
  const { id } = useParams();
  // console.log(id);
  const chefrecipes = useLoaderData();
  // console.log(chefrecipes);

  useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-fy87vvubs-mdzisan.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);

  // console.log(chef);
  return (
    <div>
      {/* banner */}
      {chef && (
        <div className="hero min-h-screen  bg-green-50 ">
          <div className="hero-content flex flex-col lg:flex-row-reverse items-center">

       
        <LazyLoad height={500} width={1300} className="block" >
            <img
              src={chef.chef_image}
              className="max-w-sm rounded-lg shadow-2xl w-[100%]  " loading="lazy"
            />
            </LazyLoad>

        
        
            
          
          
          <div className="w-auto" >
              <h1 className="text-5xl font-bold">{chef.chef_name}</h1>
           
              <p className="py-3 font-semibold ">" <span className="text-slate-400">{chef.chef_bio}</span> "</p>
              <p className="py-3 font-semibold text-xl">Expreience: {chef.years_of_experience}</p>
              <p className="py-3 font-semibold text-xl">
                Total Recipes: {chef.number_of_recipes}
              </p>
              <p className="py-3 font-semibold text-xl">Likes: {chef.likes}</p>
              
            </div>
          
        
          </div>
        </div>
      )}

        {/* recipes card */}
   

       <div className="grid grid-cols-1 md:grid-cols-3 p-5 bg-green-50 ">
            {
                chefrecipes.map((recipe,index)=><RecipeCard key={index} recipe={recipe}></RecipeCard>)
            }
        </div>

     
    </div>
  );
};

export default ChefRecipesPage;
