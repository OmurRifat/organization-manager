import React from 'react';
import './About.css'
import { Link } from 'react-router-dom';

const About = () => {

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
    }
  };

  return (


    <div id='organization'>

      {/* <---------------About Part-------------> */ }
      <div className=" flex justify-center items-center pb-4 md:pb-0 bg-white  sm:flex ">
        <img className="h-36" src="https://i.ibb.co/QHjcc5v/Screenshot-2023-03-31-100804-removebg-preview.png" alt="" />
        <div className="font-medium text-gray-800">
          <div className="text-2xl">1000+</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Active Organization</div>
        </div>
        <br></br>

      </div>

      {/* <------------------------------> */ }
      {/* m-5 mb-10 */ }
      <div className=" text-center bg-white sm:p-8 ">
        {/* <---------------------------------> */ }

        <div className=" text-center bg-white sm:p-8">

          <div className="justify-between p-5 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div className=" sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center p-5  ">
              <div className="text-left">

                <div className='relative' >
                  <img className="pr-16 pb-5 absolute left-0 top-0 size1" src="https://i.ibb.co/hLpd8gk/Rectangle-564.png" alt="" />
                  <img className="pr-20 absolute left-0 top-0 size2 pl-1 pb-5" src="https://i.ibb.co/pz1PX8s/Ellipse-1.png" alt="" />
                </div>

                <img style={ styleObject.size } className="" src="https://i.ibb.co/DMWcZ3y/1-5sp-W5-L8-CWMwm0-P7-Wr-TUXpg-removebg-preview.png" alt="" />
              </div>
            </div>

            <div className=" sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center">
              <div className="text-left p-8">
                <p style={ styleObject.textcolor } className="text-gray-900 font-semibold pb-2">Managing Organization</p>
                <h1 className="text-4xl font-semibold text-gray-700">We Commit To Manage <br></br> Your Organization </h1>
                <br></br>
                <p className=" text-base font-normal text-gray-500 dark:text-gray-400">GROW - Is a non-profit organization whose goal is to <br></br> protect, maintain, care for, and preserve the trees on <br></br> the earth that we stand on now</p>
                <br></br>
                <Link to='/foundation-form' style={ styleObject.button } type="button" className="text-white bg-gray-600 hover:text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 ">   Start A Free Trail</Link>

              </div>
              <br></br>
            </div>
          </div>
          <br></br>
        </div>


        {/* <------------------------------> */ }
        <div style={ styleObject.bgcolor } className=" sm:p-8 manPowerTxt rounded angle">
          <div className="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 p-5">
            <div style={ styleObject.bgcolor } className="sm:w-auto pl-8  bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center  manPowerTxt">
              <div className="text-left pr-5">
                <p
                  style={ styleObject.textcolor }
                  className="text-gray-900 font-semibold "
                >
                  Managing Man-Power
                </p>
                <h1 className="text-4xl font-semibold text-gray-700 ">
                  We Will Manage Your <br /> { ' ' } Man-Power Carefully
                </h1>
                <br></br>
                <div style={ styleObject.bgcolor } className=" flex justify-between items-center bg-white sm:flex">
                  <div className="font-medium text-gray-800">
                    <div className="text-2xl text-gray-700">15,3 M</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Members</div>
                  </div>
                  <div className="font-medium text-gray-700 mr-9">
                    <div className="text-2xl">1000+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Organization</div>
                  </div>
                  <br></br>
                </div>
                <br></br>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  15.3 billion trees are cut down every year in the { " " }
                  <br></br>world and 14.7 hectares of forest land is lost in { " " }
                  <br></br>Indonesia. This causes the earth to become  { " " }
                  <br></br> unstable and we invite you to join us and achieve a common goal{ " " }
                </p>
                <br></br>
                <Link
                  to='/show-organizations'
                  style={ styleObject.button }
                  type="button"
                  className="text-white bg-gray-600 hover:text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 "
                >
                  View Organizations

                </Link>
              </div>
            </div>
            <div style={ styleObject.bgcolor } className="sm:w-auto bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center p-5">
              <div className="text-left">

                <div className='relative' >
                  <img className="pr-16 pb-5 absolute left-0 top-0 manPowerImg1" src="https://i.ibb.co/t2WSgBC/Workforce-Productivity-India-Employer-Forum-removebg-preview.png" alt="" />

                </div>

                <img
                  // style={styleObject.size}
                  className="bottom-0 right-0 relative manPowerImg"
                  src="https://i.ibb.co/Ld5NWHF/Manpower-shortage-Pyjama-HR-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;