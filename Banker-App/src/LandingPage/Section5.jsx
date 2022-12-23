import React from "react";
import { Link } from "react-router-dom";
import "./Section5.css";

const Section5 = () => {
  return (
    <div className="section5Container">
      <h1>
        The best day to join Bankist was one year ago. The second best is today!
      </h1>
      <Link to="/signup" className="openAccount2Btn">
        Open your free account today!
      </Link>
      <div className="section5Para">
        <p>About</p>
        <p>Pricing</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Careers</p>
        <p>Blog</p>
        <p>Contact Us</p>
      </div>
      <span className="copyrightPara">
        <p>
          © Copyright by Seim Yemane. Use for learning or your portfolio. Don't
          use to teach. Don't claim as your own product.
        </p>
      </span>
    </div>
  );
};

export default Section5;
