import React from "react";
import { useLocation } from "react-router-dom";

const DisplayNFT = () => {
  const location = useLocation();
  const { mintedNFTPrincipal, base64Image, nftName, description, price } =
    location.state || {};

  if (!mintedNFTPrincipal || !base64Image) {
    return <p>No NFT data available. Please mint an NFT first.</p>;
  }

  return (
    <div>
      <h1>Minted NFT Details</h1>
      <p>
        <strong>NFT Name:</strong> {nftName}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Price:</strong> {price} ICP
      </p>
      <p>
        <strong>Minted NFT Principal:</strong> {mintedNFTPrincipal}
      </p>

      {/* Display the minted image */}
      <h2>Minted NFT Image:</h2>
      <img src={`data:image/png;base64,${base64Image}`} alt="Minted NFT" />
    </div>
  );
};

export default DisplayNFT;
