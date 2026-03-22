"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading gradient-text inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted mt-4 text-lg max-w-2xl mx-auto font-body">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-24 h-[2px] bg-gradient-to-r from-accent via-accent-purple to-accent-pink rounded-full" />
    </motion.div>
  );
}
