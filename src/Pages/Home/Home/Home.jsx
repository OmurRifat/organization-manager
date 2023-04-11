import React, { useContext } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import About from './../../About/About';
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div className='mx-2'>
            <HeroSection />
            <About />
            <Testimonial/>
            <Blog/>
            <Newsletter/>
        </div>
    );
};

export default Home;