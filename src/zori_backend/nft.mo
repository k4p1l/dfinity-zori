// nft.mo (NFT Actor Class)
import Principal "mo:base/Principal";

actor class NFT(name: Text, owner: Principal, content: [Nat8], description: Text, price: Nat) = this {
    private let itemName = name;
    private var nftOwner = owner;
    private let imageBytes = content;
    private let nftDescription = description;  
    private var nftPrice = price;             

    public query func getName(): async Text {
        return itemName;
    };

    public query func getOwner(): async Principal {
        return nftOwner;
    };

    public query func getAsset(): async [Nat8] {
        return imageBytes;
    };

    public query func getDescription(): async Text {
        return nftDescription;  
    };

    public query func getPrice(): async Nat {
        return nftPrice;  
    };

    

    // Get canister ID of this NFT
    public query func getCanisterId(): async Principal {
        return Principal.fromActor(this);
    };

    // Transfer ownership
    public shared(msg) func transferOwnership(newOwner: Principal): async Text {
        if (nftOwner == msg.caller) {
            nftOwner := newOwner;
            return "Success";
        } else {
            return "Transfer Error: not initiated by owner";
        }
    };
};
