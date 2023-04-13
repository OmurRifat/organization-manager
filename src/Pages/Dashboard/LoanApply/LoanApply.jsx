import React, { useState } from 'react'

const LoanApply = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="">
      <p className="text-2xl text-[#2A9D8F] text-center">
        Apply for an Interest Free Loan
      </p>
      <div className="grid lg:grid-cols-2  grid-cols-1">
        <div className="m-5">
          <p className="text-xl m-3 text-[#54928b]">Duration</p>

          <div class="flex items-center m-4 mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="3month"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              3 Months
            </label>
          </div>
          <div class="flex m-4 items-center">
            <input
              id="default-radio-2"
              type="radio"
              value="5"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              4 Months
            </label>
          </div>
          <div class="flex items-center m-4 mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="3month"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              6 Months
            </label>
          </div>
          <div class="flex items-center m-4 mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="3month"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              9 Month
            </label>
          </div>

          <div class="m-4 mb-4">
            <p className=" text-[black] my-2">Other</p>
            <input
              type="text"
              className="border-b-2 border-s-0 border-e-0 border-t-0"
            />
          </div>

          <div class="m-4 mb-4">
            <p className=" text-[black] my-2">Select Amount</p>

            <div class="flex items-center border-2">
              <p className=" text-[black] m-3">BDT</p>
              <div
                id="dropdown-states"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="states-button"
                >
                  <li>
                    <button
                      type="button"
                      class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <div class="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          class="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-it"
                          viewBox="0 0 512 512"
                        >
                          <g fill-rule="evenodd" stroke-width="1pt">
                            <path fill="#fff" d="M0 0h512v512H0z" />
                            <path fill="#009246" d="M0 0h170.7v512H0z" />
                            <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                          </g>
                        </svg>
                        Italy
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <label for="states" class="sr-only">
                Choose a state
              </label>
              <select
                id="states"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose amount</option>
                <option value="CA">5000</option>
                <option value="TX">10000</option>
                <option value="TX">15000</option>
                <option value="TX">20000</option>
                <option value="WH">25000</option>
              </select>
            </div>
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <a
                href="#"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
        </div>
        <div className="text-[orange] m-5">
          <h1 className="text-2xl">*Terms and Conditions for take loan</h1>
          <p className="m-3 ">
            The terms and conditions for an educational loan will vary depending
            on the lender and the specific loan program. However, some common
            things to consider include:
            <ul class="max-w-md space-y-1 my-4 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex mx-5 my-5">
        <button
          onClick={() => setShowModal(true)}
          class="btn bg-[#2A9D8F] hover:bg-[#3d756f] w-1/2 mx-auto p-3 rounded"
        >
          Apply
        </button>
      </div>
      {showModal && (
        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          class="fixed flex justify-center opacity-2 items-center  top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-[#384240] rounded-lg shadow dark:bg-gray-700">
              <button onClick={()=>setShowModal(false)}
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                
                 <div className="text-center p-10">
                    <p className="text-3xl m-5">Review and apply</p>
                    <p>You are applying for <span className="text-[#e4924b]">10,000</span> BDT <br /> for 5 months</p>
                    <div className=" m-5 flex justify-center items-center">
                    <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Confirm</button>

                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoanApply
