import { useState } from "react";
import logo from "./assets/zori-logo.png";
import "./assets/css/Navbar.css";
import { Link } from "react-router-dom";
import { useConnect } from "@connect2ic/react";

const Navbar = () => {
  const { isConnected, disconnect } = useConnect();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
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
        <button className="get-started-wrapper" onClick={disconnect}>
          <button className="logout">Logout</button>
        </button>
      ) : (
        <Link className="get-started-wrapper" to="/getStarted">
          <button className="get-started">Get Started ✨</button>
        </Link>
      )}
      <div className="backdrop"></div>

      {/* Hamburger menu for smaller screens */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
