import React from "react";

const DetailsModal = ({setDetails,member}) => {
    // console.log(member);
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed  flex justify-center  items-center  top-0 left-0 right-0 z-50 inset-0  bg-opacity-50 backdrop-blur-sm  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg  drop-shadow-xl ">
          <button
          onClick={() => setDetails(false)}
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
              {/* showing the total due ammount with bold*/ }
              
              <h1 className="text-xl font-semibold text-black mb-3">Name : {member.name}</h1>
              <p className="text-xl font-semibold text-black mb-3">Organizaiton : {member.organization}</p>
              <p className="text-xl font-semibold text-black mb-3">Email : {member.email}</p>
              <p className="text-xl font-semibold text-black">Position : {member.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
