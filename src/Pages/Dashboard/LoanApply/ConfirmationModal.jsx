import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'
import ProcessingModal from './ProcessingModal'

const ConfirmationModal = ({ setShowModal, showModal }) => {
  const [processing, setProcessing] = useState(false)
  //   const navigate = useNavigate()
  //   const handleConfirm = () => {
  //     console.log("clicked")
  //     setShowModal(false)
  //     setProcessing(true)
  //   }

  const handleConfirmation = () => {
    console.log('clicked')
    // setShowModal(false)
    // setProcessing(true)
  }
  console.log(processing)
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
            onClick={() => setShowModal(false)}
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
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <div className="text-center text-white p-10">
              <p className="text-3xl m-5">Review and apply</p>
              <p>
                You are applying for{' '}
                <span className="text-[#e4924b]">10,000</span> BDT <br /> for 5
                months
              </p>
              <div className=" m-5 flex justify-center items-center">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Back
                </button>
                <button
                  onClick={() => setProcessing(true)}
                  data-modal-target="defaultModal"
                  data-modal-toggle="defaultModal"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  type="button"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {processing && (
        <ProcessingModal
          setProcessing={setProcessing}
          processing={processing}
        ></ProcessingModal>
      )}
    </div>
  )
}

export default ConfirmationModal
