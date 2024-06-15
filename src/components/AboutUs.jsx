import React from "react";
import "../index.css";
import globeImage from "../assets/globe-image.png";

const AboutUs = () => {
  return (
    <div className="relative flex items-center justify-center p-10 bg-[#07020e] pt-[80px]">
      <div className="relative z-10 flex flex-row flex-wrap max-md:flex-col max-md:w-fit items-center p-10 bg-[#07020e] rounded-xl custom-border-container">
        <div className="max-w-lg text-white mb-8 md:mb-0">
          <h1 className="text-[40px] max-md:text-[25px] font-normal mb-4 text-[#FFBFFF]">
            About Leapgen.ai
          </h1>
          <p className="text-base description max-md:text-[14px]">
            Welcome to LeapGen AI, where we blend innovation with intelligence
            to create cutting-edge AI solutions that redefine industries. As a
            leading provider of AI products and services, we are committed to
            empowering businesses with the tools and expertise they need to
            thrive in the digital age.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={globeImage}
            alt="Leapgen AI"
            className="rounded-xl w-[420px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
