import React, { useEffect, useRef } from "react";
import domain1 from "../assets/public.avif";
import domain2 from "../assets/govt.avif";
import domain3 from "../assets/education.png";
import domain4 from "../assets/finance.png";
import domain5 from "../assets/retail.webp";
import domain6 from "../assets/healthcare.png";
import "../index.css";

const Domains = () => {
  const features = [
    {
      id: 1,
      title: "Public Sector",
      description:
        "We deploy secure, scalable AI solutions to streamline government operations, enhance public safety, and facilitate more engaging citizen services. Our technology is designed to support policy formulation and public sector workflow optimization. ",
      icon: domain1, // Replace with actual path to the icon
    },
    {
      id: 2,
      title: "State and Local Government",
      description:
        "Tailored AI applications enhance municipal efficiency and governance. Solutions include automated public records management, resource allocation optimization, and predictive analytics for urban planning.",
      icon: domain2, // Replace with actual path to the icon
    },
    {
      id: 3,
      title: "Higher Education",
      description:
        "AI-driven systems in higher education refine student learning outcomes and optimize campus management. Our technologies assist in data-driven decision-making, personalized learning paths, and administrative automation.",
      icon: domain3, // Replace with actual path to the icon
    },
    {
      id: 4,
      title: "Financial Services",
      description:
        "Advanced algorithms for risk assessment, fraud detection, and regulatory compliance are employed. Our solutions improve transactional efficiency and client advisory services through intelligent data analysis.",
      icon: domain4, // Replace with actual path to the icon
    },
    {
      id: 5,
      title: "Retail",
      description:
        "We implement AI to revolutionize inventory management, customer experience, and market analytics. Our tools enable retailers to offer personalized shopping experiences and optimize supply chain logistics.",
      icon: domain5, // Replace with actual path to the icon
    },
    {
      id: 6,
      title: "Healthcare",
      description:
        "AI applications improve diagnostics, patient management, and operational efficiencies. Predictive analytics enhance patient care models, while AI-driven systems streamline administrative tasks.",
      icon: domain6, // Replace with actual path to the icon
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
      <div className="relative z-10 flex flex-col items-center border-[1px] rounded-full border-[#ff6eff] px-4 py-2">
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
          Domains
        </h2>
      </div>
      <div className="flex flex-row flex-wrap gap-[20px] max-w-[1000px] mt-[60px]">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="domain-card"
          >
            <div className="flex flex-row items-center gap-[15px]">
              <img
                src={feature.icon}
                alt={feature.title}
                className="domain-icon"
              />
              <h3 className="domain-title">{feature.title}</h3>
            </div>
            <p className="domain-description max-md:text-[14px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domains;
