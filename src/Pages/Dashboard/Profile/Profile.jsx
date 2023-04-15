import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${user.email}`)
      .then((data) => setUserInfo(data.data[0]));
  }, [user.email]);
  console.log(userInfo);
  return (
    <div className="flex justify-center m-3">
      <div className="rounded-3xl overflow-hidden  shadow-2xl w-2/3  my-15 ">
        <img src="https://i.ibb.co/NFWqVcK/Frame-1171275325.png" className="w-full h-48" alt="" />
        <div className="flex justify-center -mt-8">
          <img
            src={user.photoURL}
            className="rounded-full border-solid w-1/5 border-primary border-2 -mt-3"
            alt=""
          />
        </div>
        <div className="text-right">
          <button className="btn btn-sm m-3 -mt-10">Edit Profile</button>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Full Name:
              </th>

              <td class="px-8 py-4"> {user.displayName}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Email:
              </th>

              <td class="px-8 py-4">{user.email}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Mobile No:
              </th>

              <td class="px-8 py-4">{userInfo.phone ? userInfo.phone : "N/A"}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Foundation
              </th>

              <td class="px-8 py-4">
               {userInfo.organization}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Position
              </th>

              <td class="px-8 py-4">
               {userInfo.position}
              </td>
            </tr>
          </tbody>
        </table>

        <p class="text-center m-2 text-green-800">
          Copyright (c), Organization manager
        </p>
        
      </div>
    </div>
  );
};

export default Profile;