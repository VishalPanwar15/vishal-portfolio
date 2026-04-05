"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vishalpanwarit159@gmail.com",
    href: "mailto:vishalpanwarit159@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vishal-panwar-621a59222/",
    href: "https://www.linkedin.com/in/vishal-panwar-621a59222/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/VishalPanwar15",
    href: "https://github.com/VishalPanwar15",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indore India",
    href: null,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_guvdhir",     // 🔁 Replace this
        "template_nk7a1wk",    // 🔁 Replace this
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "iy1s8O7eCsKtBmmVH"      // 🔁 Replace this
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get In Touch
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, opportunities, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-foreground font-semibold text-xl mb-8">
              Contact Information
            </h4>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-foreground font-medium hover:text-primary transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
            <h4 className="text-foreground font-semibold text-xl mb-6">
              Send a Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-muted-foreground text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}