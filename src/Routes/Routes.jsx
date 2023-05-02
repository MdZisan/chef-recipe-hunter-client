import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/MainLayouts/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ChefRecipesLayout from "../layouts/ChefRecipe/ChefRecipesLayout";
import ChefRecipesPage from "../layouts/ChefRecipe/ChefRecipesPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    path: "recipe",
    element: <ChefRecipesLayout></ChefRecipesLayout>,
    children: [
        { path: ":id",
     element: <ChefRecipesPage></ChefRecipesPage> }
    ],
  },
]);

export default Routes;
