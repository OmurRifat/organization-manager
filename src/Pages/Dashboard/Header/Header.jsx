import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const Header = () => {
  const {user,logOut}= useContext(AuthContext)
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then((data) => {})
      .catch();
  };
  return (
    <div className="flex justify-end">
      <div className="flex  justify-end items-center lg:m-4 w-100">
        <img
          src="https://i.ibb.co/chg06xf/Group-15-1.png"
           className="mx-2 rounded-lg"
        />
        <img src={user?.photoURL} className='rounded-full' width="40px" height="40px" alt="" />
        <p className="mx-2 font-semibold text-[#185448ec]">{user?.displayName}</p>
      </div>
      <button  onClick={handleLogOut}  type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 text-center m-2">Logout</button>


    </div>
  )
}

export default Header
