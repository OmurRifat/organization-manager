import React, { useContext } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import About from './../../About/About';
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className='mx-2'>
            <HeroSection />
            <About />
            <Testimonial/>
            <Blog/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;