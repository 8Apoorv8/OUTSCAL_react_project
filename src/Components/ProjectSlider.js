import React from "react";
import { projectData as pData } from "../API/ProjectSlider";
const ProjectSlider = () => {
  return (
    <div
      className=" flex relative items-center overflow-auto scrollbar-hide scroll-smooth mt-20 "
      id="slider"
    >
      <div className=" flex gap-8">
        {pData.map(({ id, pic, title, madeIn }) => (
          <div
            key={id}
            className="flex flex-col  items-center   py-8 px-6 bg-zinc-800 rounded-3xl w-[460px] "
          >
            <div className="">
              <img src={pic} alt="ProjectPic" className="w-[400px]" />
            </div>
            <h1 className="mt-16 text-2xl font-bold mb-4">{title}</h1>
            <h2 className="text-gray-300">{madeIn}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
