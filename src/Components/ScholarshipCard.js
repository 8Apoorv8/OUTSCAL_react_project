import React from "react";
import { motion as m } from "framer-motion";
const ScholarshipCard = () => {
  const movingImages = [
    "https://uploads-ssl.webflow.com/6178422b9e7509748411989b/623f7fff2d3f14640c129c64_10.png",
    "https://uploads-ssl.webflow.com/6178422b9e7509748411989b/623f7fff2c7bdd7cc488c102_12.png",
  ];
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-16 justify-center item-center">
      <div className="TOP relative hover:scale-90 transition-all duration-300 ease-in-out group">
        <m.img
          whileInView={{ y: [10, -8] }}
          transition={{ yoyo: Infinity, duration: 1.4 }}
          src={movingImages[0]}
          alt=""
          className=" z-30 absolute -top-20 -left-16 w-[150px]"
        />
        <div className="text-start bg-neutral-900 px-14 py-10 rounded-3xl outline outline-blue-800 outline-2 group-hover:outline-none group-hover:shadow-2xl group-hover:shadow-blue-600 h-[260px]">
          <h1 className="text-4xl">
            Week <span className="font-bold">01</span>
          </h1>
          <li className="mt-8 text-gray-300">Perfecting C++</li>
          <li className="my-2 text-gray-300">
            Building simple game projects on C++
          </li>
        </div>
      </div>
      <div className="DOWN relative hover:scale-90 transition-all duration-300 ease-in-out group">
        <div className="text-start bg-neutral-900 px-14 py-10 rounded-3xl outline outline-blue-800 outline-2 group-hover:outline-none group-hover:shadow-2xl group-hover:shadow-blue-600 h-[260px]">
          <h1 className="text-4xl">
            Week <span className="font-bold">02</span>
          </h1>
          <li className="mt-8 text-gray-300">Introductions to unity</li>
          <li className="my-2 text-gray-300">
            Building hyper-casual games in Unity
          </li>
          <li className="my-2 text-gray-300">Builders will qualify for FSGD</li>
        </div>
        <m.img
          whileInView={{ y: [10, -8] }}
          transition={{ yoyo: Infinity, duration: 1.4 }}
          src={movingImages[1]}
          alt=""
          className=" z-30 absolute -bottom-10 -right-8 w-[150px]"
        />
      </div>
    </div>
  );
};

export default ScholarshipCard;
