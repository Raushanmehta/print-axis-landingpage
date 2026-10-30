"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteMap, PrintAxisAboutData } from "@/data";
import {
  ArrowRightIcon,
  AboutTopAccentIcon,
  AboutBottomAccentIcon,
} from "@/components/icons";
import {
  FadeLeft,
  FadeRight,
  FadeDown,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/utils/animations";

export interface AboutSectionProps {
  data?: PrintAxisAboutData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  largeImageSrc?: string;
  largeImageAlt?: string;
  smallImage1Src?: string;
  smallImage1Alt?: string;
  smallImage2Src?: string;
  smallImage2Alt?: string;
  showButton?: boolean;
}

// About section showcasing company story, gallery, and advantages.
export default function AboutSection(props: AboutSectionProps) {
  const pathname = usePathname();
  const showButton =
    props.showButton !== undefined ? props.showButton : pathname !== "/about";
  const data = props.data || siteMap.about;

  const tagline = props.tagline || data?.tagline || siteMap.about.tagline;
  const titlePart1 = props.titlePart1 || data?.titlePart1 || siteMap.about.titlePart1;
  const titleHighlight = props.titleHighlight || data?.titleHighlight || siteMap.about.titleHighlight;
  const description = props.description || data?.description || siteMap.about.description;

  const buttonText = props.buttonText || data?.button?.label || siteMap.about.button.label;
  const buttonHref = props.buttonHref || data?.button?.href || siteMap.about.button.href;

  const largeImageSrc = props.largeImageSrc || data?.largeImage?.src || siteMap.about.largeImage.src;
  const largeImageAlt = props.largeImageAlt || data?.largeImage?.alt || siteMap.about.largeImage.alt;

  const smallImage1Src = props.smallImage1Src || data?.smallImage1?.src || siteMap.about.smallImage1.src;
  const smallImage1Alt = props.smallImage1Alt || data?.smallImage1?.alt || siteMap.about.smallImage1.alt;

  const smallImage2Src = props.smallImage2Src || data?.smallImage2?.src || siteMap.about.smallImage2.src;
  const smallImage2Alt = props.smallImage2Alt || data?.smallImage2?.alt || siteMap.about.smallImage2.alt;

  return (
    <section id="about" className="relative w-full bg-white py-8 lg:py-12 mt-8 mb-8 overflow-hidden scroll-mt-20">
      <div className="relative max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <FadeDown delay={0.05}>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#8e4f5d] uppercase">
                    {tagline}
                  </span>
                </div>
              </FadeDown>

              <FadeLeft delay={0.12}>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight leading-[1.12] text-[#241121]">
                  <span>{titlePart1}</span>
                  <br />
                  <span className="text-[#cb5855] inline-block mt-1">
                    {titleHighlight}
                  </span>
                </h2>
              </FadeLeft>

              <FadeLeft delay={0.2}>
                <p className="mt-2 text-[#5b525a] text-sm sm:text-base leading-relaxed max-w-xl">
                  {description}
                </p>
              </FadeLeft>

              {showButton && (
                <FadeLeft delay={0.28}>
                  <div className="mt-3 sm:mt-3">
                    <Link
                      href={buttonHref}
                      className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] hover:from-black hover:via-black hover:to-black hover:bg-black hover:bg-none text-white font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <span>{buttonText}</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1 inline-flex items-center">
                        <ArrowRightIcon />
                      </span>
                    </Link>
                  </div>
                </FadeLeft>
              )}
            </div>

            <StaggerContainer speed="fast" className="grid grid-cols-2 gap-4 sm:gap-4 mt-4 pt-2">
              <StaggerItem variant="scale">
                <div className="relative group overflow-hidden shadow-md border border-gray-100 bg-gray-50 aspect-[4/3] rounded-sm">
                  <Image
                    src={smallImage1Src}
                    alt={smallImage1Alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </StaggerItem>

              <StaggerItem variant="scale">
                <div className="relative group overflow-hidden shadow-md border border-gray-100 bg-gray-50 aspect-[4/3] rounded-sm">
                  <Image
                    src={smallImage2Src}
                    alt={smallImage2Alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="hidden lg:flex lg:col-span-6 relative items-center lg:-mr-0 xl:-mr-0">
            <FadeRight delay={0.15} className="w-full h-full">
              <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]">
                <ScaleIn delay={0.2} className="w-full h-full">
                  <div className="relative z-10 w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] overflow-hidden shadow-xl border border-gray-100 bg-gray-50 rounded-sm group">
                    <Image
                      src={largeImageSrc}
                      alt={largeImageAlt}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </ScaleIn>
              </div>
            </FadeRight>
          </div>
        </div>

        {/* Outer Decorative Accent Geometric Frame on Right Edge (Bounded to max-w container) */}
        <div
          className="absolute -right-12  -top-8 -bottom-8 lg:-top-12 lg:-bottom-12 lg:w-40 pointer-events-none hidden lg:flex flex-col justify-between items-end z-0"
          aria-hidden="true"
        >
          <div className="w-full flex justify-end">
            <AboutTopAccentIcon />
          </div>

          <div className="w-[1.5px] bg-[#cb5855]/70 h-full my-2 mr-8 sm:mr-10 md:mr-11 lg:mr-12" />

          <div className="w-full flex justify-end">
            <AboutBottomAccentIcon />
          </div>
        </div>
      </div>
    </section>
  );
}