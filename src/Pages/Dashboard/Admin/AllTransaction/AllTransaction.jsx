import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../../../context/AuthProvider'
import TransactionInfo from './TransactionInfo'

const AllTransaction = () => {
  const [allTransaction, setAllTransaction] = useState([])
  const [userInfo, setUserInfo] = useState({})
  const { user } = useContext(AuthContext)
  useEffect(() => {
    axios
      .get(
        `https://organization-manager-server.onrender.com/users/${user.email}`,
      )
      .then((data) => setUserInfo(data.data[0]))
  }, [user.email])
  useEffect(() => {
    axios
      .get(`https://organization-manager-server.onrender.com/all-transaction`)
      .then((data) => setAllTransaction(data.data))
  }, [])

  console.log(allTransaction)

  const organizationTransactions = allTransaction.filter(
    (transaction) => transaction.organization === userInfo.organization,
  )
  console.log(organizationTransactions)
  return (
    <div>
      <p className="text-xl font-bold text-[#ff8000] py-3">All Transaction</p>
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Member Name
            </th>

            <th scope="col" className="px-6 py-3">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Method
            </th>

            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
      </table>
      <tbody>
        {organizationTransactions &&
          organizationTransactions?.map((transaction, i) => (
            <TransactionInfo
              i={i}
              key={transaction._id}
              transaction={transaction}
            ></TransactionInfo>
          ))}
      </tbody>
    </div>
  )
}

export default AllTransaction
