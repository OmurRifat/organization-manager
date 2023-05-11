import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
import { useReviewPostMutation } from "../../../features/reviews/reviewApi";


const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const [  postReview, {isLoading, isError} ] = useReviewPostMutation();
  const handleReviewData = (data) => {
    axios.post('https://organization-manager-server-main-jsarafath.vercel.app/reviews' , data)
    .then(res => {
    if(res.data){
      toast("Added Successfully")
    }
    })
    .catch(err => console.log(err))
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleReviewData)}
        className="shadow-lg p-10 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-3 w-[85%] justify-between ml-[13%] bg-blue-100"
      >
      
        <div className="form-control">
          <label>
            <span className="label-text text-xl text-gray-900">Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl text-gray-900">Ratings</span>
          </label>
          <input
            {...register("ratings")}
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-black"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl text-gray-900">Photo</span>
          </label>
          <input
            {...register("photo")}
            type="text"
            placeholder="Type here"
            className="input input-bordered text-black w-full max-w-xs"
          />
        </div>
    

        <div className="form-control">
          <label>
            <span className="label-text text-xl text-gray-900">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea text-black  lg:w-[700px] h-[80px] textarea-bordered"
            placeholder="Review"
          ></textarea>
        </div>
  
        <button
          className="btn lg:btn bg-green-500  mt-32 pt-2 pb-2 rounded-md"
          type="submit"
        >
          Add A Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
