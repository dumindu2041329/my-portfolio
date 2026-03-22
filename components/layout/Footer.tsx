import { Github, Linkedin, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/dumindu2041329", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dumindu-damsara-0049ab246/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border-glow bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold text-accent text-glow-cyan mb-3">
              {"<Dumindu Damsara/>"}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Building tomorrow&apos;s web, today. A passionate IT student from
              Sri Lanka crafting modern digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass neon-border hover:glow-cyan transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-text-muted hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border-glow flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-accent-pink" /> using
            Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
