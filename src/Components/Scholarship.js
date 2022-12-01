import React from "react";
import ScholarshipCard from "./ScholarshipCard";
import { FiArrowUpRight } from "react-icons/fi";
const Scholarship = () => {
  return (
    <div className="bg-black text-white py-10 md:px-16 lg:px-20 px-8 text-center ">
      <h1 className="text-4xl md:text-5xl font-bold">
        Launchpad Scholarship 🚀
      </h1>
      <h2 className="text-2xl my-6">
        Two weeks of laser-focused game building
      </h2>
      <ScholarshipCard />
      <div className="flex justify-center mt-20">
        <button className="flex items-center px-10 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white rounded-full text-xl font-semibold w-fit justify-between  ">
          Apply Now{" "}
          <FiArrowUpRight className="ml-4 relative top-[1px]" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Scholarship;
