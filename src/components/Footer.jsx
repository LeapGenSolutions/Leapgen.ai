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
        <p className="text-[#FFBFFF]">
          44790 Maynard Square Suite 350, Ashburn, Virginia 20147
        </p>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto mt-4 text-sm text-gray-400 flex justify-between items-center border-t-[0.2px] border-t-[#d640d6] pt-[20px] max-md:flex-col max-md:items-start max-md:gap-[20px]">
        <p className="text-[#FFBFFF]">
          © Leapgen Solutions. 2024. All rights reserved. Privacy Policy.
        </p>
        <div className="flex gap-[20px]">
        <a
            href="https://x.com/LeapgenAi"
            target="_blank"
            rel="noreferrer"
            className="text-twitter-x-color hover:text-gray-600 w-[28px] h-[28px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
              focusable="false" width="28px" height="28px"
              className="w-full h-full">
              <g fill="#FFBFFF">
                <path transform="scale(8)" d="M27.816,27.422l-9.069-12.803l8.381-9.224c0.546-0.6,0.482-1.512-0.142-2.038c-0.623-0.526-1.57-0.464-2.116,0.136	l-7.869,8.66l-3.329-4.699c-0.32-0.452-0.943-0.557-1.395-0.238c-0.45,0.319-0.558,0.943-0.238,1.395L25.066,27h-3.549L5.934,5h3.55	l0.694,0.981c0.319,0.451,0.944,0.557,1.395,0.238c0.45-0.319,0.557-0.943,0.238-1.395l-0.994-1.403C10.629,3.158,10.324,3,10,3H4	C3.626,3,3.283,3.209,3.111,3.542C2.94,3.874,2.968,4.273,3.184,4.579l9.068,12.802l-8.381,9.224	c-0.546,0.6-0.482,1.512,0.142,2.038C4.297,28.882,4.648,29,4.999,29c0.418,0,0.833-0.167,1.13-0.494l7.869-8.66l6.186,8.733	C20.371,28.843,20.676,29,21,29h6c0.374,0,0.717-0.209,0.889-0.541C28.06,28.127,28.032,27.728,27.816,27.422z" />
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/leap-gen-solutions/"
            className="text-linkedin-color hover:text-gray-600 w-[28px] h-[28px]"
            target="_blank" rel="noreferrer"
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
          </a>
          <a
            href="https://www.instagram.com/leapgen_solutions/"
            className="text-instagram-color hover:text-gray-600 w-[28px] h-[28px]"
            target="_blank" rel="noreferrer"
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
          </a>
          <a
            href="https://www.youtube.com/@LeapGenSolutions"
            className="text-youtube-color hover:text-gray-600 w-[28px] h-[28px]"
            target="_blank" rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className="w-full h-full"
            >
              <g fill="#FFBFFF">
                <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-72.11,61.81-48,32A4,4,0,0,1,108,160V96a4,4,0,0,1,6.22-3.33l48,32a4,4,0,0,1,0,6.66Z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
