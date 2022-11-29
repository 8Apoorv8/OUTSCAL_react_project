import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {



  const changeOutline = (e) => {
    let a = e.target.parentNode.classList
    let z = [...a].includes("DIV")
    if (z) {
      e.target.parentNode.style.outline = "none"
      e.target.parentNode.classList.remove("DIV")
    }

  }
  return (
    <div className="py-10 md:px-16 lg:px-20 px-8 bg-black h-full text-white">
      <h1 className="text-6xl text-center font-bold md:flex md:flex-col">
        <span>Global community of </span>
        <span> game builders.</span>
      </h1>
      <h2 className="my-3 text-xl text-center">
        Learn, build games and work with the top 1% gaming studios.
      </h2>
      <div className=" flex justify-center  my-28">
        <div className="DIV outline-dashed  flex items-center  rounded-full bg-zinc-900" id="BOX" onClick={changeOutline} >
          <input
            type="email"
            placeholder="Enter Your Email to start"
            className="focus:outline-none text-white  px-10 py-4 rounded-full text-xl bg-transparent  "
          />
          <FaArrowRight
            size={30}
            className="mr-8 hover:translate-x-2 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
