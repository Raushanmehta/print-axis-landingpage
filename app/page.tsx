import { site } from "@/data";
import AboutSection from "@/sections/home/AboutSection";
import BlogSection from "@/sections/home/BlogSection";
import CtaSection from "@/sections/home/CtaSection";
import HeroSection from "@/sections/home/HeroSection";
import ProcessSection from "@/sections/home/ProcessSection";
import ServiceSection from "@/sections/home/ServiceSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import FaqSection from "@/sections/home/FaqSection";

export default function Home() {
  const { hero, about, service, process, testimonial, cta, blog, faqs } = site;

  return (
    <main className="w-full">
      <HeroSection data={hero} />
      <AboutSection data={about} />
      <ServiceSection data={service} />
      <ProcessSection data={process} />
      <TestimonialSection data={testimonial} />
      <CtaSection data={cta} />
      <BlogSection data={blog} />
      <FaqSection data={faqs} />
    </main>
  );
}
