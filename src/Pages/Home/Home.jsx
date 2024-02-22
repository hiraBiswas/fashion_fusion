import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Services from '../../Components/Services/Services';
import Showroom from '../../Components/Showroom/Showroom';
import LastestProduct from '../../Components/LastestProduct/LastestProduct';
import ReviewSection from '../../Components/ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <LastestProduct></LastestProduct>
          <Services></Services>
          <Showroom></Showroom>
          <ReviewSection></ReviewSection>
          
        </div>
    );
};

export default Home;