import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Header from '../Pages/Dashboard/Header/Header'
import Footer from '../Pages/Shared/Footer/Footer'
import MemberDashboard from '../Pages/Dashboard/Member/MemberDashboard'
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="m-5">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default DashboardLayout
