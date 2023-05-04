import React from 'react';
import './OurPartners.css'
import { Link } from 'react-router-dom';

const OurPartners = () => {

    const styleObject = {
        button: {
          background: '#2A9D8F',
        },
        textcolor: {
          color: '#2A9D8F',
        },
        size: {
          width: '500px',
        },
        video: {
          width: '320px',
        },
        bgcolor: {
            background: '#EAF5F4',
        },
      };

    return (
        <div style={styleObject.bgcolor} className='bg pt-10 mb-10'> <br />
            <div className="mx-auto items-center justify-center grid grid-cols-1 md:grid-cols-2">
            <div style={styleObject.bgcolor} className=" sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center">
            <div className="text-left pb-8">
            <p style={styleObject.textcolor} className="text-gray-900 font-semibold pb-2 txt">Our Partners</p>
                    <h1  className="text-4xl mb-6 font-semibold text-gray-700 txt">We Work With The  <br></br> Best Partners </h1>
                    
                    <p className="mb-6 text-base font-normal text-gray-500 dark:text-gray-400 txt">GROW - Is a non-profit organization whose goal is to <br></br> protect, maintain, care for, and preserve the trees on <br></br> the earth that we stand on now</p>
              
                    <button style={styleObject.button} type="button" className="btn text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 ">   See More</button>

            </div>
            {/* <br></br> */}
        </div>

        {/* ---------------Logo Section desktop--------------- */}
    {/* <div className="font-medium text-gray-800"> */}
        <div className='grid grid-cols-2 pl-14 lg:pl-12 font-medium text-gray-800'>
            <img className='partnerlogo1 ' src="https://i.ibb.co/b21gsKt/6.png" alt="" />
            <img className='' src="https://i.ibb.co/hVHsdy7/2.png" alt="" />
            <img className='' src="https://i.ibb.co/BBr4H37/5.png" alt="" />
            <img className='' src="https://i.ibb.co/gyZgL2P/3.png" alt="" />
        </div>
        
    {/* </div> */}
    {/* <br></br> */}
    {/* ---------------Logo Section Mobile--------------- */}
    {/* <div className="lg:hidden font-medium text-gray-200">
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <img className='partnerlogo ' src="https://i.ibb.co/b21gsKt/6.png" alt="" />
            <img className='partnerlogo pl-5' src="https://i.ibb.co/hVHsdy7/2.png" alt="" />
            <img className='partnerlogo pl-5' src="https://i.ibb.co/BBr4H37/5.png" alt="" />
            <img className='partnerlogo ' src="https://i.ibb.co/gyZgL2P/3.png" alt="" />
        </div>
        
    </div> */}
    </div>
    <br />
        </div>
    );
};

export default OurPartners;