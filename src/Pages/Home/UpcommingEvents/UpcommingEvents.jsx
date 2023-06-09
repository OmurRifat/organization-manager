import React from 'react';
import { Link } from 'react-router-dom';

const UpcommingEvents = () => {

    const styleObject = {
        bgcolor: {
            background: '#EAF5F4',
        },
        button: {
            background: '#2A9D8F',
          },
      };


    return (
        <div className='py-9'>
            <p className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 via-green-500 to-green-600 font-semibold pb-2 text-center" >Upcoming Events</p>
            <h1 className='text-3xl mb-3 px-3  md:text-4xl font-semibold text-black text-center'>We Arrange Many Social <br /> Events For Charity Donations</h1>

            <div className='pt-9' >
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:px-24">
                       
                        <div className="blogs">
                        {/* event--->1 */}
                            <div className="flex  mb-10 items-center flex-col md:flex-row lg:flex-row  drop-shadow-lg text-gray-700">
                                <div>
                                <img className='rounded imgSize' src='https://i.ibb.co/wJxs9fQ/event-1-jpg.webp' alt='tree image 1'/>
                                </div>
                                <div className="pt-3 md:pt-0 pb-5 max-w-xs text-center md:text-left md:pb-0 md:pl-4">
                                <h3 className="text-xl mb-2 font-medium">It may be our eternal hope, that with whom</h3>
                                <p className="text-gray-600 text-sm">1 January 2023</p>
                                <p className="text-gray-600 text-sm">Dhaka, Bangladesh</p>
                                </div>
                                
                            </div>
                        {/* event--->2 */}
                            <div className="flex mb-10 items-center flex-col md:flex-row  drop-shadow-lg text-gray-700">
                                <div>
                                <img className='rounded imgSize' src='https://i.ibb.co/D587NTx/event-2-jpg.webp' alt='tree image 2'/>
                                </div>
                                <div className="pt-3 md:pt-0 max-w-xs text-center md:text-left pb-5 md:pb-0 md:pl-4">
                                <h3 className="text-xl mb-2 font-medium">Donation is hope and give without remembering.</h3>
                                <p className="text-gray-600 text-sm">10 July 2023</p>
                                <p className="text-gray-600 text-sm">Dhaka, Bangladesh</p>
                                </div>
                                
                            </div>
                        </div>
                      
                        <div className="blogs">
                        {/* event--->3 */}
                            <div className="flex mb-10 items-center flex-col md:flex-row  drop-shadow-lg text-gray-700">
                                <div>
                                <img className='rounded imgSize' src='https://i.ibb.co/pvNSp78/event-3-jpg.webp' alt='tree image 1'/>
                                </div>
                                <div className="pt-3 md:pt-0 max-w-xs text-center md:text-left pb-5 md:pb-0 md:pl-4 ">
                                <h3 className="text-xl mb-2 font-medium">It would be hardly have been easy for you.</h3>
                                <p className="text-gray-600 text-sm">15 August 2023</p>
                                <p className="text-gray-600 text-sm">Dhaka, Bangladesh</p>
                                </div>
                                
                            </div>
                        {/* event--->4 */}
                            <div className="flex items-center flex-col md:flex-row  drop-shadow-lg text-gray-800">
                                <div>
                                <img className='rounded imgSize' src='https://i.ibb.co/gVjwWW6/event-4-jpg.webp' alt='tree image 2'/>
                                </div>
                                <div className="pt-3 md:pt-0 max-w-xs text-center md:text-left pb-5 md:pb-0 md:pl-4">
                                <h2 className="text-xl pb-2 font-medium">A hand for children, always help for children</h2>
                                <p className="text-gray-600 text-sm">10 December 2023</p>
                                <p className="text-gray-600 text-sm">Dhaka, Bangladesh</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>     
                <br />
            </div>
            <div className='text-center '>
            <Link
                  to='/allevents'
                  style={ styleObject.button }
                  type="button"
                  className="text-white bg-gray-600 hover:text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 "
                >
                  View ALL Events

                </Link>
            </div>
      <br />
        </div>
    );
};

export default UpcommingEvents;