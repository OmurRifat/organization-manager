import React , { useContext }from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
const Signup = () => {
  const { createUsersEmail, updateUser, googleRegister } =
    useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
    console.log(data);
    createUsersEmail(data.email, data.password).then(res => 
      {
        const user = res.user
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo).then((res) => {
          const user = res.user;
          if(user.uid){
            navigate("/");
            toast.success("You Have Successfully Sign Up")
          }
          console.log(user);
        })
      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage)
      });
  };

  const handleGoogleSignUp = () => {
    googleRegister().then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div className="signup-container text-black mt-4">
      <div className="grid grid-cols-2 gap-5 ">
        <div className="border p-10">
          <h1 className="text-5xl text-[green] m-5 ">Sign Up</h1>
          <div className="flex  items-center m-5 mt-10">
            <div className="bg-[black] h-1 w-24 me-5"></div>
            <p>Sign up with</p>
          </div>
          <div className="grid grid-cols-2  mx-10">
            <button onClick={handleGoogleSignUp} className="flex cursor-pointer justify-around items-center border p-2 rounded mx-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
                alt=""
                width="36px"
              ></img>
              <p className="mx-1  font-semibold">Continue with Google</p>
            </button>
            <div className="flex justify-around items-center border p-2 rounded">
              <img
                src="https://www.citypng.com/public/uploads/preview/-11595349592mdhzsfgakx.png"
                alt=""
                width="36px"
              ></img>
              <p className="mx-1  font-semibold">Continue with Facebook</p>
            </div>
          </div>
          <p className="flex justify-center text-3xl font-bold my-10">or</p>
          <div className="mx-10">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label for="organization" class="block mb-2 text-sm font-medium text-black">Select Your Organization</label>
            <select {...register("organization")} id="organization" class=" border  text-black text-sm rounded-lg  block w-full p-2.5  ">
              <option >Ekhlaf Foundation</option>
            </select>
              <div className="grid grid-cols-2 gap-2">
                <div class="mb-6">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                  {...register("name")}
                    type="text"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                  {...register("email")}
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                {...register("password")}
                  placeholder="Enter Password"
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
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
            <p className="text-black mt-3">
              Already have an account ?{" "}
              <Link to="/login" className="text-[#2A9D8F] underline">
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-right">
          <img
            src="https://i.ibb.co/mhDL5Rb/signup.png"
            alt="Family-logo-template-removebg-preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
