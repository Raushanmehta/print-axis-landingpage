"use client";

import React, { type ReactNode } from "react";
import {
  motion,
  type Variants,
} from "framer-motion";

/* ==========================================================================
   PRINT-AXIS ADVANCED ANIMATION ENGINE (FRAMER MOTION)
   Comprehensive variants, transitions & components for:
   - Section icons (float, pulse, bounce, spin, rotate hover, wiggle)
   - Images & Mockups (reveal, zoom hover, soft float)
   - Headings, Paragraphs & Descriptions (fadeUp, fadeLeft, fadeRight, blurIn)
   - Buttons & CTA interactions (hover lift, glow, tap scale, arrow slide)
   - Cards & Containers (stagger orchestration, card hover lift)
   ========================================================================== */

// Premium cubic-bezier easing curves
export const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_BOUNCE: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

// Viewport trigger settings
export const VIEWPORT = { once: true, amount: 0.15 };
export const VIEWPORT_EARLY = { once: true, amount: 0.05 };

/* ==========================================================================
   1. TEXT & CONTENT VARIANTS (Headings, Paragraphs, Badges)
   ========================================================================== */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.65,
      delay: custom.delay ?? 0,
      ease: EASE_SMOOTH,
    },
  }),
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -35 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.6,
      delay: custom.delay ?? 0,
      ease: EASE_SMOOTH,
    },
  }),
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -45 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration ?? 0.65,
      delay: custom.delay ?? 0,
      ease: EASE_SMOOTH,
    },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 45 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration ?? 0.65,
      delay: custom.delay ?? 0,
      ease: EASE_SMOOTH,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration ?? 0.6,
      delay: custom.delay ?? 0,
      ease: "easeOut",
    },
  }),
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.96 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: custom.duration ?? 0.7,
      delay: custom.delay ?? 0,
      ease: EASE_SMOOTH,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration ?? 0.6,
      delay: custom.delay ?? 0,
      ease: EASE_SMOOTH,
    },
  }),
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: (custom: { delay?: number } = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      delay: custom.delay ?? 0,
    },
  }),
};

/* ==========================================================================
   2. STAGGER CONTAINERS & ITEM VARIANTS
   ========================================================================== */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
};

export const staggerItemLeft: Variants = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
};

export const staggerItemRight: Variants = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
};

/* ==========================================================================
   3. BUTTON & INTERACTION ANIMATIONS (Hover, Tap, Glow)
   ========================================================================== */

export const buttonHoverVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: {
    scale: 0.97,
    y: 0,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};

export const buttonGlowVariants: Variants = {
  initial: { boxShadow: "0 0 0 rgba(203, 88, 85, 0)" },
  hover: {
    boxShadow: "0 8px 25px -4px rgba(203, 88, 85, 0.45)",
    scale: 1.03,
    y: -2,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  tap: { scale: 0.97, y: 0 },
};

export const arrowSlideVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 5, transition: { duration: 0.2, ease: "easeOut" } },
};

/* ==========================================================================
   4. ICON ANIMATIONS (Float, Pulse, Bounce, Spin, Wiggle)
   ========================================================================== */

export const iconFloat: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-4, 4, -4],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export const iconFloatReverse: Variants = {
  initial: { y: 0 },
  animate: {
    y: [4, -4, 4],
    transition: {
      duration: 3.6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export const iconPulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export const iconSpin: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const iconRotateOnHover: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: 15,
    scale: 1.12,
    transition: { type: "spring", stiffness: 350, damping: 15 },
  },
};

export const iconWiggle: Variants = {
  initial: { rotate: 0 },
  hover: {
    rotate: [-8, 8, -6, 6, 0],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const iconBounce: Variants = {
  initial: { y: 0 },
  hover: {
    y: [-6, 0],
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

/* ==========================================================================
   5. IMAGE & CARD ANIMATIONS (Reveal, Parallax, Lift, Border Glow)
   ========================================================================== */

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(4px)" },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: custom.duration ?? 0.85,
      delay: custom.delay ?? 0.1,
      ease: EASE_SMOOTH,
    },
  }),
};

export const cardHover: Variants = {
  initial: { y: 0, boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" },
  hover: {
    y: -7,
    boxShadow: "0 20px 30px -10px rgba(36, 17, 33, 0.12)",
    transition: { duration: 0.3, ease: EASE_SMOOTH },
  },
};

export const badgePulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.04, 1],
    boxShadow: [
      "0 0 0 0 rgba(203, 88, 85, 0.4)",
      "0 0 0 10px rgba(203, 88, 85, 0)",
      "0 0 0 0 rgba(203, 88, 85, 0)",
    ],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ==========================================================================
   6. REUSABLE REACT MOTION COMPONENTS (Using React.createElement for .ts compatibility)
   ========================================================================== */

export interface BaseMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/** Fade up as element enters viewport */
export function FadeUp({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
}: BaseMotionProps) {
  return React.createElement(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: VIEWPORT,
      variants: fadeUp,
      custom: { delay, duration },
      className,
    },
    children
  );
}

