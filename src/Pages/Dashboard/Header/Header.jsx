import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const Header = () => {
  const {user}= useContext(AuthContext)
  return (
    <div className="flex justify-end">
      <div className="flex  justify-end items-center m-4 w-100">
        <img
          src="https://i.ibb.co/chg06xf/Group-15-1.png"
           className="mx-2 rounded-lg"
        />
        <img src={user?.photoURL} className='rounded-full' width="40px" height="40px"alt="" />
        <p className="mx-2 font-semibold text-[#185448ec]">{user?.displayName}</p>
      </div>
    </div>
  )
}

export default Header
