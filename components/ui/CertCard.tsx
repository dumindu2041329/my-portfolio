"use client";

import { motion } from "framer-motion";
import { ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import type { Certification } from "@/data/certifications";

interface CertCardProps {
  cert: Certification;
  index: number;
}

export default function CertCard({ cert, index }: CertCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (cert.credentialId) {
      navigator.clipboard.writeText(cert.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl p-4 sm:p-6 neon-border transition-all duration-300"
      style={{
        borderColor: `${cert.issuerColor}15`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${cert.issuerColor}40`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${cert.issuerColor}20`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${cert.issuerColor}15`;
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Issuer badge */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-lg"
          style={{
            backgroundColor: `${cert.issuerColor}15`,
            color: cert.issuerColor,
          }}
        >
          {cert.issuer.charAt(0)}
        </div>
        <div>
          <p
            className="text-sm font-heading font-semibold"
            style={{ color: cert.issuerColor }}
          >
            {cert.issuer}
          </p>
          <p className="text-xs text-text-muted font-mono">{cert.dateIssued}</p>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-heading font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
        {cert.title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/5 text-accent/70 border border-accent/10"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border-glow">
        {cert.credentialId && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors duration-200"
            aria-label="Copy credential ID"
          >
            {copied ? (
              <Check size={14} className="text-success" />
            ) : (
              <Copy size={14} />
            )}
            <span className="font-mono">{copied ? "Copied!" : cert.credentialId}</span>
          </button>
        )}
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-accent hover:text-accent-pink transition-colors duration-200 opacity-0 group-hover:opacity-100"
            aria-label={`Verify ${cert.title} certificate`}
          >
            <span>Verify</span>
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
