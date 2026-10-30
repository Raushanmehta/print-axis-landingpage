import React from "react";

export function CheckmarkIcon({
  className = "w-2.5 h-2.5 text-white",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="2.5 6.2 4.8 8.5 9.5 3.5" />
    </svg>
  );
}

export default CheckmarkIcon;
