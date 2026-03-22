"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const filterTabs = ["All", "Web", "Mobile", "Academic", "Other"] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A showcase of my work and what I've built"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`relative px-5 py-2 rounded-full text-sm font-heading font-medium transition-all duration-300 ${
                activeFilter === tab
                  ? "text-accent bg-accent/10 border border-accent/30"
                  : "text-text-muted hover:text-text-primary border border-transparent hover:border-border-glow"
              }`}
            >
              {tab}
              {activeFilter === tab && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full border border-accent/30 bg-accent/5"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <p className="text-center text-text-muted font-mono text-sm mt-8">
            No projects found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
