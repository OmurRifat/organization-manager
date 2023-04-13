import React from 'react'
import { FcProcess } from 'react-icons/fc'
import { useNavigate } from 'react-router'
const ProcessingModal = ({ Processing, setProcessing }) => {
  const navigate = useNavigate()
  const handleProcessing = () => {
    setProcessing(false)
    navigate('/dashboard')
  }
  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed flex justify-center opacity-2 items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative text-white p-24 text-center bg-[#9b968c] rounded-lg shadow  dark:bg-gray-700">
          <div className="flex justify-center items-center text-center  ">
            <FcProcess className="text-6xl"></FcProcess>{' '}
          </div>
          <p className="text-black text-2xl my-5">Application Processing</p>
          <p>You will be notified on the status of your application</p>
          <button
            onClick={() => handleProcessing()}
            class="btn bg-[#1ea721] hover:bg-[#3d756f] w-1/2 mx-auto m-5 p-3 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProcessingModal
