import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/MainLayouts/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ChefRecipesLayout from "../layouts/ChefRecipe/ChefRecipesLayout";
import ChefRecipesPage from "../layouts/ChefRecipe/ChefRecipesPage";
import RecipeDetailsLayout from "../layouts/RecipeDetailsLayout/RecipeDetailsLayout";
import SingleRecipeDetails from "../layouts/RecipeDetailsLayout/SingleRecipeDetails";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "chefrecipes",
    element: <ChefRecipesLayout></ChefRecipesLayout>,
      
    children: [
        { path: ":id",
     element: <ChefRecipesPage></ChefRecipesPage>
      ,loader:({params})=>fetch(`https://chef-recipe-hunter-server-fy87vvubs-mdzisan.vercel.app/chefrecipes/${params.id}`)
    }
    ],
  },
  {
    path:"recipe",
    element:<RecipeDetailsLayout></RecipeDetailsLayout>,
    children:[
      {
        path:":id",
        element:<SingleRecipeDetails></SingleRecipeDetails>,
        loader:({params})=>fetch(`https://chef-recipe-hunter-server-fy87vvubs-mdzisan.vercel.app/recipe/${params.id}`)
      }
    ]
    
  }
]);

export default Routes;
