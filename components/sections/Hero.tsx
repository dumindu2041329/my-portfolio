"use client";

import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

const ThreeBackground = lazy(() => import("@/components/ui/ThreeBackground"));

const roles = ["IT Student", "Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

const socialLinks = [
  { icon: Github, href: "https://github.com/dumindu2041329", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dumindu-damsara-0049ab246/", label: "LinkedIn" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Particle mouse tracking
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanline-overlay pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-32"
      onMouseMove={handleMouseMove}
    >
      {/* Three.js animated background */}
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      {/* Mouse-following glow */}
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-mono text-text-muted mb-4 tracking-widest"
        >
          {"// Hello, I'm"}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black mb-4 gradient-text leading-tight"
        >
          Dumindu Damsara
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-6 h-10"
        >
          <span className="gradient-text">{displayText}</span>
          <span className="typewriter-cursor" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base sm:text-lg text-text-muted max-w-xl mx-auto mb-10 font-body px-2 sm:px-0"
        >
          Building tomorrow&apos;s web, today. Passionate about creating modern,
          performant, and beautiful digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 w-full px-4 sm:px-0"
        >
          <GlowButton href="#projects" variant="primary">
            View My Work
          </GlowButton>
          <GlowButton href="/resume.pdf" variant="secondary" download>
            Download CV
          </GlowButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass neon-border hover:glow-cyan transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon
                size={20}
                className="text-text-muted hover:text-accent transition-colors duration-300"
              />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="scroll-indicator flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
