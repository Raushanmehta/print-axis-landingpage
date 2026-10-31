"use client";

import React from "react";
import Link from "next/link";
import { siteMap, PrintAxisCtaData } from "@/data";
import { ArrowRightIcon } from "@/components/icons";
import {
  FadeUp,
  AnimatedButton,
} from "@/utils/animations";
import ContactModal from "@/components/common/ContactModal";

export interface CtaSectionProps {
  data?: PrintAxisCtaData;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImageSrc?: string;
}

// Call to action section driving customer quote requests.
export default function CtaSection(props: CtaSectionProps) {
  const data = props.data || siteMap.cta;

  const titlePart1 = props.titlePart1 || data?.titlePart1 || siteMap.cta.titlePart1;
  const titleHighlight = props.titleHighlight || data?.titleHighlight || siteMap.cta.titleHighlight;
  const description = props.description || data?.description || siteMap.cta.description;

  const buttonText = props.buttonText || data?.button?.label || siteMap.cta.button.label;
  const buttonHref = props.buttonHref || data?.button?.href || siteMap.cta.button.href;

  const backgroundImageSrc = props.backgroundImageSrc || data?.backgroundImageSrc || siteMap.cta.backgroundImageSrc;

  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden bg-cover bg-no-repeat bg-center min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center bg-[#FFF8F5] scroll-mt-20"
      style={{
        backgroundImage: `url('${backgroundImageSrc}')`,
      }}
    >
      {/* High-contrast centered overlay strictly behind text area so background image remains visible around it */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(27, 25, 25, 0.96) 0%, rgba(31, 30, 30, 0.85) 50%, rgba(255,255,255,0) 85%)",
        }}
      />

      <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 lg:py-12 text-center flex flex-col items-center">
        <FadeUp delay={0.08}>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12] text-[#111111]">
            <span>{titlePart1}</span>
            <br />
            <span className="text-[#FF773C] inline-block mt-1">
              {titleHighlight}
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="mt-2 text-[#333333] font-medium text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div className="mt-4 sm:mt-5">
            <AnimatedButton glow>
              <ContactModal triggerText={buttonText} />
            </AnimatedButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}