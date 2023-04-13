import React , { useContext, useState }from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import signup from '../../assets/signup.png'
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"  

const Signup = () => {
  const styles = {
    bg:{
      background: "radial-gradient(50.56% 100.18% at 49.27% 47.2%, #65C4B8 0%, rgba(255, 255, 255, 0) 100%)"
    }
  }
  const { createUsersEmail, updateUser, googleRegister } =
    useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onTouched"});
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  const onSubmit = data => {    
    createUsersEmail(data.email, data.password).then(res => 
      {
      const user = res.user
       if(user.uid){
       navigate("/dashboard");
       toast.success("You Have Successfully Sign Up")
       }
       const PPicture =  data.profilePicture[0];   
       const formData = new FormData();
       formData.append("image", PPicture);
       const url = `https://api.imgbb.com/1/upload?key=a9092fb79f783fc4527950882d60d253`;
       fetch(url, {
       method: "POST",
       body: formData,
       })
      .then((res) => res.json())
      .then((imageData) => {
        const PPhoto = imageData.data.display_url
        const userInfo = {
          displayName: data.name,
          photoURL:PPhoto
        };
        updateUser(userInfo).then((res) => {
          const user = res.user;
          console.log(user);
        })
      }).catch((error) => {
        const errorMessage = error.message;
        
        toast.error(errorMessage)
      });
      }) 
  };

  const handleGoogleSignUp = () => {
    googleRegister().then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const [photoName, setPhotoName] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleFileChange = (e) => {
    setPhotoName(e.target.files[0].name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };


  return (
    <div style={styles.bg} className="signup-container text-black mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="border p-10">
          <h1 className="md:text-5xl text-3xl font-bold m-5 ">Sign Up</h1>
          <div className="flex  items-center m-5 mt-10">
            <div className="bg-black h-1 w-24 mb-3 md:mb-10"></div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-8 md:pt-0 ">
            <button onClick={handleGoogleSignUp} className="flex pl-1 w-full md:w-72 mx-auto mb-4 md:mb-0 md:pl-2 justify-center cursor-pointer  items-center border py-2 rounded-lg">
            <FcGoogle className="text-2xl mr-5 md:mr-3"></FcGoogle>
              <span className="py-3 md:py-1  font-semibold">Continue with Google</span>
            </button>
            <button className="flex w-full mx-auto md:w-72  pl-4 md:pl-2 justify-center items-center border py-2 rounded-lg">
              <FaFacebook className="text-2xl mr-5 md:mr-3 text-[#45619D]"></FaFacebook>
              <span className="py-3 md:py-1 font-semibold">Continue with Facebook</span>
            </button>
          </div>
          <p className="flex justify-center text-3xl font-bold mt-10 mb-7">or</p>
          <div className="px-2 md:px-0">
            <form onSubmit={handleSubmit(onSubmit)}>
         
            <label for="organization" class="block mb-2 text-sm font-medium text-black">Select Your Organization</label>
            <select {...register("organization")} id="organization" class=" border  text-black text-sm rounded-lg mb-3  block w-full p-2.5  ">
              <option >Ekhlaf Foundation</option>
              <option >Jaago Foundation</option>
              <option >Tarunno Foundation</option>
            </select>

                  {/* photo set */}
                  <div>
                <p>Profile Picture</p>

         <div className='flex items-center bg-gray-50 my-4 rounded-lg'>
          
          <div className="text-center ">
           <div className="" style={{ display: !photoPreview ? "block" : "none" }}>
             <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
               className="w-16 h-16 m-auto rounded-full shadow"
             />
           </div>
           <div className="" style={{ display: photoPreview ? "block" : "none" }}>
             <span
               className="block w-16 h-16 rounded-full m-auto shadow"
               style={{
                 backgroundSize: "cover",
                 backgroundRepeat: "no-repeat",
                 backgroundPosition: "center center",
                 backgroundImage: `url(${photoPreview})`,
               }}
             ></span>
           </div>
         </div>
           <div className="col-span-6  sm:col-span-4">
           <input
               type="file"
               {...register("profilePicture")}
               className='rounded-e-full w-full ml-4'
               onChange={handleFileChange}
           />
           </div>
           </div>
       </div>            
       {/* photo set */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div class="mb-4 md:mb-6">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                  {...register("name", {
                    required: "Please Enter Your Full Name",
                   
                  })}
                    type="text"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full Name"
                   
                  />
                  <p className=' error-message text-red-600'>{errors.name?.message}</p>
                </div>    
                   
                <div class="mb-6 md:mb-3">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                   {...register("email", {
                    required: "Please Enter Your Email!",
                   
                  })}
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email address"
                    required
                  />
                      <p className=' error-message text-red-600'>{errors.email?.message}</p>

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
                {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be more than 8 characters" }, maxLength: { value: 12, message: "Password cannot exceed more than 12 characters" }})}
                  placeholder="Enter Password"
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <p className="text-black mt-8">
              Already have an account ?{" "}
              <Link to="/login" className="text-[#2A9D8F] underline">
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className='max-w-3xl px-6 md:px-0 pb-10 md:pb-0 mt-5 md:mt-14'>
          <img
            src={signup}
            alt="signup page image"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
