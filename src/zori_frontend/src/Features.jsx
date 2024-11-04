import React from "react";
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
                Immersive 3D Space in the Metaverse Enter a Web3-powered
                metaverse where every action is a game, and every player is a
                creator! Experience themed zones, collaborative missions, and
                real-time interactions that empower users to play and earn
                within an evolving digital world. The system is based on
                high-quality 3D space, running on the Unity engine's WebGL, and
                supports various mobile devices, compatible with mainstream
                browsers, ensuring users can enjoy immersive experiences in the
                metaverse in various environments
              </p>
            </div>
          </div>
          <div className="f-row2">
            <div className="f-image-wrapper">
              <img src={nft_avatar} alt="" />
            </div>
            <div className="f-content">
              <h1>NFT Marketplace</h1>
              <p>
                Robust NFT Management and Marketplace NFT management introduces
                a powerful digital asset layer to The zori, allowing users to
                tokenize avatars, virtual land plots, digital artworks, and more
                as unique NFTs. This system empowers users to own, trade, and
                showcase their assets, bringing real value, scarcity, and
                collectability to The zori virtual economy. By adding this layer
                of ownership, users can truly invest in and shape their
                metaverse experience.
              </p>
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
              Personalized AI Avatars and Zori Avatars <br /> Explore two
              exciting avatar options in our gamified Web3 metaverse: <br /> The
              AI Avatar and the Zori Avatar. With the AI Avatar, users can
              instantly create a personalized digital identity just by clicking
              an image, bringing their likeness to life in seconds. Meanwhile,
              the Zori Avatar offers rich customization, allowing users to craft
              a unique look and enhance it further with NFT wearables that can
              be purchased and worn, adding exclusive style elements to your
              digital self. Both avatars empower users to interact, create, and
              play in immersive ways, bringing out the best of each personality
              within the metaverse!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
