import React from "react";
import Slider from "react-slick";
import { projectData as pData } from "../API/ProjectSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div id="slider" className="mt-16">
      <Slider {...settings}>
        {pData.map(({ id, pic, title, madeIn }) => (
          <div>
            <div
              key={id}
              className="text-center  bg-zinc-800 px-6 py-8 rounded-3xl mx-4 h-[370px]"
            >
              <div>
                <img src={pic} alt="projectLogo" className="object-cover" />
              </div>
              <h1 className="text-2xl font-semibold mt-8 mb-4">{title}</h1>
              <h2 className="text-gray-300">{madeIn}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
