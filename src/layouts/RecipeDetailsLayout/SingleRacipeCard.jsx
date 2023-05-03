import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaStar } from 'react-icons/fa';
const SingleRacipeCard = ({ details }) => {
    const [disabled,setDisable] = useState(false)
  const {
    chef_id,
    food_img,
    recipe_name,
    recipe_ingredients,
    instructions,
    rating,
  } = details;
const addToFav=()=>{
    toast.success("Add To Favorite successfully")
    setDisable(true)
}

  return ( <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div>
      <div className=" bg-green-50 pt-4">
      <h1 className="text-5xl font-bold text-center">{recipe_name}</h1>
        <div className="p-7 grid  grid-cols-3   gap-7">
         <div>
         <img src={food_img} className="rounded-lg shadow-2xl" loading="lazy"/>
          <button className="btn btn-success text-white mt-3" onClick={addToFav} disabled={disabled}>Add to Favorite</button>
          <h2 className="flex items-center gap-2">Rating: {rating} <FaStar/> </h2>
         </div>
          <div>
           

            <div className="flex">
              <div>
                <h2 className="font-semibold text-2xl text-green-400">
                  Recipe Ingredients
                </h2>
                {recipe_ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </div>
            </div>
            
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-green-400">Cooking Mathod</h2>
            {instructions.map(ins=><li key={ins}>{ins}</li>)}
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default SingleRacipeCard;
