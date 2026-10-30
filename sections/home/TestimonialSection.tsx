"use client";

import React, { useState } from "react";
import Image from "next/image";
import TestimonialCard, {
  TestimonialItem,
} from "@/components/cards/TestimonialCard";
import { siteMap, PrintAxisTestimonialData } from "@/data";
import {
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  FloatingElement,
  AnimatedIcon,
} from "@/utils/animations";

export interface TestimonialSectionProps {
  data?: PrintAxisTestimonialData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  testimonials?: TestimonialItem[];
  testimonialsList?: TestimonialItem[];
}

// Testimonials section showing client reviews and rotating portrait.
export default function TestimonialSection(props: TestimonialSectionProps) {
  const data = props.data || siteMap.testimonial;

  const tagline = props.tagline || data?.tagline || siteMap.testimonial.tagline;
  const titlePart1 = props.titlePart1 || data?.titlePart1 || siteMap.testimonial.titlePart1;
  const titleHighlight = props.titleHighlight || data?.titleHighlight || siteMap.testimonial.titleHighlight;
  const subtitle = props.subtitle || data?.subtitle || siteMap.testimonial.subtitle;
  const testimonials = (
    props.testimonials ||
    props.testimonialsList ||
    data?.testimonialsList ||
    (data as any)?.testimonials ||
    siteMap.testimonial.testimonialsList ||
    []
  ) as TestimonialItem[];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : (prev + 1) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex] || testimonials[0];

  return (
    <section id="testimonials" className="relative w-full bg-white py-8 lg:py-12 overflow-hidden scroll-mt-20">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeDown delay={0.05}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span
                className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
                {tagline}
              </span>
            </div>
          </FadeDown>

          <FadeUp delay={0.12}>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#241121]">
              <span>{titlePart1} </span>
              <span className="text-[#cb5855]">{titleHighlight}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-2 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </FadeUp>
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <FadeLeft delay={0.15}>
              <TestimonialCard
                testimonial={currentTestimonial}
                onPrev={handlePrev}
                onNext={handleNext}
                currentIndex={currentIndex}
                totalCount={testimonials.length}
              />
            </FadeLeft>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <FadeRight delay={0.2}>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                <div
                  className="absolute inset-2 rounded-full border border-[#cb5855]/30 pointer-events-none animate-spin-slow"
                  aria-hidden="true"
                  style={{ animation: "spin 25s linear infinite" }}
                />

                <div
                  className="absolute -top-4 -bottom-4 -left-4 -right-4 rounded-full border-2 border-dashed border-[#cb5855]/35 pointer-events-none"
                  aria-hidden="true"
                  style={{ animation: "spin 35s linear infinite reverse" }}
                />

                <div className="absolute top-6 right-7 z-20">
                  <AnimatedIcon animation="pulse">
                    <div className="w-5 h-5 rounded-full bg-[#cb5855] shadow-xs" />
                  </AnimatedIcon>
                </div>

                <div className="absolute bottom-4 left-2 z-20">
                  <FloatingElement amplitude={5} duration={3}>
                    <div className="w-10 h-10 rounded-full bg-[#ba4f4c] border-2 border-white shadow-md" />
                  </FloatingElement>
                </div>

                <div
                  className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-5 gap-2 opacity-40 pointer-events-none"
                  aria-hidden="true"
                >
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#cb5855]"
                    />
                  ))}
                </div>

                <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                  {testimonials.map((t, idx) => (
                    <div
                      key={t.id}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        idx === currentIndex
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-105 pointer-events-none z-0"
                      }`}
                    >
                      <Image
                        src={t.imageSrc}
                        alt={t.name}
                        fill
                        priority={idx === 0}
                        className="object-cover"
                        sizes="(max-width: 768px) 224px, 288px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}