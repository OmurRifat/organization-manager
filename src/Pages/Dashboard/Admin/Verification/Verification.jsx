import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthProvider'
import axios from 'axios'

const Verification = () => {
  const [userInfo, setUserInfo] = useState({})
  const { user } = useContext(AuthContext)
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${user.email}`)
      .then((data) => setUserInfo(data.data[0]))
  }, [user.email])

  console.log(userInfo)
  const { data: members = [], refetch, isLoading } = useQuery({
    queryKey: ['foodItems'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users')
      const data = await res.json()
      return data
    },
  })

  const organizationMembers = members.filter(member => member.organization === userInfo.organization && member.verified !== true)
  return (
    <div>
        
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {organizationMembers.length > 0 ? (
          <thead class="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Member ID
              </th>
              <th scope="col" class="px-6 py-3">
                Photo
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Phone
              </th>
              <th scope="col" class="px-6 py-3">
                Joining Date
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
        ) : (
          <div className="flex justify-center items-center h-[200px] bg-slate-200">
            No Members Founded Please{' '}
            <Link to="/">
              <span className="underline text-blue-700 ms-2">
                {' '}
                Back to Home
              </span>
            </Link>
          </div>
        )}
        <tbody>
          {organizationMembers &&
            organizationMembers.map((member, i) => (
              <tr
                key={member._id}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="px-6 ">OM-{userInfo.organization.slice(0,1)}F#{i + 1}</td>
                <td class="px-6 ">
                  <img
                    src={member?.photoURL}
                    alt=""
                    width="50px"
                    height=""
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td
                  scope="row"
                  class="flex items-center px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {member?.name}
                </td>
                <td class="px-6 ">{member?.phone}</td>
                <td class="px-6  text-[orange]">{member?.joiningDate}</td>
                <td class="px-6 ">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Verification


{/* <div class="m-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="lg:m-2 flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
          <p>Donation History</p>
          <div className="flex justify-between items-center">
            <p className="mx-2 text-black">Show</p>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span class="sr-only text-black">Action button</span>
              10
              <svg
                class="w-3 h-3 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdownAction"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reward
                  </a>
                </li>
              </ul>
            </div>
            <p className="mx-2 text-black">List</p>
          </div>
        </div> */}
