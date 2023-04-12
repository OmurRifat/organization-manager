import React from "react";
import { Link } from "react-router-dom";
import { RxVideo } from "react-icons/rx";

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
      className="text-black md:mx-20"
    >
      <div className="md:flex p-5 mb-10 justify-start items-center ">
        <div>
          <h1 className="font-semibold  text-5xl">
            Have A Dream? Let's Dream Together!
          </h1>
          <p className="font-sans mt-5 mb-3">
            We are organization manager. We dream to Build a system for your
            organization, by which we can Dream together.
          </p>
          <div className="flex ">
            <Link to="signup">
              <button
                style={styleObject.button}
                className="flex mt-2 mr-4 px-4 py-3 text-white rounded p-1 items-center justify-center"
              >
                Sign Up
              </button>
            </Link>
            <button
              style={styleObject.button}
              className="flex mt-2 px-4 py-3 text-white rounded p-1 items-center justify-center"
            >
              <RxVideo className="mr-2"></RxVideo> Explore Our Vision
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://i.ibb.co/RzzH2KN/Rectangle-137.png"
            alt="Rectangle-137"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
