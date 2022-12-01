import React from "react";
import { FaDiscord } from "react-icons/fa";
import ProjectSlider from "./ProjectSlider";

const Projects = () => {
  return (
    <div className="py-10 md:px-16 lg:px-20 px-8 bg-black h-full text-white">
      <div className="flex flex-col w-full justify-center items-center">
        <button className="flex items-center px-10 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white rounded-full text-xl font-semibold ">
          Join Discord <FaDiscord className="ml-4" size={20} />
        </button>
        <h1 className="text-5xl font-bold mt-14 mb-4">Game Projects</h1>
        <h2 className="text-xl font-semibold text-center text-gray-300">
          Games that helped our community secure job.
        </h2>
      </div>
      <ProjectSlider />
    </div>
  );
};

export default Projects;
