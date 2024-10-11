import React from "react";
import "../assets/css/mintForm.css";
const MintForm = () => {
  return (
    <div className="mint-form">
      <h1>Mint a New NFT ✨</h1>
      <div className="field-wrapper">
        <label htmlFor="name">NFT Name</label>
        <input id="name" type="text" />
      </div>

      <div className="field-wrapper">
        <label htmlFor="description">NFT Description</label>
        <textarea id="description" type="text" />
      </div>

      <div className="field-wrapper">
        <label htmlFor="price">NFT Price</label>
        <input id="price" type="number" />
      </div>

      <div className="field-wrapper">
        <label htmlFor="file">NFT Image</label>
        <input id="file" type="file" />
      </div>

      <button className="mint-button">
        Mint NFT <ion-icon name="arrow-forward-sharp"></ion-icon>
      </button>
    </div>
  );
};

export default MintForm;
