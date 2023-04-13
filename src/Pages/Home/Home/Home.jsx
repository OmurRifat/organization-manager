import React, { useContext } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import About from './../../About/About';
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog';
import OurPartners from '../OurPartners/OurPartners';
import FrequentQuestion from '../FrequentQuestion/FrequentQuestion';
import Vision from '../Vision/Vision';
import Contact from '../Contact/Contact';
import UpcommingEvents from '../UpcommingEvents/UpcommingEvents';

const Home = () => {
    return (
        <div className='mx-2 mt-4'>
            <HeroSection />
            <About />
            <Testimonial />
            <Blog />
            <OurPartners />
            <UpcommingEvents />
            <FrequentQuestion />
            <Vision></Vision>
            <Contact />
        </div>
    );
};

export default Home;