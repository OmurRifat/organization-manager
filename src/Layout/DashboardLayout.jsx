import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Pages/Dashboard/Header/Header'
import { FaUserCog } from 'react-icons/fa';
import { MdOutlineSettingsApplications } from 'react-icons/md';

import { AuthContext } from '../context/AuthProvider'
import useAdmin from '../hooks/useAdmin'
import useMember from '../hooks/useMember'
import Loader from '../Pages/Dashboard/LoanApply/Loader';
import Skeleton from '../Skeleton/Skeleton';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isMember] = useMember(user?.email)
  const isLoading = !(isAdmin || isMember) && (window.location.pathname.includes("/dashboard/admin") || window.location.pathname.includes("/dashboard/member"));

  const [isOpen, setIsOpen] = useState(false)
  const toggleSideNav = () => setIsOpen((prevState) => !prevState)
  return (
    <div className="mx-10 ">
      <button
        onClick={ toggleSideNav }
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full  sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#D7E9E7] dark:bg-gray-800">
          <Link to="/">
            <div className="flex justify-center items-center m-5 ">
              <img
                src="https://i.ibb.co/Bw1TVQS/project-logo.png"
                className="w-20"
                alt=""
              />
              <p className="text-2xl m-2 font-semibold text-[black] text-center">
                Organization Manager
              </p>
            </div>
          </Link>
          
 {
  isLoading ? <Skeleton></Skeleton>  : <>  <ul className="space-y-2 font-medium mx-5 ">
  { isAdmin && (
    isAdmin? <>
    <li>
      <Link
        to="/dashboard/admin"
        className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
        <span className="ml-3">Dashboard</span>
      </Link>
    </li>
    <li>
      <Link
        to="/dashboard/admin/all-member"
        className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">
          All Members
        </span>
      </Link>
    </li>
    <li>
      <Link
        to="/dashboard/admin/verification"
        className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        <span className="flex-1 ml-3 whitespace-nowrap">
          Verification
        </span>
      </Link>
    </li>
    <li>
      <Link
        to="/dashboard/admin/transactions"
        className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>

        <span className="flex-1 ml-3 whitespace-nowrap">
          All Transaction
        </span>
      </Link>
    </li>
    <li>
      <Link
        to="/dashboard/admin/LoanApplication"
        className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <FaUserCog className='w-6 h-6'></FaUserCog>

        <span className="flex-1 ml-3 whitespace-nowrap">
          Loan Application
        </span>
      </Link>
    </li>
    <li>
      <Link
        to="/dashboard/admin/settings"
        className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

        <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
      </Link>
    </li>
  </> : <Loader></Loader>
  ) }
  { isMember && (
    <>
      <li>
        <Link
          to="/dashboard/member"
          className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
          <span className="ml-3">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/member/settings"
          className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
          <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/member/myLoan"
          className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <MdOutlineSettingsApplications className='w-6 h-6'  ></MdOutlineSettingsApplications>
          <span className="flex-1 ml-3 whitespace-nowrap">My Loan</span>
        </Link>
      </li>
    </>
  ) }
</ul> </>
 }



        </div>
      </aside>
      <div className=" sm:ml-64">
        <Header></Header>
        <div className="mb-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
