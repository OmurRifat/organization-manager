import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

import Loader from './Loader';
import LoanApplicationModal from './LoanApplicationModal';

const LoanApplication = () => {
  const { userInfo } = useContext(AuthContext);
  const [loanApplied, setLoanApplied] = useState([]);
  console.log(loanApplied);
  const [details, setDetails] = useState(false)
  const [detailsMember, setDetailsMember] = useState({})
  const { isLoading, isError, refetch, data } = useQuery(
    ["loanApplied", userInfo?.organization],
    async () => {
      const response = await fetch(
        `http://localhost:5000/loanApplication?Organizations=${userInfo.organization}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    },
    { enabled: !!userInfo?.organization }
  );

  useEffect(() => {
    if (isError) {
      console.log("Error fetching loan applied data");
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      setLoanApplied(data);
    }
  }, [data]);

  if (isLoading) {
    return <div className='text-black'> <Loader></Loader> </div>;
  }
  const handleLoanDetails = (singleLoanData) => {
    setDetails(true)
    setDetailsMember(singleLoanData)
  }
  return (
    <div className='overflow-x-auto'>
      <p className="text-xl  font-bold text-[#ff8000] py-3">All Loan Application</p>
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
            </th>
            <th scope="col" className="px-6 py-3">
              Member Name
            </th>
            <th scope="col" className="px-6 py-3">
              Member Email
            </th>
            <th scope="col" className="px-6 py-3">
              Organization Name
            </th>
            <th scope="col" className="px-6 py-3">
              Loan Duration
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Details
            </th>
          </tr>
        </thead>
        { loanApplied?.length === 0 ? <caption className='flex my-5 mx-auto justify-center font-medium' ><span>Loan Request Not Available</span> </caption> : <> { loanApplied.map((loan, index) => (
          <tbody key={ index }>
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            ><td className="px-6 ">
                <img
                  src={ loan?.userInfos?.photoURL }
                  alt=""
                  width="50px"
                  height=""
                  className="rounded-full w-10 h-10"
                />
              </td>
              <td className="px-6 ">
                { loan?.userInfos?.name }
              </td>
              <td className="px-6">{ loan?.userInfos?.email }  </td>
              <td className="px-6">{ loan?.Organizations }  </td>
              <td className="px-6">{ loan?.durationMonth } Month</td>

              <td className="px-6"> <span className='text-xl' >৳</span> { loan?.LoanAmount }</td>
              <td className="px-6">
                { loan?.loan === "accepted" ? <span className='text-green-600 font-bold mx-2 text-center text-sm px-2 py-1'>Accepted</span> :
                  loan?.loan === "rejected" ? <span className='text-red-600 font-bold mx-2 text-center text-sm px-2 py-1'>Rejected</span> :
                    <><button
                      type="button"
                      className="text-white mx-2 bg-gradient-to-r font-medium hover:bg-green-600 bg-green-500 text-center text-xs px-2 py-1 rounded"
                    >
                      Pending
                    </button>
                    </> }
              </td>
              <td>
                {
                  loan && <button
                    onClick={ () => handleLoanDetails(loan) }
                    className=' text-white bg-gradient-to-r from-green-400 via-green-500 font-semibold to-green-600 hover:bg-gradient-to-br  text-xs px-2 py-1 rounded'>Application Details</button>
                }
                {
                  details && <LoanApplicationModal loanApplied={ loanApplied } refetch={ refetch } setDetails={ setDetails } loan={ detailsMember }  ></LoanApplicationModal>
                }
              </td>
            </tr>
          </tbody>
        )) }</> }
      </table>
    </div>
  );
};

export default LoanApplication;