/** Fade down as element enters viewport */
export function FadeDown({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}: BaseMotionProps) {
  return React.createElement(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: VIEWPORT,
      variants: fadeDown,
      custom: { delay, duration },
      className,
    },
    children
  );
}

/** Fade in from left */
export function FadeLeft({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
}: BaseMotionProps) {
  return React.createElement(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: VIEWPORT,
      variants: fadeLeft,
      custom: { delay, duration },
      className,
    },
    children
  );
}

/** Fade in from right */
export function FadeRight({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
}: BaseMotionProps) {
  return React.createElement(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: VIEWPORT,
      variants: fadeRight,
      custom: { delay, duration },
      className,
    },
    children
  );
}

/** Smooth blur-in reveal */
export function BlurIn({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
}: BaseMotionProps) {
  return React.createElement(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: VIEWPORT,
      variants: blurIn,
      custom: { delay, duration },
      className,
    },
    children
  );
}

/** Scale up into view */
export function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}: BaseMotionProps) {
  return React.createElement(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: VIEWPORT,
      variants: scaleIn,
      custom: { delay, duration },
      className,
    },
    children
  );
}

/** Staggers child items on viewport entry */
export function StaggerContainer({
  children,
  className = "",
  speed = "normal",
}: {
  children: ReactNode;
  className?: string;
  speed?: "fast" | "normal" | "slow";
}) {
  const variant =
    speed === "fast"
      ? staggerFast
      : speed === "slow"
      ? staggerSlow
      : staggerContainer;

  return React.createElement(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: VIEWPORT,
      variants: variant,
      className,
    },
    children
  );
}

/** Child item inside StaggerContainer */
export function StaggerItem({
  children,
  className = "",
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
}) {
  const chosenVariant =
    variant === "left"
      ? staggerItemLeft
      : variant === "right"
      ? staggerItemRight
      : variant === "scale"
      ? staggerItemScale
      : staggerItem;

  return React.createElement(
    motion.div,
    {
      variants: chosenVariant,
      className,
    },
    children
  );
}

/** High-impact animated button with hover scale, lift & tap spring */
export function AnimatedButton({
  children,
  className = "",
  glow = false,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
}) {
  return React.createElement(
    motion.div,
    {
      variants: glow ? buttonGlowVariants : buttonHoverVariants,
      initial: "initial",
      whileHover: "hover",
      whileTap: "tap",
      className,
      onClick,
    },
    children
  );
}

/** Micro-animated icon (floating, pulsing, rotating, bouncing or wiggle) */
export function AnimatedIcon({
  children,
  animation = "float",
  className = "",
}: {
  children: ReactNode;
  animation?: "float" | "pulse" | "spin" | "bounce" | "wiggle" | "rotateHover";
  className?: string;
}) {
  if (animation === "float") {
    return React.createElement(
      motion.div,
      {
        variants: iconFloat,
        initial: "initial",
        animate: "animate",
        className: `inline-flex items-center justify-center ${className}`,
      },
      children
    );
  }

  if (animation === "pulse") {
    return React.createElement(
      motion.div,
      {
        variants: iconPulse,
        initial: "initial",
        animate: "animate",
        className: `inline-flex items-center justify-center ${className}`,
      },
      children
    );
  }

  if (animation === "spin") {
    return React.createElement(
      motion.div,
      {
        variants: iconSpin,
        initial: "initial",
        animate: "animate",
        className: `inline-flex items-center justify-center ${className}`,
      },
      children
    );
  }

  if (animation === "bounce") {
    return React.createElement(
      motion.div,
      {
        variants: iconBounce,
        initial: "initial",
        whileHover: "hover",
        className: `inline-flex items-center justify-center ${className}`,
      },
      children
    );
  }

  if (animation === "wiggle") {
    return React.createElement(
      motion.div,
      {
        variants: iconWiggle,
        initial: "initial",
        whileHover: "hover",
        className: `inline-flex items-center justify-center ${className}`,
      },
      children
    );
  }

  return React.createElement(
    motion.div,
    {
      variants: iconRotateOnHover,
      initial: "initial",
      whileHover: "hover",
      className: `inline-flex items-center justify-center ${className}`,
    },
    children
  );
}

/** Gentle continuous float in place (e.g. for mockups, floating badges) */
export function FloatingElement({
  children,
  className = "",
  amplitude = 6,
  duration = 3.5,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  reverse?: boolean;
}) {
  const yValues = reverse
    ? [amplitude, -amplitude, amplitude]
    : [-amplitude, amplitude, -amplitude];

  return React.createElement(
    motion.div,
    {
      animate: { y: yValues },
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
      className,
    },
    children
  );
}

/** Card hover lift wrapper */
export function AnimatedCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return React.createElement(
    motion.div,
    {
      variants: cardHover,
      initial: "initial",
      whileHover: "hover",
      className,
    },
    children
  );
}
