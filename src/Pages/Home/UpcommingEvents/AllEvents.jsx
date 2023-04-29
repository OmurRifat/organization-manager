import { useState, useEffect } from "react";
import SingleEvents from './SingleEvents';

const AllEvents = () => {
    const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://organization-manager-server.onrender.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

    return (
        <div>
            <div className="p-5">
                <h2 className="text-4xl text-black mt-5 mb-10 text-center">All Events</h2>
                <div className="grid lg:grid-cols-3 md:gap-10 px-5 md:grid-cols-2 grid-cols-1 ">
                    {events &&
                        events?.map(singleEvents => <SingleEvents key={singleEvents.id} singleEvents={singleEvents}></SingleEvents>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllEvents;