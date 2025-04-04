import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";


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
        {id === "SurroundAI" ? "SURROUND AI" : id.toUpperCase()}
      </h1>
      <div className="relative z-10 flex flex-row flex-wrap max-md:flex-col max-md:w-fit items-center p-10 bg-[#07020e] rounded-xl custom-border-container full_details">
        <p className="text-base description max-md:text-[16px] my-[2.5rem]">
          {id === "SurroundAI"
            ? "A dynamic framework designed to develop customized conversational AI solutions. SurroundAI equips businesses with built-in accelerators that are immediately deployable within the customer's environment, allowing for significant flexibility in creating solutions that are either fully custom or based on existing architectural patterns. To improve customer interaction through sophisticated AI-driven conversations organizations can use our product Surround AI."
            : id === "Octopus"
              ? "Data Coffee by LeapGen is a sophisticated solution designed to centralize and secure data management, significantly enhancing analytics, governance, and regulatory compliance. It serves as a robust data management platform that streamlines data handling and empowers decision-making through comprehensive analytics."
              : "A revolutionary platform that automates the medical prior authorization process by intelligently analyzing patient data and matching it against clinical guidelines and insurance policies. Seismic significantly streamlines healthcare workflows, enabling faster and more accurate decision-making, thus improving patient care and reducing administrative burdens."}
        </p>

      </div>
      {id === "SurroundAI" && (
        <Link
          to={`https://webapp-frontend-gy4phravzt2ak.azurewebsites.net/`}
          className="feature-button surround-ai-button"
          target="_blank"
        >
          TRY IT !
        </Link>
      )}
    </div>
  );
}

export default FeatureDetails;
