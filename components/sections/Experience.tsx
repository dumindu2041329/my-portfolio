"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and practical exposure"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.role}
              subtitle={exp.company}
              duration={exp.duration}
              location={exp.location}
              details={exp.responsibilities}
              tags={exp.techStack}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
