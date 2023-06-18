import React from "react";

export default function Bank({
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
      className="lucide lucide-landmark"
    >
      <line x1="3" x2="21" y1="22" y2="22"></line>
      <line x1="6" x2="6" y1="18" y2="11"></line>
      <line x1="10" x2="10" y1="18" y2="11"></line>
      <line x1="14" x2="14" y1="18" y2="11"></line>
      <line x1="18" x2="18" y1="18" y2="11"></line>
      <polygon points="12 2 20 7 4 7"></polygon>
    </svg>
  );
}
