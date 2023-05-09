import React from "react";

const DetailsModal = ({setDetails,member}) => {
    console.log(member);
  return (
    
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed  flex justify-center  items-center  top-0 left-0 right-0 z-50 inset-0 backdrop-blur-sm bg-opacity-10  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-[#80bfb8] rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => setDetails(false)}
            type="button"
            className="absolute top-3  right-2.5 text-[red] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
          <div className="flex justify-center ">
            <div className="rounded-3xl overflow-hidden  shadow-2xl   my-15 ">
              <img
                src="https://i.ibb.co/NFWqVcK/Frame-1171275325.png"
                className="w-full h-40"
                alt=""
              />
              <div className="flex justify-center -mt-32">
                <img
                  src={ member?.photoURL}
                  className="rounded-full w-48 border-red-3 h-48 -mt-3"
                  alt="profile"
                />
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

                    <td className="text-black px-8 py-4 ">  {member?.name}</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                    >
                      Email:
                    </th>

                    <td className="text-black px-8 py-4 "> {member?.email}</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                    >
                      Foundation:
                    </th>

                    <td className="text-black px-8 py-4 ">{ member?.organization }</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                    >
                      Position:
                    </th>

                    <td className="text-black px-8 py-4 ">{ member?.position }</td>
                  </tr>
                  
                </tbody>
              </table>

              
            </div>
          </div>

          
        </div>
      </div>
    </div>

  );
};

export default DetailsModal;
