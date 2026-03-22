"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);
      setVisible(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const startY = window.scrollY;
    const startTime = performance.now();
    const duration = 1000;

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // easeInOutCubic curve for smooth start and finish
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY * (1 - easeInOutCubic));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Circle ring dimensions
  const size = 48;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - scrollProgress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 group"
        >
          {/* Progress ring SVG */}
          <svg
            width={size}
            height={size}
            className="block"
            style={{ transform: "rotate(-90deg)" }}
          >
            {/* Background track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="rgba(10,10,30,0.7)"
              stroke="rgba(0,240,255,0.15)"
              strokeWidth={2}
            />
            {/* Progress fill */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="rgba(0,240,255,0.9)"
              strokeWidth={2}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>

          {/* Arrow icon centered over SVG */}
          <span className="absolute inset-0 flex items-center justify-center">
            <ArrowUp
              size={18}
              className="text-accent group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]"
            />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
