import React from "react";
import { fData } from "../API/FeaturedApi";
const Featured = () => {
  return (
    <div className="bg-black text-white py-10 md:px-16 lg:px-20 px-8 text-center">
      <div className="mt-16">
        <h1 className="text-2xl font-semibold tracking-widest">FEATURED IN</h1>
        <div className="flex justify-center mt-4 gap-8">
          {fData.map(({ id, img }) => (
            <div key={id} className=" flex items-center">
              <img src={img} alt="logo" className="w-[100px] md:w-[110px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
