import React from "react";
import "../assets/css/ProfilePage.css";
import { useConnect } from "@connect2ic/react";

export default function ProfilePage() {
  const { isConnected, disconnect, principal } = useConnect();
  return (
    <div className="profile-page-wrapper">
      <h1>Profile</h1>
      <h3>Principal : {principal}</h3>
    </div>
  );
}
