import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,

} from "firebase/auth";
import app from '../firebase/firebase.config';
import { toast } from 'react-hot-toast';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [updateUserInfo, setUpdateUserInfo] = useState(userInfo);
  

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


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch(`http://localhost:5000/users/${user?.email}`);
      const data = await res.json();
      setUserInfo(data[0]);

    }
    fetchData()
      .catch(console.error)

  }, [user?.email])




  const handleUpdateInfo = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users/update/${userInfo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateUserInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('updated User Successfully')
          e.target.reset();
        }
      })

  }

  const handleInputChange = event => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...updateUserInfo };
    newUser[field] = value;
    setUpdateUserInfo(newUser)
  }

  const authInfo = {
    createUsersEmail,
    loginUser,
    updateUser,
    loading,
    setLoading,
    logOut,
    user,
    userInfo,
    setUserInfo,
    updateUserInfo,
    setUpdateUserInfo,
    handleUpdateInfo,
    handleInputChange
  };
  return (
    <AuthContext.Provider value={ authInfo }>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;