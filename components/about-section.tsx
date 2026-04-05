"use client";

import { Code2, Database, Server } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Designing and building robust server-side applications using Java and Spring Boot ecosystem.",
  },
  {
    icon: Code2,
    title: "API Development",
    description: "Creating RESTful APIs with clean architecture, proper documentation, and best practices.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Working with PostgreSQL and MySQL for efficient data modeling and query optimization.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Passionate Backend Developer
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a Java Backend Developer with over 1 year of professional experience in building scalable 
              and maintainable backend systems. My expertise lies in developing RESTful APIs and working with 
              Spring Boot to build robust applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I previously worked at Evision Software Solutions, where I contributed to projects 
              such as food delivery systems and point-of-sale applications. 
              I have experience in backend development, database handling, and debugging application issues.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m  passionate about writing clean code, following best practices, and continuously improving my skills. Currently, 
              I&apos;m enhancing my knowledge in areas like microservices architecture, CI/CD, and cloud technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I enjoy learning new technologies and staying updated with the latest trends in backend development.
            </p>            
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
