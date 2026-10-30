"use client";

import React from "react";
import Link from "next/link";
import { siteMap, PrintAxisHeroData } from "@/data";
import {
  QualityIcon,
  SpeedIcon,
  SupportIcon,
  ArrowRightIcon,
} from "@/components/icons";
import {
  FadeUp,
  FadeDown,
  StaggerContainer,
  StaggerItem,
  AnimatedButton,
  AnimatedIcon,
} from "@/utils/animations";

export interface FeatureBadge {
  id: string;
  line1: string;
  line2: string;
  icon?: React.ReactNode | string;
}

export interface HeroSectionProps {
  data?: PrintAxisHeroData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  titlePart2?: string;
  description?: string;
  quoteButtonText?: string;
  quoteButtonHref?: string;
  servicesButtonText?: string;
  servicesButtonHref?: string;
  backgroundImage?: string;
  features?: FeatureBadge[];
}

const renderHeroFeatureIcon = (icon: React.ReactNode | string) => {
  if (React.isValidElement(icon)) return icon;

  const iconName = typeof icon === "string" ? icon.toLowerCase() : "";

  switch (iconName) {
    case "quality":
      return <QualityIcon />;
    case "speed":
      return <SpeedIcon />;
    case "support":
      return <SupportIcon />;
    default:
      return null;
  }
};

// Hero section with headline, CTA buttons, and key badges.
export default function HeroSection(props: HeroSectionProps) {
  const data = props.data || siteMap.hero;

  const tagline = props.tagline || data?.tagline || siteMap.hero.tagline;
  const titlePart1 = props.titlePart1 || data?.titlePart1 || siteMap.hero.titlePart1;
  const titleHighlight = props.titleHighlight || data?.titleHighlight || siteMap.hero.titleHighlight;
  const titlePart2 = props.titlePart2 || data?.titlePart2 || siteMap.hero.titlePart2;
  const description = props.description || data?.description || siteMap.hero.description;

  const quoteButtonText = props.quoteButtonText || data?.quoteButton?.label || siteMap.hero.quoteButton.label;
  const quoteButtonHref = props.quoteButtonHref || data?.quoteButton?.href || siteMap.hero.quoteButton.href;
  const servicesButtonText = props.servicesButtonText || data?.servicesButton?.label || siteMap.hero.servicesButton.label;
  const servicesButtonHref = props.servicesButtonHref || data?.servicesButton?.href || siteMap.hero.servicesButton.href;

  const backgroundImage = props.backgroundImage || data?.backgroundImage || siteMap.hero.backgroundImage;
  const features = props.features || data?.features || siteMap.hero.features;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white bg-cover bg-no-repeat bg-right lg:bg-center min-h-[400px] sm:min-h-[450px] lg:min-h-[450px] xl:min-h-[450px] flex items-center scroll-mt-20"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20 lg:hidden pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-14 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            <FadeDown delay={0.05}>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="w-10 h-[2px] bg-[#cb5855] rounded-full inline-block"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
                  {tagline}
                </span>
              </div>
            </FadeDown>

            <FadeUp delay={0.12}>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-extrabold tracking-tight leading-[1.08] text-[#241121]">
                <span>{titlePart1}</span>
                <br />
                <span className="text-[#cb5855] inline-block my-1">
                  {titleHighlight}
                </span>
                <br />
                <span>{titlePart2}</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-2 text-[#5b525a] text-base sm:text-[17px] leading-relaxed max-w-lg">
                {description}
              </p>
            </FadeUp>

            <FadeUp delay={0.28}>
              <div className="mt-4 sm:mt-4 flex flex-wrap items-center gap-4">
                <AnimatedButton glow>
                  <Link
                    href={quoteButtonHref}
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] hover:from-black hover:via-black hover:to-black hover:bg-black hover:bg-none text-white font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <span>{quoteButtonText}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 inline-flex items-center">
                      <ArrowRightIcon />
                    </span>
                  </Link>
                </AnimatedButton>

                <AnimatedButton>
                  <Link
                    href={servicesButtonHref}
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm border-2 border-[#241121] bg-white/90 backdrop-blur-xs text-[#241121] font-semibold text-xs sm:text-sm tracking-wide uppercase hover:bg-black hover:border-black hover:text-white hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <span>{servicesButtonText}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 inline-flex items-center">
                      <ArrowRightIcon />
                    </span>
                  </Link>
                </AnimatedButton>
              </div>
            </FadeUp>

            <StaggerContainer speed="fast" className="mt-6 pt-7 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
              {features.map((item) => (
                <StaggerItem key={item.id} variant="up">
                  <div className="flex items-center gap-3 group">
                    <AnimatedIcon animation="bounce">
                      {renderHeroFeatureIcon(item.icon)}
                    </AnimatedIcon>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-[#241121] leading-tight">
                        {item.line1}
                      </span>
                      <span className="text-[13px] font-bold text-[#241121] leading-tight">
                        {item.line2}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div
            className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none min-h-[460px]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}