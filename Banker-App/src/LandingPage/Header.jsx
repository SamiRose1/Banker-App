import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./../images/logo.png";
import { useState } from "react";
import Cancel from "./../images/cancel.png";
import Expand from "./../images/expand.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleFeatureDrop = (e) => {
    const className = e.target.className;
    console.log(className);
    if (className.includes("feature")) {
      document
        .querySelector(".section2Container")
        .scrollIntoView({ behavior: "smooth" });
    } else if (className.includes("operation")) {
      document
        .querySelector(".section3Container")
        .scrollIntoView({ behavior: "smooth" });
    } else if (className.includes("testimonial")) {
      document
        .querySelector(".section4Container")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleHeaderResponsive = () => {
    if (!toggleMenu) {
      setToggleMenu(true);
      document
        .querySelector(".headerContainer")
        ?.classList.add("headerResponse");
      document.querySelector(".feature")?.classList.add("adding");
      document.querySelector(".operation")?.classList.add("adding");
      document.querySelector(".testimonial")?.classList.add("adding");
      document.querySelector(".loginBtn")?.classList.add("adding");
      document.querySelector(".openAccount")?.classList.add("adding");
    }
    if (toggleMenu) {
      setToggleMenu(false);
      document.querySelector(".feature")?.classList.remove("adding");
      document.querySelector(".operation")?.classList.remove("adding");
      document.querySelector(".testimonial")?.classList.remove("adding");
      document
        .querySelector(".headerContainer")
        ?.classList?.remove("headerResponse");
      document.querySelector(".loginBtn")?.classList.remove("adding");
      document.querySelector(".openAccount")?.classList.remove("adding");
    }
  };
  return (
    <div className="headerContainer">
      <img src={Logo} alt="" className="headerLogo" />

      <div className="anchorContainer">
        <span onClick={handleHeaderResponsive} className="headerMenu">
          <img src={toggleMenu ? Cancel : Expand} alt="" />
        </span>
        <button onClick={handleFeatureDrop} className="feature">
          Features
        </button>
        <button onClick={handleFeatureDrop} className="operation">
          Operations
        </button>
        <button onClick={handleFeatureDrop} className="testimonial">
          Testimonials
        </button>
        <Link to="./Signup" className="openAccount">
          Open Account
        </Link>
        <Link to="./Login" className="loginBtn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
