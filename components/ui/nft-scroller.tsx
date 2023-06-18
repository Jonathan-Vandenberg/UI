import React from "react";
import NftCard from "./nft-card";
import Card from "./card";
import nft1 from "@/public/nft1.png";
import nft2 from "@/public/nft2.png";
import nft3 from "@/public/nft3.png";
import nft4 from "@/public/nft4.png";
import ethereumLogo from "@/public/etheruem-logo.png";

const myNfts = [
  {
    nft: nft1,
    name: "Etheral",
    price: 0.35,
    network: "Eth",
    networkLogo: ethereumLogo,
  },
  {
    nft: nft2,
    name: "Goolios",
    price: 1.22,
    network: "Eth",
    networkLogo: ethereumLogo,
  },
  {
    nft: nft3,
    name: "Bettermint",
    price: 0.74,
    network: "Eth",
    networkLogo: ethereumLogo,
  },
  {
    nft: nft4,
    name: "Growlsky",
    price: 1.25,
    network: "Eth",
    networkLogo: ethereumLogo,
  },
];

export default function NftScroller() {
  return (
    <div className="overflow-x-auto flex space-x-3 no-scrollbar pl-16">
      <>
        {myNfts.map((myNft, index) => (
          <NftCard
            key={index}
            nft={myNft.nft}
            name={myNft.name}
            price={myNft.price}
            network={myNft.network}
            networkLogo={myNft.networkLogo}
          />
        ))}
      </>
    </div>
  );
}
