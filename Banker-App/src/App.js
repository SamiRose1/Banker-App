import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Home/Home";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./LoginPage/SignupPage";
import usersData from "./UsersData/userData";

function App() {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [userData, setUsersData] = useState(usersData);
  useEffect(() => {
    alert(`Here are the test data you can use,
    To log in use the full names/owner and pin. For other inputs only use the first name: 
    {
      "firstName": "Seim",
      "lastName": "Yemane",
      "owner": "Seim Yemane",
      "pin": 1111
    },
    {
      "firstName": "John",
      "lastName": "Davis",
      "owner": "John Davis",
      "pin": 2222
    },
    {
      "firstName": "Samir",
      "lastName": "Yusuf",
      "owner": "Samir Yusuf",
      "pin": 3333
    },
    {
      "firstName": "Kate",
      "lastName": "Jonas",
      "owner": "Kate Jones",
      "pin": 4444
    }

    `);
  }, []);

  //this saves the user inputs
  const [userInput, setUserInput] = useState({
    name: "",
    password: "",
    amount: "",
    transferAccountName: "",
    transferAccountAmount: "",
    closeAccountName: "",
    closeAccountPassword: "",
    owner: "",
    signupFirstName: "",
    signupLastName: "",
    signupPassword: "",
  });
  //this handles change in the inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //this is "let" because it will need to be modified as user keeps using some of the app's functionality like logging in and transfering fake money data to other accounts.
  let currentAccount;

  //this handles the submit functionality and it's a huge one
  const handleSubmit = (e) => {
    e.preventDefault();
    const formId = e.target.id;
    //handling log in
    //every form has an id and this is the only place they are used.
    if (formId === "loginForm") {
      currentAccount = userData.find((user) => user.owner === userInput.name);
      //notice I have set the userInput.password to be a NUMBER.
      if (currentAccount && currentAccount.pin === +userInput.password) {
        //setAccount is an empty array and it's data is set when logging in
        setAccount(() => currentAccount);
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        alert("wrong crediatials");
      }
    }
    //handling loan form
    //this handles the loan's functionality.
    if (formId === "loanForm") {
      //see why I used "let" on currentAccount?
      currentAccount = userData.find(
        (user) => user?.firstName === userInput?.name
      );

      //I was facing a bug before, what it was is that it duplicated the data so what I did was to first remove it and later used the spread operator to get the previous data and set it afresh
      const removeCurrentAcc = userData.filter((acc) => {
        return acc?.firstName !== currentAccount?.firstName;
      });
      //the UsersData at first has 4 objects, below I'm setting it to one keep following you'll understand.
      setUsersData(() => removeCurrentAcc);
      setTimeout(() => {
        if (currentAccount) {
          //so here I'm getting it's previous data and setting the currentAccount back with it's movements only modified
          setUsersData((prevState) => {
            return [
              ...prevState,
              {
                ...currentAccount,
                movements: [
                  +userInput.amount,
                  ...currentAccount.movements,
                  +userInput.amount,
                ],
              },
            ];
          });
          //this is updating the account
          setAccount((prevState) => {
            return {
              ...prevState,
              movements: [...prevState.movements, +userInput.amount],
            };
          });
        } else {
          alert("Try using only the first name");
        }
      }, 2000);
    }
    ///handling transfer
    //this handles transfering to other users
    if (formId === "transferForm") {
      //this gets the other user's data/ the user you want to transfer to.
      const otherAccount = userData.find(
        (user) => user.firstName === userInput.transferAccountName
      );
      //again we remove the user because it was causing a bug by duplicating the object
      const removeAcc = userData.filter((acc) => {
        return acc.firstName !== otherAccount.firstName;
      });
      //I might need to refactor this
      //it's setting the UsersData to a single object.
      setUsersData(() => removeAcc);
      if (otherAccount) {
        //updating the user you want to transfer money to.
        setUsersData((prevState) => {
          return [
            ...prevState,
            {
              ...otherAccount,
              movements: [
                ...otherAccount.movements,
                +userInput.transferAccountAmount,
              ],
            },
          ];
        });
      }
    }
    //handling sign up
    //this handles the signing up form
    if (formId === "signupForm") {
      if (
        userInput.signupFirstName &&
        userInput.signupLastName &&
        userInput.signupPassword
      ) {
        //this will give us random numbers and push them to the randomMovs empty array.
        let randomMovs = [];
        const movements = [-2, 2, -3, 4, 5, 6, -7, 8].forEach((mov) =>
          randomMovs.push(mov * Math.floor(Math.random() * 200))
        );

        //well I needed the owner's full names
        const owner =
          userInput.signupFirstName + " " + userInput.signupLastName;
        currentAccount = {
          firstName: userInput.signupFirstName,
          lastName: userInput.signupLastName,
          owner: owner,
          pin: +userInput.signupPassword,
          movements: [...randomMovs],
        };
        setAccount(() => currentAccount);
        setUsersData((prevState) => {
          return [...prevState, currentAccount];
        });
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        alert("Check Input Fields");
      }
    }
    //this sets all the inputs back to empty regardless which is not empty.
    setUserInput({
      name: "",
      password: "",
      amount: "",
      transferAccountName: "",
      transferAccountAmount: "",
      closeAccountName: "",
      closeAccountPassword: "",
      owner: "",
      signupFirstName: "",
      signupLastName: "",
      signupPassword: "",
    });
  };
  return (
    <Routes>
      {/* this route has 6 components */}
      <Route exact path="/" element={<LandingPage />} />
      <Route
        exact
        path="/login"
        element={
          <LoginPage
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            userInput={userInput}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <SignupPage
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            userInput={userInput}
          />
        }
      />
      <Route
        path="/home"
        element={
          <Home
            currentAccount={account}
            userData={userData}
            userInput={userInput}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            account={account}
          />
        }
      />
    </Routes>
  );
}
//date-start: december 6th, 2022 but somedays I felt lazy to code don't think it took me too long.
// date-finish: December 12th, 2022
export default App;
