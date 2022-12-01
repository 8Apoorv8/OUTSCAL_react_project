import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import logo from "../Assets/OutscalLogo.png";
import { FaDiscord, FaFacebookSquare } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  const keyLinks = [
    {
      id: 0,
      name: `Programs`,
      arrow: <FiArrowUpRight />,
    },
    {
      id: 1,
      name: "Placements",
    },
    {
      id: 2,
      name: "Job Portal",
    },
    {
      id: 3,
      name: "Community",
      arrow: <FiArrowUpRight />,
    },
  ];
  const Company = [
    {
      id: 0,
      name: `About`,
    },
    {
      id: 1,
      name: "Contact Us",
    },
    {
      id: 2,
      name: "Careers",
    },
    {
      id: 3,
      name: "Partner With Us",
      arrow: <FiArrowUpRight />,
    },
  ];
  const socials = [
    {
      id: 1,
      media: <FaDiscord />,
      style: "pl-0",
    },
    {
      id: 2,
      media: <AiOutlineInstagram />,
    },
    {
      id: 3,
      media: <AiOutlineYoutube />,
    },
    {
      id: 4,
      media: <FaFacebookSquare />,
    },
    {
      id: 5,
      media: <AiOutlineLinkedin />,
    },
    {
      id: 6,
      media: <AiOutlineWhatsApp />,
    },
  ];

  return (
    <div className="bg-black text-white py-10 md:px-16 lg:px-20 px-8 flex flex-col md:flex-row">
      <div className="LEFT mt-24 md:flex-1">
        <div className="TOP flex justify-between">
          <div className="LEFT">
            <h1 className="text-xl font-semibold mb-8">Key Links</h1>

            <ul>
              {keyLinks.map(({ id, name, arrow }) => (
                <li
                  key={id}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-150 my-4 px-2 cursor-pointer"
                >
                  {name}
                  {arrow}
                </li>
              ))}
            </ul>
          </div>
          <div className="RIGHT">
            <h1 className="text-xl font-semibold mb-8">Company</h1>

            <ul>
              {Company.map(({ id, name, arrow }) => (
                <li
                  key={id}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-150 my-4 px-2 cursor-pointer"
                >
                  {name}
                  {arrow}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="DOWN mt-28">
          <div>
            <img src={logo} alt="logo" className="w-[130px]" />
          </div>
          <p className="text-gray-400 my-6">
            We are an ed-tech company, helping candidates to excel in their game
            development & web3 careers by mentorship and placement assistance.
          </p>
          <div className="flex text-gray-400 text-2xl">
            {socials.map(({ id, media, style }) => (
              <div
                key={id}
                className={`px-2 ${style} hover:text-white cursor-pointer transition-all duration-200 hover:-translate-y-1`}
              >
                {media}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="RIGHT md:flex-1 mt-14">
        <div className="bg-zinc-900 flex p-6 rounded-3xl justify-center md:justify-start">
          <div className="LEFT grid place-content-center">
            <div>
              <img
                src="https://uploads-ssl.webflow.com/6178422b9e7509748411989b/62378852c39e265ef28ed8d0_featured%201.png"
                alt="newsleterLogo"
                className="w-[280px]"
              />
            </div>
            <h1 className="text-xl font-bold mt-4">
              Subscribe to our Newsletter.
            </h1>
            <h2 className=" my-4 text-gray-400">
              Stay updated about game development hacks and trends.
            </h2>
            <form className="flex flex-col text-white">
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="focus:outline-none bg-transparent border-b border-b-gray-200 my-4 focus:border-b-blue-600 py-1 "
              />
              <input
                type="email"
                placeholder="Enter Your Email address"
                className="focus:outline-none bg-transparent border-b border-b-gray-200 my-4 focus:border-b-blue-600 py-1"
              />
            </form>
            <div className="flex justify-center">
              <button className="px-28 md:px-20 py-2 bg-blue-700 hover:bg-blue-800 transition-all rounded-lg">
                Start Now
              </button>
            </div>
          </div>
          <div className="RIGHT hidden md:block">
            <div className="grid place-content-center  h-full">
              <img
                src="https://uploads-ssl.webflow.com/6178422b9e7509748411989b/62378bc9a0a74b6c28282c0e_Group%2020.png"
                alt=""
              />
              <img
                src="https://uploads-ssl.webflow.com/6178422b9e7509748411989b/62378bca4a5630e1b105c77b_Group%2021.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
