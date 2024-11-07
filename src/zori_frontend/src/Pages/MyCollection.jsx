import React, { useEffect, useState } from "react";
import nftMarketActorPromise from "../actor";
import { useConnect } from "@connect2ic/react"; 
import { Principal } from "@dfinity/principal"; // Import Principal to convert the principal ID
// import "../assets/css/MyCollection.css";

const MyCollection = () => {
  const [nftCollection, setNftCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { principal } = useConnect();

  useEffect(() => {
    const fetchMintedNFTs = async () => {
      try {
        const nftMarketActor = await nftMarketActorPromise;
  
        // Convert principal to a Principal object if it is a string
        // const userPrincipal = Principal.fromText(principal.toString());
        const userPrincipal = Principal.fromText(principal);
        console.log("Connected principal:", principal);
        console.log("Converted principal:", userPrincipal);
  
        // Fetch all owned NFTs by the user
        const nftIds = await nftMarketActor.getOwnedNFTs(userPrincipal);
        console.log("NFT IDs fetched for principal:", nftIds);
  
        // Retrieve NFT details for each ID
        const nftDetailsPromises = nftIds.map(async (nftId) => {
          console.log("Fetching details for NFT ID:", nftId);
          const nft = await nftMarketActor.getNFTActor(nftId); // Instantiate each NFT actor
          const name = await nft.getName();
          const description = await nft.getDescription();
          const price = await nft.getPrice();
          const imageBytes = await nft.getAsset();
          
          // Convert imageBytes to base64 format for display
          const imageBase64 = `data:image/png;base64,${btoa(
            String.fromCharCode(...new Uint8Array(imageBytes))
          )}`;
          
          console.log("NFT Details - Name:", name, "Description:", description, "Price:", price);
          return { id: nftId.toText(), name, description, price, imageUrl: imageBase64 };
        });
  
        const nftDetails = await Promise.all(nftDetailsPromises);
        console.log("Final NFT Collection:", nftDetails);
        setNftCollection(nftDetails);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    if (principal) fetchMintedNFTs();
  }, [principal]);
  
  return (
    <div className="my-collection">
      <h1>My NFT Collection</h1>
      {isLoading ? (
        <p>Loading NFTs...</p>
      ) : nftCollection.length > 0 ? (
        <div className="nft-grid">
          {nftCollection.map((nft) => (
            <div key={nft.id} className="nft-card">
              <img src={nft.imageUrl} alt={nft.name} />
              <h2>{nft.name}</h2>
              <p>{nft.description}</p>
              <p>Price: {nft.price} ICP</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No NFTs minted yet.</p>
      )}
    </div>
  );
};

export default MyCollection;