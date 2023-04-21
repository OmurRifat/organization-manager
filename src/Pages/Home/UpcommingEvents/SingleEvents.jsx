import React from 'react';

const SingleEvents = ({singleEvents}) => {
    const {id,name,image,date,location} = singleEvents;
    return (
        <div>
            <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
          <img className="w-96 rounded-t-lg" src={image}  alt=""  />
        </a>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
              {date}
              </p>
           <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
              {location}
          </p>
         
        </div>
      </div>
    </div>
        </div>
    );
};

export default SingleEvents;