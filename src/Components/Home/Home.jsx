import React from "react";
import Hero from "./Hero";
import Chefs from "./Chefs/Chefs";
import LazyLoad from "react-lazy-load";
import Service from "./extraSection/Service";
import ContactUs from "./extraSection/ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import Reviews from "./Reviews/Reviews";
import LikedItems from "./LikedItems/LikedItems";
import NewsLetter from "./NewsLetter/NewsLetter";
import Faq from "./Faq/Faq";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <>
      <LazyLoad>
        <Hero></Hero>
      </LazyLoad>
      <Chefs></Chefs>
      <Service></Service>
      <LikedItems></LikedItems>
      
      <Reviews/>
      <Gallery/>
      <NewsLetter/>
      <Faq/>
      <AboutUs/>
      
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
