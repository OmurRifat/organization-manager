import React from "react";

const SingleNews = ({singleNews}) => {
    const {id,name,image,description} = singleNews;
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={image}
            alt=""
          />
        </a>
        <div className="p-5">
          
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          
           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description.length > 80 ? description.slice(0,80) : description}
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
