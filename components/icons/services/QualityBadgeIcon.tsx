import React from "react";

export function QualityBadgeIcon({
  className = "w-8 h-8",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
      <path d="M11 3l-3 6 4 12 4-12-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}

export default QualityBadgeIcon;
