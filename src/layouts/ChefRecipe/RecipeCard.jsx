import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { chef_id,food_img,recipe_name, recipe_ingredients, instructions, rating } = recipe;
  // console.log(recipe_name, recipe_ingredients, instructions, rating);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={food_img}
            alt="food img"
            className="rounded-xl"
            loading="lazy"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{recipe_name}</h2>
          


          <p>{rating}</p>
          <div className="card-actions">
            <button className="btn btn-success"><Link to={`/recipe/${chef_id}`}>View Recipe</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
