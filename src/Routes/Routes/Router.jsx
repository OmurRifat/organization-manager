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
import AllMember from '../../Pages/Dashboard/Admin/AllMember/AllMember'
import AdminRoute from '../AdminRoute/AdminRoute'
import AllTransaction from '../../Pages/Dashboard/Admin/AllTransaction/AllTransaction'
import MemberRoute from '../MemberRoute/MemberRoute'
import AllOrganizations from '../../Pages/Home/All_Organizations/AllOrganizations'
import AllEvents from './../../Pages/Home/UpcommingEvents/AllEvents';
import OrganizationDetails from '../../Pages/Home/All_Organizations/OrganizationDetails'
import LoanApplication from '../../Pages/Dashboard/LoanApply/LoanApplication'
import MyLoan from '../../Pages/Dashboard/LoanApply/MyLoan'
import EditProfile from '../../Pages/Dashboard/Profile/EditProfile'
import AddReview from '../../Pages/Dashboard/Member/AddReview'

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
        path: '/show-organizations',
        element: <AllOrganizations></AllOrganizations>,
      },
      {
        path: '/organizations/:id',
        element: <OrganizationDetails></OrganizationDetails>,
       
      },
      {
        path: '/logout',
        element: <LogOut></LogOut>,
      },
      {
        path: '/allnews',
        element: <AllNews></AllNews>,
      },
      {
        path: '/allevents',
        element: <AllEvents></AllEvents>,
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
        path: '/dashboard/admin/profile',
        element: <PrivetRoute>
          <Profile></Profile>
        </PrivetRoute>,
      },
      {
        path: '/dashboard/editprofile',
        element: <PrivetRoute>
          <EditProfile></EditProfile>
        </PrivetRoute>,
      },
      {
        path: '/dashboard/admin',
        element: <AdminRoute>
          <AdminDashboard></AdminDashboard>
        </AdminRoute>,
      },
      {
        path: '/dashboard/member',
        element: <MemberDashboard></MemberDashboard>
      },
      {
        path: '/dashboard/admin/verification',
        element: <AdminRoute>
          <Verification></Verification>
        </AdminRoute>,
      },
      {
        path: '/dashboard/admin/transactions',
        element: <AdminRoute>
          <AllTransaction></AllTransaction>
        </AdminRoute>,
      },
      {
        path: '/dashboard/admin/LoanApplication',
        element: <AdminRoute>
          <LoanApplication></LoanApplication>
        </AdminRoute>,
      },
      {
        path: '/dashboard/member/settings',
        element: <MemberRoute>
          <Settings></Settings>
        </MemberRoute>,
      },
      {
        path: '/dashboard/member/myLoan',
        element: <MemberRoute>
          <MyLoan></MyLoan>
        </MemberRoute>,
      },
      {
        path: '/dashboard/member/addreview',
        element: <MemberRoute>
          <AddReview></AddReview>
        </MemberRoute>,
      },
      {
        path: '/dashboard/admin/settings',
        element: <AdminRoute>
          <Settings></Settings>
        </AdminRoute>,
      },
      {
        path: '/dashboard/admin/all-member',
        element: <AdminRoute>
          <AllMember></AllMember>
        </AdminRoute>,
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
