import "../assets/css/avatar.css";
import avatar from "../assets/zori-gif.gif";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Avatar = () => {
  return (
    <div className="avatar-container">
      <div className="avatar-col1">
        <h1>
          Do you want to <br /> look alike or <br /> be <span>creative</span>{" "}
          with <br />
          <span>AI avatar?</span>
        </h1>
        <p>
          Connect More Meaningfully: <br /> Designed for virtual meetings,
          gaming and social fun.{" "}
        </p>
        <div className="avatar-buttons">
          <div className="avatar-button">
            <Link to="/zori-avatar">Zori Avatar</Link>
            <ion-icon name="arrow-forward-sharp"></ion-icon>
          </div>
          <div className="avatar-button">
            <Link to="/create_avatar">AI Avatar</Link>
            <ion-icon name="arrow-forward-sharp"></ion-icon>
          </div>
        </div>
      </div>

      <div className="avatar-col2">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ceabff"
          glarePosition="all"
          glareBorderRadius="16px"
          scale="1.15"
          transitionSpeed="2000"
        >
          <img src={avatar} alt="avatar" />
        </Tilt>
      </div>
    </div>
  );
};

export default Avatar;
