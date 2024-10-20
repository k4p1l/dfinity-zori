import React, { useState } from "react";
import "../assets/css/Marketplace.css";
import { Link } from "react-router-dom";
import nft1 from "../../public/images/nfts/1.jpg";
import nft2 from "../../public/images/nfts/5.jpg";
import nft3 from "../../public/images/nfts/4.jpg";
import star from "../../public/images/star.gif";
import Tilt from "react-parallax-tilt";

const Marketplace = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      imageUrl: nft1,
      title: "NFT 1",
      price: "2",
      currency: "ICP",
    },
    {
      id: 2,
      imageUrl: nft2,
      title: "NFT 2",
      price: "3",
      currency: "ICP",
    },
    {
      id: 3,
      imageUrl: nft3,
      title: "NFT 3",
      price: "1.5",
      currency: "ICP",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="marketplace-container">
      {/* <div class="marquee">
        <h1>Coming Soon ✨ &nbsp;</h1>
        <h1>Coming Soon ✨ &nbsp;</h1>
        <h1>Coming Soon ✨ &nbsp;</h1>
        <h1>Coming Soon ✨ &nbsp;</h1>
        <h1>Coming Soon ✨ &nbsp;</h1>
      </div> */}
      <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>

      <h1>TRENDING NFTs</h1>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.6}
        glareColor="#e8d2ff"
        glarePosition="all"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={2000}
        scale={1.05}
        speed={1000}
        tiltReverse={true}
        glareBorderRadius="20px"
      >
        <div className="slider">
          <div className="slide active">
            <div className="slide-image">
              <img
                src={slides[currentIndex].imageUrl}
                alt={slides[currentIndex].title}
                className="nft-image"
              />
            </div>
            <div className="text-overlay">
              <h2>{slides[currentIndex].title}</h2>
              <h3>Floor: {slides[currentIndex].price} ICP</h3>
            </div>
          </div>
        </div>
      </Tilt>

      <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="marketplace-content">
        <p>
          <span>Mint Your Own NFTs</span> <br />
          Create and Mint your unique NFT by clicking the button below.
        </p>
        <Link to="/mintNFT">
          <button className="mint-button">Mint NFT</button>
        </Link>
      </div>
    </div>
  );
};

export default Marketplace;
