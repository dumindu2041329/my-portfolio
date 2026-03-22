"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  download?: boolean;
  ariaLabel?: string;
}

export default function GlowButton({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  download,
  ariaLabel,
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-heading font-semibold text-sm tracking-wider transition-all duration-300 overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent/20 to-accent-purple/20 text-accent border border-accent/40 hover:border-accent hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:text-white",
    secondary:
      "bg-transparent text-text-primary border border-text-muted/30 hover:border-accent-purple/50 hover:text-accent-purple hover:shadow-[0_0_20px_rgba(123,47,255,0.2)]",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={ariaLabel}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}
