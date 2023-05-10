import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthProvider'
import DetailsModal from '../../DetailsModal/DetailsModal'

const AllMember = () => {

  const [details, setDetails] = useState(false)
  const [detailsMember, setDetailsMember] = useState({})
  const { user, userInfo } = useContext(AuthContext)

  const { data: members = [], refetch, isLoading } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      const res = await fetch('https://organization-manager-server-main-jsarafath.vercel.app/users')
      const data = await res.json()
      return data
    },
  });

  const handleDetails = (singleData) => {
    setDetails(true)
    setDetailsMember(singleData)
  }

  const organizationMembers = members.filter(member => member.organization === userInfo?.organization && member.verified === true)

  return (
    <div className='overflow-x-auto'>
      <table className="w-full text-sm text-left overflow-x-auto text-gray-500 dark:text-gray-400">
        { organizationMembers.length > 0 ? (
          <thead className="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Member ID
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Joining Date
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
        ) : (
          <caption className="flex justify-center items-center h-[200px] bg-slate-200">
            No Members Founded Please{ ' ' }
            <Link to="/">
              <span className="underline text-blue-700 ms-2">
                { ' ' }
                Back to Home
              </span>
            </Link>
          </caption>
        ) }
        <tbody>
          { organizationMembers &&
            organizationMembers.map((member, i) => (
              <tr
                key={ member._id }
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 ">OM-{ userInfo.organization.slice(0, 1) }F#{ i + 1 }</td>
                <td className="px-6 ">
                  <img
                    src={ member?.photoURL }
                    alt=""
                    width="50px"
                    height=""
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td
                  scope="row"
                  className="flex items-center px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  { member?.name }
                </td>
                <td className="px-6 ">{ member?.phone }</td>
                <td className="px-6  text-[orange]">{ member?.joiningDate }</td>
                <td className="px-6 ">
                  { member && <button
                    onClick={ () => handleDetails(member) }
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    View Details
                  </button> }
                  { details && 
                  <DetailsModal setDetails={ setDetails } member={ detailsMember } /> }
                </td>
              </tr>
            )) }
        </tbody>
      </table>
    </div>
  )
}

export default AllMember
