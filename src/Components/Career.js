import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const Career = () => {
  return (
    <div className="bg-black text-white py-10 md:px-16 lg:px-20 px-8 text-center">
      <h1 className="text-5xl font-bold">
        Explore career opportunities in the gaming industry.
      </h1>
      <h3 className="text-xl font-semibold my-4">
        Get 4x better jobs in the booming industry.
      </h3>
      <div className="flex justify-center mt-16">
        <button className="flex items-center px-10 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white rounded-full text-xl font-semibold w-fit justify-between ">
          Create your Job Profile <FiArrowUpRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default Career;
