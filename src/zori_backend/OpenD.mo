// openD.mo (Main Actor)
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import NFTActorClass "./nft";
import Cycles "mo:base/ExperimentalCycles";
import HashMap "mo:base/HashMap";
import List "mo:base/List";
import Iter "mo:base/Iter";
import Array "mo:base/Array"

actor OpenD {
    private type Listing = {
        itemOwner: Principal;
        itemPrice: Nat;
    };

    var mapOfNFT = HashMap.HashMap<Principal, NFTActorClass.NFT>(1, Principal.equal, Principal.hash);
    var mapOfOwners = HashMap.HashMap<Principal, List.List<Principal>>(1, Principal.equal, Principal.hash);
    var mapOfListings = HashMap.HashMap<Principal, Listing>(1, Principal.equal, Principal.hash);
    var freeMinters = HashMap.HashMap<Principal, Bool>(1, Principal.equal, Principal.hash);
    var freeMintCount: Nat = 0;

    //Function for minting NFT at the Frontend
    public shared(msg) func mint(imgData: [Nat8], name: Text, description: Text, price: Nat): async Principal {
        let owner = msg.caller;
        
        
        if (freeMintCount < 10 and freeMinters.get(owner) == null) {
            freeMinters.put(owner, true);
            freeMintCount += 1;
            Debug.print("Minting for free for user: " # Principal.toText(owner));
        } else {
            //adding cycles if the limit of 10 exceeds.
            Cycles.add(100_500_000_000);
        };

        let newNFT = await NFTActorClass.NFT(name, owner, imgData, description, price);
     
        let newNFTPrincipal = await newNFT.getCanisterId();

        mapOfNFT.put(newNFTPrincipal, newNFT);
        addToOwnershipMap(owner, newNFTPrincipal);

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
    
    let userNfts: List.List<Principal> = switch (mapOfOwners.get(user)) {
        case null List.nil<Principal>();
        case (?result) result;
    };
    Debug.print("Checking NFTs for user: " # Principal.toText(user));
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