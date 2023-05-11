import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  
  const { user,userInfo } = useContext(AuthContext);
  console.log(userInfo);
  return (
    <div className="flex justify-center ">
      <div className="rounded-3xl overflow-hidden  shadow-2xl my-15 ">
        <img src="https://i.ibb.co/NFWqVcK/Frame-1171275325.png" className="w-full h-40" alt=""/>
        <div className="flex justify-center -mt-32">
          <img
            src={ user.photoURL }
            className="rounded-full md:w-48 w-28 h-28 border-red-3 md:h-48 -mt-3"
            alt=""
          />
        </div>
        <div className="text-right">
          <Link to='/dashboard/editprofile' type="button" className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-8">Edit
          </Link>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Full Name:
              </th>

              <td className="px-8 py-4"> { userInfo?.name}</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Email:
              </th>

              <td className="px-8 py-4">{ user?.email }</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Mobile No:
              </th>

              <td className="px-8 py-4">{ userInfo?.phone }</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Foundation
              </th>
              <td className="px-8 py-4">
                { userInfo?.organization }
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Position
              </th>

              <td className="px-8 py-4">
                { userInfo?.position }
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-center m-2 text-green-800">
          Copyright (c), Organization manager
        </p>

      </div>
    </div>
  );
};

export default Profile;