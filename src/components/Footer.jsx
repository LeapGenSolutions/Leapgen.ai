import React from "react";

function Footer({ handleMenuClick }) {
  return (
    <footer className="bg-[#07020e] text-white px-[95px] pt-[80px] pb-[40px] border-t-[0.2px] border-t-[#d640d6] flex flex-col gap-[50px] max-md:p-[30px]">
      <div className="container mx-auto flex flex-col gap-[25px]">
        <div className="flex flex-col justify-start opacity-100 flex-shrink-0 transform-none w-fit">
          <h1 className="text-[62px] font-bold leading-[1.5em] tracking-[-2px] text-left text-gradient">
            Leapgen.ai
          </h1>
        </div>
        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-[40px] flex-wrap">
            <li
              onClick={() => {
                handleMenuClick("hero");
              }}
            >
              <button className="text-[#FFBFFF] hover:text-[#d640d6] text-[14px] cursor-pointer">
                Home
              </button>
            </li>
            <li
              onClick={() => {
                handleMenuClick("about");
              }}
            >
              <button className="text-[#FFBFFF] hover:text-[#d640d6] text-[14px] cursor-pointer">
                About
              </button>
            </li>
            <li
              onClick={() => {
                handleMenuClick("features");
              }}
            >
              <button className="text-[#FFBFFF] hover:text-[#d640d6] text-[14px] cursor-pointer">
                Features
              </button>
            </li>
            <li
              onClick={() => {
                handleMenuClick("domains");
              }}
            >
              <button className="text-[#FFBFFF] hover:text-[#d640d6] text-[14px] cursor-pointer">
                Domains
              </button>
            </li>
            <li
              onClick={() => {
                handleMenuClick("services");
              }}
            >
              <button className="text-[#FFBFFF] hover:text-[#d640d6] text-[14px] cursor-pointer">
                Services
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto mt-4 text-sm text-gray-400 flex justify-between items-center border-t-[0.2px] border-t-[#d640d6] pt-[20px] max-md:flex-col max-md:items-start max-md:gap-[20px]">
        <p className="text-[#FFBFFF]">
          © Leapgen Solutions. 2024. All rights reserved. Privacy Policy.
        </p>
        <div className="flex gap-[20px]">
          <button
            href="https://twitter.com/yourcompany"
            className="text-twitter-color hover:text-gray-600 w-[28px] h-[28px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className="w-full h-full"
            >
              <g fill="#FFBFFF">
                <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>
              </g>
            </svg>
          </button>
          <button
            href="https://www.linkedin.com/company/yourcompany"
            className="text-linkedin-color hover:text-gray-600 w-[28px] h-[28px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className="w-full h-full"
            >
              <g fill="#FFBFFF">
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
              </g>
            </svg>
          </button>
          <button
            href="https://www.instagram.com/yourcompany"
            className="text-instagram-color hover:text-gray-600 w-[28px] h-[28px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className="w-full h-full"
            >
              <g fill="#FFBFFF">
                <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
