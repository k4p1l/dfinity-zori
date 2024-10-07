import React, { useState } from "react";
import "../assets/css/GetStarted.css";

export default function GetStarted() {
  const [selectedLogin, setSelectedLogin] = useState("email");
  const handleLoginChange = (event) => {
    setSelectedLogin(event.target.value); // Change the form based on selected option
  };
  return (
    <div className="get-started-container">
      <div className="get-started-content">
        <h1>Get Started with Zori</h1>
        <h4>Welcome to Zori.</h4>
        <h4>Discover the Metaverse, Collect and Sell Extraordinary NFTs.</h4>
        <h4>Login via Email or Web3 wallet.</h4>

        <div className="login-options">
          <label
            className={`login-option ${
              selectedLogin === "email" ? "selected" : ""
            }`}
            onClick={() => setSelectedLogin("email")}
          >
            Email
          </label>

          <label
            className={`login-option ${
              selectedLogin === "web3" ? "selected" : ""
            }`}
            onClick={() => setSelectedLogin("web3")}
          >
            Web3
          </label>
        </div>
        {selectedLogin === "email" && (
          <div className="email-form">
            <form>
              <div>
                <input type="email" placeholder="Email Address" />
              </div>
              <button type="submit">Next <ion-icon name="arrow-forward-sharp"></ion-icon></button>
            </form>
          </div>
        )}

        {selectedLogin === "web3" && (
          <div className="web3-form">
            <button onClick={() => alert("Login via Web3")}>
              Connect to Web3 Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
