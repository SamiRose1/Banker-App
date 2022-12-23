import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ currentAccount, userInput, handleChange, handleSubmit }) => {
  const navigate = useNavigate();
  //I tried taking this whole functionality to the App.js but was causing to many bugs and I kind felt lazy to
  const movementsData = currentAccount?.movements;
  const mapping = movementsData?.map((mov) => {
    const randomKeys = Math.random() * 100;
    return (
      <span className={mov > 0 ? "deposit" : "withdraw"} key={randomKeys}>
        <h3>{mov > 0 ? "Deposit" : "Withdraw"}</h3>
        <p className="amount">${Math.abs(mov)}</p>
      </span>
    );
  });
  let totalCount = 0;
  currentAccount?.movements?.forEach((num) =>
    num > 0 ? (totalCount += num) : null
  );
  const handleLogout = () => {
    navigate("/login");
  };
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="homeContainer">
      <div className="balanceContainer">
        <span>
          <p className="userName">Welcome, {currentAccount.firstName} </p>
          <p className="currentBalance">
            Current Balance, <span>${totalCount}</span>
          </p>
        </span>
        {mapping}
      </div>
      <div className="operationContainer">
        <div className="loanTrans">
          <p>Request a Loan</p>
          <input
            type="text"
            className="input"
            name="name"
            value={userInput.name}
            onChange={handleChange}
            placeholder="account name"
          />
          <input
            type="text"
            name="amount"
            value={userInput.amount}
            onChange={handleChange}
            className="input"
            placeholder="amount"
          />
          <button
            className="btn"
            type="submit"
            onClick={handleSubmit}
            id="loanForm"
          >
            →
          </button>
        </div>
        <div className="transferTrans">
          <p>Transfer Money</p>
          <input
            type="text"
            className="input"
            name="transferAccountName"
            value={userInput.transferAccountName}
            onChange={handleChange}
            placeholder="account name"
          />
          <input
            type="text"
            className="input"
            name="transferAccountAmount"
            value={userInput.transferAccountAmount}
            onChange={handleChange}
            placeholder="amount"
          />
          <input
            type="text"
            name="password"
            value={userInput.password}
            onChange={handleChange}
            className="input"
            placeholder="password"
          />
          <button
            className="btn"
            type="submit"
            onClick={handleSubmit}
            id="transferForm"
          >
            →
          </button>
        </div>
        <div className="closeAccount">
          <p>Close Your Account</p>
          <input
            type="text"
            className="input"
            name="closeAccountName"
            value={userInput.closeAccountName}
            onChange={handleChange}
            placeholder="account name"
          />
          <input
            type="text"
            className="input"
            name="closeAccountPassword"
            value={userInput.closeAccountPassword}
            onChange={handleChange}
            placeholder="password"
          />
          <button
            className="btn"
            type="submit"
            onClick={() => navigate("/")}
            id="closeAccountForm"
          >
            →
          </button>
        </div>
        <button className="logoutBtn" onClick={handleLogout}>
          Log Out
        </button>
        <button className="backBtn" onClick={handleBackHome}>
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Home;
