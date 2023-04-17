import React, { useContext } from 'react';
import useMember from '../../hooks/useMember';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { MoonLoader } from 'react-spinners';

const MemberRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isMember, isMemberLoading] = useMember(user?.email)
    const location = useLocation();

    if (loading || isMemberLoading) {
        return <div className='flex my-72 justify-center'>
            <MoonLoader
                color="#65a30d"
                loading
                size={ 60 }
                speedMultiplier={ 1 }
            />
        </div>
    }

    if (user && isMember) {
        return children;
    }

    return (
        <div>
            <Navigate to="/login" state={ { from: location } } replace></Navigate>
        </div>
    );
};

export default MemberRoute;