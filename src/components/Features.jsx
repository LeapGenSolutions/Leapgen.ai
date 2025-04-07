import React, { useEffect, useRef } from "react";
import service1 from "../assets/features1.avif";
import service2 from "../assets/features2.avif";
import service3 from "../assets/features3.avif";
import pdf_file from "../assets/LeapGen AI Brochure 2024.pdf"

import "../index.css";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Surround AI",
      description:
        "Explore custom AI solutions designed for your business needs.",
      icon: service3, // Replace with actual path to the icon
    },
    {
      id: 2,
      title: "Data Coffee",
      description:
        "Optimize data compliance and readiness with advanced processing.",
      icon: service1, // Replace with actual path to the icon
    },
    {
      id: 3,
      title: "Seismic",
      description:
        "Revolutionize medical authorization with intelligent automation.",
      icon: service2, // Replace with actual path to the icon
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const current_cardRef = cardRefs.current;
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (current_cardRef) {
        current_cardRef.forEach((card) => {
          if (card) observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center p-10 bg-[#07020e] pt-[80px]">
      <div className="relative z-10 flex flex-col items-center mb-12 border-[1px] rounded-full border-[#ff6eff] px-4 py-2">
        <h2 className="text-[18px] font-semibold text-white gradient-text flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            color="rgb(255, 191, 255)"
            className="w-4 mr-2"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Features
        </h2>
      </div>
      <a 
        className="text-[18px] font-semibold border-[1px] text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg shadow-lg flex flex-row items-center justify-center"
        href={pdf_file} 
        download={"LeapGen AI Brochure 2025.pdf"}>
          Download our brochure now!
      </a>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="feature-card max-md:p-1"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="feature-icon"
            />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <Link
              to={`/${feature.title.replaceAll(" ", "")}`}
              className="feature-button"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
