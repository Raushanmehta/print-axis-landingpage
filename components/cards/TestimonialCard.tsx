"use client";

import React from "react";
import {
  QuoteIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons";
import { AnimatedIcon } from "@/utils/animations";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  imageSrc: string;
}

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalCount?: number;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  onPrev,
  onNext,
  currentIndex = 0,
  totalCount = 3,
  className = "",
}: TestimonialCardProps) {
  const rating = testimonial.rating ?? 5;

  return (
    <div
      className={`relative bg-[#34142b] rounded-lg p-5 sm:p-6 lg:p-7 overflow-hidden text-white shadow-xl flex flex-col justify-between ${className}`}
    >
      {/* Background Subtle Organic Curved Waves */}
      <div className="absolute right-0 bottom-0 w-80 h-80 pointer-events-none opacity-20">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border-[30px] border-white/10" />
        <div className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full border-[25px] border-white/15" />
      </div>

      <div className="relative z-10" key={testimonial.id}>
        {/* Double Quote Icon in Coral with Gentle Float */}
        <div className="mb-3">
          <AnimatedIcon animation="float">
            <QuoteIcon />
          </AnimatedIcon>
        </div>

        {/* Testimonial Quote Body */}
        <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-4 min-h-[72px]">
          {testimonial.quote}
        </p>

        {/* Author Info */}
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
            {testimonial.name}
          </h4>
          <p className="text-xs sm:text-sm text-white/60 mt-0.5">
            {testimonial.role}
          </p>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mt-1.5">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-[#e06864]">
                <StarIcon />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Slider Buttons (Bottom Right) with Counter */}
      <div className="relative z-10 flex items-center justify-between mt-4 sm:mt-3 pt-3 border-t border-white/10">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalCount }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex
                ? "w-6 bg-[#cb5855]"
                : "w-2 bg-white/20"
                }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous testimonial"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-[#e06864] text-white hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shadow-xs hover:shadow-md"
          >
            <ChevronLeftIcon />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next testimonial"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-[#e06864] text-white hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
          >
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
