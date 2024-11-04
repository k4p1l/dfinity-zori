import React from "react";
import { Link } from "react-router-dom";
import zori_land from "../public/images/spaces/zori land.png";
import zori_avatar from "../public/images/nfts/4.jpg";
import nft_avatar from "../public/images/nfts/tr03.png";
import "./assets/css/Features.css";
const Features = () => {
  return (
    <div id="features" className="features">
      <h1>Features of The Zori</h1>

      <div className="f-container">
        <div className="f-col1">
          <div className="f-row1">
            <div className="f-image-wrapper">
              <img src={zori_land} alt="" />
            </div>
            <div className="f-content">
              <h1>
                <span>3</span>D Spaces
              </h1>
              <p>
                Step into a Web3-powered metaverse where play meets creation!
                Engage in themed zones, collaborative missions, and real-time
                interactions—all within a high-quality 3D space, built on
                Unity's WebGL for cross-device accessibility.
              </p>
              <Link to="/spaces">
                <button class="overflow-hidden cursor-pointer text-white rounded px-4 py-2 bg-[radial-gradient(100%_100%_at_100%_0%,_#af8bee_0%,_#783bcd33_100%)] transition-[box-shadow_0.15s_ease,_transform_0.15s_ease] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0px_3px_7px_#783bcd33] ">
                  Explore 3D Spaces
                </button>
              </Link>
            </div>
          </div>
          <div className="f-row2">
            <div className="f-image-wrapper">
              <img src={nft_avatar} alt="" />
            </div>
            <div className="f-content">
              <h1>NFT Marketplace</h1>
              <p>
                Own, trade, and showcase digital assets—from avatars to land
                plots—with our NFT management system. Empowering users with real
                value and collectability, it lets you shape your
                metaverse experience.
              </p>
              <Link to="/marketplace">
                <button class="overflow-hidden cursor-pointer text-white rounded px-4 py-2 bg-[radial-gradient(100%_100%_at_100%_0%,_#af8bee_0%,_#783bcd33_100%)] transition-[box-shadow_0.15s_ease,_transform_0.15s_ease] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0px_3px_7px_#783bcd33] ">
                  Explore NFT Marketplace
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="f-col2">
          <div className="f-image-wrapper">
            <img src={zori_avatar} alt="" />
          </div>
          <div className="f-content">
            <h1>AI Avatar</h1>
            <p>
              Bring your digital identity to life with the AI Avatar for instant
              likeness or customize your Zori Avatar with NFT wearables. Both
              avatars offer unique, immersive ways to interact and express
              yourself in the metaverse.
            </p>
            <Link to="/avatar">
              <button class="overflow-hidden cursor-pointer text-white rounded px-4 py-2 bg-[radial-gradient(100%_100%_at_100%_0%,_#af8bee_0%,_#783bcd33_100%)] transition-[box-shadow_0.15s_ease,_transform_0.15s_ease] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0px_3px_7px_#783bcd33] ">
                Explore 3D Avatar{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
