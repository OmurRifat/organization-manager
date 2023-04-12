import React, { useContext } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import About from './../../About/About';
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog';
import Newsletter from '../Newsletter/Newsletter';
import OurPartners from '../OurPartners/OurPartners';

const Home = () => {
    return (
        <div className='mx-2'>
            <HeroSection />
            <About />
            <Testimonial/>
            <Blog/>
            <OurPartners/>
            <Newsletter/>
        </div>
    );
};

export default Home;