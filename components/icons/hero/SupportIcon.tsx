import React from "react";

export function SupportIcon({
  className = "w-10 h-10 text-[#cb5855] shrink-0",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 18v-6a9 9 0 0 1 18 0v6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 19a2 2 0 0 1-2 2H9" />
    </svg>
  );
}

export default SupportIcon;
