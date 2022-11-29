import React, { useState } from "react";
import Logo from "../Assets/OutscalLogo.png";
import { GoChevronDown } from "react-icons/go";
import { TfiArrowTopRight } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  let [nav, setNav] = useState(true);
  return (
    <div className="bg-black py-10 md:px-16 lg:px-20 px-8 flex  items-center text-gray-300 justify-between lg:justify-around lg:mx-auto text-xl">
      <div className="hidden lg:flex LEFT ">
        <h1 className="flex items-center hover:text-white hover:cursor-pointer">
          Programs
          <div className="ml-1 relative top-1">
            <GoChevronDown size={20} />
          </div>
        </h1>
        <h1 className="ml-4 hover:text-white hover:cursor-pointer">
          Job Portal
        </h1>
      </div>
      <div className="MIDDLE">
        <img src={Logo} alt="logo" className="h-10" />
      </div>
      <div className="hidden lg:flex RIGHT ">
        <h1 className="flex items-center mr-4 hover:text-white hover:cursor-pointer">
          Community
          <div className="ml-1 relative top-1">
            <GoChevronDown size={20} />
          </div>
        </h1>
        <button className="px-8 py-4 bg-blue-700 rounded-full flex items-center hover:bg-blue-800 hover:-translate-y-[2px] transition-all duration-300 ">
          Join Discord
          <TfiArrowTopRight size={14} />
        </button>
      </div>
      <div
        className="lg:hidden hover:text-white hover:cursor-pointer transition-all duration-200"
        onClick={() => setNav(!nav)}
      >
        <GiHamburgerMenu size={20} />
      </div>

      <div
        className={
          !nav
            ? `flex flex-col absolute top-20 left-5 transition-all ease-in-out  duration-200 `
            : `fixed -left-96  `
        }
      >
        <div className=" lg:hidden flex flex-col LEFT bg-zinc-800  px-8 py-6 rounded-xl  ">
          <h1 className="flex items-center justify-between hover:text-white hover:cursor-pointer w-full">
            Programs
            <div className="ml-1 relative top-1">
              <GoChevronDown size={20} />
            </div>
          </h1>
          <h1 className="lg:ml-4 hover:text-white hover:cursor-pointer my-1 lg:my-0">
            Job Portal
          </h1>
        </div>
        <div className="lg:hidden flex flex-col RIGHT bg-zinc-800  px-8 py-6 rounded-xl  my-1 ">
          <h1 className="flex items-center mr-4 hover:text-white hover:cursor-pointer justify-between w-full">
            Community
            <div className="ml-1 relative top-1">
              <GoChevronDown size={20} />
            </div>
          </h1>
          <button className="px-8 py-4 bg-blue-700 rounded-full flex items-center hover:bg-blue-800 hover:-translate-y-[2px] transition-all duration-300 mt-4 lg:mt-0">
            Join Discord
            <TfiArrowTopRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
