import React from 'react'

const PayMethodModal = ({ payModal, setPayModal }) => {
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
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed flex justify-center inset-0 bg-black bg-opacity-60 backdrop-blur-sm items-center  top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className=" relative w-full max-w-md max-h-full">
        <div className="relative p-10 bg-[#2A9D8F] border-red-600 rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={() => setPayModal(false)}
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
          <div className="text-center text-white">
            <p className="m-5 text-lg font-normal  dark:text-gray-400">
              Are you you want to pay your due?
            </p>
            <p className="m-5">
              {' '}
              <span className="text-[#d97a3b] text-3xl">10000 BDT</span>
            </p>
            <p className="m-5">Pay with</p>
            <div className="flex justify-center items-center">
              <button
                type="button"
                className=" bg-white text-white 0 font-medium focus:ring-4 rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                <img
                  src="https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo-700x287.png"
                  width="250"
                  height=""
                  alt=""
                />
              </button>
              <button
                onClick={() => handlePayment()}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                <img
                  src="https://sslcommerz.com/wp-content/uploads/2019/11/footer_logo.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayMethodModal
