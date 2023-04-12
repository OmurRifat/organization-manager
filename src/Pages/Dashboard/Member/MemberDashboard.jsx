import React from 'react'

const MemberDashboard = () => {
  return (
    // bg-[url('https://i.ibb.co/NFWqVcK/Frame-1171275325.png')] bg-cover
    <div>
      <p className="font-bold text-2xl">All Data</p>
      <div className=" flex justify-between items-center">
        <div className="text-center bg-[#2A9D8F] flex-col border-r justify-center p-10 items-center w-1/3">
          <img
            src="https://www.iconpacks.net/icons/2/free-hand-coin-icon-2966-thumb.png"
            width="30px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Want to take Loan?</p>
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Apply
          </button>
        </div>
        <div className="text-center bg-[#2A9D8F] flex-col border-r justify-center p-10 items-center w-1/3">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/payment-due-2010170-1696699.png"
            width="30px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Total Due</p>
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            1000 BDT
          </button>
        </div>
        <div className="text-center bg-[#2A9D8F] flex-col border-r justify-center p-10 items-center w-1/3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/591/591796.png"
            width="30px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Invoice</p>
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Download
          </button>
        </div>
      </div>
      {/* <img
        src="https://i.ibb.co/NFWqVcK/Frame-1171275325.png"
        width="100%"
        alt=""
      /> */}

      <div class="m-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="m-2 flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
          <p>Donation History</p>
          <div className="flex justify-between items-center">
            <p className="mx-2">Show</p>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span class="sr-only">Action button</span>
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
            <p className="mx-2">List</p>
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Donation Name
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Tran. ID
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 ">24-3-2023</td>
              <th
                scope="row"
                class="flex items-center px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>
              <td class="px-6 ">20,200.00</td>
              <td class="px-6 ">sjkUgd678sdhjks</td>
              <td class="px-6  text-[orange]">On going</td>
              <td class="px-6 ">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Pay
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 ">24-3-2023</td>
              <th
                scope="row"
                class="flex items-center px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>
              <td class="px-6 ">20,200.00</td>
              <td class="px-6 ">sjkUgd678sdhjks</td>
              <td class="px-6  text-[red]">Pending</td>
              <td class="px-6 ">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Pay
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 ">24-3-2023</td>
              <th
                scope="row"
                class="flex items-center px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>
              <td class="px-6 ">20,200.00</td>
              <td class="px-6 ">sjkUgd678sdhjks</td>
              <td class="px-6 ">On going</td>
              <td class="px-6 "></td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 ">24-3-2023</td>
              <th
                scope="row"
                class="flex items-center px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>
              <td class="px-6 ">20,200.00</td>
              <td class="px-6 ">sjkUgd678sdhjks</td>
              <td class="px-6 ">On going</td>
              <td class="px-6 "></td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 ">24-3-2023</td>
              <th
                scope="row"
                class="flex items-center px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>
              <td class="px-6 ">20,200.00</td>
              <td class="px-6 ">sjkUgd678sdhjks</td>
              <td class="px-6 ">On going</td>
              <td class="px-6 "></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-between items-center mx-5">
        <span class="text-sm text-gray-700 dark:text-gray-400">
          Showing{' '}
          <span class="font-semibold text-gray-900 dark:text-white">1</span> -{' '}
          <span class="font-semibold text-gray-900 dark:text-white">30</span> of
          List
        </span>
        <nav aria-label="Page navigation example">
          <ul class="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MemberDashboard
