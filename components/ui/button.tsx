import React, { ReactElement } from "react";

export default function Button({
  children,
  onClick,
  className,
}: {
  children?: ReactElement;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button onClick={onClick} className="border-2 border-black rounded-md px-2">
      {children}
    </button>
  );
}
