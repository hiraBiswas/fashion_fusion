import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Services from '../../Components/Services/Services';
import Showroom from '../../Components/Showroom/Showroom';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <Showroom></Showroom>
        </div>
    );
};

export default Home;