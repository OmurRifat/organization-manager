import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import LogOut from "../../Pages/LogOut/LogOut";
import LogIn from "../../Pages/LogIn/LogIn";
import FoundationForm from './../../Pages/FoundationForm/FoundationForm';
import Signup from "../../Pages/Signup/Signup";
import MemberDashboard from "../../Pages/Dashboard/Member/MemberDashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/foundation-form',
                element: <FoundationForm></FoundationForm>
            },
            {
                path: '/logout',
                element: <LogOut></LogOut>
            },
            {
                path: '/dashboard',
                element: <MemberDashboard></MemberDashboard>
            }
        ]
    }
])

export default router;