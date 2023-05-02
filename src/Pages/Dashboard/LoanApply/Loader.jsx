import React from 'react';
import { BarLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div>
            <div className='flex my-72 justify-center'>
            <BarLoader
              color="#65a30d"
              loading
              size={60}
              speedMultiplier={1}
            />
        </div>
        </div>
    );
};

export default Loader;