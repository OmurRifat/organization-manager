import React from 'react';
import './Services.css'

const Services = () => {

    const styleObject = {
        button: {
          background: '#2A9D8F',
        },
        textcolor: {
          color: '#2A9D8F',
        }
      };


    return (
        <div className='pt-9 pb-9'>
            <div>
            <p style={styleObject.textcolor} className="text-center text-gray-900 font-semibold txt">Our Services</p>
            <h1  className="text-center text-4xl font-semibold text-gray-600 pb-5">High Performance Services 
  <br></br> For All Industries. </h1>

            </div>
            {/* ------------Services Card------------- */}
            <div className='grid lg:grid-cols-4 px-4 md:grid-cols-2 grid-cols-1 p-9 m-9'>

                {/* ------services-1------ */}
                    <div className="m-1 cursor-pointer hover:shadow-xl  bg-white drop-shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 photosize">
                            <div className='flex justify-center'>
                            <img className="rounded" src="https://i.ibb.co/n1MDrhC/4288628701679911528-128.png" alt="ss" />
                            </div>
                        <div className="text-center p-4">
                            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                            Social Impact Loans
                            </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        These loans are designed to support social enterprises, non-profit
                         organizations, and other businesses that have a strong social or environmental mission.
                        </p><br />
                        </div>
                    </div>

                {/*------services-2------*/}
                    <div className="m-1 bg-white cursor-pointer hover:shadow-xl drop-shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 photosize">
                        <div className='flex justify-center'>
                        <img className="rounded" src="https://i.ibb.co/tmFWVFY/402647201679419879-128.png" alt="" />
                        </div>
                        <div className="text-center p-4">
                            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                            Housing Loans
                            </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Non-profit organizations may offer loans to help individuals or families
                         purchase a home, make home repairs or renovations, or prevent foreclosure.
                        </p><br />
                        </div>
                    </div>

                {/*------services-3------*/}
                    <div className="m-1 bg-white cursor-pointer hover:shadow-xl drop-shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 photosize">
                            <div className='flex justify-center'>
                            <img className="rounded" src="https://i.ibb.co/m5HkxzZ/2796120701610058221-128.png" alt="" />
                            </div>
                        <div className="text-center p-4">
                            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                            Education Loans
                            </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Non-profit organizations may offer loans to help students pay for college or
                        vocational training. These loans may offer lower interest rates or more flexible repayment
                        </p><br />
                        </div>
                    </div>
                {/*------services-4------*/}
                    <div className="m-1 bg-white cursor-pointer hover:shadow-xl drop-shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 photosize">
                            <div className='flex justify-center'>
                            <img className="rounded" src="https://i.ibb.co/pXHB1zr/prevention.png" alt="" />
                            </div>
                        <div className="text-center p-4">
                            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                            Disaster Relief Loans
                            </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Non-profit organizations may offer loans to help individuals and
                        businesses recover from natural disasters such as hurricanes, floods, or wildfires.
                        </p><br />
                       </div>
                    </div>        
            </div>
        </div>
    );
};

export default Services;