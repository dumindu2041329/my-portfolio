"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check, Loader, Github, Linkedin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowButton from "@/components/ui/GlowButton";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const socialLinks = [
  { icon: Github, href: "https://github.com/dumindu2041329", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dumindu-damsara-0049ab246/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/94XXXXXXXXX", label: "WhatsApp" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dumindudamsara60@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      // EmailJS integration placeholder
      // Replace with your own EmailJS credentials:
      // import emailjs from '@emailjs/browser';
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY');

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-medium text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-xl glass neon-border bg-transparent text-text-primary placeholder-text-muted/50 font-body text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-error text-xs mt-1 font-mono">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl glass neon-border bg-transparent text-text-primary placeholder-text-muted/50 font-body text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-error text-xs mt-1 font-mono">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-heading font-medium text-text-primary mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 rounded-xl glass neon-border bg-transparent text-text-primary placeholder-text-muted/50 font-body text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-error text-xs mt-1 font-mono">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-heading font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 rounded-xl glass neon-border bg-transparent text-text-primary placeholder-text-muted/50 font-body text-sm focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-error text-xs mt-1 font-mono">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <GlowButton
                type="submit"
                variant="primary"
                disabled={status === "sending"}
                className="w-full sm:w-auto"
              >
                {status === "sending" && <Loader size={16} className="animate-spin" />}
                {status === "success" && <Check size={16} className="text-success" />}
                {status === "idle" && <Send size={16} />}
                {status === "error" && <Send size={16} />}
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Sent Successfully!"
                  : status === "error"
                  ? "Failed. Try again."
                  : "Send Message"}
              </GlowButton>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="glass rounded-2xl p-6 neon-border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-text-primary">
                    Email
                  </h4>
                  <button
                    onClick={handleCopy}
                    className="text-text-muted text-sm font-mono hover:text-accent transition-colors duration-200 flex items-center gap-2"
                  >
                    dumindudamsara60@gmail.com
                    {copied ? (
                      <span className="text-xs text-success flex items-center gap-1">
                        <Check size={12} /> Copied!
                      </span>
                    ) : (
                      <span className="text-xs text-text-muted/50">(click to copy)</span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-6 neon-border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent-purple/10">
                  <MapPin size={24} className="text-accent-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-text-primary">
                    Location
                  </h4>
                  <p className="text-text-muted text-sm font-mono">
                    Akuressa, Sri Lanka 🇱🇰
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-sm font-heading font-semibold text-text-primary mb-4 uppercase tracking-wider">
                Connect with me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass neon-border hover:glow-cyan transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-text-muted hover:text-accent transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
