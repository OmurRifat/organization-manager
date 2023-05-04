import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PayMethodModal from '../../Member/PayMethodModal'
import ConfirmationModal from '../../LoanApply/ConfirmationModal'
import ReminderModal from '../../ReminderModal/ReminderModal'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../../context/AuthProvider'
import axios from 'axios'
import './AdminDashboard.css'

const AdminDashboard = () => {

  const { user } = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState({})
  const [modal, setModal] = useState(false)
  const [specificMember, setSpecificMember] = useState({});
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState([]);
  const pages = Math.ceil(count / size);
  console.log(user);
  const { data: members = [], refetch, isLoading } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      const res = await fetch('https://organization-manager-server-main-jsarafath.vercel.app/users')
      const data = await res.json()
      return data
    },
  });

  useEffect(() => {
    axios
      .get(`https://organization-manager-server-main-jsarafath.vercel.app/users/${user.email}`)
      .then((data) => setUserInfo(data.data[0]))
  }, [user.email])

  useEffect(() => {
    axios
      .get(`http://organization-manager-server-main-jsarafath.vercel.app/users/${userInfo?.organization}?page=${page}&size=${size}`)
      .then((data) => {
        setUserData(data.data.users)
        setCount(data.data.count)
      })
  }, [userInfo, page, size]);


  //total verifiedUsers
  const verifiedUsers = userData.filter(u => u.organization === userInfo?.organization && u.verified === true);

  const organizationMembers = members.filter(member => member.organization === userInfo?.organization && member.verified === true);
  //  total collected amount
  const amount = organizationMembers.map(member => member.donation.map(d => d.status === true && +d.amount).reduce((a, b) => a + b, 0));
  const collected = amount.reduce((c, d) => c + d, 0);
  // total due amount
  const dueAmount = organizationMembers.map(member => member.donation.map(d => d.status === false && +d.amount).reduce((a, b) => a + b, 0));
  const due = dueAmount.reduce((c, d) => c + d, 0);
  // total members
  const totalMember = organizationMembers.length;


  const handleReminder = (data) => {
    setModal(true);
    setSpecificMember(data);
  }

  let total = 0;
  let totalDue = 0;

  const handlePayment = () => {
    console.log('click')

    const paymentInfo = {
      amount: '10000',
      userName: 'Likhon',
      userEmail: 'mdabdurrouf.likhon@mail.com',
      phone: '01743586381',
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
        window.location.replace(data.url)
      })
  }

  // const styles = {
  //   pageButton:{
  //     padding: '8px 12px',
  //     color: 'black',
  //     background : 'white',
  //     border : '1px solid gray'
  //     // text-black bg-white border border-gray-300" 
  //   }
  // }



  return (
    <>

      <p className="font-semibold text-2xl text-black mb-3 pl-4">All Data</p>
      <div className="bg-[url('https://i.ibb.co/NFWqVcK/Frame-1171275325.png')] bg-cover grid grid-cols-1 lg:grid-cols-3">
        <div className="text-center  flex-col lg:border-r border-b just-2y-center p-5 items-center ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1490/1490860.png"
            width="70px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Total Collected Amount</p>
          <Link to="/dashboard">
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              { collected }
            </button>
          </Link>
        </div>
        <div className="text-center  flex-col lg:border-r border-b just-2y-center p-5 items-center ">
          <img
            src="https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-vector-money-saving-icon-png-image_952822.jpg"
            width="70px"
            className=" mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Total Due</p>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            { due }
          </button>
        </div>
        <div className="text-center  flex-col border-r justify-center p-5  items-center ">
          <img
            src="https://www.kindpng.com/picc/m/651-6518955_communityimg-team-members-icon-png-transparent-png.png"
            width="70px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Total Members</p>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            { totalMember }
          </button>
        </div>
      </div>
      {/* <img
        src="https://i.ibb.co/NFWqVcK/Frame-1171275325.png"
        width="100%"
        alt=""
      /> */}

      <div className="m-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="lg:m-2 flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
          <p>Donation History</p>
          <div className="flex justify-between items-center">
            <p className="mx-2 text-black">Show</p>
            {/* <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            > */}
            {/* <span className="sr-only text-black">Action button</span> */ }
            {/* 10 */ }
            <select className="font-semibold text-black" onChange={ (e) => setSize(e.target.value) }>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>

            {/* </button> */ }

            <div
              id="dropdownAction"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reward
                  </a>
                </li>
              </ul>
            </div>
            <p className="mx-2 text-black">List</p>
          </div>
        </div>
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Member Name
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile Number
              </th>
              <th scope="col" className="px-6 py-3">
                Total Due
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {/* organizationMembers */ }

            { verifiedUsers && verifiedUsers?.map(member => <tr key={ member._id } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className=" px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                { member.name }
              </th>

              <td className="px-6  text-green-500">{ member.phone }</td>


              <td className="px-6  text-[red]">{
                // add all the due amount and show in this column
                member.donation.map((d, i) => d.status === false ? (+d.amount) : 0).reduce((a, b) => a + b, 0)
              }</td>



              <td className="px-6 ">
                {
                  // showing a send reminder btn if the total due is greater than 0 else show paid
                  member.donation.map((d) => d.status === false ? (+d.amount) : 0).reduce((a, b) => a + b, 0) > 0 ?
                    <button key={ member._id } type="button" onClick={ () => handleReminder(member) }
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      Send Remainder
                    </button> :
                    <p className="text-green-500">Paid </p>
                }
                { modal && <ReminderModal modal={ modal } setModal={ setModal } member={ specificMember } /> }
              </td>
            </tr>) }
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center  mx-5">
        <span className="text-sm text-gray-700 dark:text-gray-400 hidden lg:block">
          Showing{ ' ' }
          <span className="font-semibold text-gray-900 dark:text-white">1</span> -{ ' ' }
          <span className="font-semibold text-gray-900 dark:text-white">30</span> of
          List
        </span>
        <nav aria-label="Page navigation sm:mt-5 example">
          <ul className="inline-flex -space-x-px">
            {/* <li>
              <button
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-black rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li> */}
            { [...Array(pages).keys()].map(number => <li className='paginate' >

              <button onClick={ () => setPage(number) }
                key={ number }
                className={ page === number && 'selected' }
              >
                { number + 1 }
              </button>
            </li>)
            }
            {/* <li>
              <button
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-black rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default AdminDashboard