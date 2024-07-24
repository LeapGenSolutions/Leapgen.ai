import React from "react";
import "../index.css";
import BallVideo from "../assets/ball.mp4";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-[90vh] max-md:h-fit bg-[#07020e] flex-wrap max-md:p-8 gap-[20px]">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col gap-[20px] w-[50%] max-[1445px]:w-[65%] max-[1110px]:w-[80%] max-md:w-[100%]">
          <div className="flex flex-col justify-start opacity-100 flex-shrink-0 transform-none">
            <h1 className="text-[72px] font-bold leading-[1.5em] tracking-[-2px] text-left text-gradient">
              Leapgen.ai
            </h1>
          </div>
          <h2 className="text-base description">
            Pioneering Artificial Intelligence Solutions for Tomorrow’s
            Challenges
          </h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center min-w-[350px]">
        <video width="50%" autoPlay muted loop>
          <source src={BallVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;
