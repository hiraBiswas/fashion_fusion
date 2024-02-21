import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Services from '../../Components/Services/Services';
import Showroom from '../../Components/Showroom/Showroom';
import LastestProduct from '../../Components/LastestProduct/LastestProduct';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <Showroom></Showroom>
          <LastestProduct></LastestProduct>
        </div>
    );
};

export default Home;