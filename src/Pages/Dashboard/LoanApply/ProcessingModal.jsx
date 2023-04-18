import React from 'react'
import { useNavigate } from 'react-router'
import { PropagateLoader } from 'react-spinners';
import Lottie from "lottie-react";
import success from "../../../../Success.json"
const ProcessingModal = ({ Processing,successs, setProcessing }) => {
  const navigate = useNavigate()
  const handleProcessing = () => {
    setProcessing(false)
    navigate('/dashboard/member')
  }
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed bg-black bg-opacity-50 backdrop-blur-sm flex justify-center  items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative text-white text-center bg-[#80bfb8] rounded-lg shadow  dark:bg-gray-700">
          <div className="flex justify-center items-center text-center  ">
          <div className='flex my-5 justify-center'>
            {
              successs? <> <Lottie className='' loop={false} animationData={success}></Lottie>
              </> :<PropagateLoader
              color="#ffffff"
              loading
              size={20}
              speedMultiplier={1}
            />
            }
          </div>
          </div>
          <p className=" text-2xl my-5 text-white">
          {
              successs? <> Application Success
              </> : <> Application Processing</>
          
            }
          </p>
          <p>You will be notified on the status of your application</p>
          <button
            onClick={() => handleProcessing()}
            className="btn bg-[#1ea721] hover:bg-[#3d756f] w-1/2 mx-auto m-5 p-3 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProcessingModal
