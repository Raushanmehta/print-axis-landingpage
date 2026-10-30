import React from "react";

export function SendIcon({
  className = "w-3.5 h-3.5 fill-current rotate-45 -mt-0.5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

export default SendIcon;
