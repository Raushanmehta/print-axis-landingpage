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
      className="relative w-full overflow-hidden bg-cover bg-no-repeat bg-center min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center bg-[#fdf5f4] scroll-mt-20"
      style={{
        backgroundImage: `url('${backgroundImageSrc}')`,
      }}
    >
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent pointer-events-none lg:hidden"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 lg:py-12 text-center flex flex-col items-center">
        <FadeUp delay={0.08}>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12] text-[#241121]">
            <span>{titlePart1}</span>
            <br />
            <span className="text-[#cb5855] inline-block mt-1">
              {titleHighlight}
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="mt-2 text-[#5b525a] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
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