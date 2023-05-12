import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';

const AddMonth = () => {
  const { handleSubmit, register } = useForm();
const { user, userInfo } = useContext(AuthContext);
  const handleAddMonth = (data) => {   
    data.status = false;    
  axios.post(`https://organization-manager-server-main-jsarafath.vercel.app/add-donation?orgName=${userInfo?.organization}` , data)
  .then(res => {
   if (res.data){
    toast.success("Added Successfully")
  }
  })
  .catch(err => console.log(err))
  }
  return (
    <div>
      <form
        onSubmit={ handleSubmit(handleAddMonth) }
        className=" p-10 rounded-2xl  gap-3 w-[85%] justify-between ml-[8%] "
      >

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

          <div className="form-control">
            <label>
              <span className="label-text text-xl">Month</span>
            </label>
            <select
              { ...register("month") }
              className="select select-bordered w-full max-w-lg"
            >
              <option disabled>Select Month</option>
              <option>January - 2023</option>
              <option>February - 2023</option>
              <option>March - 2023</option>
              <option>April - 2023</option>
              <option>May - 2023</option>
              <option>June - 2023</option>
              <option>July - 2023</option>
              <option>August - 2023</option>
              <option>September - 2023</option>
              <option>October - 2023</option>
              <option>November - 2023</option>
              <option>December - 2023</option>
            </select>
          </div>
          <div className="form-control">
            <label>
              <span className="label-text text-xl">Donation Type</span>
            </label>
            <select
              { ...register("donationName") }
              className="select select-bordered w-full max-w-lg"
            >
              <option disabled>Select Donation Name</option>
              <option>Regular Donation</option>
              <option>Special Donation</option>

            </select>
          </div>

          <div className="form-control">
            <label>
              <span className="label-text text-xl">Amount</span>
            </label>
            <input
              { ...register("amount") }
              type="number"
              placeholder="Type amount"
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          <div className="form-control">
            <label>
              <span className="label-text text-xl">Status</span>
            </label>
            <input
              { ...register("status") }
              type="text"
              placeholder="Type amount"
              className="input input-bordered w-full max-w-lg"
              defaultValue='false'

            />
          </div>
          <button
            className="btn lg:btn bg-green-300 pt-2 pb-2 rounded-md text-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

    </div>

  )
}

export default AddMonth
