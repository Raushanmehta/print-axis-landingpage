import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type PrintAxisSchema = typeof siteData.PrintAxis;
export type PrintAxisSections = PrintAxisSchema["sections"];
export type PrintAxisTemplateComponents = PrintAxisSchema["templateComponents"];

export type ServicesSchema = PrintAxisSchema;
export type ServicesSections = PrintAxisSections;
export type ServicesTemplateComponents = PrintAxisTemplateComponents;

// ── Universal SectionProps Interface ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type PrintAxisTopbarData = PrintAxisSections["topbar"]["variants"]["PrintAxisTopbar1"];
export type PrintAxisNavbarData = PrintAxisSections["navbar"]["variants"]["PrintAxisNavbar1"];
export type PrintAxisFooterData = PrintAxisSections["footer"]["variants"]["PrintAxisFooter1"];
export type PrintAxisHeroData = PrintAxisSections["hero"]["variants"]["PrintAxisHero1"];
export type PrintAxisAboutData = PrintAxisSections["about"]["variants"]["PrintAxisAbout1"];
export type PrintAxisServiceData = PrintAxisSections["service"]["variants"]["PrintAxisService1"];
export type PrintAxisServicesData = PrintAxisServiceData;
export type PrintAxisTestimonialData = PrintAxisSections["testimonial"]["variants"]["PrintAxisTestimonial1"];
export type PrintAxisCtaData = PrintAxisSections["cta"]["variants"]["PrintAxisCta1"];
export type PrintAxisProcessData = PrintAxisSections["process"]["variants"]["PrintAxisProcess1"];
export type PrintAxisBlogData = PrintAxisSections["blog"]["variants"]["PrintAxisBlog1"];
export type PrintAxisFaqData = PrintAxisSections["faqs"]["variants"]["PrintAxisFaq1"];

// ── Inferred Sub-item Data Models ──
export type NavItem = PrintAxisNavbarData["navLinks"][0];
export type ServiceItem = PrintAxisServicesData["servicesList"][0];
export type BlogPost = PrintAxisBlogData["blogPosts"][0];
export type TestimonialItem = PrintAxisTestimonialData["testimonialsList"][0];
export type ProcessStep = PrintAxisProcessData["steps"][0];
export type FaqItem = PrintAxisFaqData["faqList"][0];

// ── Convenience Aliases ──
export type HeroData = PrintAxisHeroData;
export type AboutData = PrintAxisAboutData;
export type ServicesData = PrintAxisServicesData;
export type TestimonialsData = PrintAxisTestimonialData;
export type CtaData = PrintAxisCtaData;
export type ProcessData = PrintAxisProcessData;
export type BlogData = PrintAxisBlogData;
export type FaqData = PrintAxisFaqData;
export type FooterData = PrintAxisFooterData;
export type NavbarData = PrintAxisNavbarData;
export type TopbarData = PrintAxisTopbarData;

// ── Default Site Data (Unified Schema Node Map) ──
const sec = siteData.PrintAxis.sections;

export const site = {
  topbar: sec.topbar.variants.PrintAxisTopbar1,
  navbar: sec.navbar.variants.PrintAxisNavbar1,
  footer: sec.footer.variants.PrintAxisFooter1,
  hero: sec.hero.variants.PrintAxisHero1,
  about: sec.about.variants.PrintAxisAbout1,
  service: sec.service.variants.PrintAxisService1,
  services: sec.service.variants.PrintAxisService1,
  process: sec.process.variants.PrintAxisProcess1,
  testimonial: sec.testimonial.variants.PrintAxisTestimonial1,
  testimonials: sec.testimonial.variants.PrintAxisTestimonial1,
  cta: sec.cta.variants.PrintAxisCta1,
  blog: sec.blog.variants.PrintAxisBlog1,
  faqs: sec.faqs.variants.PrintAxisFaq1,

  // Compatibility & Legacy Keys
  topbarData: sec.topbar.variants.PrintAxisTopbar1,
  navbarData: sec.navbar.variants.PrintAxisNavbar1,
  footerData: sec.footer.variants.PrintAxisFooter1,
  heroData: sec.hero.variants.PrintAxisHero1,
  aboutData: sec.about.variants.PrintAxisAbout1,
  serviceData: sec.service.variants.PrintAxisService1,
  servicesData: sec.service.variants.PrintAxisService1,
  processData: sec.process.variants.PrintAxisProcess1,
  testimonialData: sec.testimonial.variants.PrintAxisTestimonial1,
  testimonialsData: sec.testimonial.variants.PrintAxisTestimonial1,
  ctaData: sec.cta.variants.PrintAxisCta1,
  blogData: sec.blog.variants.PrintAxisBlog1,
  faqsData: sec.faqs.variants.PrintAxisFaq1,

  // Root References
  PrintAxis: siteData.PrintAxis,
  Services: siteData.PrintAxis,
};

export const siteMap = site;
export type SiteData = typeof site;
export default siteData;
