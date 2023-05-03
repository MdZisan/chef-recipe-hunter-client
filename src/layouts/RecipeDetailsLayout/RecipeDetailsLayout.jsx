import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const RecipeDetailsLayout = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, []);
    return (
        <>
        {loading ?  <div className="min-h-screen bg-green-200  flex flex-col items-center justify-center"><div className="lds-dual-ring"></div><span>please wait <br /> loading </span></div> : 
          <div className="bg-green-50">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </div> 
        }
      </>
    );
};

export default RecipeDetailsLayout;