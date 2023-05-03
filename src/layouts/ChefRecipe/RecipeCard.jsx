import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id,recipe_name, recipe_ingredients, instructions, rating } = recipe;
  // console.log(recipe_name, recipe_ingredients, instructions, rating);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://plus.unsplash.com/premium_photo-1663127205767-db5a60e721b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{recipe_name}</h2>
          


          <p>{rating}</p>
          <div className="card-actions">
            <button className="btn btn-primary"><Link to={`/recipe/${id}`}>View Recipe</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
