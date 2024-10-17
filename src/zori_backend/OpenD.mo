// openD.mo (Main Actor)
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import NFTActorClass "./nft";
import Cycles "mo:base/ExperimentalCycles";
import HashMap "mo:base/HashMap";
import List "mo:base/List";
import Iter "mo:base/Iter";

actor OpenD {
    // Custom datatype for listing
    private type Listing = {
        itemOwner: Principal;
        itemPrice: Nat;
    };

    // HashMaps to store NFTs, Owners, and Listings
    var mapOfNFT = HashMap.HashMap<Principal, NFTActorClass.NFT>(1, Principal.equal, Principal.hash);
    var mapOfOwners = HashMap.HashMap<Principal, List.List<Principal>>(1, Principal.equal, Principal.hash);
    var mapOfListings = HashMap.HashMap<Principal, Listing>(1, Principal.equal, Principal.hash);

    // Function to mint NFT from the frontend
    public shared(msg) func mint(imgData: [Nat8], name: Text, description: Text, price: Nat): async Principal {
        let owner = msg.caller;  // The owner of the minted NFT

        // Add cycles for minting 
        Cycles.add(100_500_000_000);

        // Create a new NFT with the provided name, description, and price
        let newNFT = await NFTActorClass.NFT(name, owner, imgData, description, price);

        // Get the new NFT's Principal (Canister ID)
        let newNFTPrincipal = await newNFT.getCanisterId();

        // Store the new NFT in the map
        mapOfNFT.put(newNFTPrincipal, newNFT);
        addToOwnershipMap(owner, newNFTPrincipal);

        // Return the Principal ID of the minted NFT
        return newNFTPrincipal;
    };

    // Function to add an NFT to an owner
    private func addToOwnershipMap(owner: Principal, nftId: Principal) {
        var ownedNfts: List.List<Principal> = switch (mapOfOwners.get(owner)) {
            case null List.nil<Principal>();
            case (?result) result;
        };

        // Update the list of owned NFTs
        ownedNfts := List.push(nftId, ownedNfts);
        mapOfOwners.put(owner, ownedNfts);
    };

    // Function to get all NFTs owned by a user
    public query func getOwnedNFTs(user: Principal): async [Principal] {
        var userNfts: List.List<Principal> = switch (mapOfOwners.get(user)) {
            case null List.nil<Principal>();
            case (?result) result;
        };
        return List.toArray(userNfts);
    };

    // Function to get all NFTs listed for sale
    public query func getListedNFTs(): async [Principal] {
        return Iter.toArray(mapOfListings.keys());
    };

    // Function to list an item for sale
    public shared(msg) func listItem(id: Principal, price: Nat): async Text {
        // Retrieve the NFT from the map
        var item: NFTActorClass.NFT = switch (mapOfNFT.get(id)) {
            case null return "NFT does not exist";
            case (?result) result;
        };

        let owner = await item.getOwner();

        // Ensure the caller is the owner of the NFT
        if (Principal.equal(owner, msg.caller)) {
            let newListing: Listing = {
                itemOwner = owner;
                itemPrice = price;
            };

            // Add the NFT to the listings map
            mapOfListings.put(id, newListing);
            return "Success";
        } else {
            return "You don't own this NFT";
        }
    };

    // Function to check if an NFT is listed
    public query func isListed(id: Principal): async Bool {
        if (mapOfListings.get(id) == null) {
            return false;
        } else {
            return true;
        }
    };

    // Function to get the original owner of an NFT
    public query func getOriginalOwner(id: Principal): async Principal {
        var listing: Listing = switch (mapOfListings.get(id)) {
            case null return Principal.fromText("");
            case (?result) result;
        };
        return listing.itemOwner;
    };

    // Function to get the listing price of an NFT
    public query func getListingPrice(id: Principal): async Nat {
        var listing: Listing = switch (mapOfListings.get(id)) {
            case null return 0;
            case (?result) result;
        };
        return listing.itemPrice;
    };

    // Function to complete a purchase and transfer ownership
    public shared(msg) func completePurchase(nftId: Principal, seller: Principal, buyer: Principal): async Text {
        var purchaseNFT: NFTActorClass.NFT = switch (mapOfNFT.get(nftId)) {
            case null return "NFT does not exist";
            case (?result) result;
        };

        // Transfer ownership
        let transferResult = await purchaseNFT.transferOwnership(buyer);
        Debug.print(debug_show(transferResult));

        if (transferResult == "Success") {
            // Remove from listings
            mapOfListings.delete(nftId);

            var ownedNFTs: List.List<Principal> = switch (mapOfOwners.get(seller)) {
                case null List.nil<Principal>();
                case (?result) result;
            };

            // Update seller's owned NFTs
            ownedNFTs := List.filter(ownedNFTs, func(listItemId: Principal): Bool {
                return listItemId != nftId;
            });

            // Update buyer's ownership
            addToOwnershipMap(buyer, nftId);
            return "Success";
        } else {
            return "Error";
        }
    };
};
