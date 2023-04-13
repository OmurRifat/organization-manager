import React from "react";
import vision from "../../../assets/vision.png";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <div id='vision' className="md:px-10 px-3 flex flex-col py-6 md:flex-row  my-24 md:pb-24 justify-around items-center ">
      <img
        className=" w-[500px] rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={ vision }
        alt="vision-image"
      />
      <div className="flex flex-col mt-3 px-4 md:px-0 md:mt-0">
        <h2 className="mb-3 text-4xl pb-1 font-semibold tracking-tight text-gray-900 dark:text-white">
          Our Vision
        </h2>
        <p className="font-normal mb-5 text-justify text-gray-700 max-w-md">
          The organization manager's goal is to make a system for the Non-Profit
          Social Organization, where all activities will be automated by the
          system, and man's power dependency will not be the major issue for
          their organizational activity, which will make the organization much
          more active.
        </p>
        <Link to='/foundation-form' className="border w-36 font-normal py-3 px-6 explore-btn rounded-lg  border-green-600 outline-none focus:border-none focus:outline-none">Get Started</Link>

      </div>
    </div>
  );
};

export default Vision;
