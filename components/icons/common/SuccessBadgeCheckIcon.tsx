import React from "react";

export function SuccessBadgeCheckIcon({
  className = "w-10 h-10 stroke-white fill-none stroke-[2.5]",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default SuccessBadgeCheckIcon;
