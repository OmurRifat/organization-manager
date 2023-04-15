import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../../../context/AuthProvider'

const AllTransaction = () => {
    
  
  
    return (
      <div>
        <p className="text-xl font-bold text-[#ff8000] py-3">All Transaction</p>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          
            <thead class="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Member Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Payment time
                </th>
                
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
         
         
            
        </table>
    <tbody>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="px-6  text-green-500">asfd43fdS586381</td>
              <th
                scope="row"
                class=" px-6 py-6 text-center text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>

              <td class="px-6  text-green-500">mdabdurrouf@gmail.com</td>
              <td class="px-6  text-green-500">01743586381</td>
              <td class="px-6  text-[red]">1000 Tk</td>
              <td class="px-6 ">
              <button type="button" onClick={() => sendEmail()} class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Pending</button>
              </td>
            </tr>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="px-6  text-green-500">asfd43fdS586381</td>
              <th
                scope="row"
                class=" px-6 py-6 text-center text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>

              <td class="px-6  text-green-500">mdabdurrouf@gmail.com</td>
              <td class="px-6  text-green-500">01743586381</td>
              <td class="px-6  text-[red]">1000 Tk</td>
              <td class="px-6 ">
              <button type="button" onClick={() => sendEmail()} class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Pending</button>
              </td>
            </tr>
    </tbody>
       
      </div>
    )
  }
  
export default AllTransaction;






