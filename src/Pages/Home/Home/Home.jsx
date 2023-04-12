import React, { useContext } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import About from './../../About/About';
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog';
import Newsletter from '../Newsletter/Newsletter';
import OurPartners from '../OurPartners/OurPartners';
import FrequentQuestion from '../FrequentQuestion/FrequentQuestion';
import UpcommingEvents from '../UpcommingEvents/UpcommingEvents';

const Home = () => {
    return (
        <div className='mx-2'>
            <HeroSection />
            <About />
<<<<<<< HEAD
            <Testimonial/>
            <Blog/>
            <OurPartners/>
            <UpcommingEvents/>
            <FrequentQuestion/>
            <Newsletter/>
=======
            <Testimonial />
            <Blog />
            <OurPartners />
            <FrequentQuestion />
            <Newsletter />
>>>>>>> f5b03420d6054f6c91de84e69f1a08723dbf89cf
        </div>
    );
};

export default Home;