import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/MainLayouts/Main';

const Routes = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>
        }


])

export default Routes;