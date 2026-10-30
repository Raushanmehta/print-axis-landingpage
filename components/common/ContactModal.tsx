"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { ArrowRightIcon } from "@/components/icons";

export interface ContactModalProps {
  triggerText?: string;
  triggerClassName?: string;
  children?: React.ReactNode;
}

export default function ContactModal({
  triggerText = "GET A QUOTE",
  triggerClassName = "",
  children,
}: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          children ? (
            (triggerProps) => (
              <span {...triggerProps} className="cursor-pointer inline-flex">
                {children}
              </span>
            )
          ) : (
            (triggerProps) => (
              <button
                type="button"
                {...triggerProps}
                className={`group inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:px-8 sm:py-3.5 rounded-sm bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] hover:from-black hover:via-black hover:to-black text-white shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-300 cursor-pointer ${triggerClassName}`}
              >
                <span className="font-bold tracking-wider text-sm sm:text-[15px] uppercase">
                  {triggerText}
                </span>
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            )
          )
        }
      />

      <DialogPopup className="w-[94vw] max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 text-[#2e1b2f]">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#cb5855] rounded-full inline-block" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#cb5855] uppercase">
              Get in Touch
            </span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-[#2e1b2f] tracking-tight">
            Request a <span className="text-[#cb5855]">Custom Quote</span>
          </DialogTitle>
          <DialogDescription className="text-sm text-[#635361] mt-1.5 leading-relaxed">
            Fill out the details below and our printing specialists will get back to you with custom estimates within 24 hours.
          </DialogDescription>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h4 className="text-xl font-bold text-[#2e1b2f]">Thank You!</h4>
            <p className="text-sm text-gray-500">Your inquiry has been successfully received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input 1: Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#2e1b2f] uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-[#cb5855] focus:ring-2 focus:ring-[#cb5855]/20 text-sm text-[#2e1b2f] placeholder-gray-400 outline-none transition-all"
              />
            </div>

            {/* Input 2: Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#2e1b2f] uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-[#cb5855] focus:ring-2 focus:ring-[#cb5855]/20 text-sm text-[#2e1b2f] placeholder-gray-400 outline-none transition-all"
              />
            </div>

            {/* Input 3: Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#2e1b2f] uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-[#cb5855] focus:ring-2 focus:ring-[#cb5855]/20 text-sm text-[#2e1b2f] placeholder-gray-400 outline-none transition-all"
              />
            </div>

            {/* Input 4: Service Requirement */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-[#2e1b2f] uppercase tracking-wider mb-1">
                Required Service *
              </label>
              <input
                id="service"
                name="service"
                type="text"
                required
                value={formData.service}
                onChange={handleChange}
                placeholder="e.g. Offset Printing, Packaging, 3D Print"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-[#cb5855] focus:ring-2 focus:ring-[#cb5855]/20 text-sm text-[#2e1b2f] placeholder-gray-400 outline-none transition-all"
              />
            </div>

            {/* Input 5: Project Details / Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-[#2e1b2f] uppercase tracking-wider mb-1">
                Project Details & Quantity *
              </label>
              <input
                id="message"
                name="message"
                type="text"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Quantity, paper type, dimensions or timeline..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:border-[#cb5855] focus:ring-2 focus:ring-[#cb5855]/20 text-sm text-[#2e1b2f] placeholder-gray-400 outline-none transition-all"
              />
            </div>

            {/* 1 Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-gradient-to-r from-[#ba4f4c] via-[#c85956] to-[#d66560] hover:from-black hover:via-black hover:to-black text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>Submit Quote Request</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </DialogPopup>
    </Dialog>
  );
}

