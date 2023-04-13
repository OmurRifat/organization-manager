import React from 'react';

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
            <p style={styleObject.textcolor} className="text-center text-gray-900 font-semibold txt">Our Partners</p>
            <h1  className="text-center text-4xl font-semibold text-gray-600 pb-5">High Performance Services 
  <br></br> For All Industries. </h1>

            </div>
            {/* ------------Services Card------------- */}
            <div className='grid lg:grid-cols-4 px-4 md:grid-cols-2 grid-cols-1 p-9 m-9'>

                {/* ------services-1------ */}
                    <div className="m-1 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded" src="https://i.ibb.co/wrV74zj/Screenshot-2023-04-13-141749-removebg-preview.png" alt="" />
                        <div className="text-center p-4">
                            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                            Education Loan
                            </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        The adipiscing will be achieved, but it will only happen over time as toil and pain
                        </p><br />
                        </div>
                    </div>

                {/*------services-2------*/}
                    <div className="m-1 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded" src="https://i.ibb.co/nPJcTTB/Screenshot-2023-04-13-141806-removebg-preview.png" alt="" />
                        <div className="text-center p-4">
                            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                            Health & Medical
                            </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        The adipiscing will be achieved, but it will only happen over time as toil and pain
                        </p><br />
                        </div>
                    </div>

                {/*------services-3------*/}
                    <div className="m-1 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded" src="https://i.ibb.co/V9fkdbX/Screenshot-2023-04-13-141833-removebg-preview.png" alt="" />
                        <div className="text-center p-4">
                            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                            Construction Loans
                            </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        The adipiscing will be achieved, but it will only happen over time as toil and pain
                        </p><br />
                        </div>
                    </div>

                {/*------services-4------*/}
                    <div className="m-1 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded" src="https://i.ibb.co/zFdnhHC/Screenshot-2023-04-13-141850-removebg-preview.png" alt="" />
                        <div className="text-center p-4">
                            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                            Business Loan
                            </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        The adipiscing will be achieved, but it will only happen over time as toil and pain
                        </p><br />
         
        </div>
                    </div>        
            </div>
        </div>
    );
};

export default Services;