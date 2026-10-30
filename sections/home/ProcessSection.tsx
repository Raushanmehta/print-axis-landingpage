"use client";

import React from "react";
import Image from "next/image";
import { siteMap, PrintAxisProcessData } from "@/data";
import { ChevronRightIcon } from "@/components/icons";
import {
  FadeUp,
  FadeDown,
  StaggerContainer,
  StaggerItem,
  AnimatedIcon,
} from "@/utils/animations";

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

export interface ProcessSectionProps {
  data?: PrintAxisProcessData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

// Process section outlining steps from design to delivery.
export default function ProcessSection(props: ProcessSectionProps) {
  const data = props.data || siteMap.process;

  const tagline = props.tagline || data?.tagline || siteMap.process.tagline;
  const titlePart1 = props.titlePart1 || data?.titlePart1 || siteMap.process.titlePart1;
  const titleHighlight = props.titleHighlight || data?.titleHighlight || siteMap.process.titleHighlight;
  const subtitle = props.subtitle || data?.subtitle || siteMap.process.subtitle;
  const steps = (props.steps || data?.steps || siteMap.process.steps) as ProcessStep[];

  return (
    <section id="process" className="relative w-full bg-white py-8 lg:py-12 overflow-hidden scroll-mt-20">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-4xl mx-auto">
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

        <StaggerContainer speed="fast" className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {steps.map((step, index) => (
            <StaggerItem
              key={step.stepNumber}
              variant="up"
              className="relative flex flex-col items-center group text-center"
            >
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center absolute top-16 -translate-y-1/2 left-[calc(50%+64px)] w-[calc(100%-128px)] z-0"
                  aria-hidden="true"
                >
                  <div className="flex-1 overflow-hidden h-2 flex items-center">
                    <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
                      <line
                        x1="0"
                        y1="1"
                        x2="100%"
                        y2="1"
                        stroke="#cb5855"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        strokeOpacity="0.55"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="-24"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </svg>
                  </div>

                  <AnimatedIcon animation="pulse">
                    <div className="w-7 h-7 rounded-full bg-[#cb5855] text-white flex items-center justify-center shrink-0 mx-2 shadow-xs transition-transform duration-200 group-hover:scale-115">
                      <ChevronRightIcon className="w-3.5 h-3.5 ml-0.5" />
                    </div>
                  </AnimatedIcon>

                  <div className="flex-1 overflow-hidden h-2 flex items-center">
                    <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
                      <line
                        x1="0"
                        y1="1"
                        x2="100%"
                        y2="1"
                        stroke="#cb5855"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        strokeOpacity="0.55"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="-24"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </svg>
                  </div>
                </div>
              )}

              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-5 rounded-full border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                {step.imageSrc ? (
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={step.imageSrc}
                      alt={step.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 48px, 56px"
                    />
                  </div>
                ) : (
                  <div className="text-2xl font-black text-[#cb5855]">
                    {step.stepNumber}
                  </div>
                )}

                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#cb5855] text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-110 z-10">
                  {step.stepNumber}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#241121] group-hover:text-[#cb5855] transition-colors duration-200">
                {step.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-[#5b525a] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}