import React from "react";
import "./Section1.css";
import Logo from "./../images/logo.png";

const Section1 = () => {
  const handleFeatureDrop = () => {
    console.log(
      document.querySelector(".section2Container")?.getBoundingClientRect()
    );
    document
      .querySelector(".section2Container")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="section1">
      <div className="sectionText">
        <p className="introText">
          <span className="bankingSP">Banking</span> has never been
          <span className="easierSP">easier</span>and more
          <span className="secureSP">secure.</span>
        </p>
        <p className="paraText">
          A simple, fast, secure and reliable bank account right by your side at
          all times.
        </p>
        <button onClick={handleFeatureDrop} className="learnMoreBtn">
          learn more
        </button>
      </div>
      <div>
        <img src={Logo} alt="" className="myLogo" />
      </div>
    </section>
  );
};

export default Section1;
