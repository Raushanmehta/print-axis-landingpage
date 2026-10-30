import Link from "next/link";
import { HomeIcon } from "@/components/icons";

export const metadata = {
  title: "404 - Page Not Found | PrintAxis",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden flex-1 flex items-center justify-center">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="w-8 h-[2px] bg-[#cb5855] rounded-full inline-block" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#cb5855] uppercase">
              PAGE NOT FOUND
            </span>
            <span className="w-8 h-[2px] bg-[#cb5855] rounded-full inline-block" aria-hidden="true" />
          </div>

          <div className="relative my-2 select-none">
            <span className="text-8xl sm:text-9xl lg:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#241121] via-[#cb5855] to-[#241121] tracking-tighter leading-none inline-block">
              404
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#241121] tracking-tight">
            Looks Like You Are <span className="text-[#cb5855]">Lost</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#5b525a] leading-relaxed max-w-xl">
            The page you are searching for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] hover:from-black hover:via-black hover:to-black text-white text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <HomeIcon className="w-4 h-4" />
              <span>Back To Home</span>
            </Link>

            <Link
              href="/#cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 bg-white hover:bg-black hover:border-black hover:text-white text-[#241121] text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Get A Quote</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
