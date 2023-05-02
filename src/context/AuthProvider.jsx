import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,

} from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUsersEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // const googleRegister = () => {
  //   setLoading(true);
  //   return signInWithPopup(auth, provider);
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/users/${user?.email}`)
  //     .then((data) => setLoadingDataStatus(true));
  // }, [user?.email]);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    createUsersEmail,
    loginUser,
    updateUser,
    loading,
    setLoading,
    logOut,
    user,
  };
  return (
    <AuthContext.Provider value={ authInfo }>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;