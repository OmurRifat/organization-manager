import React, { useContext } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import About from './../../About/About';
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog';
import Newsletter from '../Newsletter/Newsletter';
import OurPartners from '../OurPartners/OurPartners';
import FrequentQuestion from '../FrequentQuestion/FrequentQuestion';

const Home = () => {
    return (
        <div className='mx-2'>
            <HeroSection />
            <About />
            <Testimonial />
            <Blog />
            <OurPartners />
            <FrequentQuestion />
            <Newsletter />
        </div>
    );
};

export default Home;