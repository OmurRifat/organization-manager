import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const authInfo = { data: "Rifat" };
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;