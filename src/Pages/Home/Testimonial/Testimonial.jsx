import React, { useEffect, useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import donate from "../../../assets/donate.png";
import people from "../../../assets/people.png";
import cap from "../../../assets/cap.png";
import { AiFillStar } from 'react-icons/ai';
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

const Testimonial = () => {
  const [review, setReview] = useState([])
  useEffect(()=>{
fetch('https://organization-manager-server-main-jsarafath.vercel.app/reviews')
.then(res => res.json())
.then(data => setReview(data))
  },[])

  const firstExample = {
    size: 30,
    value:[review.ratings],
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
// https://organization-manager-server-main-jsarafath.vercel.app
// http://localhost:5000

  useEffect(() => {
    fetch('https://organization-manager-server-main-jsarafath.vercel.app/reviews')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [reviews])


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

          {
            review?.map(item => (
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
           
               
  <h4 className="text-black font-bold text-left">{item.name}</h4>
              <p className=" font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[260px]">
                "{item.description}"
              </p>
            </div>
            ))
          }
          {/* card----->1 */}
        
         
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;