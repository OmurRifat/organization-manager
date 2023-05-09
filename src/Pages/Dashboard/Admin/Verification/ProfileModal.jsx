import React from 'react'
import { FcProcess } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const ProfileModal = ({ profile, setProfileModal }) => {
  const navigate = useNavigate()
  const handleApproval = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          navigate('/dashboard/admin/all-member')
          toast.success('Member Request Approved')
        }
      })
  }
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed  flex justify-center  items-center  top-0 left-0 right-0 z-50 inset-0 bg-black bg-opacity-50 backdrop-blur-sm  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-[#80bfb8] rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={ () => setProfileModal(false) }
            type="button"
            className="absolute top-3  right-2.5 text-[red] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="flex justify-center ">
            <div className="rounded-3xl overflow-hidden  shadow-2xl   my-15 ">
              <img
                src="https://i.ibb.co/NFWqVcK/Frame-1171275325.png"
                className="w-full h-40"
                alt=""
              />
              <div className="flex justify-center -mt-32">
                <img
                  src={ profile.photoURL }
                  className="rounded-full w-48 border-red-3 h-48 -mt-3"
                  alt=""
                />
              </div>
              <div className="text-right"></div>
              <table className="w-full text-sm text-left  dark:text-gray-400">
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                    >
                      Full Name:
                    </th>

                    <td className="px-8 py-4 "> { profile?.name }</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                    >
                      Email:
                    </th>

                    <td className="px-8 py-4 ">{ profile?.email }</td>
                  </tr>
                  <tr className="border-b  dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                    >
                      Mobile No:
                    </th>

                    <td className="px-8 py-4 ">
                      { profile?.phone ? profile.phone : 'N/A' }
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                    >
                      Foundation
                    </th>

                    <td className="px-8 py-4 ">{ profile?.organization }</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-center items-center my-5">
                <button
                onClick={ () => setProfileModal(false) }
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Cancel
                </button>

                <button
                  onClick={ () => handleApproval(profile._id) }
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Approved
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
