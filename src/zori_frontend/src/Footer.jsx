import "./assets/css/Footer.css";
import logo from "./assets/zori-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="empty-div"></div>
      <footer className="footer">
        <div>
          <div className="row1">
            <div className="logo-wrapper">
              <img src={logo} alt="logo" />
            </div>

            <div className="footer-content">
              <div>
                <h2>Quick Links</h2>

                <Link to="/">
                  Home<ion-icon name="arrow-forward-sharp"></ion-icon>
                </Link>

                <Link to="/about">
                  About Us<ion-icon name="arrow-forward-sharp"></ion-icon>
                </Link>

                <Link to="/marketplace">
                  NFT Marketplace
                  <ion-icon name="arrow-forward-sharp"></ion-icon>
                </Link>

                <Link to="/spaces">
                  3D Spaces<ion-icon name="arrow-forward-sharp"></ion-icon>
                </Link>

                <Link to="/avatar">
                  3D Avatar<ion-icon name="arrow-forward-sharp"></ion-icon>
                </Link>
              </div>
              <div>
                <h2>Follow Us</h2>
                <a href="#">
                  LinkedIn<ion-icon name="arrow-forward-sharp"></ion-icon>
                </a>
                <a href="#">
                  Instagram<ion-icon name="arrow-forward-sharp"></ion-icon>
                </a>
                <a href="#">
                  Twitter<ion-icon name="arrow-forward-sharp"></ion-icon>
                </a>
                <a href="#">
                  Telegram<ion-icon name="arrow-forward-sharp"></ion-icon>
                </a>
              </div>
            </div>
          </div>
          <div className="row2">
            <p>
              Web3 offers the potential for direct interaction and transactions
              worldwide while allowing individuals to maintain total control
              over their personal data.
            </p>
            <p>&copy; 2024 The Zori. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
