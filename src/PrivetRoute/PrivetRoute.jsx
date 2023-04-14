import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { MoonLoader } from 'react-spinners';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
      return (
          <div className='flex my-72 justify-center'>
          <MoonLoader
              color="#65a30d"
              loading
              size={60}
              speedMultiplier={1}
            />
          </div>
      );
    }
    if (user && user?.uid) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  };

export default PrivetRoute;