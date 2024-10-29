import bgvid from "./assets/zori.mp4";
import "./assets/css/Firstpage.css";
import SlideInSection from "./Components/SlideIn";

const FirstPage = () => {
  return (
    <>
      <main className="fp-main">
        <video className="bg-video" autoPlay muted loop>
          <source src={bgvid} type="video/mp4" />
        </video>
        <SlideInSection>
          <div className="left-content">
            <h1>
              world<span className="inverted-comma">'</span>s first{" "}
              <span className="extraordinary">gamified </span> <br /> Web3{" "}
              <span className="extraordinary">launchpad </span>
            </h1>
            <p>
              Elevate your experience: The Zori, your gateway to NFTs, <br />
              the gamified metaverse, AI Avatars, and customized avatars with
              unique styles !
            </p>
          </div>
        </SlideInSection>

        {/* <div className="right-content">
          <img src={avatar} alt="" />
          <div className="stats">
            <div>
              <h1>3+</h1>
              <h2>3D SPACES</h2>
            </div>
            <div>
              <h1>100+</h1>
              <h2>NFTs</h2>
            </div>
            <div>
              <h1>10+</h1>
              <h2>AVATARS</h2>
            </div>
          </div>
          <div className="frosted-glass">
            <div>
              <p>Total Price</p>
              <div>
                <p>12.35 ICP</p>
                <span>+12.45%</span>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default FirstPage;
