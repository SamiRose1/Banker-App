import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";

const SignUpPage = ({ userInput, handleChange, handleSubmit }) => {
  return (
    <div className="signupContainer">
      <div className="signupForm">
        <form onSubmit={handleSubmit} id="signupForm">
          <input
            type="text"
            name="signupFirstName"
            value={userInput.signupFirstName}
            onChange={handleChange}
            placeholder="first name"
          />
          <input
            type="text"
            name="signupLastName"
            value={userInput.signupLastName}
            onChange={handleChange}
            placeholder="last name"
          />
          <input
            type="text"
            name="signupPassword"
            value={userInput.signupPassword}
            placeholder="password"
            onChange={handleChange}
          />
          <button>Sign up</button>
          <Link to="/" className="backHome">
            Back Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
