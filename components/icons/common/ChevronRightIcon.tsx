import React from "react";

export function ChevronRightIcon({
  className = "w-3 h-3 text-[#cb5855] shrink-0 transition-transform duration-200 group-hover:translate-x-1",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.8"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export default ChevronRightIcon;
