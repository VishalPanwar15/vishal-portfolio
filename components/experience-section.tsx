"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Evision Software Solutions",
    role: "Java Developer",
    duration: "September 2024 - January 2026",
    location: "On-site",
    highlights: [
      "Developed and maintained scalable backend APIs using Java and Spring Boot framework",
      "Designed and implemented microservices architecture for improved system modularity",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Optimized database queries and improved application performance by 40%",
      "Implemented CI/CD pipelines using GitHub Actions for automated deployments",
      "Participated in code reviews and contributed to establishing coding standards",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Git"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Professional Journey
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent md:hidden" />
              
              {/* Timeline dot for mobile */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[3px] rounded-full bg-primary md:hidden" />

              <div className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                        <Briefcase size={20} />
                      </div>
                      <h4 className="text-foreground font-bold text-xl">
                        {exp.role}
                      </h4>
                    </div>
                    <p className="text-primary font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
