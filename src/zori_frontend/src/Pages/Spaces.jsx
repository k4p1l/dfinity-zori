import zori_land from "../../public/images/spaces/zori land.png";
import podcast from "../../public/images/spaces/Podcast.jpg";
import nature from "../../public/images/spaces/Nature Space.jpg";
import "../assets/css/Spaces.css";

const Spaces = () => {
  return (
    <div>
      <div className="spaces-wrapper">
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
    </div>
  );
};

export default Spaces;
