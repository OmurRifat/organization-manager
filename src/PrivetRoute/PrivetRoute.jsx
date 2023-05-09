import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Loader from '../Pages/Dashboard/LoanApply/Loader';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
      return (
          <div className='flex justify-center'>
          <Loader></Loader>
          </div>
      );
    }
    if (user && user?.uid) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  };

export default PrivetRoute;