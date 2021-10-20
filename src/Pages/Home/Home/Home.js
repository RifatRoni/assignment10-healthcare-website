import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import SpecialService from '../SpecialService/SpecialService';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <SpecialService></SpecialService>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;