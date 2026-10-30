import React from "react";

export function Cube3DIcon({
  className = "w-8 h-8",
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
        d="m21 16-9 5-9-5V8l9-5 9 5v8z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.27 6.96 12 12.01l8.73-5.05"
      />
    </svg>
  );
}

export default Cube3DIcon;
