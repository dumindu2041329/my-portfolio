"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { educations } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic background and credentials"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          {educations.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              title={edu.degree}
              subtitle={edu.institution}
              duration={edu.duration}
              details={edu.highlights}
              tags={edu.gpa ? [edu.gpa] : undefined}
              index={index}
              current={edu.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
