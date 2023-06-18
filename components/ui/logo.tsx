import { Shield, Boxes } from "lucide-react";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-1">
      <div className="relative">
        <div className="text-white mt-1">
          <Shield />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <Boxes />
        </div>
      </div>
      <p className="font-medium tracking-widest text-2xl text-white">
        KasperPass
      </p>
    </div>
  );
}
