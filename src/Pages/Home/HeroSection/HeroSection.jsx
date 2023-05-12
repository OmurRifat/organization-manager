import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import hero from '../../../assets/hero.png'
import { AuthContext } from "../../../context/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useMember from "../../../hooks/useMember";
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  const [isMember] = useMember(user?.email)

  const styleObject = {
    background: {
      background: "rgba(42, 157, 143, 0.1)",
    },
    button: {
      background: "#2A9D8F",
    },
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }
  return (
    <div
      id="home"
      style={ styleObject.background }
      className="text-black md:px-20"
    >
      <div className="md:flex p-5 mb-24 justify-between items-center ">
        <div className="px-3 md:px-0">
          <h1 className="font-semibold  mb-10 text-4xl">
            Have A Dream?<br />Let's Dream Together!
          </h1>
          <p className="font-sans mt-5 max-w-sm mb-8">
            We are organization manager. We dream to Build a system for your
            organization, by which we can Dream together.
          </p>
          <div className="flex ">
            {
              user?.uid ? <>
              {
                isAdmin && <Link to="/dashboard/admin">
                <button
                  style={ styleObject.button }
                  className="flex mt-2 mr-4 px-3 py-3 md:px-8 md:py-[8px] text-white rounded p-1 items-center justify-center"
                >
                 Dashboard
                </button>
              </Link>
              }
              {
                isMember && <Link to="/dashboard/member">
                <button
                  style={ styleObject.button }
                  className="flex mt-2 mr-4 px-3 py-3 md:px-8 md:py-[8px] text-white rounded p-1 items-center justify-center"
                >
                 Dashboard
                </button>
              </Link>
              }
              </> :
                <Link to="/signup">
                  <button
                    style={ styleObject.button }
                    className="flex mt-2 mr-4 px-3 py-3 md:px-8 md:py-[8px] text-white rounded p-1 items-center justify-center"
                  >
                    Sign Up
                  </button>
                </Link>
            }
            <HashLink smooth to='/#vision' scroll={ el => scrollWithOffset(el) }
              className="flex border font-medium border-[#2A9D8F] mt-2 md:px-4 py-[8px] text-[#515151] rounded p-1 items-center justify-center"
            >
              <BsFillPlayFill className="md:mr-2 text-xl text-[#2A9D8F]"></BsFillPlayFill> Explore Our Vision
            </HashLink>
          </div>
        </div>
        <div className="max-w-lg">
          <img
            src={ hero }
            alt="Rectangle-137"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
