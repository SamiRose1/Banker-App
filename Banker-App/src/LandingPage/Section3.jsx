import React from "react";
import "./Section3.css";
import { useState, useEffect } from "react";
import toggleData from "./toggleData.json";
import "./Section4.css";

const Section3 = () => {
  const [param, setParam] = useState({
    h1: null,
    p: null,
  });
  useEffect(() => {
    document.querySelector(".btn1").classList.add("active");
    const btn1 = toggleData.find((btnId) => btnId.id === 1);
    setParam(() => {
      return {
        h1: btn1.h1,
        p: btn1.p,
      };
    });
  }, []);
  const handleToggles = (e) => {
    const id = e.target.id;
    const btnEL = e.target;
    document.querySelector(".toggleBtns").childNodes.forEach((element) => {
      element?.classList?.remove("active");
    });
    btnEL.classList.add("active");
    console.log(btnEL);

    console.log(btnEL.parentElement);
    const param = toggleData.find((btnId) => btnId.id === Number(id));
    setParam(() => {
      return {
        h1: param.h1,
        p: param.p,
      };
    });
  };

  return (
    <section className="section3Container">
      <p className="operationText">Operations</p>
      <h1 className="paraSect3">
        Everything as simple as possible, but no simpler.
      </h1>
      <div className="sec3Toggles">
        <div className="toggleBtns">
          <button className="btn1" id="1" onClick={handleToggles}>
            Instant Transfers
          </button>
          <button className="btn2" id="2" onClick={handleToggles}>
            Instant Loans
          </button>
          <button className="btn3" id="3" onClick={handleToggles}>
            Instant Closing
          </button>
        </div>
        <section className="toggleParams">
          <h1 className="paramH1">{param.h1}</h1>
          <p className="paramP">{param.p}</p>
        </section>
      </div>
    </section>
  );
};

export default Section3;
