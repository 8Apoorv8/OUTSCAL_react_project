import React from "react";
import { FaDiscord } from "react-icons/fa";
const Community = () => {
  return (
    <div className="bg-black text-white py-10  text-center">
      <div className="md:px-16 lg:px-20 px-8">
        <h1 className="text-5xl font-bold">Community</h1>
        <p className="text-xl font-semibold my-8 text-gray-300 md:flex flex-col">
          Home 🏡 to thousands of game developers, designers, artists,
          <span>producers and builders in web2 & web3 ecosystem</span>
        </p>
        <div className="flex justify-center">
          <hr className="w-[150px]" />
        </div>
        <div className="flex justify-center mt-16">
          <button className="flex items-center px-10 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white rounded-full text-xl font-semibold ">
            Join Community Now <FaDiscord className="ml-4" size={20} />
          </button>
        </div>
      </div>
      <div className="mt-16  overflow-x-hidden">
        <img
          src="https://uploads-ssl.webflow.com/6178422b9e7509748411989b/621e2671fbd8d8689e1e38d0_Outscal%20discord%20server%20mockup%20-p-1600.png"
          alt="discord"
          className=" object-cover border-b border-zinc-700   "
        />
      </div>
    </div>
  );
};

export default Community;
