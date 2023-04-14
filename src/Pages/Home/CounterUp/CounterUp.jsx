import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUp = () => {
    const [countOn,setCountOn] = useState(false);


  return (
    <div className="py-24 my-14 text-center bg-[#2A9D8F]">
     <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false) }>
     <div className="container grid grid-cols-4 ">
        <div>
          <h2 className="text-4xl font-semibold mb-1">
           {countOn && <CountUp start={0} end={2000} duration={2} delay={0}/>}+
          </h2>
          <p className="capitalize">project completed</p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-1">
          {countOn && <CountUp start={0} end={3000} duration={2} delay={0}/>}+
          </h2>
          <p className="capitalize">Happy clients</p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-1">
          {countOn && <CountUp start={0} end={5000} duration={2} delay={0}/>}+
          </h2>
          <p className="capitalize">cups of coffee</p>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-1">
          {countOn && <CountUp start={0} end={4000} duration={2} delay={0}/>}+
          </h2>
          <p className="capitalize">real professionals</p>
        </div>
      </div>
     </ScrollTrigger>
    </div>
  );
};

export default CounterUp;
