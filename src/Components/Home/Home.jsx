import React from 'react';
import Hero from './Hero';
import Chefs from './Chefs/Chefs';
import LazyLoad from 'react-lazy-load';
import Service from './extraSection/Service';
import ContactUs from './extraSection/ContactUs/ContactUs';


const Home = () => {
  
    return (
        <>
     <LazyLoad>

        <Hero></Hero>
     </LazyLoad>
        <Chefs></Chefs>
        <Service></Service>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;