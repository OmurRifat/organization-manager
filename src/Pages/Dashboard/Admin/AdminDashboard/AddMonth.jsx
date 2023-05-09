import React from 'react'
import { useForm } from 'react-hook-form';
import { useDonationPostMutation } from '../../../../features/donation/donationApi';
import { toast } from 'react-hot-toast';

const AddMonth = () => {
  const { handleSubmit, register } = useForm();
const [donationHistory , {isLoading,isError}] = useDonationPostMutation();

  const handleAddMonth = (data) => {
console.log(data);
donationHistory(data);
if(data) {
  toast("Added Successfully !!!!")
}
  }
  return (
    <div>
     <form
        onSubmit={handleSubmit(handleAddMonth)}
        className="shadow-lg p-10 rounded-2xl  gap-3 w-[85%] justify-between ml-[13%] bg-blue-100"
      >

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

        <div className="form-control">
          <label>
            <span className="label-text text-xl">Month</span>
          </label>
          <select
            {...register("month")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>Select Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Donation Type</span>
          </label>
          <select
            {...register("donationName")}
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
            {...register("amount")}
            type="number"
            placeholder="Type amount"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <button
          className="btn lg:btn-success btn-primary"
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
