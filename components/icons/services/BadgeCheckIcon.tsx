import React from "react";

export function BadgeCheckIcon({
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
      <circle cx="12" cy="8" r="6" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
      />
    </svg>
  );
}

export default BadgeCheckIcon;
