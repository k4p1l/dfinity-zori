import { useState, useEffect } from "react";
import logo from "./assets/zori-logo.png";
import "./assets/css/Navbar.css";
import { Link } from "react-router-dom";
import { useConnect } from "@connect2ic/react";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { isConnected, disconnect } = useConnect();
  //for sidebar in mobile
  const [isOpen, setIsOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  // for dropdown menu
  const [isOpenn, setIsOpenn] = useState(false);
  console.log(isConnected);

  useEffect(() => {
    if (isConnected) {
      const randomAvatar = `https://robohash.org/${Math.random()}.png?size=50x50`;
      setAvatarUrl(randomAvatar);
    }
  }, [isConnected]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpenn(true);
  };

  const handleMouseLeave = () => {
    setIsOpenn(false);
  };

  return (
    <nav>
      <div className="navbar">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="Zori" />
          </Link>
        </div>
        <div className={`links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/about" onClick={toggleSidebar}>
            About Us
          </Link>
          <Link to="/marketplace" onClick={toggleSidebar}>
            NFT Marketplace
          </Link>
          <Link to="/avatar" onClick={toggleSidebar}>
            3D Avatar
          </Link>
          <Link to="/spaces" onClick={toggleSidebar}>
            3D Spaces
          </Link>
        </div>
        {isConnected ? (
          <div
            className="dropdown get-started-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={avatarUrl} className="user-image" alt="User Avatar" />

            <div className={`dropdown-content ${isOpenn ? "show" : ""}`}>
              <a className="logout" href="/profile">
                Profile
              </a>
              <button onClick={disconnect} className="logout">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link className="get-started-wrapper" to="/getStarted">
            <button className="get-started">Get Started ✨</button>
          </Link>
        )}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
