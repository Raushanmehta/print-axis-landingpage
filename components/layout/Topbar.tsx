"use client";

import React from "react";
import Link from "next/link";
import { siteMap, PrintAxisTopbarData } from "@/data";
import {
  PhoneIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "@/components/icons";

export interface TopbarProps {
  data?: PrintAxisTopbarData;
}

const renderSocialIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case "facebook":
      return <FacebookIcon className="w-3.5 h-3.5 fill-current" />;
    case "instagram":
      return <InstagramIcon className="w-3.5 h-3.5" />;
    case "youtube":
      return <YouTubeIcon className="w-3.5 h-3.5 fill-current" />;
    case "linkedin":
      return <LinkedInIcon className="w-3.5 h-3.5 fill-current" />;
    default:
      return null;
  }
};

export default function Topbar({ data = siteMap.topbar }: TopbarProps = {}) {
  const currentData = data || siteMap.topbar;
  const { phone, phoneHref, email, emailHref, socialLinks } = currentData;

  return (
    <div className="w-full bg-[#0A0A0A] border-b border-white/10 text-white text-xs sm:text-[13px] hidden sm:block">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-y-2">
        {/* Left Section: Contact Details */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-5">
          {/* Phone */}
          <Link
            href={phoneHref || `tel:${phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors duration-200 group"
          >
            <span className="w-6 h-6 rounded-full bg-[#FF773C] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-110">
              <PhoneIcon className="w-3.5 h-3.5 text-white shrink-0" />
            </span>
            <span className="font-normal tracking-wide">{phone}</span>
          </Link>

          {/* Divider */}
          <span
            className="h-4 w-px bg-white/20 hidden xs:inline-block"
            aria-hidden="true"
          />

          {/* Email */}
          <Link
            href={emailHref || `mailto:${email}`}
            className="flex items-center gap-2.5 text-white/90 hover:text-white transition-colors duration-200 group"
          >
            <span className="w-6 h-6 rounded-full bg-[#FF773C] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-110">
              <EmailIcon className="w-3.5 h-3.5 text-white shrink-0" />
            </span>
            <span className="font-normal tracking-wide">{email}</span>
          </Link>
        </div>

        {/* Right Section: Social Media Circular Icons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#FF773C] border border-white/20 hover:border-[#FF773C] flex items-center justify-center text-white/90 hover:text-white transition-all duration-200"
            >
              {renderSocialIcon(item.icon)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}