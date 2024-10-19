import "../assets/css/aboutUs.css";
import zorivid from "../assets/zori-vid.mp4";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="au-content">
        <div className="au-row1">
          {/* <div className="vid">
            <video autoPlay muted loop>
              <source src={zorivid} type="video/mp4" />
            </video>
          </div> */}
          <div className="au-col2">
            <h1>Mission</h1>
            <p>
              Empower creators, connect communities, and revolutionize
              experiences through innovative metaverse solutions, NFT
              marketplaces, immersive 3D spaces, and AI-driven avatars, built on
              a foundation of web3 and blockchain technology for B2B and B2C
              customers worldwide
            </p>
          </div>
        </div>
        <div className="au-row2">
          <div className="au-col1">
            <h1>About Us</h1>
            <p>
              The Zori is an innovative online marketplace built on web3 by ICP
              that deals in NFT trading and metaverse solutions for B2B and B2C
              users.
            </p>
          </div>
          <div className="au-col2">
            <h1>Vision</h1>
            <p>
              To lead the web3 space as a premier global provider of
              decentralized, community-driven solutions, delivering unparalleled
              value to businesses, creators, and consumers, and shaping the
              future of commerce, entertainment, and social interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
