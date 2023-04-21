import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

const ReminderModal = ({setModal,modal}) => {
   
  const sendEmail = () => {
    const templateParams = {
      to_name: 'Dibbo Dash',
      subject: 'Due Payment Remainder!',
      message: 'Please pay your due with according to table information:',
      email: 'mdabdurrouf.likhon2@gmail.com',
      foundation_name: 'Ikhlab Foundation',
    }

    emailjs
      .send(
        'service_55ozcrd',
        'template_e21lzan',
        templateParams,
        'VLd32F4SLKnPSZxsK',
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
          toast.success('Remainder Send')
        },
        function (error) {
          console.log('FAILED...', error)
        },
      )
  }

    
    return (
        <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed  flex justify-center  items-center  top-0 left-0 right-0 z-50 inset-0 bg-black bg-opacity-50 backdrop-blur-sm  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={()=>setModal(false)}
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
              <div className="text-center text-white p-10">
                <p className="text-3xl text-black mb-5">Are you sure?</p>
                <div className=" m-5 flex justify-center items-center">
                  <button
                    onClick={()=>setModal(sendEmail())}
                    type="button"
                    className="py-2.5 px-5 mr-6 mb-2 text-sm font-medium  bg-red-600 text-white focus:outline-none  rounded-lg border-none"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={()=> setModal(false)}
                    data-modal-target="defaultModal"
                    data-modal-toggle="defaultModal"
                    className="text-white bg-green-500    focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    type="button"
                  >
                   Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReminderModal;