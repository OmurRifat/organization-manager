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
import PaymentSuccess from '../../Pages/Dashboard/PaymentSuccess/PaymentSuccess'
import PrivetRoute from '../../PrivetRoute/PrivetRoute'
import AdminDashboard from '../../Pages/Dashboard/Admin/AdminDashboard/AdminDashBoard'
import Verification from '../../Pages/Dashboard/Admin/Verification/Verification'
import Profile from '../../Pages/Dashboard/Profile/Profile'

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
        path: '/foundation-form',
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
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Profile></Profile>,
      },
      {
        path: '/dashboard/admin',
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: '/dashboard/member',
        element: <MemberDashboard></MemberDashboard>,
      },
      {
        path: '/dashboard/verification',
        element: <Verification></Verification>,
      },
      {
        path: '/dashboard/member/settings',
        element: <Settings></Settings>,
      },
      {
        path: '/dashboard/admin/settings',
        element: <Settings></Settings>,
      },
      {
        path: '/dashboard/apply-loan',
        element: <LoanApply></LoanApply>,
      },
      {
        path: '/dashboard/payment/success',
        element: <PaymentSuccess></PaymentSuccess>,
      },
    ],
  },
])

export default router
