import React from "react";

export default function SectionLabel({ title }: { title: string }) {
  return (
    <div className="w-full py-5 text-slate-600 tracking-wide">{title}</div>
  );
}
