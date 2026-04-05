"use client";

import { useState } from "react";
import { ExternalLink, Github, Utensils, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Food Delivery Backend System",
    description:
      "A comprehensive backend system for food delivery applications featuring restaurant management, order processing, real-time tracking, and payment integration.",
    icon: Utensils,
    techStack: ["Java", "Spring Boot", "PostgreSQL", "REST API", "JWT Auth"],
    demo: "https://futurefeast.co.uk/",
  },
  {
    title: "Procurement System",
    description:
      "A multi-tenant procurement and inventory management backend system supporting company onboarding, supplier management, RFQ workflows, and approval-based purchasing processes.",
    icon: ShoppingCart,
    techStack: ["Java", "Spring Boot", "MySQL", "REST API"],
    demo: "#",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured Work
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  <project.icon size={28} />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-foreground font-semibold text-xl mb-3">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  onClick={() => setSelectedProject(project)}
                >
                  <Github size={16} className="mr-2" />
                  View Details
                </Button>

                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-xl max-w-lg w-full relative">

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-muted-foreground"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>

            <h3 className="text-xl font-bold mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              {selectedProject.description}
            </p>

            {/* Project Details */}
            {selectedProject.title === "Food Delivery Backend System" && (
              <div className="text-sm space-y-2">
                <p>• Developed REST APIs for order management and payment processing</p>
                <p>• Implemented authentication and authorization using JWT</p>
                <p>• Designed and optimized PostgreSQL database schema</p>
                <p>• Handled real-time order tracking logic</p>
                <p>• Debugged and resolved backend issues during testing and deployment</p>
              </div>
            )}

            {selectedProject.title === "Procurement System" && (
              <div className="text-sm space-y-2">
                <p>• Built backend modules for inventory and supplier management</p>
                <p>• Developed REST APIs for sales tracking and reporting</p>
                <p>• Implemented CRUD operations using Spring Boot</p>
                <p>• Designed relational database using MySQL</p>
                <p>• Assisted in debugging and testing system functionalities</p>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}