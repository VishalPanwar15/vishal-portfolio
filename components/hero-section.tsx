"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-4 text-sm tracking-wider uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">Vishal Panwar</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Java Backend Developer
            </span>
            <span className="text-muted-foreground"> | Spring Boot | REST APIs</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Building scalable backend systems and APIs that power modern applications.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-border hover:bg-secondary hover:text-secondary-foreground"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/VishalPanwar15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-panwar-621a59222/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:vishalpanwarit159@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#about")}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
