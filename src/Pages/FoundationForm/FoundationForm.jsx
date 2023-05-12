import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import foundation from '../../assets/foundationform.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useOrganizationsPostMutation } from '../../features/organizations/organizationsApi'

const FoundationForm = () => {
  const { register, handleSubmit, reset } = useForm()
  const [postOrganization, {isLoading, isError, isSuccess}] = useOrganizationsPostMutation();
  const onSubmit = (data) => {
    console.log(data)
   postOrganization(data);
   if(data){
    toast('Added Foundation Successfully !!!!')
  }
  }

  const styles = {
    colr: {
      color: '#2A9D8F',
    },
    paraColr: {
      color: '#8D8D8D',
    },
    bg: {
      background:
        'radial-gradient(50% 127.87% at 50% 50%, #65C4B8 0%, rgba(217, 217, 217, 0) 100%)',
    },
  }
  return (
    <div  className="signup-container px-2 md:px-6">
      
      {/* grid grid-cols-1 md:grid-cols-2 gap-x-6 */}
      <div className="flex flex-col lg:flex-row md:flex-row  justify-evenly items-center ">
        <div className="max-w-md">
          <img src={foundation} alt="foundation form image" />
        </div>
        <div className="px-10 md:px-0 md:p-4 pt-10">
          <h1 className="text-center md:text-4xl text-2xl bg-gradient-to-r text-transparent bg-clip-text from-green-400 via-green-500 to-green-600 my-2 mt-10 text-black font-semibold">
            Register For A Foundation
          </h1>
          <p style={styles.paraColr} className="mb-8 text-center">
            MAKE YOUR DREAM COMES TRUE!
          </p>
          <div>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-2">
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Organization Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your Organization Name"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Founder Name
                    </label>
                    <input
                      name="fname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register('founder')}
                      type="text"
                      id="email"                      placeholder="Founder Name"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Organization Email
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Founding Time
                    </label>
                    <input
                      {...register('founding-time')}
                      type="date"
                      id="date"
                      name="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="time"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register('address')}
                      id="email"                      
                      placeholder="Select your location"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-start mb-2">
                  <div className="flex items-center h-5">
                    <input
                      {...register('agree')}
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

                <button
                  // style={{ backgroundColor: '#2A9D8F' }}
                  type="submit"
                  className="my-5 w-14 h-14 text-xl drop-shadow-xl bg-gradient-to-r text-white from-green-400 via-green-500 to-green-600   font-medium rounded-full px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <AiOutlineArrowRight className="text-center mx-auto"></AiOutlineArrowRight>
                </button>
              </form>

              <p className="text-black mb-4">
                Already Registered ?{' '}
                <Link to="/" className="text-[#2A9D8F]">
                  Back to Home
                </Link>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundationForm
