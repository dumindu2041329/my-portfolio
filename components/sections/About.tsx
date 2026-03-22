"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { label: "Projects Completed", value: 6 },
  { label: "Technologies Known", value: 10 },
  { label: "Years Learning", value: 2 },
];

function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, inView]);

  return <span className="text-3xl md:text-4xl font-display font-black gradient-text">{count}+</span>;
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me a little better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass neon-border p-1">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <Image
                    src="/profile.png"
                    alt="Dumindu Damsara"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-accent/30 rounded-tr-lg" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-accent-purple/30 rounded-bl-lg" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6">
              I&apos;m an aspiring IT professional currently pursuing my Higher National Diploma
              in Information Technology at SLIATE. My journey in tech began with a
              curiosity about how websites work, and it has since evolved into a deep
              passion for full-stack web development.
            </p>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6">
              I specialise in building modern web applications using technologies like
              React, Next.js, Node.js, and TypeScript. I believe in writing clean,
              maintainable code and creating user experiences that are both beautiful
              and functional.
            </p>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source projects, or mentoring fellow students in
              web development fundamentals.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-accent hover:text-accent-pink transition-colors duration-300 font-heading font-semibold text-sm"
            >
              <Download size={16} />
              Download My Resume
            </a>
          </motion.div>
        </div>

        {/* Stat cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16 md:mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center neon-border hover:glow-cyan transition-all duration-300 min-w-[150px] md:min-w-[200px]"
            >
              <AnimatedCounter value={stat.value} inView={inView} />
              <p className="text-text-muted text-sm mt-2 font-heading">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
