import { useState, useEffect } from "react";
import Testimonial from "./Testimonial";


const ReviewMain = () => {
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
  const [review, setReview] = useState([])
  useEffect(()=>{
fetch('https://organization-manager-server-main-jsarafath.vercel.app/reviews')
.then(res => res.json())
.then(data => setReview(data))
  },[])

  return (
    <>
     <div className="p-5">
      
      <div className="">
        { 
          review?.map(singleReview => <Testimonial key={ singleReview._id } singleReview={singleReview}></Testimonial>)
        }
      </div>
    </div>
    </>
   
  );
};

export default ReviewMain;