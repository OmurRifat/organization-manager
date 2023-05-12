import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
import { useReviewPostMutation } from "../../../features/reviews/reviewApi";
import { AuthContext } from "../../../context/AuthProvider";


const AddReview = () => {
  const { loginUser,userInfo} = useContext(AuthContext);
  console.log(userInfo)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const navigate = useNavigate()
  const [  postReview, {isLoading, isError} ] = useReviewPostMutation();
  const handleReviewData = (data) => {
    axios.post('http://localhost:5000/reviews' , data)
    .then(res => {
    if(res.data){
      toast("Added Successfully");
      navigate('/')
    }
    })
    .catch(err => console.log(err))
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleReviewData)}
        className="shadow-lg p-10 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-3 w-[85%] justify-between ml-[13%] bg-blue-100"
      >
      
        <div className="form-control">
          <label>
            <span className="label-text text-xl text-gray-900">Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Type here"
            className="input border-white rounded-md text-black w-full max-w-xs"
            defaultValue={userInfo?.name}
           
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
            className="input input-bordered border-white rounded-md text-black w-full max-w-xs"
            defaultValue={userInfo?.photoURL}
           
          />
        </div>
    

        <div className="form-control">
          <label>
            <span className="label-text text-xl text-gray-900">Your valuable feedback please !!!!</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea text-black border-white rounded-md  lg:w-[700px] h-[80px] textarea-bordered"
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
