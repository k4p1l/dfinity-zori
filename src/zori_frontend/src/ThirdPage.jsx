import "./assets/css/Thirdpage.css";
import swati from "./assets/members/swati.jpg";
import shweta from "./assets/members/shweta.jpg";
import bhawna from "./assets/members/bhawna.jpg";
import yogita from "./assets/members/yogita.jpg";
import damini from "./assets/members/damini.jpg";

const ThirdPage = () => {
  return (
    <div className="third-page">
      <h1>MEET THE TEAM</h1>
      <div className="members">
        <div className="member">
          <div className="pfp-wrapper">
            <img src={shweta} alt="" />
          </div>
          <div className="info-wrapper">
            <h2>Shweta Joshi</h2>
            <p>Founder</p>
          </div>
        </div>
        <div className="member">
          <div className="pfp-wrapper">
            <img src={swati} alt="" />
          </div>
          <div className="info-wrapper">
            <h2>Swati Goyal</h2>
            <p>Advisor</p>
          </div>
        </div>
      </div>
      <div className="members">
        <div className="member">
          <div className="pfp-wrapper">
            <img src={bhawna} alt="" />
          </div>
          <div className="info-wrapper">
            <h2>Bhawna Batra</h2>
            <p>Growth Head</p>
          </div>
        </div>
        <div className="member">
          <div className="pfp-wrapper">
            <img src={yogita} alt="" />
          </div>
          <div className="info-wrapper">
            <h2>Yogita</h2>
            <p>Head of Product</p>
          </div>
        </div>
        <div className="member">
          <div className="pfp-wrapper">
            <img src={damini} alt="" />
          </div>
          <div className="info-wrapper">
            <h2>Damini Singla</h2>
            <p>Technical Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
