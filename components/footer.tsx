"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/VishalPanwar15",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vishal-panwar-621a59222/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:vishalpanwarit159@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VP
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground text-sm">
              Vishal Panwar
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            <span>&copy; {currentYear}</span>
            <span>Built with</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>by Vishal Panwar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
