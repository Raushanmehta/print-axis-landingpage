"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { cardHover } from "@/utils/animations";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  icon: React.ReactNode;
}

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export default function ServiceCard({
  service,
  className = "",
}: ServiceCardProps) {
  const targetHref = service.href || "#services";

  return (
    <motion.div
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      className={`group relative bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between transition-colors duration-300 ${className}`}
    >
      <div>
        {/* Top Photographic Mockup with Hover Zoom */}
        <div className="relative w-full aspect-[20/10] overflow-hidden bg-gray-50">
          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Floating Circular Icon Badge Overlapping Image with Spring Scale on Hover */}
        <div className="relative -mt-8 ml-4 z-10 w-16 h-16 rounded-full bg-[#fdf0ef] border-2 border-white shadow-md flex items-center justify-center text-[#cb5855] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {service.icon}
        </div>

        {/* Card Text Content */}
        <div className="px-4 pb-1 pt-2">
          <h3 className="text-base sm:text-lg font-bold text-[#241121] group-hover:text-[#cb5855] transition-colors duration-200">
            {service.title}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-[#665e64] leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-4 pb-4 pt-3 flex items-center justify-between border-t border-gray-50 mt-2">
        <Link
          href={targetHref}
          className="text-xs sm:text-sm font-semibold text-[#cb5855] inline-flex items-center gap-1.5 group/link"
        >
          <span>Read More</span>
          <span
            className="transition-transform duration-200 group-hover/link:translate-x-1.5"
            aria-hidden="true"
          >
            →
          </span>
        </Link>

        {/* Circular Arrow Button with hover spring */}
        <Link
          href={targetHref}
          aria-label={`Learn more about ${service.title}`}
          className="w-10 h-10 rounded-full border border-[#cb5855]/40 flex items-center justify-center text-[#cb5855] group-hover:border-black group-hover:bg-black group-hover:text-white hover:bg-black hover:border-black hover:text-white transition-all duration-300 shadow-xs cursor-pointer"
        >
          <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
