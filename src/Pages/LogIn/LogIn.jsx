import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const LogIn = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onTouched"});
  const { loginUser } = useContext(AuthContext);
const navigate = useNavigate();

// const from = location?.state?.from?.pathname || "/";
  const onSubmit = data => {
    loginUser(data.email,data.password).then(res => {
      const user = res.user;
        // navigate(from, { replace: true });
      console.log(user);
      if(user.uid){
        navigate("/");
        toast.success("You Have Successfully Sign Up")
      }
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage)
    });
  };
  return (
    <div className="signup-container text-black mt-4">
      <div className="grid grid-cols-2 gap-5 ">
        <div className="border p-10">
          <h1 className="text-5xl text-[green] ">Sign In</h1>
          <div className="flex  items-center m-5 mt-10">
            <div className="bg-[black] h-1 w-24 me-5"></div>
            <p className='font-bold'>Sign up with</p>
          </div>
          <div className="grid grid-cols-2  md:mx-10">
            <div className="flex cursor-pointer justify-around items-center border p-2 rounded mx-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
                alt=""
                width="36px"
              ></img>
              <p className=" text-black font-semibold">Continue with Google</p>
            </div>
            <div className="flex cursor-pointer justify-around items-center border p-2 rounded">
              <img
                src="https://www.citypng.com/public/uploads/preview/-11595349592mdhzsfgakx.png"
                alt=""
                width="36px"
              ></img>
              <p className=" text-black font-semibold">Continue with Facebook</p>
            </div>
          </div>
          <p className="flex justify-center text-3xl font-bold my-10">or</p>
          <div className="mx-10">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="grid grid-cols-1 gap-2">
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Please Enter Your Email!",
                     
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email address"
                    required
                  />
                  <p className=' error-message text-red-600'>{errors.email?.message}</p>
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  placeholder="Enter Password"
                  {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be more than 8 characters" }, maxLength: { value: 12, message: "Password cannot exceed more than 12 characters" }})}
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <p className='alerts text-red-600'>{errors.password?.message}</p>
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I have read and agree with terms of service and our privacy
                  policy
                </label>
              </div>
              <button className='bg-[#2A9D8F] text-white p-4 rounded-full text-4xl border-none' type="submit">
                <AiOutlineArrowRight/>
              </button>
              
            </form>
            <p className='text-black mt-3'>
              Do not have any account ?{' '}
              <Link to="/signup" className="text-[#2A9D8F] underline">
                {' '}
                Sign Up
              </Link>
              
            </p>
          </div>
        </div>
        <div className="flex items-center justify-right -ms-16">
          <img
            src="https://i.ibb.co/F0Tkjwt/Layer-13.png"
            alt="Family-logo-template-removebg-preview"
          />
        </div>
      </div>
    </div>
  )
}

export default LogIn
