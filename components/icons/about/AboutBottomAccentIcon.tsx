import React from "react";

export function AboutBottomAccentIcon({
  className = "w-20 sm:w-24 md:w-28 lg:w-40 h-24 sm:h-28 md:h-32 lg:h-40 text-[#cb5855]",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 110 100"
      fill="currentColor"
      {...props}
    >
      <polygon points="110,140 0,140 0,75 50,75 50,0 110,0" />
    </svg>
  );
}

export default AboutBottomAccentIcon;
