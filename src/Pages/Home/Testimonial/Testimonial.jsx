import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
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

const Testimonial = () => {
  const styleObject = {
    h3: {
      color: "#2A9D8F",
      marginBottom: "10px",
    },
    h2: {
      color: "black",
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

  const [review, setReview] = useState([]);
 
  useEffect(() => {
    fetch(
      "http://localhost:5000/reviews"
    )
      .then((res) => res.json())
      .then((data) => {
        setReview(data)
      });
  }, []);



  return (
    <>
      <div className="pt-24 pb-10 text-center">
        <h3 className="text-2xl mb-4 bg-gradient-to-r text-transparent bg-clip-text from-green-400 via-green-500 to-green-600 font-medium">
          Talk with our happy client
        </h3>
        <h2
          style={styleObject.h2}
          className=" text-3xl md:text-4xl font-semibold max-w-2xl mx-auto"
        >
          Let's Learn What Our Client Says
        </h2>

        <p className="mb-6 mx-auto text-base max-w-xs md:max-w-sm font-normal text-gray-500 dark:text-gray-400 text-center">
          Our Client is much more happy and confident about work,their reviews
          will give you a clear picture.
        </p>
      </div>
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
          {review?.map((singleReview) => (
            <div
              key={singleReview._id}
              className="pl-4 mr-4 pt-4 h-72 bg-white border border-gray-200 rounded-lg shadow "
            >
              <div className="w-14 mb-6 h-14 mx-auto mt-3 rounded-full flex justify-center items-center ">
                <img
                  src={singleReview?.photo}
                  className="rounded-full w-16 h-16"
                  alt="picture of the client"
                />
              </div>

              <h4 className="text-black font-bold text-center">
                {singleReview?.name}
              </h4>
              <h4 className="text-black font-bold text-center">
             
              </h4>
              <p className="text-center font-normal text-gray-500 dark:text-gray-400 mx-auto  max-w-[260px]">
                {singleReview?.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;