import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { Link } from 'react-router-dom';
import { RiNotification3Line } from 'react-icons/ri';
import { AiTwotoneSetting } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';

const Header = () => {
  const {user, logOut}= useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut =()=> {
    logOut().then(res => {
    const user = res.user;
    })}
  const toggleDropdown = () => setIsOpen(prevState => !prevState);
  return (
    <div className="flex justify-end">
      <div className="flex  justify-end items-center lg:m-4 w-100">
        <RiNotification3Line className='mx-2 text-black text-2xl' />
        <p className="mx-2 font-semibold text-[#185448ec]">{user?.displayName}</p>
        {/* dropdown */}
        <div className="relative mr-14">
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-black text-center inline-flex items-center"
        type="button"
        onClick={toggleDropdown}
      >
         {
          user?.photoURL ? <img src={user?.photoURL} className='rounded-full' width="40px" height="40px"alt="" /> : <img
          
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
          width="40px" height="40px"
          className=" m-auto rounded-full shadow"
        />
        }
        <svg
          className={`w-4 h-4 ml-2 transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        id="dropdownInformation"
        className={`absolute z-10 bg-[#2A9D8F] text-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className='text-white'>{user?.displayName}</div>
          <div className="font-medium truncate text-white">{user?.email}</div>
        </div>
        <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
          <li>
            <Link to="/dashboard" className="flex items-center px-4 py-2 text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-black">
             <RiDashboardFill className='text-xl mx-2' /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings" className="flex items-center px-4 py-2 text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-black">
             <AiTwotoneSetting className='text-xl mx-2' /> Profile Setting
            </Link>
          </li>
        </ul>
        <div>
          <button onClick={handleLogOut} className="block w-full rounded-lg  hover:bg-red-300 hover:text-red-700 text-white py-2 px-4 text-sm   bg-red-600">
            Sign out
          </button>
        </div>
      </div>
    </div>
        
        {/* dropdown */}
      </div>
    </div>
  )
}

export default Header
