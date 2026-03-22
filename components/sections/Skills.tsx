"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  const currentCategory = skillCategories.find(
    (cat) => cat.name === activeCategory
  );

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`relative px-5 py-2 rounded-full text-sm font-heading font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "text-accent bg-accent/10 border border-accent/30"
                  : "text-text-muted hover:text-text-primary border border-transparent hover:border-border-glow"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {currentCategory.skills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
