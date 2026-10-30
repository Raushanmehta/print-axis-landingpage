"use client";

import { siteMap, type PrintAxisFaqData } from "@/data";
import { ChevronDownIcon } from "@/components/icons";
import { FadeDown, FadeLeft } from "@/utils/animations";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  data?: PrintAxisFaqData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  faqList?: FaqItem[];
  className?: string;
}

export default function FaqSection(props: FaqSectionProps) {
  const data = props.data || siteMap.faqs;

  const tagline = props.tagline || data?.tagline || "COMMON QUESTIONS";
  const titlePart1 = props.titlePart1 || data?.titlePart1 || "Frequently Asked";
  const titleHighlight = props.titleHighlight || data?.titleHighlight || "Questions";
  const description =
    props.description ||
    data?.description ||
    "Find quick, straightforward answers to frequent inquiries about our printing techniques, file specifications, production timelines, and custom delivery options.";

  const faqList: FaqItem[] = props.faqList || data?.faqList || [];


  return (
    <section id="faqs" className={`relative w-full bg-[#fdfaf9] py-16 lg:py-20 scroll-mt-20 overflow-hidden ${props.className || ""}`}>
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7e6e5]/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#f5e4e3]/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FadeDown delay={0.05}>
            <div className="inline-flex items-center gap-3 mb-2.5">
              <span className="w-8 h-[2px] bg-[#cb5855] rounded-full inline-block" aria-hidden="true" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
                {tagline}
              </span>
              <span className="w-8 h-[2px] bg-[#cb5855] rounded-full inline-block" aria-hidden="true" />
            </div>
          </FadeDown>

          <FadeDown delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#2e1b2f] tracking-tight leading-[1.2] mb-4">
              <span>{titlePart1} </span>
              <span className="text-[#cb5855]">{titleHighlight}</span>
            </h2>
          </FadeDown>

          <FadeDown delay={0.15}>
            <p className="text-[#635361] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </FadeDown>
        </div>

        {/* Content: FAQs Accordion centered */}
        <div className="max-w-4xl mx-auto w-full">
          <FadeLeft delay={0.1}>
            <div className="space-y-3.5">
              {faqList.map((faq, index) => (
                <details
                  key={faq.id || `faq-${index}`}
                  name="printaxis-faq"
                  open={index === 0}
                  className="group bg-white border border-[#edd7d6]/80 rounded-xl overflow-hidden shadow-xs hover:border-[#cb5855]/60 transition-all duration-300 [&[open]]:shadow-md [&[open]]:border-[#cb5855]/70"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer select-none list-none text-left font-semibold text-[#2e1b2f] group-hover:text-[#cb5855] transition-colors focus:outline-none">
                    <span className="text-base sm:text-lg leading-snug">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#fbf0ef] group-open:bg-[#cb5855] flex items-center justify-center text-[#cb5855] group-open:text-white transition-all duration-300">
                      <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-[#635361] text-[15px] sm:text-base leading-relaxed border-t border-gray-50">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </FadeLeft>
        </div>
      </div>
    </section>
  );
}

