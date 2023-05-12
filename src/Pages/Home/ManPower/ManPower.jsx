import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManPower = () => {

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
    <div>
      <div style={ styleObject.bgcolor } className=" sm:p-8 manPowerTxt rounded ml-[-0px] pt-9 pb-9">
        <div className="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div style={ styleObject.bgcolor } className="sm:w-auto pl-8  bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center  manPowerTxt">
            <div className="text-left pr-5">
              <p
                style={ styleObject.textcolor }
                className="text-gray-900 font-semibold"
              >
                Managing Man-Power
              </p>
              <h1 className="text-3xl md:text-4xl pr-2 font-semibold text-gray-700 mb-6">
                We Will Manage Your Man-Power Carefully
              </h1>

              <div style={ styleObject.bgcolor } className="flex justify-between items-center bg-white sm:flex">
                <div className="font-medium text-gray-800">
                  <div className="text-2xl text-gray-700">{ users.length }+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Members</div>
                </div>
                <div className="font-medium text-gray-700 mr-9">
                  <div className="text-2xl">{ organizations.length }+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Organization</div>
                </div>
                <br></br>
              </div>
              <br></br>
              <p className="text-base font-normal text-gray-500 mb-5 dark:text-gray-400">
                15.3 billion trees are cut down every year in the
                <br></br>world and 14.7 hectares of forest land is lost in
                <br></br>Indonesia. This causes the earth to become
                <br></br> unstable and we invite you to join us and achieve a common goal
              </p>

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
                <img className="pb-5 absolute left-0 top-0 manPowerImg1" src="https://i.ibb.co/t2WSgBC/Workforce-Productivity-India-Employer-Forum-removebg-preview.png" alt="" />

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
  );
};

export default ManPower;