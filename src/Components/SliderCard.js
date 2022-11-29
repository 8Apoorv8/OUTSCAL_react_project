import React from "react";
import { cardData as card } from "../API/SliderCardApi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black text-white md:px-16 lg:px-20 px-8 h-full">
      <h1 className="text-center text-4xl font-bold mb-16">WALL OF LOVE</h1>

      <Slider {...settings}>
        {card.map(({ id, pic, cLogo, words, name }) => (
          <div>
            <div className="flex justify-between bg-zinc-800 items-center md:h-[400px] lg:h-[450px] h-[550px]  p-12  gap-4 rounded-3xl mx-6">
              <div className="LEFT grid place-content-center w-[800px]">
                <img src={pic} alt="ProfilePic" className="rounded-full" />
              </div>
              <div className="RIGHT grid place-content-center  ">
                <img src={cLogo} alt="companyLogo" className="w-[100px]" />
                <p className="mt-4 mb-8 text-lg font-semibold text-gray-200">
                  {words}
                </p>
                <h1 className="text-xl font-bold">{name}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;
