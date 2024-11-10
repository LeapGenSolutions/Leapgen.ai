import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs"; // Brief overview
import Footer from "../components/Footer";
import AiComponents from "../components/AiComponents";
import Domains from "../components/Domains";
import Features from "../components/Features";

const Home = (props) => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const domainsRef = useRef(null);
  const servicesRef = useRef(null);

  function handleMenuClick(menuItem) {
    if (menuItem === "hero") {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "features") {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "domains") {
      domainsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "services") {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (props.loadHistory === true) {
      window.scrollTo({
        top: 1300,
        left: 0,
        behavior: "smooth",
      });
      props.setloadHistory(false);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [props.loadHistory]);

  return (
    <div className="bg-white">
      <Header handleMenuClick={handleMenuClick} />
      <div ref={heroRef}>
        <Hero ref={heroRef} />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <AiComponents />
      <div ref={domainsRef}>
        <Domains />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <Footer handleMenuClick={handleMenuClick} />
    </div>
  );
};

export default Home;
