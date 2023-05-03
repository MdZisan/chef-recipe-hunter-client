import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const RecipeCard = ({ recipe }) => {
  const { chef_id,food_img,recipe_name, recipe_ingredients, instructions, rating } = recipe;
  // console.log(recipe_name, recipe_ingredients, instructions, rating);
  return (
    <div>
      <div className="card md:w-96 bg-green-50 shadow-xl">
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
          


          <p className="flex items-center">{rating} <FaStar className="text-yellow-300"/></p>
          <div className="card-actions">
            <button className="btn btn-success text-white"><Link to={`/recipe/${chef_id}`}>View Full Recipe</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
