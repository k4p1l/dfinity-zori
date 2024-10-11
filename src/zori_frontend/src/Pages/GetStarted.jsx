import React, { useState } from "react";
import "../assets/css/GetStarted.css";
import {
  ConnectButton,
  ConnectDialog,
  Connect2ICProvider,
} from "@connect2ic/react";
import "../assets/css/connect2ic.css";

export default function GetStarted() {
  return (
    <div className="get-started-container">
      <div className="get-started-content">
        <h1>Get Started with Zori</h1>
        <h4>Welcome to Zori.</h4>
        <h4>Discover the Metaverse, Collect and Sell Extraordinary NFTs.</h4>
        <h4>Login via Web3 wallet.</h4>

        <div className="login-options">
          <label className="login-option">Web3 Wallet</label>
        </div>

        <div className="web3-form">
          <ConnectButton />
        </div>
        <ConnectDialog />
      </div>
    </div>
  );
}
