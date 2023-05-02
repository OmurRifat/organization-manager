import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from './Loader';
import { useQuery } from '@tanstack/react-query';

const MyLoan = () => {
  const { user } = useContext(AuthContext)
  const { isLoading, isError, data: myLoan } = useQuery(
    ["myLoan", user?.email],
    async () => {
      const response = await fetch(
        `https://organization-manager-server-main-jsarafath.vercel.app/myLoan?userEmail=${user?.email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    },
    { enabled: !!user?.email }
  );

  if (isLoading) {
    return <div> <Loader></Loader>  </div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <div>
      <div>
        <p className="text-xl font-bold text-[#ff8000] py-3">My Loan Application</p>
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Loan Duration
              </th>
              <th scope="col" className="px-6 py-3">
                Organization Name
              </th>
              <th scope="col" className="px-6 py-3">
                Loan Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          {
            myLoan?.length === 0 ? <span className='flex my-5 mx-auto justify-center font-medium w-full' >You Have Not Applied For Any Loan</span> : <>{ myLoan.map((loan, index) => (
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
                  <td className="px-6">{ loan?.Organizations }</td>
                  <td className="px-6"> <span className='text-xl' >৳</span> { loan?.LoanAmount }</td>
                  <td className="px-6">

                    { loan?.loan === "accepted" ? <span

                      className="text-green-600 font-bold mx-2 text-center text-xs px-2 py-1 "
                    >
                      You Loan is Accepted
                    </span> :
                      loan?.loan === "rejected" ? <span className="text-red-600 font-bold mx-2 text-center text-xs px-2 py-1 "
                      >
                        Your Loan is Rejected
                      </span> :
                        <><span
                          className="text-white mx-2  bg-gradient-to-r font-medium hover:bg-green-600 bg-green-500 text-center text-xs px-2 py-1 rounded"
                        >
                          Application is Pending
                        </span></> }
                  </td>
                </tr>
              </tbody>
            )) }</>
          }

        </table>

      </div>
    </div>
  );
};

export default MyLoan;