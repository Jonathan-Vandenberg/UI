import React from "react";

export default function Transactions({
  width = 24,
  height = 24,
  stroke = 2,
}: {
  width?: number;
  height?: number;
  stroke?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-left-right"
    >
      <path d="M8 3 4 7l4 4"></path>
      <path d="M4 7h16"></path>
      <path d="m16 21 4-4-4-4"></path>
      <path d="M20 17H4"></path>
    </svg>
  );
}
