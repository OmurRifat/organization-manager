import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

import Loader from './Loader';

const LoanApplication = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://organization-manager-server-main-jsarafath.vercel.app/users/${user?.email}`)
      .then((response) => {
        setUserInfo(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);


  const [loanApplied, setLoanApplied] = useState([]);

  const { isLoading, isError, refetch, data } = useQuery(
    ["loanApplied", userInfo?.organization],
    async () => {
      const response = await fetch(
        `https://organization-manager-server-main-jsarafath.vercel.app/loanApplication?Organizations=${userInfo.organization}`
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

  const handleAccept = (id) => {
    fetch(`https://organization-manager-server-main-jsarafath.vercel.app/accept/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch()
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
          toast.error("Loan Rejected");
        }
      });
  };

  return (
    <div>
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
              Loan Duration
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        {
          loanApplied?.length === 0 ? <div className='flex my-5 mx-auto justify-center font-medium' ><span>Loan Request Not Available</span> </div> : <> { loanApplied.map((loan, index) => (
            <tbody>

              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 ">
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
                <td className="px-6">{ loan?.userInfos?.email }</td>
                <td className="px-6">{ loan?.durationMonth } Month</td>
                <td className="px-6">{ loan?.userInfos?.phone }</td>
                <td className="px-6"> <span className='text-xl' >৳</span> { loan?.LoanAmount }</td>
                <td className="px-6">
                  { loan?.loan === "accepted" ? <span className='text-green-600 font-bold mx-2 text-center text-sm px-2 py-1'>Accepted</span> :
                    loan?.loan === "rejected" ? <span className='text-red-600 font-bold mx-2 text-center text-sm px-2 py-1'>Rejected</span> :
                      <><button
                        onClick={ () => handleAccept(loan._id) }
                        type="button"
                        className="text-white mx-2 bg-gradient-to-r font-medium hover:bg-green-600 bg-green-500 text-center text-xs px-2 py-1 rounded"
                      >
                        Accept
                      </button>
                        <button
                          onClick={ () => handleReject(loan._id) }
                          type="button"
                          className="text-white mx-2 bg-gradient-to-r via-red-500 font-medium hover:bg-red-600 bg-red-500 text-center text-xs px-2 py-1 rounded"
                        >
                          Reject
                        </button></> }


                </td>
              </tr>
            </tbody>
          )) }</>
        }

      </table>

    </div>
  );
};

export default LoanApplication;