import React from 'react';
import Countdown from 'react-countdown';
import { toast } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const LoanApplicationModal = ({ setDetails, loan, refetch, loanApplied }) => {
  console.log(loan);
  const handleAccept = (id) => {
    const durationInMs = loanApplied.find(obj => obj._id === id).durationMonth * 30 * 24 * 60 * 60 * 1000;
    const endDate = new Date(Date.now() + durationInMs);
<<<<<<< HEAD
  console.log(endDate);
=======
    console.log(endDate);
>>>>>>> 4db8e79b9a72d80c026d506aa78ac1bc378a167b
    fetch(`https://organization-manager-server-main-jsarafath.vercel.app/accept/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        endDate: endDate.toISOString() // convert to ISO string format
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged && data.modifiedCount === 1) {
          refetch();
          setDetails(false)
          toast.success("Loan Accepted");
        }
      });
  };


  const handleReject = (id) => {
    fetch(`https://organization-manager-server-main-jsarafath.vercel.app/reject/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch()
          setDetails(false)
          toast.error("Loan Rejected");
        }
      });
  };



  return (
    <div>
      <PhotoProvider>
        <div

          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed  flex justify-center  items-center  top-0 left-0 right-0 z-50 inset-0 backdrop-blur-sm bg-opacity-10  w-full  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-xl max-h-full ">
            <div className="relative  overflow-y-auto bg-[#80bfb8] rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={ () => setDetails(false) }
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
              {/* CountDown */ }



              <div>
                <div className="flex justify-center ">
                  <div className="rounded-3xl overflow-hidden  shadow-2xl   my-15 ">
                    <img
                      src="https://i.ibb.co/NFWqVcK/Frame-1171275325.png"
                      className="w-full h-40"
                      alt=""
                    />
                    <div className="flex justify-center -mt-32">
                      <div>

                        { loan?.loan === 'accepted' ? (
                          <div className=' text-white   text-3xl'>
                            <span className='font-semibold'>Member Loan Due Time</span> <br />
                            <span className='text-2xl  p-3 my-80 rounded-lg '  >
                              Day Left:
                              <Countdown date={ new Date(loan?.endDate) } />
                            </span>
                          </div>
                        ) : <span className='-mt-32 text-3xl text-white'>You Will Not Accept Loan</span> }
                      </div>
                    </div>
                    <div className="flex justify-center mt-5">
                      <PhotoView src={ loan?.userInfos?.photoURL }>
                        <img
                          src={ loan?.userInfos?.photoURL }
                          className="rounded-full w-16 border-red-3 "
                          alt="profile"
                        />
                      </PhotoView>
                    </div>
                    <div className="text-right"></div>
                    <table className="w-full text-sm text-left  dark:text-gray-400">
                      <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                          >
                            Full Name:
                          </th>

                          <td className="text-black px-8 py-4 ">  { loan?.userInfos?.name }</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                          >
                            Email:
                          </th>

                          <td className="text-black px-8 py-4 "> { loan?.userInfos?.email }</td>
                        </tr>
                        {/* <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                        >
                          Foundation:
                        </th>
    
                        <td className="text-black px-8 py-4 ">{ loan?.Organizations }</td>
                      </tr> */}
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                          >
                            Loan Duration:
                          </th>
                          <td className="text-black px-8 py-4 "> { loan?.durationMonth } Month</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                          >
                            Loan Amount:
                          </th>
                          <td className="text-black px-8 py-4 "> { loan?.LoanAmount } <span className='text-lg' >৳</span></td>
                        </tr>
                        {/* <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                        >
                          Position:
                        </th>
    
                        <td className="text-black px-8 py-4 "> { loan?.userInfos?.position }</td>
                      </tr> */}
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                          >
                            Phone Number:
                          </th>

                          <td className="text-black px-8 py-4 "> { loan?.userInfos?.phone }</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                          >
                            NID No:
                          </th>

                          <td className="text-black px-8 py-4 "> { loan?.nidNo }</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                          >
                            Date Of Birth:
                          </th>

                          <td className="text-black px-8 py-4 "> { loan?.dateOfBirth?.slice(0, 10) }</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                          >
                            Nid Photo:
                          </th>
                          <PhotoView src={ loan?.NidPhoto }>
                            <img className=' w-20 ml-7' src={ loan?.NidPhoto } alt="" />
                          </PhotoView>
                        </tr>
                      </tbody>
                    </table>
                    { loan?.loan === "accepted" ? <div className='py-3'>
                      <span className='text-green-900 mx-2  bg-gradient-to-r font-medium  bg-green-200 text-center  px-2 py-1 rounded text-base'>Accepted</span>
                    </div> :
                      loan?.loan === "rejected" ? <div className='py-3'>
                        <span className='text-red-900 mx-2  bg-gradient-to-r font-medium  bg-red-200 text-center text-base  px-2 py-1 rounded'>Rejected</span>
                      </div> :
                        <div className='flex justify-evenly py-3'><button
                          onClick={ () => handleAccept(loan._id) }
                          type="button"
                          className="text-white mx-2 bg-gradient-to-r font-medium hover:bg-green-600 bg-green-500 text-center h-10 w-20  px-2 py-1 rounded"
                        >
                          Accept
                        </button>
                          <button
                            onClick={ () => handleReject(loan._id) }
                            type="button"
                            className="text-white mx-2 bg-gradient-to-r via-red-500 font-medium hover:bg-red-600 bg-red-500 h-10 w-20  text-center  px-2 py-1 rounded"
                          >
                            Reject
                          </button></div> }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </PhotoProvider>
    </div>
  );
};

export default LoanApplicationModal;