"use client";

import { 
  Database, 
  GitBranch, 
  Container, 
  Terminal, 
  Workflow,
  Server,
  Code2,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Java", icon: Code2 },
      { name: "Spring Boot", icon: Layers },
      { name: "REST APIs", icon: Server },
      { name: "Spring Security", icon: Workflow },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "CI/CD", icon: Workflow },
      { name: "GitHub Actions", icon: Workflow },
    ],
  },
  {
    title: "Other Technologies",
    skills: [
      { name: "Hostinger", icon: Container },
      { name: "Linux", icon: Terminal },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Technologies I Work With
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h4 className="text-foreground font-semibold mb-6 text-lg">
                {category.title}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-2 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform duration-300">
                      <skill.icon size={18} />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground font-medium text-sm transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
