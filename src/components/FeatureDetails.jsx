import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FeatureDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center p-10 bg-[#07020e] pt-[10rem] gap-[45px]">
      <h2
        onClick={() => navigate("/")}
        className="text-[30px] font-normal leading-[1.5em] tracking-[-2px] text-left text-gradient absolute z-50 left-[50px] top-[25px] hover:cursor-pointer"
      >
        BACK
      </h2>
      <h1 className="text-[72px] max-md:text-[52px] font-bold leading-[1.5em] tracking-[-2px] text-left text-gradient">
        {id === "SurroundAI" ? "SURROUND AI" : id.toUpperCase()}
      </h1>
      <div className="relative z-10 flex flex-row flex-wrap max-md:flex-col max-md:w-fit items-center p-10 bg-[#07020e] rounded-xl custom-border-container">
        <p className="text-base description max-md:text-[16px] my-[2.5rem]">
          {id === "SurroundAI"
            ? "A dynamic framework designed to develop customized conversational AI solutions. SurroundAI equips businesses with built-in accelerators that are immediately deployable within the customer's environment, allowing for significant flexibility in creating solutions that are either fully custom or based on existing architectural patterns. To improve customer interaction through sophisticated AI-driven conversations organizations can use our product Surround AI."
            : id === "Octopus"
            ? "Our advanced tool crafted to prepare data for RAG readiness, facilitating the enhancement of datasets for training large language models. Octopus optimizes diverse unstructured content—text, images, and more—ensuring compliance for Retrieval Augmented Generation. Octopus ensures that data is compliant and optimized for Retrieval Augmented Generation, providing a robust foundation for building GPTs that require external data sources to augment their built-in knowledge base, particularly useful for applications requiring up-to-date and specific information not contained within the initial training data."
            : "A revolutionary platform that automates the medical prior authorization process by intelligently analyzing patient data and matching it against clinical guidelines and insurance policies. Seismic significantly streamlines healthcare workflows, enabling faster and more accurate decision-making, thus improving patient care and reducing administrative burdens."}
        </p>
      </div>
    </div>
  );
}

export default FeatureDetails;
