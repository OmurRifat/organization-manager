import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import donate from "../../../assets/donate.png";
import people from "../../../assets/people.png";
import cap from "../../../assets/cap.png";
import ReactStars from "react-rating-stars-component";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonial = ({singleReview}) => {
const {name, ratings, description} = singleReview
  const firstExample = {
    size: 30,
    value: [ratings],
    edit: false
  };

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
     

      <div
        style={styleObject.gradient}
        className="pt-16 pb-16 pl-3 text-center"
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          arrows={false}
          swipeable={false}
          autoPlaySpeed={2000}
          autoPlay={true}
         
          className="mb-10 pb-12 mx-auto"
        >
          {/* card----->1 */}
          <div className=" pl-4 mr-4 pt-4 h-72 bg-white border border-gray-200 rounded-lg shadow ">
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
           
  {/* <ReactStars {...firstExample} classNames='text-red-200' />
  <h3 className="text-black text-left mb-2 font-bold">{name}</h3> */}
            <p className=" font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[260px]">
              "{description}""
            </p>
          </div>
        
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;