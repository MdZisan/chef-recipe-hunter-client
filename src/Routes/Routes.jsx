import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/MainLayouts/Main';
import Home from '../Components/Home/Home';

const Routes = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                }
            ]
        }


])

export default Routes;