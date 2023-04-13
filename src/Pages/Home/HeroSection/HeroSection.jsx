import React from "react";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import hero from '../../../assets/hero.png'

const HeroSection = () => {
  const styleObject = {
    background: {
      background: "rgba(42, 157, 143, 0.1)",
    },
    button: {
      background: "#2A9D8F",
    },
  };
  return (
    <div
      id="clipping"
      style={styleObject.background}
      className="text-black md:px-20"
    >
      <div className="md:flex p-5 mb-24 justify-between items-center ">
        <div className="px-3 md:px-0">
          <h1 className="font-semibold mb-10 text-4xl">
            Have A Dream? <br /> Let's Dream Together!
          </h1>
          <p className="font-sans mt-5 max-w-sm mb-8">
            We are organization manager. We dream to Build a system for your
            organization, by which we can Dream together.
          </p>
          <div className="flex ">
            <Link to="signup">
              <button
                style={styleObject.button}
                className="flex mt-2 mr-4 px-3 py-3 md:px-8 md:py-[8px] text-white rounded p-1 items-center justify-center"
              >
                Sign Up
              </button>
            </Link>
            <button
             
              className="flex border font-medium border-[#2A9D8F] mt-2 px-4 py-[8px] text-[#515151] rounded p-1 items-center justify-center"
            >
              <BsFillPlayFill className="mr-2 text-xl text-[#2A9D8F]"></BsFillPlayFill> Explore Our Vision
            </button>
          </div>
        </div>

        <div className="max-w-lg">
          <img 
            src={hero}
            alt="Rectangle-137"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
