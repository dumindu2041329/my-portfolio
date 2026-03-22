"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

const proficiencyColors = {
  Beginner: { bar: "w-1/4", color: "text-text-muted" },
  Intermediate: { bar: "w-2/4", color: "text-accent-purple" },
  Advanced: { bar: "w-3/4", color: "text-accent" },
  Expert: { bar: "w-full", color: "text-success" },
};

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  const proficiency = proficiencyColors[skill.proficiency];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group glass rounded-xl p-4 neon-border hover:glow-cyan transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-heading font-medium text-sm text-text-primary group-hover:text-accent transition-colors duration-300">
          {skill.name}
        </span>
        <span className={`text-xs font-mono ${proficiency.color}`}>
          {skill.proficiency}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-surface overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
          className={`h-full ${proficiency.bar} rounded-full bg-gradient-to-r from-accent to-accent-purple`}
        />
      </div>
    </motion.div>
  );
}
