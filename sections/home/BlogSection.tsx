"use client";

import React from "react";
import BlogCard, { BlogPost } from "@/components/cards/BlogCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { siteMap, PrintAxisBlogData } from "@/data";
import {
  FadeUp,
  FadeDown,
} from "@/utils/animations";

export interface BlogSectionProps {
  data?: PrintAxisBlogData;
  tagline?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  posts?: BlogPost[];
  blogPosts?: BlogPost[];
}

// Blog section displaying latest articles in a slider.
export default function BlogSection(props: BlogSectionProps) {
  const data = props.data || siteMap.blog;

  const tagline = props.tagline || data?.tagline || siteMap.blog.tagline;
  const titlePart1 = props.titlePart1 || data?.titlePart1 || siteMap.blog.titlePart1;
  const titleHighlight = props.titleHighlight || data?.titleHighlight || siteMap.blog.titleHighlight;
  const subtitle = props.subtitle || data?.subtitle || siteMap.blog.subtitle;
  const posts = (
    props.posts ||
    props.blogPosts ||
    data?.blogPosts ||
    (data as any)?.posts ||
    siteMap.blog.blogPosts ||
    []
  ) as BlogPost[];

  return (
    <section id="blog" className="relative w-full bg-white py-8 lg:py-12 overflow-hidden scroll-mt-20">
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
              <span
                className="w-9 h-[2px] bg-[#cb5855] rounded-full inline-block"
                aria-hidden="true"
              />
            </div>
          </FadeDown>

          <FadeUp delay={0.12}>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#241121]">
              <span>{titlePart1} </span>
              <span className="text-[#cb5855]">{titleHighlight}</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-2 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.25}>
          <div className="relative mt-4 sm:mt-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <div className="relative">
                <CarouselContent className="-ml-4 sm:-ml-4 py-2">
                  {posts.map((post) => (
                    <CarouselItem
                      key={post.id}
                      className="pl-4 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <BlogCard post={post} className="h-full" />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="flex -left-3 sm:-left-4 md:-left-5 lg:-left-6 xl:-left-12 size-9 sm:size-10 rounded-full bg-[#fdf0ef] text-[#cb5855] border-transparent hover:bg-black hover:text-white transition-all shadow-md z-20 cursor-pointer" />
                <CarouselNext className="flex -right-3 sm:-right-4 md:-right-5 lg:-right-6 xl:-right-12 size-9 sm:size-10 rounded-full bg-[#fdf0ef] text-[#cb5855] border-transparent hover:bg-black hover:text-white transition-all shadow-md z-20 cursor-pointer" />
              </div>
            </Carousel>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}