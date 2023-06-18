import React from "react";
import Image, { StaticImageData } from "next/image";
import CardNft from "./card-nft";

export default function NftCard({
  nft,
  key,
  name,
  price,
  network,
  networkLogo,
}: {
  nft: StaticImageData;
  networkLogo: StaticImageData;
  key: number;
  name: string;
  price: number;
  network: string;
}) {
  return (
    <CardNft className="rounded-md drop-shadow-sm" key={key}>
      <div className="flex flex-col justify-between">
        <div className="relative flex h-48 w-48 shrink-0 overflow-hidden aspect-square rounded-md">
          <Image src={nft} width={400} height={400} alt="My Nft" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="grid grid-cols-1">
            <div className="text-sm leading-relaxed tracking-widest text-slate-600">
              {name}
            </div>
            <div className="text-cyan-500 font-semibold ">
              {price + " " + network}
            </div>
          </div>
          <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <Image
              src={networkLogo}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </CardNft>
  );
}
