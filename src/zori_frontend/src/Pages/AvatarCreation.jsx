import React, { useState } from "react";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import { useNavigate } from "react-router-dom";
import logo from "../assets/zori-logo.png";
import "../assets/css/avatar.css";
import { Link } from "react-router-dom";

const config = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
  onboarding: false,
};

const style = { width: "100%", height: "100vh", border: "none" };

export default function AvatarCreatorComponent() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const navigate = useNavigate();

  const handleOnAvatarExported = (event) => {
    const url = event.data.url;
    console.log(`Avatar URL is: ${url}`);
    setAvatarUrl(url);
  };

  const handleFinish = () => {
    if (avatarUrl) {
      localStorage.setItem("userAvatar", avatarUrl);
      console.log("Avatar URL saved:", avatarUrl); // Verify it's correct
      navigate("/avatar-display");
    } else {
      alert("Please create an avatar first.");
    }
  };

  return (
    <div className="avatar-creator-component" style={{ position: "relative" }}>
      <img className="overlay-logo" src={logo} alt="logo" />
      <Link className="overlay-link" to="/avatar">
        Go Back
      </Link>
      <button
        className="btn modal-btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Click to see Instructions
      </button>
      <dialog id="my_modal_5" className="modal">
        <div className="model-wrapper">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              Instructions for creating your own Avatar
            </h3>
            <div className="py-4">
              <ol>
                <li>After creating your avatar, click on "Next" button.</li>
                <li>Then click on "X" to close the dialog box.</li>
                <li>Lastly, click on "Finish" button to see your 3D Avatar.</li>
              </ol>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="close-btn">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
      <AvatarCreator
        subdomain="Zori"
        config={config}
        style={style}
        onAvatarExported={handleOnAvatarExported}
      />

      <button
        onClick={handleFinish}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Finish
      </button>
    </div>
  );
}
