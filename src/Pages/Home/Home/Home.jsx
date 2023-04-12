import React, { useContext } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import About from './../../About/About';
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog';
import OurPartners from '../OurPartners/OurPartners';
import FrequentQuestion from '../FrequentQuestion/FrequentQuestion';
import Vision from '../Vision/Vision';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='mx-2'>
            <HeroSection />
            <About />
            <Testimonial/>
            <Blog/>
            <OurPartners/>
            <FrequentQuestion/>
            <Vision></Vision>
            <Contact/>
        </div>
    );
};

export default Home;