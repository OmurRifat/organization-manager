import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../../Layout/MainLayout'
import Home from '../../Pages/Home/Home/Home'
import LogOut from '../../Pages/LogOut/LogOut'
import LogIn from '../../Pages/LogIn/LogIn'
import FoundationForm from './../../Pages/FoundationForm/FoundationForm'
import Signup from '../../Pages/Signup/Signup'
import MemberDashboard from '../../Pages/Dashboard/Member/MemberDashboard'
import AllNews from '../../Pages/Home/Blog/AllNews'
import Settings from '../../Pages/Dashboard/Settings/Settings'
import DashboardLayout from '../../Layout/DashboardLayout'
import LoanApply from '../../Pages/Dashboard/LoanApply/LoanApply'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <LogIn></LogIn>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/Organization',
        element: <FoundationForm></FoundationForm>,
      },
      {
        path: '/logout',
        element: <LogOut></LogOut>,
      },
      {
        path: '/allnews',
        element: <AllNews></AllNews>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard',
        element: <MemberDashboard></MemberDashboard>,
      },
      {
        path: '/dashboard/settings',
        element: <Settings></Settings>,
      },
      {
        path: '/dashboard/apply-loan',
        element: <LoanApply></LoanApply>,
      },
    ],
  },
])

export default router
