import React from "react";

export function TShirtIcon({
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
        d="M6 2 2 7l4 2v13h12V9l4-2-4-5-4 3h-4L6 2Z"
      />
    </svg>
  );
}

export default TShirtIcon;
