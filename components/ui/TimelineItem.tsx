"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  location?: string;
  details: string[];
  tags?: string[];
  index: number;
  current?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  duration,
  location,
  details,
  tags,
  index,
  current,
}: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex items-start mb-12 md:mb-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Timeline dot */}
      <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-base z-10 glow-cyan" />

      {/* Spacer for desktop */}
      <div className="hidden md:block md:w-1/2" />

      {/* Card */}
      <div
        className={`ml-12 md:ml-0 md:w-1/2 ${
          isLeft ? "md:pr-12" : "md:pl-12"
        }`}
      >
        <div className="glass rounded-2xl p-4 sm:p-6 neon-border group hover:glow-cyan transition-all duration-300">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
              {duration}
            </span>
            {location && (
              <span className="text-xs font-mono text-text-muted">
                📍 {location}
              </span>
            )}
            {current && (
              <span className="text-xs font-mono text-success bg-success/10 px-3 py-1 rounded-full glow-pulse">
                Currently Enrolled
              </span>
            )}
          </div>
          <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-accent-purple font-heading text-sm mb-4">
            {subtitle}
          </p>
          <ul className="space-y-2 mb-4">
            {details.map((detail, i) => (
              <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                <span className="text-accent mt-1 text-xs">▹</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent-purple/10 text-accent-purple/80 border border-accent-purple/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
