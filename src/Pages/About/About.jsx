import React, { useEffect, useState } from 'react';
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

  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
      fetch('http://localhost:5000/organizations')
          .then(res => res.json())
          .then(data => setOrganizations(data));
  }, [])
  const [users, setUsers] = useState([]);
  useEffect(() => {
      fetch('http://localhost:5000/users')
          .then(res => res.json())
          .then(data => setUsers(data));
  }, [])

  return (


    <div id='organization'>

      {/* <---------------About Part-------------> */ }
      <div className=" flex justify-center items-center pb-4 md:pb-0 bg-white  sm:flex ">
        <img className="h-36" src="https://i.ibb.co/QHjcc5v/Screenshot-2023-03-31-100804-removebg-preview.png" alt="" />
        <div className="font-medium text-gray-800">
          <div className="text-2xl">{ organizations.length }+</div>
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

                <img style={ styleObject.size } src="https://i.ibb.co/DMWcZ3y/1-5sp-W5-L8-CWMwm0-P7-Wr-TUXpg-removebg-preview.png" alt="" />
              </div>
            </div>

            <div className=" sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center">
              <div className="text-left p-8">
                <p style={ styleObject.textcolor } className="text-gray-900 font-semibold pb-2">Managing Organization</p>
                <h1 className="text-3xl md:text-4xl max-w-md font-semibold text-gray-700 mb-6">We Commit To Manage Your Organization </h1>
                <p className=" text-base font-normal max-w-sm text-gray-500 dark:text-gray-400 mb-6">GROW - Is a non-profit organization whose goal is to  protect, maintain, care for, and preserve the trees on  the earth that we stand on now</p>
                <Link to='/foundation-form' style={ styleObject.button } type="button" className="text-white bg-gray-600 hover:text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 ">   Start A Free Trail</Link>

              </div>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default About;