import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const ChefRecipesLayout = () => {
    return (
        <div>
            <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>

        </div>
    );
};

export default ChefRecipesLayout;