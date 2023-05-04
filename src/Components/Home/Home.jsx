import React from 'react';
import Hero from './Hero';
import Chefs from './Chefs/Chefs';
import LazyLoad from 'react-lazy-load';


const Home = () => {
  
    return (
        <>
     <LazyLoad>

        <Hero></Hero>
     </LazyLoad>
        <Chefs></Chefs>
        </>
    );
};

export default Home;