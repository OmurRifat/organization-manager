import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */ }
            <Outlet></Outlet>
            {/* Footer */ }
        </div>
    );
};

export default MainLayout;