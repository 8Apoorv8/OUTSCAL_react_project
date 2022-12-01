import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
const Footer2 = () => {
  return (
    <div className="py-10 md:px-16 lg:px-20 px-8 bg-black text-white">
      <hr />
      <div className="mt-14 flex flex-col md:flex-row justify-between">
        <div>
          <h1>Copyright © APOORV_PANDEY</h1>
          <h2 className="mt-4 mb-6 text-gray-400 flex items-center">
            Designed with
            <span className="mx-2">
              <BsFillSuitHeartFill />
            </span>
            in India - Powered by game developer community
          </h2>
        </div>
        <div className="flex w-[150px]  justify-between">
          <h1 className="text-gray-300 hover:text-white transition-all cursor-pointer text-lg">
            Terms
          </h1>
          <h1 className="text-gray-300 hover:text-white transition-all cursor-pointer text-lg">
            Privacy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
