import dfinity from "/images/fully-on-chain.png";
import icp from "./assets/download 1.png";
import "./assets/css/FifthPage.css";
import SlideInSection from "./Components/SlideIn";
import PopOutSection from "./Components/Popout";

const FifthPage = () => {
  return (
    <div className="fifth-page">
      <div className="fifth-page-content">
        <SlideInSection>
          <h1>Tech Stack</h1>
          <h3>Explore the Potential of ICP with The Zori</h3>
          <p>
            As Web3 pioneer, The Zori leverages ICP to bring you an immersive
            metaverse experience, bridging AI, NFTs and a vibrant 3D World.
            Through the Internet Computer, we're building more that a platform;
            we're building the future.
          </p>
        </SlideInSection>
        <PopOutSection>
          <img src={icp} alt="" />
        </PopOutSection>
      </div>
      <div className="fifth-page-image-wrapper">
        <PopOutSection>
          <img src={dfinity} alt="" />
        </PopOutSection>
      </div>
    </div>
  );
};
export default FifthPage;
