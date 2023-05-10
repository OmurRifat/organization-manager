import React from 'react';
import Countdown from 'react-countdown';

const MyLoanModal = ({loan, setDetails}) => {
    return (
        <div>
             <div
          
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed  flex justify-center  items-center  top-0 left-0 right-0 z-50 inset-0 backdrop-blur-sm bg-opacity-10  w-full  md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full ">
            <div className="relative  bg-[#80bfb8] rounded-lg shadow dark:bg-gray-700">
              <button
              onClick={() => setDetails(false)}
                type="button"
                className="absolute top-3  right-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
              {/* CountDown */}
              
    
    
    <div>
    <div className="flex justify-center p-6">
    <div>
                  
                  {loan?.loan === 'accepted' ?  (
                   <div className=' text-white   text-3xl'>
                    <span className='font-semibold'>Your Loan Due Time</span> <br />
          <span className='text-2xl  p-3 my-80 rounded-lg '  >
            Days Left:  
            <Countdown date={new Date(loan?.endDate)} />
          </span>
                   </div>
        ) : <span className='-mt-32 text-3xl text-white'>Your Loan Not Accept</span> }
                  </div>
              </div>
    </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default MyLoanModal;