// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";

// const Newsletter = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_2cejae9",
//         "template_58yzg5s",
//         form.current,
//         "MKnwQrktFaWognh0d"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           toast.success("email sent successfully");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   };

//   const styles = {
//     h2: {
//       color: "#313131",
//     },
//     p: {
//       color: "#828282",
//     },
//     primary: {
//       border: "1px solid #2A9D8F",
//     },
//   };
//   return (
//     <>
//       <div className="text-center pt-28">
//         <h2 style={styles.h2} className="text-4xl font-semibold mb-6">
//           Subscribe to Our Newsletter
//         </h2>
//         <p style={styles.p} className="font-normal pb-10 text-lg">
//           Do not miss the information and news from us. Subscribe now!
//         </p>
//       </div>

//       <div className="mx-1 md:mx-0 md:px-0">
//         <div
//           id="newsletter-banner"
//           className="flex justify-center mb-48  max-w-sm  md:max-w-md  lg:max-w-xl mx-auto"
//           style={styles.primary}
//         >
//           <div className=" mx-auto py-6 ">
//             <form
//               ref={form}
//               autoComplete="off"
//               onSubmit={sendEmail}
//               action="#"
//               className="flex lg:w-[500px] items-center justify-between flex-row"
//             >
//               <input
//                 type="email"
//                 name="user_email"
//                 required
//                 id="email"
//                 placeholder="Enter your email"
//                 className="bg-white border-none outline-none text-gray-900 text-sm rounded-lg focus:outline-none focus:border-none p-3  dark:text-white"
//               />
//               <button
//                 style={{ backgroundColor: "#2A9D8F" }}
//                 type="submit"
//                 className="text-white focus:outline-none font-medium rounded-lg text-sm ml-6 md:ml-4  px-5 py-3 text-center "
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Newsletter;
