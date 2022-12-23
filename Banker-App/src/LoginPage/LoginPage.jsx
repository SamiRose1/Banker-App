import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = ({ handleSubmit, handleChange, userInput }) => {
  return (
    <div className="loginPageContainer">
      <div className="formsContainer">
        <form onSubmit={handleSubmit} id="loginForm">
          <input
            type="text"
            name="name"
            placeholder="email/username"
            onChange={handleChange}
            value={userInput.name}
          />
          <input
            type="text"
            name="password"
            value={userInput.password}
            placeholder="password"
            onChange={handleChange}
          />

          <button onSubmit={handleSubmit} className="signinBtn">
            Log in
          </button>
          <Link to="/signup" className="signupBtn">
            Sign Up
          </Link>
          <Link to="/" className="backHome">
            Back Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
