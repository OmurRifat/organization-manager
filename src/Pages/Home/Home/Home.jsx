import React, { useContext } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import About from '../../About/About';

const Home = () => {
    return (
        <div className='mx-2'>
            <HeroSection/>
            <About></About>
        </div>
    );
};

export default Home;