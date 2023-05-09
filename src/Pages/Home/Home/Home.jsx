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
import Services from './../Services/Services';
import CounterUp from '../CounterUp/CounterUp';
import GoToTop from '../GoToTop/GoToTop';

const Home = () => {
    return (
        <div className='mt-4'>
            <HeroSection />
            <About />
            <Services/>
            <Testimonial />
            <Blog />
            <OurPartners />
            <UpcommingEvents />
            <FrequentQuestion />
            <Vision></Vision>
            <CounterUp/>
            <Contact />
            <GoToTop/>
        </div>
    );
};

export default Home;