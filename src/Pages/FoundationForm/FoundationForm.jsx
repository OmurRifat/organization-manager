import React from 'react'
import { Link } from 'react-router-dom'

const FoundationForm = () => {
  return (
    <div className="signup-container mx-5">
      <h1 className="text-5xl text-[green] text-center">
        Organizational Manager
      </h1>

      <div className="grid grid-cols-2 gap-5 ">
        <div className="flex items-center justify-right">
          <img
            src="https://i.ibb.co/r7fbRrq/willowy-man-delivers-a-large-box-with-an-order-to-the-house-1-result-result-1.png"
            alt="Family-logo-template-removebg-preview"
          />
        </div>
        <div className="-ms-16  p-10">
          <h1 className="text-2xl my-2">Register For A Foundation</h1>
          <p className="">MAKE YOUR DREAM COMES TRUE!</p>
          <div className=" me-10">
            <form>
              <div className="grid grid-cols-1 gap-2">
                <div class="mb-6">
                  <label
                    for="organization-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Organization Name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Founder Name
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Founder Name"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Organization Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Founding Time
                  </label>
                  <input
                    type="date"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select your location"
                    required
                  />
                </div>
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I have read and agree with terms of service and our privacy
                  policy
                </label>
              </div>
              <img src="https://i.ibb.co/kMsmfmk/Group-15.png" alt="" />
              {/* <button
                  type="submit"
                  class="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  
                </button> */}
            </form>
            <p>
              Already Registered ?{' '}
              <Link to="/signup" className="text-[#2A9D8F] underline">
                {' '}
                Back to Home
              </Link>
            </p>
            <p className="mt-24">By Register you agree with terms and conditions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundationForm
