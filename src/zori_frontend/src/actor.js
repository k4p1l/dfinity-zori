import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../declarations/zori_backend/zori_backend.did.js";

// Determine if we are in a local environment
const isLocalEnv = process.env.DFX_NETWORK === "local";

// Create an asynchronous function to initialize the actor
const createActor = async () => {
  // Create an HttpAgent with the correct host
  const agent = new HttpAgent({
    host: isLocalEnv ? "http://localhost:38105" : "https://icp0.io", // Adjust to your replica host
  });

  // Fetch the root key only in local environments
  if (isLocalEnv) {
    await agent.fetchRootKey(); // This step is crucial for local development
  }

  // Create and return the actor
  return Actor.createActor(idlFactory, {
    agent,
    canisterId: process.env.CANISTER_ID_ZORI_BACKEND, // Ensure this environment variable is set
  });
};

// Initialize the actor asynchronously
const nftMarketActor = createActor();

export default nftMarketActor;
