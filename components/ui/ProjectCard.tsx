"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      tabIndex={0}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group glass rounded-2xl overflow-hidden neon-border ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image area */}
      <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-accent/10 via-accent-purple/10 to-accent-pink/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            loading="eager"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-display font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-500">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
        {/* Hover overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-base/80 opacity-0 group-hover:opacity-100 group-focus:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glow-cyan transition-all duration-300"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={20} className="text-accent" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glow-purple transition-all duration-300"
              aria-label={`View source code of ${project.title}`}
            >
              <Github size={20} className="text-accent-purple" />
            </a>
          )}
        </div>
      </div>

      {/* Card content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
            {project.type}
          </span>
        </div>
        <p className="text-text-muted text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/5 text-accent/80 border border-accent/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
