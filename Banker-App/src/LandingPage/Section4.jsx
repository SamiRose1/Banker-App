import React from "react";
import TestimonialData from "./testimonailData";
import { useState, useEffect } from "react";
import user1 from "../images/user-1.jpg";
import user2 from "../images/user-2.jpg";
import user3 from "../images/user-3.jpg";

const Section4 = () => {
  const [testimonial, setTestimonail] = useState(TestimonialData);
  const [counter, setCounter] = useState(2);

  const firstTest = TestimonialData.find((testId) => testId.id === 1);
  useEffect(() => {
    setTestimonail(() => {
      return {
        ...firstTest,
        img: user1,
      };
    });
  }, []);

  const testimonialToggle = (e) => {
    const className = e.target.className;
    className === "next" ? setCounter(counter + 1) : setCounter(counter - 1);
    if (counter !== 3) {
      setCounter(counter + 1);
    } else if (counter >= 3) {
      setCounter(1);
    }
    let nextTestimonial = TestimonialData.find(
      (test) => test.id === Math.abs(counter)
    );
    let userImage;
    if (nextTestimonial.id === 1) {
      userImage = user1;
    } else if (nextTestimonial.id === 2) {
      userImage = user2;
    } else {
      userImage = user3;
    }
    if (nextTestimonial) {
      setTestimonail(() => {
        return {
          ...nextTestimonial,
          img: userImage,
        };
      });
    }
  };
  return (
    <div className="section4Container">
      <p className="sec4Text">NOT SURE YET?</p>
      <h1 className="paraSect4">
        Millions of Bankists are already making their lifes simpler.
      </h1>

      <div className="testimonialContainer">
        <h1>{testimonial.h1}</h1>
        <button onClick={testimonialToggle} className="prev">
          ←
        </button>

        <p className="testimonialPara">{testimonial.p}</p>

        <button onClick={testimonialToggle} className="next">
          →
        </button>

        <span className="testProfileContainer">
          <img src={testimonial.img} alt="not there" className="testImg" />
          <p className="testName">{testimonial.name}</p>
        </span>
      </div>
    </div>
  );
};

export default Section4;
