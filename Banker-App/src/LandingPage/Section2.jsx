import React from "react";
import "./Section2.css";
import Feature1Png from "../images/feature1.jpg";
import Feature2Png from "../images/feature2.jpg";
import Feature3Png from "../images/feature3.jpg";

const Section2 = () => {
  return (
    <section className="section2Container">
      <p className="featureText">Features</p>
      <h1 className="paraSect2">
        Everything you would ever need in a modern bank.
      </h1>
      <div className="features">
        <div className="feature1">
          <img src={Feature1Png} alt="" className="feature1png" />
          <span className="textHolder">
            <h2>100% digital bank</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium incidunt inventore sed odit. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit.
            </p>
          </span>
        </div>
        <div className="feature2">
          <span className="textHolder">
            <h2>Watch your money grow</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              adipisci reiciendis quasi dolores nemo. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Quisquam, esse.
            </p>
          </span>
          <img src={Feature2Png} alt="" className="feature2png" />
        </div>
        <div className="feature3">
          <img src={Feature3Png} alt="" className="feature3png" />
          <span className="textHolder">
            <h2>Free debit card included</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              laudantium facere quibusdam, delectus ipsum ullam fugit quisquam.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section2;
