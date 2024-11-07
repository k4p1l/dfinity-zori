import React from "react";
import "../assets/css/ProfilePage.css";
import { useConnect } from "@connect2ic/react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { isConnected, disconnect, principal } = useConnect();
  return (
    <div className="profile-page-wrapper">
      <h1>Profile</h1>
      <h3>Principal : {principal}</h3>
      <Link to="/my-collection">
        <button>My Collection</button>
      </Link>
    </div>
  );
}
