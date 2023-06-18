"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Camera() {
  const [source, setSource] = useState("");

  const hiddenFileInput = React.useRef(null);

  const handleCapture = (target: EventTarget & HTMLInputElement) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
        console.log("url: " + newUrl);
        console.log("sourceUrl: " + source);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 grid-rows-2 items-center justify-center  pt-12 h-full bg-green-300">
      <div className="flex justify-center bg-gray-400 w-[80vw] rounded-full mx-auto">
        <Image src={source} alt={"snap"} width={720} height={720} />
      </div>
      <div className="hidden">
        <input
          accept="image/*"
          size={60}
          className=""
          id="file-upload"
          type="file"
          capture="environment"
          ref={hiddenFileInput}
          onChange={(e) => handleCapture(e.target)}
        />
      </div>
      <label
        className="mt-36 custom-file-upload px-36 py-4 text-thin rounded-full border-2 border-blue-200 bg-cyan-500 text-white items-end h-full justify-center flex"
        htmlFor="file-upload"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
      </label>
    </div>
  );
}
