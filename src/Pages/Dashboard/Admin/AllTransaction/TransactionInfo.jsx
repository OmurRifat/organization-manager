import React, { useEffect, useState } from 'react'

const TransactionInfo = ({ transaction, i }) => {
  const [txdInfo, setTxdInfo] = useState({});

  useEffect(() => {
    fetch(
      `http://localhost:5000/transaction-query-by-transaction-id?${transaction.transactionId}`,
    )
      .then((response) => response.json())
      .then((data) => setTxdInfo(data.element[0]))
  }, [transaction.transactionId])

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 my-2">
      <td className="px-6  text-green-500">{ transaction.userEmail }</td>
      <td className=" px-6 text-center text-gray-900 whitespace-nowrap dark:text-white">
        { transaction.userName }
      </td>
      <td className="px-6  text-green-500">{ transaction.transactionId }</td>
      <td className="px-6  text-[red]">{ transaction.amount }</td>
      {/* <td className="px-6  text-[red]">{txdInfo.card_type}</td> */ }

      <td className="px-6 ">
        <p
          
          className="text-green-600 font-medium rounded-lg text-sm px-5 py-2.5 my-1 text-center"
        >
          Paid
        </p>
      </td>
    </tr>
  )
}

export default TransactionInfo
