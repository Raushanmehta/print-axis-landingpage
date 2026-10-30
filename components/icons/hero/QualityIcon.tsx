import React from "react";

export function QualityIcon({
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
        d="m12.89 1.45 8 4a2 2 0 0 1 0 3.55l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1 0-3.55l8-4a2 2 0 0 1 1.79 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2 12 9.11 4.55a2 2 0 0 0 1.78 0L22 12"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2 17 9.11 4.55a2 2 0 0 0 1.78 0L22 17"
      />
    </svg>
  );
}

export default QualityIcon;
