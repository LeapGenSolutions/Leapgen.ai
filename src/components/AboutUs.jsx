import React, { useEffect, useState } from "react";
import "../index.css";
import globeImage from "../assets/globe-image.png";
import Logo from "../assets/logo.png";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    });
    observer.observe(document.querySelector(".custom-border-container"));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex items-center justify-center p-10 bg-[#07020e] pt-[80px]">
      <div
        className={`relative z-10 flex flex-row flex-wrap max-md:flex-col max-md:w-fit items-center p-10 bg-[#07020e] rounded-xl custom-border-container`}
      >
        <div
          className={`max-w-lg text-white mb-8 md:mb-0 gap-[20px] flex flex-col about_div1 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <img alt="" className="w-[120px] h-[120px]" src={Logo} />
          <h1 className="text-[40px] max-md:text-[25px] font-normal text-[#FFBFFF]">
            About Leapgen.ai
          </h1>
          <p className="text-base text-[16px] max-md:text-[14px]">
            Welcome to LeapGen AI, where we blend innovation with intelligence
            to create cutting-edge AI solutions that redefine industries. As a
            leading provider of AI products and services, we are committed to
            empowering businesses with the tools and expertise they need to
            thrive in the digital age.
          </p>
        </div>
        <div
          className={`flex-shrink-0 about_div2 ${
            isVisible ? "is-visible" : ""
          }`}
        >
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
