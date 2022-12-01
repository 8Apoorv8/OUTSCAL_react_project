import React from "react";
import { partnersData as pData } from "../API/PartnersApi";
const Partners = () => {
  return (
    <div className="py-10 md:px-16 lg:px-20 px-8 bg-black text-white text-center">
      <h1 className="text-5xl font-bold">Hiring partners</h1>
      <h2 className="text-xl font-semibold my-6">
        Partners from web2 and web3 who trust us for world-class talent.
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-5  place-content-center  md:px-16 lg:px-40 mb-14">
        {pData.map(({ id, img }) => (
          <div key={id} className=" grid place-content-center mx-auto">
            <img src={img} alt="LogoImages" className="w-[70px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
