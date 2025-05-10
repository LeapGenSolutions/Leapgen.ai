import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import surround_ai_pdf_file from "../assets/SurroundAI_Product_Brochure_2025.pdf"
import data_coffeee_pdf_file from "../assets/Data_Coffee_Product_Brochure_2025.pdf"
import seismic_pdf_file from "../assets/Seismic_Product_Brochure_2025.pdf"


function FeatureDetails(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    props.setloadHistory(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center p-10 bg-[#07020e] pt-[5rem] gap-[45px]">
      <h2
        onClick={() => {
          navigate("/");
          window.scrollTo(1000, 1000);
        }}
        className="text-[30px] font-normal leading-[1.5em] tracking-[-2px] text-left text-gradient absolute z-50 left-[50px] top-[25px] hover:cursor-pointer"
      >
        BACK
      </h2>
      <h1 className="text-[72px] max-md:text-[52px] font-bold leading-[1.5em] tracking-[-2px] text-left text-gradient full_details">
        {id === "SurroundAI" ? "SURROUND AI" : id === "DataCoffee" ? "DATA COFFEE" : id.toUpperCase()}
      </h1>
      <div className="relative z-10 flex flex-row flex-wrap max-md:flex-col max-md:w-fit items-center p-10 bg-[#07020e] rounded-xl custom-border-container full_details">
        <p className="text-base description max-md:text-[16px] my-[2.5rem]">
          {id === "SurroundAI"
            ? "A dynamic framework designed to develop customized conversational AI solutions. SurroundAI equips businesses with built-in accelerators that are immediately deployable within the customer's environment, allowing for significant flexibility in creating solutions that are either fully custom or based on existing architectural patterns. To improve customer interaction through sophisticated AI-driven conversations organizations can use our product Surround AI."
            : id === "DataCoffee"
              ? "Data Coffee by LeapGen is a sophisticated solution designed to centralize and secure data management, significantly enhancing analytics, governance, and regulatory compliance. It serves as a robust data management platform that streamlines data handling and empowers decision-making through comprehensive analytics."
              : "A revolutionary platform that automates the medical prior authorization process by intelligently analyzing patient data and matching it against clinical guidelines and insurance policies. Seismic significantly streamlines healthcare workflows, enabling faster and more accurate decision-making, thus improving patient care and reducing administrative burdens."}
        </p>

      </div>
      {id === "SurroundAI" && (
        <a
          className="text-[18px] font-semibold border-[1px] text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg shadow-lg flex flex-row items-center justify-center"
          href={surround_ai_pdf_file}
          download={"SurroundAI Product Brochure 2025.pdf"}>
          Download the product brochure!
        </a>
      )}
      {id === "DataCoffee" && (
        <a
          className="text-[18px] font-semibold border-[1px] text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg shadow-lg flex flex-row items-center justify-center"
          href={data_coffeee_pdf_file}
          download={"Data Coffee Product Brochure 2025.pdf"}>
          Download the product brochure!
        </a>
      )}
      {id === "Seismic" && (
        <a
          className="text-[18px] font-semibold border-[1px] text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg shadow-lg flex flex-row items-center justify-center"
          href={seismic_pdf_file}
          download={"Seismic Product Brochure 2025.pdf"}>
          Download the product brochure!
        </a>
      )}
    </div>
  );
}

export default FeatureDetails;
