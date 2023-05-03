import React from 'react';
import { useParams } from 'react-router-dom';
import { useOrganizationsGetByIdQuery } from '../../../features/organizations/organizationsApi';
import detailsimage from '../../../assets/forest.png'
const OrganizationDetails = () => {
    const {id} = useParams()
    const {data, isError,isLoading} = useOrganizationsGetByIdQuery(id);
  const {name} = data || {}
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-[100px] container h-96 rounded-lg shadow w-[1000px] justify-center ml-[120px]">
        <div className="">
        <h1 className="font-bold text-black ml-20 mt-5 mb-5 text-5xl">
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


      <div class="grid lg:grid-cols-4 grid-cols-2 px-4 md:grid-cols-2 gap-4 grid-cols-1 p-9 m-9">

        <div className=" cursor-pointer hover:shadow-xl  drop-shadow-lg rounded-lg shadow " >
            <img class="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/344/34/342/cyberpunk-purple-fantasy-art-city-wallpaper-preview.jpg" alt="" />
        </div>

        <div className=" cursor-pointer hover:shadow-xl  bg-white drop-shadow-lg rounded-lg shadow ">
            <img class="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/344/34/342/cyberpunk-purple-fantasy-art-city-wallpaper-preview.jpg" alt="" />
        </div>

        <div className="cursor-pointer hover:shadow-xl  bg-white drop-shadow-lg rounded-lg shadow ">
            <img class="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/344/34/342/cyberpunk-purple-fantasy-art-city-wallpaper-preview.jpg" alt="" />
        </div>

        <div className="cursor-pointer hover:shadow-xl  bg-white drop-shadow-lg rounded-lg shadow ">
            <img class="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/344/34/342/cyberpunk-purple-fantasy-art-city-wallpaper-preview.jpg" alt="" />
        </div>
    </div>



        </div>
    );
};

export default OrganizationDetails;