import React from "react";

const SingleRacipeCard = ({ details }) => {
  const {
    chef_id,
    food_img,
    recipe_name,
    recipe_ingredients,
    instructions,
    rating,
  } = details;

  return (
    <div>
      <div className=" bg-green-50 pt-4">
      <h1 className="text-5xl font-bold text-center">{recipe_name}</h1>
        <div className="p-7 grid grid-cols-3   gap-7">
         <div>
         <img src={food_img} className="rounded-lg shadow-2xl" loading="lazy"/>
          <button className="btn btn-success text-white mt-3">Add to Favorite</button>
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
            {instructions.map(ins=><li>{ins}</li>)}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleRacipeCard;
