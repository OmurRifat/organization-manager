import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

const ChangePassword = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onTouched" });
  const auth = getAuth();

  const styles = {
    bg: {
      background: "radial-gradient(50% 127.87% at 50% 50%, #65C4B8 0%, rgba(217, 217, 217, 0) 100%)"
    }
  }
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const [userEmail, setUserEmail] = useState("")
  
  const onSubmit = (data,event) => {
    event.preventDefault();


    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
        })
        .catch(error => {
            console.error('error', error)
        })
  };
  const handleonBlur = event => {
    const email = event .target.value;
    setUserEmail(email)
console.log(email)
  }

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, userEmail)
  .then(() => {
    toast.success("Please check your email for verification !!")
  })
  .catch((error) => {
 
  });

  }
  return (
    <div>
   <form onSubmit={ handleSubmit(onSubmit) }>
                <div className="grid grid-cols-1 gap-2">
                  <div className="mb-6">
                   
                     <input onBlur={handleonBlur} type="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Email Address"
               required />
                    <p className='error-message text-red-600'>{ errors.email?.message }</p>
                  </div>
                </div>
               
                
                <div className='mb-2'>

                <Link onClick={handleForgetPassword} ><button className='btn bg-green-500 font-bold w-32 h-12 text-white'>Change Password</button></Link>
                </div>
 
              </form>

    </div>
  )
}

export default ChangePassword;
