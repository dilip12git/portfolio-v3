import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, ArrowDown, CodeXml } from "lucide-react";
import ProfileImg from "../assets/dilip-img1.jpg";



const socials = [
  { href: "https://github.com/dilip12git",          Icon: Github,    label: "GitHub"    },
  { href: "https://leetcode.com/u/diliplitcode/", Icon: CodeXml,    label: "LeetCode"    },
  { href: "https://www.linkedin.com/in/dilipgpta/", Icon: Linkedin,  label: "LinkedIn"  },
  { href: "https://instagram.com/dilipgupta_4u",    Icon: Instagram, label: "Instagram" },
];

export default function Hero() {
  
  return (
    <div className="relative flex flex-col min-h-screen bg-theme">
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--text) 1px, transparent 1px),
                            linear-gradient(90deg, var(--text) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-8 pt-24 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">

          {/* LEFT */}
          <div className="flex-1 flex flex-col gap-6 opacity-0 animate-fadeUp" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            {/* Avatar + location */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={ProfileImg}
                  alt="Dilip Kumar"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--border)]"
                />
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[var(--bg)] animate-pulse-ring" />
              </div>
              <div>
                <p className="text-sm font-medium">Dilip Kumar Teli</p>
                <p className="text-xs text-[var(--text-muted)]">Chennai, India · Open to work</p>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-Ovo leading-tight tracking-tight">
              Full Stack &amp; AI{" "}
              <br />
              <span className="italic">Developer</span>
            </h1>
            <p className="max-w-3xl">Full-stack developer building scalable, responsive web, mobile, and AI-powered applications with a focus on clean architecture, performance, and user experience.</p>


            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://forms.gle/i6w9VHSbCut33AQ67"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:opacity-80 transition"
              >
                Hire me
              </a>
              
              <a
                href="/Dilip_kumar_teli_resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--bg-card)] transition"
              >
                Resume ↓
              </a>
            </div>

            {/* Social — mobile */}
            <div className="flex items-center gap-3 lg:hidden">
              {socials.map(({ href, Icon, label }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--bg-card)] transition">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center pb-8 animate-bounce opacity-40">
        <ArrowDown size={18} />
      </div>

      {/* Fixed social bar — desktop */}
      <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
        {socials.map(({ href, Icon, label }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center hover:bg-[var(--bg-card)] transition">
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}
