import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
const LogIn = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onTouched" });

  const styles = {
    bg: {
      background: "radial-gradient(50% 127.87% at 50% 50%, #65C4B8 0%, rgba(217, 217, 217, 0) 100%)"
    }
  }
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const onSubmit = data => {
    loginUser(data.email, data.password).then(res => {
      const user = res.user;
      console.log(user);
      if (user.uid) {
        navigate(from, { replace: true });
        toast.success("You Have Successfully Sign Up")
      }
    }).catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage)
    });
  };
  return (
    <div>
      <div style={ styles.bg } className="lg:block signup-container text-black mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 ">
          <div className="p-10">
            <h1 className="text-5xl text-black ">Sign In</h1>
            <div className="flex  items-center m-5 mt-10">
              <div className="bg-[black] h-1 w-24 me-5"></div>
             
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-8 md:pt-0 ">
              <button className="flex pl-1 w-full md:w-72 mx-auto mb-4 md:mb-0 md:pl-2 justify-center cursor-pointer  items-center border py-2 rounded-lg">
                <FcGoogle className="text-2xl mr-5 md:mr-3"></FcGoogle>
                <span className="py-3 md:py-1  font-semibold">Continue with Google</span>
              </button>
              <button className="flex w-full mx-auto md:w-72  pl-4 md:pl-2 justify-center items-center border py-2 rounded-lg">
                <FaFacebook className="text-2xl mr-5 md:mr-3 text-[#45619D]"></FaFacebook>
                <span className="py-3 md:py-1 font-semibold">Continue with Facebook</span>
              </button>
            </div>
            <p className="flex flex-reverse justify-center text-3xl font-bold my-10">or</p>
            <div className="">
              <form onSubmit={ handleSubmit(onSubmit) }>
                <div className="grid grid-cols-1 gap-2">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      { ...register("email", {
                        required: "Please Enter Your Email!",

                      }) }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email address"
                      required
                    />
                    <p className='error-message text-red-600'>{ errors.email?.message }</p>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    { ...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be more than 8 characters" }, maxLength: { value: 12, message: "Password cannot exceed more than 12 characters" } }) }
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <p className='alerts text-red-600'>{ errors.password?.message }</p>
                </div>
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I have read and agree with terms of service and our privacy
                    policy
                  </label>
                </div>
                <button className='bg-[#2A9D8F] text-white p-4 rounded-full text-4xl border-none' type="submit">
                  <AiOutlineArrowRight />
                </button>

              </form>
              <p className='text-black mt-3'>
                Do not have any account ?{ ' ' }
                <Link to="/signup" className="text-[#2A9D8F] underline">
                  { ' ' }
                  Sign Up
                </Link>

              </p>
            </div>
          </div>
          <div className="flex items-center justify-right">
            <img
              src="https://i.ibb.co/F0Tkjwt/Layer-13.png"
              alt="Family-logo-template-removebg-preview"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default LogIn
