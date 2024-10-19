import bgvid from "./assets/zori.mp4";
import "./assets/css/Firstpage.css";
import avatar from "./assets/avatar.svg";
import dfinity from "./assets/dfinity logo 1.png";
import icp from "./assets/download 1.png";
import icp_in from "./assets/icp in 1.png";

const FirstPage = () => {
  return (
    <>
      <main className="fp-main">
        {/* <video className="bg-video" autoPlay muted loop>
          <source src={bgvid} type="video/mp4" />
        </video> */}

        <div className="left-content">
          <h1>
            world’s first gamified <br /> Web3 launchpad
          </h1>
        </div>

        <div className="right-content">
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
        </div>
      </main>
    </>
  );
};

export default FirstPage;
