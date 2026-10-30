"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardHover } from "@/utils/animations";

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
}

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export default function BlogCard({ post, className = "" }: BlogCardProps) {
  const targetHref = post.href || "#blog";

  return (
    <motion.article
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      className={`group bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between h-full transition-colors duration-300 ${className}`}
    >
      <div>
        {/* Top Photographic Cover with Zoom */}
        <div className="relative w-full aspect-[20/10] overflow-hidden bg-gray-50">
          <Image
            src={post.imageSrc}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Card Content */}
        <div className="px-4 pb-1 pt-1">
          {/* Date Badge */}
          <span className="inline-block bg-[#fdf0ef] text-[#cb5855] text-[11px] font-semibold px-2.5 py-0.5 rounded-sm mb-2 transition-colors group-hover:bg-[#cb5855] group-hover:text-white">
            {post.date}
          </span>

          {/* Post Title */}
          <h3 className="text-base sm:text-lg font-bold text-[#241121] group-hover:text-[#cb5855] transition-colors duration-200 leading-snug">
            <Link href={targetHref}>{post.title}</Link>
          </h3>

          {/* Excerpt Description */}
          <p className="mt-1.5 text-xs sm:text-sm text-[#665e64] leading-relaxed line-clamp-3">
            {post.description}
          </p>
        </div>
      </div>

      {/* Read More Footer */}
      <div className="px-4 pb-4 pt-2 border-t border-gray-50 ">
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
      </div>
    </motion.article>
  );
}
