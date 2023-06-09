import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-72  flex-col justify-center bg-[#D7E9E7]">
      <div className="flex-col">
        <div className="flex justify-center items-center m-5">
          <img src="https://i.ibb.co/Bw1TVQS/project-logo.png" alt="" />
          <p className="text-3xl m-2 text-center">Organizational Manager</p>
        </div>
        <div className="h-full px-3 py-8 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
            <Link to="/dashboard">
            <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  Dashboard
                </span>
                <svg
                  sidebar-toggle-item
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/dashboard/settings"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  src="https://www.svgrepo.com/show/111206/settings.svg"
                  width="25px"
                  alt=""
                />
                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-10 flex-col mt-80 ">
        <p>Profile</p>
        <div className="flex m-2 items-center">
          <img src="https://i.ibb.co/6YwPgtL/Ellipse-897.png" alt="" />
          <p>John Daniel</p>
        </div>
        <button className="btn px-10 p-3 rounded bg-[orange]">Logout</button>
      </div>
    </div>
  )
}

export default Sidebar
