import React from 'react';
import { useParams } from 'react-router-dom';
import { useOrganizationsGetByIdQuery } from '../../../features/organizations/organizationsApi';
import detailsimage from '../../../assets/forest.png'
const OrganizationDetails = () => {
    const {id} = useParams()
    const {data, isError,isLoading} = useOrganizationsGetByIdQuery(id);


    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-[100px] container mx-auto p-3 px-6 ">
        <div className="text-d">
          <div className="w-[300px] h-[300px]">
            <img
              src={detailsimage}
              className="flex-shrink-0 h-[96%] w-[100%] mx-14 object-cover"
            ></img>
          </div>

          
        </div>
        <div className="mt-[30px] md:mt-0">
        <h1 className="font-bold text-black ml-20 mt-5 text-3xl">
            {data?.name}
          </h1>
          <ul className="list-t text-black">
            <li className="text-t ml-24">
              <b>Founder:</b> {data?.founder}
            </li>
            <li className="text-t ml-24">
              <b>Email:</b> {data?.email}
            </li>
           
            <li className="text-t ml-24">
              <b>Address:</b> {data?.address}
            </li>
            
           
           
          </ul>
        </div>
      </div>
        </div>
    );
};

export default OrganizationDetails;