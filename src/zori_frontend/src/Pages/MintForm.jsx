import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import nftMarketActorPromise from "../actor";
import { Principal } from "@dfinity/principal";
import "../assets/css/mintForm.css";

const MintForm = () => {
  const [nftName, setNftName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageData, setImageData] = useState(null);
  const [nftMarketActor, setNftMarketActor] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [imagePreview, setImagePreview] = useState(null);
  const [mintSuccess, setMintSuccess] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [mintedNFTs, setMintedNFTs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    nftMarketActorPromise.then(setNftMarketActor);
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageData(e.target.result);
      setImagePreview(URL.createObjectURL(file));
    };
    reader.readAsArrayBuffer(file);
  };

  const resetForm = () => {
    setNftName("");
    setDescription("");
    setPrice("");
    setImageData(null);
    setImagePreview(null);
  };

  const handleMint = async () => {
    if (!nftName || !description || !price || !imageData) {
      alert("Please fill out all fields and upload an image.");
      return;
    }
    if (isNaN(price) || parseFloat(price) <= 0) {
      alert("Please enter a valid price.");
      return;
    }
    setIsLoading(true);
    const imgArrayBuffer = new Uint8Array(imageData);
    try {
      const result = await nftMarketActor.mint(
        imgArrayBuffer,
        nftName,
        description,
        parseFloat(price)
      );
      const mintedNFTPrincipal = result.toText(); // Save the principal of the minted NFT
      const base64Image = arrayBufferToBase64(imageData); // Convert to base64
      console.log("Navigating to display-nft with minted data");
      resetForm();
      setMintSuccess(true);
      setMintedNFTs([
        ...mintedNFTs,
        { name: nftName, description, price, imageUrl: imagePreview },
      ]);
      navigate("/display-nft", {
        state: { mintedNFTPrincipal, base64Image, nftName, description, price },
      });
    } catch (error) {
      console.error("Error minting NFT:", error);
      setMintSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmMint = () => {
    setShowConfirmationModal(true);
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`Check out my new NFT: ${nftName}!`);
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mint-form">
      <h1>Mint a New NFT ✨</h1>
      <div className="field-wrapper">
        <label htmlFor="name">NFT Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter NFT Name"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
        />
      </div>

      <div className="field-wrapper">
        <label htmlFor="description">NFT Description</label>
        <textarea
          id="description"
          placeholder="Enter NFT Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="field-wrapper">
        <label htmlFor="price">NFT Price</label>
        <input
          id="price"
          type="number"
          placeholder="Enter NFT Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="field-wrapper">
        <label htmlFor="file">NFT Image</label>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>

      {imagePreview && (
        <div>
          <h3>Image Preview:</h3>
          <img
            src={imagePreview}
            alt="NFT preview"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      )}

      <div>
        {isLoading ? (
          ""
        ) : (
          <button
            className="mint-button"
            onClick={handleConfirmMint}
            disabled={isLoading}
          >
            Mint NFT <ion-icon name="arrow-forward-sharp"></ion-icon>
          </button>
        )}
      </div>

      {mintSuccess === true && (
        <div>
          <p>Successfully minted NFT!</p>
          <button onClick={shareOnTwitter}>Share on Twitter</button>
        </div>
      )}
      {mintSuccess === false && <p>Failed to mint NFT. Please try again.</p>}

      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-wrapper">
            <h2>
              Are you sure you want to mint this NFT with the following details?
            </h2>
            <table>
              <tr>
                <th>NFT Name</th>
                <th>{nftName}</th>
              </tr>
              <tr>
                <th>NFT Description</th>
                <th>{description}</th>
              </tr>
              <tr>
                <th>NFT Price</th>
                <th>{price}</th>
              </tr>
            </table>
            {/* <p>Name: {nftName}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p> */}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="NFT preview"
                style={{ width: "200px", height: "auto" }}
              />
            )}
            <div className="confirmation-buttons">
              <button onClick={() => setShowConfirmationModal(false)}>
                CANCEL
              </button>
              <button onClick={handleMint}>CONFIRM </button>
            </div>
            <div>{isLoading ? <p>Minting in progress...</p> : ""}</div>
            {mintSuccess === true && (
              <div>
                <p>Successfully minted NFT!</p>
                <button onClick={shareOnTwitter}>Share on Twitter</button>
              </div>
            )}
            {mintSuccess === false && (
              <p>Failed to mint NFT. Please try again.</p>
            )}
          </div>
        </div>
      )}

      {/* <h2>Your Minted NFTs</h2>
      <div>
        {mintedNFTs.map((nft, index) => (
          <div key={index}>
            <img
              src={nft.imageUrl}
              alt={`NFT ${nft.name}`}
              style={{ width: "100px", height: "auto" }}
            />
            <p>{nft.name}</p>
            <p>{nft.description}</p>
            <p>Price: {nft.price}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MintForm;
