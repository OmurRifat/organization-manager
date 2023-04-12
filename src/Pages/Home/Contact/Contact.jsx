import React from "react";
import { BsHouseDoor, BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_2cejae9",
            "template_58yzg5s",
            form.current,
            "MKnwQrktFaWognh0d"
          )
          .then(
            (result) => {
              console.log(result.text);
              toast.success("email sent successfully");
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
      };

  const styleObject = {
    h3: {
      color: "#2A9D8F",
      marginBottom: "10px",
    },
    h2: {
      color: "#4D4D4D",
      marginBottom: "20px",
    }
  };

  return (
    <div id='contact' className="mb-24 pb-10 md:px-10 px-3 grid grid-cols-1 md:grid-cols-2 place-items-center">
      <div>
        <h3 className="font-semibold" style={styleObject.h3}>
          Contact Us
        </h3>
        <h2 style={styleObject.h2} className="text-4xl font-semibold">
          Get In Touch With Us
        </h2>
        <p className="font-normal mb-5 text-justify text-gray-700 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod fugit
          possimus tempora rerum aliquam id neque eum commodi quidem! Impedit
          dicta ex dolorum eaque facilis corrupti minima commodi omnis
          consequuntur.
          <div className="flex flex-col mt-6">
            <div className="flex pb-8">
              <div className="bg-green-600 w-12 py-2 rounded-sm h-12 mr-4">
                <BsHouseDoor className="text-center text-2xl text-white mx-auto"></BsHouseDoor>
              </div>
              <div>
                <h5 className="font-bold">Our Location</h5>
                <p>222 Mirpur Dhaka Bangladesh</p>
              </div>
            </div>
            <div className="flex pb-8">
              <div className="bg-green-600 w-12 py-2 rounded-sm h-12 mr-4">
                <BsTelephone className="text-center text-2xl text-white mx-auto"></BsTelephone>
              </div>
              <div>
                <h5 className="font-bold">Phone Number</h5>
                <p>+63828 343 433 8847</p>
              </div>
            </div>
            <div className="flex pb-8 md:pb-0">
              <div className="bg-green-600 w-12 py-2 rounded-sm h-12 mr-4">
                <FiMail className="text-center text-2xl text-white mx-auto"></FiMail>
              </div>
              <div>
                <h5 className="font-bold">name Address</h5>
                <p>dibbodas228@gmail.com</p>
              </div>
            </div>
          </div>
        </p>
      </div>
      
        <div className="w-full max-w-sm p-4 bg-green-600 border h-[370px] border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div className="">
              <input
                autoComplete="off"
                type="name"
                name="name"
                id="name"
                className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-none w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-none w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block border-none mb-3 md:mb-0 outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:outline-none focus:border-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full msgBtn bg-white-400 text-white border border-white   focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </form>
        </div>
      
    </div>
  );
};

export default Contact;
