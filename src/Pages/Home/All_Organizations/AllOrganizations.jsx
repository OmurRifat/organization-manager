// configuration 
import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
// custom css file 
import './AllOrganizations.css';
import { useOrganizationsGetQuery } from '../../../features/organizations/organizationsApi';
import { Link, useLoaderData } from 'react-router-dom';

const AllOrganizations = () => {
    const styleObject = {
        button: {
            background: '#2A9D8F',
          }
      };
      const organization = useLoaderData();

    const {data:organizations, isLoading, isError, isSuccess} = useOrganizationsGetQuery()
    const [search, setSearch] = useState('');
    console.log(search);
   
    let content = null;

    if(isLoading && !isError){
        content = <p>Loading</p>
    }
    if(!isLoading && isError){
        content = <p>An error occured</p>
    }
    if(!isLoading && !isError && organizations.length ===0){
        content = <p>No Data Found</p>
    }
    if(!isLoading && !isError && organizations.length > 0){
        content = <tbody>
        { organizations.filter((organization) => {
            return search?.toLowerCase() === '' ? organization : organization?.name?.toLowerCase().includes(search);
        }).map((organization) => (

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    { organization.name }
                </th>
                <td class="px-6 py-4">
                    { organization.founder }
                </td>
                <td class="px-6 py-4">
                    { organization.email }
                </td>
                <td class="px-6 py-4">
                    { organization.address }
                </td>
                <td class="px-6 py-4">
                    <Link to={`/organizations/${organization._id}`} >
                    <button style={ styleObject.button } type="button" class="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Details</button>
                    </Link>
                    
                </td>
            </tr>

        )) }

    </tbody>
    }

    return (
        <div>

            <div className="relative  flex justify-end items-center md:mr-6 my-2">
                <input
                    onChange={ (e) => setSearch(e.target.value) }
                    type="search"
                    className=" p-2 bg-white text-black rounded-md"
                    placeholder="Organization Search"
                />
                <div className="absolute text-black  pin-r pin-t mt-3 mr-4 ">
                    <p className="cursor-pointer mb-2">
                        <BsSearch />
                    </p>
                </div>
            </div>

            <div class="relative overflow-x-auto p-5">
                <table class="w-full text-sm text-left mt-8 text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                <b>Foundation Name </b>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <b>Founder Name</b>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <b>Founder Email</b>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <b>Address</b>
                            </th>
                        </tr>
                    </thead>
                    {content}
                </table>
            </div>
        </div>


    );
};

export default AllOrganizations;