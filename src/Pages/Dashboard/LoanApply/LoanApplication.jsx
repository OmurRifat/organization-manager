import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const LoanApplication = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user } = useContext(AuthContext);
  const [loanApplied, setLoanApplied] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://organization-manager-server.onrender.com/users/${user?.email}`)
      .then((response) => {
        setUserInfo(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  

  useEffect(() => {
    if (userInfo?.organization) {
      axios
        .get(`https://organization-manager-server.onrender.com/loanApplication?Organizations=${userInfo.organization}`)
        .then((response) => {
          setLoanApplied(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userInfo?.organization]);
console.log(loanApplied);

const handleAccept = (id) => {
  fetch(`http://localhost:5000/accept/${id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged) {
        toast.success("Loan Accepted");
      }
    });
};
const handleReject = (id) => {
  fetch(`http://localhost:5000/reject/${id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged) {
        toast.error("Loan Rejected");
      }
    });
};

    return (
        <div>
      <p className="text-xl font-bold text-[#ff8000] py-3">All Loan Application</p>
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
        
     {loanApplied.map((loan, index) => (
  <tbody>
          
  <tr
    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
      <td className="px-6 ">
      <img
        src={loan?.userInfos?.photoURL}
        alt=""
        width="50px"
        height=""
        className="rounded-full w-10 h-10"
      />
    </td>
    <td className="px-6 ">
    {loan?.userInfos?.name}
    </td>
    <td className="px-6">{loan?.userInfos?.email}</td>
    <td className="px-6">{loan?.durationMonth} Month</td>
    <td className="px-6">{loan?.userInfos?.phone}</td>
    <td className="px-6"> <span className='text-xl' >৳</span> {loan?.LoanAmount}</td>
    <td className="px-6">
    {loan?.loan ==="accepted" ? <span className='text-green-600 font-bold mx-2 text-center text-sm px-2 py-1'>Accepted</span> :
  loan?.loan === "rejected" ? <span className='text-red-600 font-bold mx-2 text-center text-sm px-2 py-1'>Rejected</span> :
  <><button
    onClick={() => handleAccept(loan._id)}
    type="button"
    className="text-white mx-2 bg-gradient-to-r font-medium hover:bg-green-600 bg-green-500 text-center text-xs px-2 py-1 rounded"
  >
    Accept
  </button>
  <button
    onClick={() => handleReject(loan._id)}
    type="button"
    className="text-white mx-2 bg-gradient-to-r via-red-500 font-medium hover:bg-red-600 bg-red-500 text-center text-xs px-2 py-1 rounded"
  >
    Reject
  </button></>}


    </td>
  </tr>
</tbody>
))}

      </table>

        </div>
    );
};

export default LoanApplication;