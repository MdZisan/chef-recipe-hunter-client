import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet, useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const ChefRecipesLayout = () => {
    const {id}= useParams();
    // console.log(id);
    return (
        <div>
            <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>

        </div>
    );
};

export default ChefRecipesLayout;