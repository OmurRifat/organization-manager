
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PayMethodModal from './PayMethodModal'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthProvider'
const MemberDashboard = () => {
  const [payModal, setPayModal] = useState(false);
  const { user, userInfo } = useContext(AuthContext);
  const [donation, setDonation] = useState([]);
  const [allTransaction, setAllTransaction] = useState([]);

  const handlePayment = (item) => {
    const paymentInfo = {
      amount: item?.amount,
      userName: userInfo?.name,
      userEmail: userInfo?.email,
      phone: userInfo?.phone,
      organization: userInfo?.organization,
      donationName: item?.donationName,
      month: item?.month,
    }


    fetch('https://organization-manager-server-main-jsarafath.vercel.app/due-payment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(paymentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(
          `https://organization-manager-server-main-jsarafath.vercel.app/update-donation?email=${user?.email}&month=${item?.month}`,
          {
            method: 'PUT',
          },
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.modifiedCount > 0) {

              // navigate('/dashboard/member')
              toast.success('Successfully Paid Your Due')
            }
          })
        window.location.replace(data.url)
      })
  }



  
  useEffect(() => {
    axios
      .get(`https://organization-manager-server-main-jsarafath.vercel.app/all-transaction`)
      .then((data) => setAllTransaction(data.data))
  }, [])



  let totalDue = 0

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://organization-manager-server-main-jsarafath.vercel.app/users/${user?.email}`);
      const data = await res.json();
      setDonation(data[0].donation);
    }
    fetchData()
      .catch(console.error)

  }, [user?.email]);




  const dueCalculation = () => {
    donation?.map((d) => {
      console.log(d)
      if (d?.status === false) {
        const amountString = d.amount
        const amount = parseInt(amountString)
        totalDue += amount
      }
    })
  }
  let totalDonations = 0
  const calculateDonation = () => {
    donation?.map((d) => {
      if (d?.status === true) {
        const amountString = d.amount
        const amount = parseInt(amountString)
        totalDonations += amount
      }
    })
  }
  calculateDonation()
  dueCalculation()
  return (
    <div>
      <p className="font-bold text-black mb-4 pl-4 text-2xl">All Data</p>
      <div className="bg-[url('https://i.ibb.co/NFWqVcK/Frame-1171275325.png')] bg-cover grid grid-cols-1 lg:grid-cols-3">
        <div className="text-center  flex-col border-r justify-center p-10 items-center ">
          <img
            src="https://www.iconpacks.net/icons/2/free-hand-coin-icon-2966-thumb.png"
            width="30px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Want to take Loan?</p>
          { userInfo?.verified === true && (userInfo?.position === 'member' || userInfo?.position === 'admin') && <Link to="/dashboard/apply-loan">
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Apply
            </button>
          </Link> }
        </div>
        <div className="text-center  flex-col border-r justify-center p-10 items-center ">

          <img
            src="https://cdn-icons-png.flaticon.com/512/591/591796.png"
            width="30px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Total Donation</p>

          { userInfo?.verified === true && <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            { totalDonations } BDT
          </button> }
        </div>
        <div className="text-center  flex-col border-r justify-center p-10 items-center ">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/payment-due-2010170-1696699.png"
            width="30px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Total Due</p>
          { userInfo?.verified === true && (userInfo?.position === 'member' || userInfo?.position === 'admin') && <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            onClick={ () => setPayModal(true) }
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            { totalDue } BDT
          </button> }
        </div>
      </div>
      <div className="m-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="lg:m-2 flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
          { userInfo?.verified === true && <p className='text-black font-semibold'>Donation History</p> }
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          { userInfo?.verified === true && <thead className="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Month
              </th>
              <th scope="col" className="px-6 py-3">
                Donation Name
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Tran. ID
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead> }
          <tbody>
            { userInfo?.verified === true ?
              userInfo?.donation?.map((item) => (
                <tr
                  key={ item?.month }
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 ">{ item?.month }</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    { item?.donationName }
                  </th>
                  <td className="px-6 ">{ item?.amount } Tk</td>
                  <td className="px-6 ">
                    { item?.status ? item?.transactionId : '' }
                  </td>
                  <td className="px-6 ">
                    { item?.status === true ? (
                      <span className="text-green-600 font-semibold">
                        Paid
                      </span>
                    ) : (
                      <span className='text-red-600 font-semibold'>Due</span>
                    ) }
                  </td>
                  { item?.status === false ? (
                    <td className="px-6 ">
                      <button
                        onClick={ () => handlePayment(item) }
                        type="button"
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Pay
                      </button>
                    </td>
                  ) : <td className="px-6 ">

                  </td> }
                </tr>
              )) : <tr><td className='text-center mt-10 font-semibold text-[#2A9D8F] text-xl'>Your join application with { userInfo?.organization } under review, you will be notified soon</td></tr> }
          </tbody>
        </table>
      </div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{ ' ' }
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      { payModal && (
        <PayMethodModal
          payModal={ payModal }
          setPayModal={ setPayModal }
        ></PayMethodModal>
      ) }
    </div>
  )
}

export default MemberDashboard