import { useState, useEffect } from "react";
import SingleNews from "./SingleNews";
import { useReviewGetQuery } from "../../../features/reviews/reviewApi";
import Review from "./Testimonial";

const ReviewMain = () => {
const {data} = useReviewGetQuery();

  return (
    <div className="p-5">
      <h2 className="text-4xl text-black mt-5 mb-10 text-center">All News</h2>
      <div className="grid lg:grid-cols-3 md:gap-10 px-5 md:grid-cols-2 grid-cols-1 ">
        { 
          data?.map(singleReview => <Review key={ singleReview._id } singleReview={singleReview}></Review>)
        }
      </div>
    </div>
  );
};

export default ReviewMain;
