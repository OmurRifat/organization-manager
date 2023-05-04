import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import bgimage from '../../../assets/bgimage.png'

const CounterUp = () => {
  const [countOn, setCountOn] = useState(false);

  
  return (
    <div style={{backgroundImage :`url(${bgimage})`}} className="py-24 mb-32 text-center  bg-cover">
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 text-[#2A9D8F]">
          <div className="mb-14 md:mb-0">
            <h2 className="text-4xl font-semibold mb-1">
              {countOn && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
              +
            </h2>
            <p className="capitalize">total organizations</p>
          </div>
          <div className="mb-14 md:mb-0">
            <h2 className="text-4xl font-semibold mb-1">
              {countOn && (
                <CountUp start={0} end={2000} duration={2} delay={0} />
              )}
              +
            </h2>
            <p className="capitalize">total volunter</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-1">
              {countOn && (
                <CountUp start={0} end={50000} duration={2} delay={0} />
              )}
              +
            </h2>
            <p className="capitalize">total donation</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default CounterUp;
