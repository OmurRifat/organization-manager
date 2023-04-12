import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import donate from '../../../assets/donate.png'
import people from '../../../assets/people.png'
import cap from '../../../assets/cap.png'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 568 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 568, min: 0 },
    items: 1
  }
};

const Review = () => {
  const styleObject = {
    h3: {
      color: "#2A9D8F",
      marginBottom: "10px",
    },
    h2: {
      color: "#4D4D4D",
      marginBottom: "20px",
    },
    gradient: {
      background: "rgba(42, 157, 143, 0.15)",
    },
    pColor: {
      color: "#656565",
    },
    primary: {
      color: "#2A9D8F",
    },
    secondary: {
      backgroundColor: "#2A9D8F",
    },
  };
  return (
    <>
      <div className="text-center px-3 md:px-0 pt-20 pb-16">
        <h3 style={styleObject.h3} className="2xl font-medium">
        Talk with our happy client
        </h3>
        <h2 style={styleObject.h2} className="text-4xl font-semibold max-w-2xl mx-auto">
        Lets Learn What Our Client Says
        </h2>
        <p
          style={styleObject.pColor}
          className="font-normal text-xl max-w-xl mx-auto"
        >
          Our Client is much more happy and confident about work,their reviews will give you a clear picture.
        </p>
      </div>


      
      <div style={styleObject.gradient} className="pt-16 pb-16 px-6 text-center">
      
      <Carousel responsive={responsive} infinite={true}   arrows={false} swipeable={false} autoPlaySpeed={2000} 
         containerClass="carousel-container" autoPlay={true}
       removeArrowOnDeviceType={["tablet", "mobile"]}
      className="mb-10 pb-12">
        
          {/* card----->1 */}
          <div className="max-w-sm  p-6 h-80 bg-white border border-gray-200 rounded-lg shadow ">
            <div
              style={styleObject.secondary}
              className="w-16 mb-5 h-16 flex justify-center items-center "
            >
              <img
                src={donate}
                width={20}
                height={20}
                alt="picture of the client"
              />
            </div>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[260px]">
              You can help by donating for planting, maintenance, seeds and
              other operational 
            </p>
            <div className="flex items-center">
              <Link
                to="/"
                style={styleObject.primary}
                className="h-6 font-normal "
              >
                Iqbal Foundation
              </Link>
              <FaLongArrowAltRight
                style={{ color: "#2A9D8F" }}
                className="w-8 h-4"
              ></FaLongArrowAltRight>
            </div>
          </div>
          {/* card----->2 */}
          <div className="max-w-sm p-6 h-80   bg-white border border-gray-200 rounded-lg shadow ">
            <div
              style={{ backgroundColor: "#2A9D8F", marginBottom: "20px" }}
              className="w-16 h-16 flex justify-center items-center "
            >
              <img
                src={people}
                width={20}
                height={20}
                alt="picture of the client"
              />
            </div>

            <p className="mb-3  font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[260px]">
              You can help grow by becoming our volunteer. You can directly
              plant trees, help with gardening, do outreach and other
              interesting programs
            </p>
            <div className="flex items-center">
              <Link
                to="/"
                style={styleObject.primary}
                className="h-6 font-normal "
              >
               Peace Foundation
              </Link>
              <FaLongArrowAltRight
                style={{ color: "#2A9D8F" }}
                className="w-8 h-4"
              ></FaLongArrowAltRight>
            </div>
          </div>
          {/* card----->3 */}
          <div className="max-w-sm p-6 h-80 bg-white border border-gray-200 rounded-lg shadow ">
            <div
              style={{ backgroundColor: "#2A9D8F", marginBottom: "20px" }}
              className="w-16 h-16 flex justify-center items-center "
            >
              <img
                src={cap}
                width={20}
                height={20}
                alt="picture of the client"
              />
            </div>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[260px]">
              You will learn about how to plant trees, care for trees and other
              things by joining as a farmer
            </p>
            <div className="flex items-center">
              <Link
                to="/"
                style={styleObject.primary}
                className="h-6 font-normal "
              >
                Omor Club
              </Link>
              <FaLongArrowAltRight
                style={{ color: "#2A9D8F" }}
                className="w-8 h-4"
              ></FaLongArrowAltRight>
            </div>
          </div>
        {/* </div> */}
          </Carousel>
      
        <div className=" flex justify-center  items-center bg-white border mx-auto w-28 h-16">
          <button  style={styleObject.primary} className="cursor-pointer">
          <FaLongArrowAltLeft
           
          ></FaLongArrowAltLeft>
          </button>
          <button     
            style={styleObject.secondary}
            className="w-12 h-10 ml-2 flex justify-center items-center bg-white"
          >
            <FaLongArrowAltRight></FaLongArrowAltRight>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
