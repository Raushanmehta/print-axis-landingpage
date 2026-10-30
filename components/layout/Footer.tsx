import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteMap, PrintAxisFooterData } from "@/data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  ChevronRightIcon,
  CallIcon,
  EmailIcon,
  LocationIcon,
} from "@/components/icons";

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  phoneHref?: string;
  email: string;
  emailHref?: string;
  addressLine1: string;
  addressLine2: string;
}

export interface SocialLinkItem {
  icon: string;
  href: string;
  label: string;
}

export interface FooterTitles {
  quickLinks?: string;
  services?: string;
  contact?: string;
  callUs?: string;
  emailUs?: string;
  visitUs?: string;
}

export interface FooterProps {
  data?: PrintAxisFooterData;
  quickLinks?: FooterLink[];
  services?: FooterLink[];
  contactInfo?: ContactInfo;
  copyrightText?: string;
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  description?: string;
  socialLinks?: SocialLinkItem[];
  titles?: FooterTitles;
}

const renderSocialIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case "facebook":
      return <FacebookIcon className="w-5 h-5 fill-current" />;
    case "instagram":
      return <InstagramIcon className="w-5 h-5" />;
    case "linkedin":
      return <LinkedInIcon className="w-5 h-5 fill-current" />;
    case "youtube":
      return <YouTubeIcon className="w-5 h-5 fill-current" />;
    default:
      return null;
  }
};

export default function Footer(props: FooterProps = {}) {
  const data = props?.data || siteMap.footer;

  const logo = props?.logo || data?.logo || siteMap.footer.logo;
  const description = props?.description || data?.description || siteMap.footer.description;
  const quickLinks = props?.quickLinks || data?.quickLinks || siteMap.footer.quickLinks;
  const services = props?.services || data?.services || siteMap.footer.services;
  const contactInfo = props?.contactInfo || data?.contactInfo || siteMap.footer.contactInfo;
  const copyrightText = props?.copyrightText || data?.copyrightText || siteMap.footer.copyrightText;
  const socialLinks = props?.socialLinks || data?.socialLinks || siteMap.footer.socialLinks;
  const titles = { ...siteMap.footer.titles, ...(data?.titles || {}), ...(props?.titles || {}) };

  const phoneHref = contactInfo.phoneHref || `tel:${contactInfo.phone.replace(/\s+/g, "")}`;
  const emailHref = contactInfo.emailHref || `mailto:${contactInfo.email}`;

  return (
    <footer className="w-full bg-[#261021] text-white pt-16 lg:pt-20">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-6 sm:gap-x-8 lg:gap-8">
          {/* Column 1: Brand & Bio & Socials from JSON */}
          <div className="col-span-2 lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 260}
                height={logo.height || 70}
                className="h-11 sm:h-13 lg:h-[60px] xl:h-[64px] w-auto object-contain transition-all"
              />
            </Link>

            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              {description}
            </p>

            {/* Social Icons from JSON */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white/90 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
                >
                  {renderSocialIcon(item.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links from JSON */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              {titles.quickLinks}
            </h3>
            <div
              className="w-8 h-[2.5px] bg-[#cb5855] mt-2 mb-6 rounded-full"
              aria-hidden="true"
            />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2.5 text-white/85 hover:text-white text-sm transition-all duration-200"
                  >
                    <ChevronRightIcon />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services from JSON */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              {titles.services}
            </h3>
            <div
              className="w-8 h-[2.5px] bg-[#cb5855] mt-2 mb-6 rounded-full"
              aria-hidden="true"
            />
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2.5 text-white/85 hover:text-white text-sm transition-all duration-200"
                  >
                    <ChevronRightIcon />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch from JSON */}
          <div className="col-span-2 lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              {titles.contact}
            </h3>
            <div
              className="w-8 h-[2.5px] bg-[#cb5855] mt-2 mb-6 rounded-full"
              aria-hidden="true"
            />

            <div className="space-y-5">
              {/* Call Us */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-12 h-12 rounded-full bg-[#3d1833] flex items-center justify-center shrink-0 text-[#e06864] transition-colors group-hover:bg-[#4d1f40]">
                  <CallIcon />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 tracking-wider">
                    {titles.callUs}
                  </span>
                  <Link
                    href={phoneHref}
                    className="text-sm font-semibold text-white tracking-wide hover:text-[#e06864] transition-colors"
                  >
                    {contactInfo.phone}
                  </Link>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-12 h-12 rounded-full bg-[#3d1833] flex items-center justify-center shrink-0 text-[#e06864] transition-colors group-hover:bg-[#4d1f40]">
                  <EmailIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 tracking-wider">
                    {titles.emailUs}
                  </span>
                  <Link
                    href={emailHref}
                    className="text-sm font-semibold text-white tracking-wide hover:text-[#e06864] transition-colors"
                  >
                    {contactInfo.email}
                  </Link>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-12 h-12 rounded-full bg-[#3d1833] flex items-center justify-center shrink-0 text-[#e06864] transition-colors group-hover:bg-[#4d1f40]">
                  <LocationIcon />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 tracking-wider">
                    {titles.visitUs}
                  </span>
                  <p className="text-sm font-semibold text-white tracking-wide leading-snug">
                    {contactInfo.addressLine1}
                    <br />
                    {contactInfo.addressLine2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright from JSON */}
        <div className="mt-10 lg:mt-12 border-t border-white/10 py-6 text-center flex items-center justify-center">
          <p className="text-xs sm:text-sm text-white/70 text-center">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}