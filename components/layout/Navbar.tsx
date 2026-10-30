"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteMap, PrintAxisNavbarData } from "@/data";
import { ArrowRightIcon, MenuIcon, CloseIcon } from "@/components/icons";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface QuoteButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface NavbarProps {
  data?: PrintAxisNavbarData;
  navItems?: NavItem[];
  quoteButtonText?: string;
  quoteButtonHref?: string;
}

/**
 * Reusable, strictly typed CTA Button matching the exact design
 */
export const QuoteButton: React.FC<QuoteButtonProps> = ({
  label = "GET A QUOTE",
  href = "/get-a-quote",
  onClick,
  className = "",
}) => {
  const content = (
    <>
      <span className="font-bold tracking-wider text-sm sm:text-[15px] uppercase">
        {label}
      </span>
      <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
    </>
  );

  const baseClasses =
    "group inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:px-8 sm:py-3.5 rounded-sm bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] hover:from-black hover:via-black hover:to-black hover:bg-black hover:bg-none text-white shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-300 cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {content}
    </button>
  );
};

export default function Navbar({
  data = siteMap.navbar,
  navItems = data?.navLinks || siteMap.navbar.navLinks,
  quoteButtonText = data?.cta?.label || siteMap.navbar.cta.label,
  quoteButtonHref = data?.cta?.href || siteMap.navbar.cta.href,
}: NavbarProps = {}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logo = data?.logo || siteMap.navbar.logo;

  return (
    <nav className="w-full bg-white border-b border-gray-100/80 sticky top-0 z-50 transition-shadow shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Brand Logo from JSON */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 260}
              height={logo.height || 70}
              priority
              className="h-10 sm:h-12 lg:h-[54px] xl:h-[58px] w-auto object-contain transition-all"
            />
          </Link>

          {/* Desktop Navigation Links from JSON */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative text-[15px] font-medium tracking-normal transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-[#c85956] font-semibold"
                      : "text-[#2e1b2f] hover:text-[#c85956]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#c85956] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button from JSON */}
          <div className="hidden lg:flex items-center">
            <QuoteButton
              label={quoteButtonText}
              href={quoteButtonHref}
            />
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2e1b2f] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#c85956] bg-red-50/50 font-semibold"
                      : "text-[#2e1b2f] hover:bg-gray-50 hover:text-[#c85956]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3">
              <QuoteButton
                label={quoteButtonText}
                href={quoteButtonHref}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}