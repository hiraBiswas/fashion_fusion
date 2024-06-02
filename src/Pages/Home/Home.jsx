import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Services from '../../Components/Services/Services';
import Showroom from '../../Components/Showroom/Showroom';
import LastestProduct from '../../Components/LastestProduct/LastestProduct';
import ReviewSection from '../../Components/ReviewSection/ReviewSection';
import UpComing from '../../Components/Upcoming/Upcoming';
import Newsletter from '../../Components/Newsletter/Newsletter';
import FAQ from '../../Components/FAQ/FAQ';
import Delivery from '../../Components/Delivery/Delivery';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <LastestProduct></LastestProduct>
          <UpComing></UpComing>
      
          <Newsletter></Newsletter>
          <Services></Services>
          <FAQ></FAQ>
          <Showroom></Showroom>
          <ReviewSection></ReviewSection>
          <Contact></Contact>
          
        </div>
    );
};

export default Home;