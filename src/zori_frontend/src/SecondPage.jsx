import "./assets/css/Secondpage.css";
import zori_land from "../public/images/spaces/zori land.png";
import podcast from "../public/images/spaces/Podcast.jpg";
import nature from "../public/images/spaces/Nature Space.jpg";
import nft1 from "../public/images/nfts/Dress 03[1].png";
import nft2 from "../public/images/nfts/B10[1].png";
import nft3 from "../public/images/nfts/Dress 01[1].png";
import nft4 from "../public/images/nfts/B3[1].png";
import Tilt from "react-parallax-tilt";
import dfinity from "./assets/dfinity logo 1.png";
import icp from "./assets/download 1.png";
import icp_in from "./assets/icp in 1.png";

const SecondPage = () => {
  return (
    <div className="second-page">
      <div className="trusted-by">
        <h1>Trusted By</h1>
        <div className="images">
          <img src={dfinity} alt="" />
          <img src={icp} alt="" />
          <img src={icp_in} alt="" />
        </div>
      </div>
      <div>
        <h1>3D SPACES</h1>
        <div className="spaces">
          <div className="space">
            <div className="img-wrapper inverted">
              <img src={zori_land} alt="" />
              <div className="overlay-text">Coming Soon</div>
            </div>
            <p>Zori Land</p>
          </div>

          <div className="space">
            <div className="img-wrapper">
              <img src={podcast} alt="" />
              <div className="overlay-text">Coming Soon</div>
            </div>
            <p>Podcast Space</p>
          </div>
          <div className="space">
            <div className="img-wrapper">
              <img src={nature} alt="" />
              <div className="overlay-text">Coming Soon</div>
            </div>
            <p>Nature Space</p>
          </div>
        </div>
      </div>
      <div>
        <h1>TRENDING NFTs</h1>
        <div className="cards">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffe23e"
            glarePosition="all"
            glareBorderRadius="16px"
            scale="1.18"
            transitionSpeed="2000"
          >
            <div className="card">
              <div className="card-container">
                <img src={nft1} alt="" />
                <p>Avatar 1</p>
                <p>12.25 ICP</p>
              </div>
            </div>
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffe23e"
            glarePosition="all"
            glareBorderRadius="16px"
            scale="1.18"
            transitionSpeed="2000"
          >
            <div className="card">
              <div className="card-container">
                <img src={nft2} alt="" />
                <p>Avatar 2</p>
                <p>10 ICP</p>
              </div>
            </div>
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffe23e"
            glarePosition="all"
            glareBorderRadius="16px"
            scale="1.18"
            transitionSpeed="2000"
          >
            <div className="card">
              <div className="card-container">
                <img src={nft3} alt="" />
                <p>Avatar 3</p>
                <p>15.75 ICP</p>
              </div>
            </div>
          </Tilt>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffe23e"
            glarePosition="all"
            glareBorderRadius="16px"
            scale="1.18"
            transitionSpeed="2000"
          >
            <div className="card">
              <div className="card-container">
                <img src={nft4} alt="" />
                <p>Avatar 4</p>
                <p>8.75 ICP</p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
