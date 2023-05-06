import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../context/AuthProvider';
import { MoonLoader } from 'react-spinners';



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className='flex my-72 justify-center'>
        <MoonLoader
            color="#65a30d"
            loading
            size={60}
            speedMultiplier={1}
          />
        </div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;