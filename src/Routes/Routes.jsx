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
import Blogs from "../Components/Blog/Blogs";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
      {
        path: "blog",
        element: <Blogs></Blogs>,
        loader: () =>
          fetch(
            "https://chef-recipe-hunter-server-drbo5yt7e-mdzisan.vercel.app/blogs"
          ),
      },
    ],
  },
  {
    path: "chefrecipes",
    element: <ChefRecipesLayout></ChefRecipesLayout>,

    children: [
      {
        path: ":id",
        element: (
          <PrivateRoutes>
            <ChefRecipesPage></ChefRecipesPage>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-drbo5yt7e-mdzisan.vercel.app/chefrecipes/${params.id}`
          ),
      },
    ],
  },
  {
    path: "recipe",
    element: <RecipeDetailsLayout></RecipeDetailsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoutes>
            <SingleRecipeDetails></SingleRecipeDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-drbo5yt7e-mdzisan.vercel.app/recipe/${params.id}`
          ),
      },
    ],
  },
]);

export default Routes;
