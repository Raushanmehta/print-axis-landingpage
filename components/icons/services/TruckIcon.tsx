import React from "react";

export function TruckIcon({
  className = "w-6 h-6 text-[#cb5855]",
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
        d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 18H9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 18h2a1 1 0 0 0 1-1v-5l-3-4h-5v10"
      />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path strokeLinecap="round" d="M2 8h3M1 12h4" />
    </svg>
  );
}

export default TruckIcon;
