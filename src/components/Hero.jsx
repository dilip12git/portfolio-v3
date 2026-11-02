import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  ArrowDown,
  CodeXml,
  ArrowUpRight,
  FileDown,
  Terminal,
  Copy,
  Check,
  Cpu,
  MapPin,
} from "lucide-react";
import ProfileImg from "../assets/dilip-img1.jpg";

const socials = [
  { href: "https://github.com/dilip12git", Icon: Github, label: "GitHub" },
  { href: "https://leetcode.com/u/diliplitcode/", Icon: CodeXml, label: "LeetCode" },
  { href: "https://www.linkedin.com/in/dilipgpta/", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/dilipgupta_4u", Icon: Instagram, label: "Instagram" },
];

const coreHighlights = [
  "React & React Native",
  "Node.js & FastAPI",
  "LangChain & RAG",
  "Agentic AI",
  "Full-Stack Architect",
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dilipkumarteli06@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-theme pb-16 overflow-hidden">
      {/* Subtle Micro-Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--text) 1px, transparent 1px),
                            linear-gradient(90deg, var(--text) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8 py-6 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Hero Pitch (7 cols) */}
          <div
            className="lg:col-span-7 flex flex-col gap-6 opacity-0 animate-fadeUp"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            {/* Status Beacon & Avatar Pill */}
            <div className="flex flex-wrap items-center gap-3.5">
              <div className="relative group">
                <img
                  src={ProfileImg}
                  alt="Dilip Kumar Teli"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl object-cover border border-[var(--border)] transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[var(--bg)]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold tracking-tight text-[var(--text)]">
                    Dilip Kumar Teli
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[var(--bg)] text-[var(--text)] border border-[var(--border)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Available for Work
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5 flex items-center gap-1">
                  <MapPin size={11} className="text-[var(--text-muted)]" />
                  Chennai, India · Open to full-time &amp; contracts
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-Ovo leading-[1.08] tracking-tight text-[var(--text)]">
              Full Stack &amp; AI{" "}
              <br />
              <span className="italic font-normal relative inline-block text-[var(--text)]">
                Developer
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--border-hover)] rounded-full" />
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-xl">
              Full-stack developer building scalable, responsive web, mobile, and AI-powered applications with a focus on clean architecture, performance, and user experience.
            </p>

            {/* Tech badges ticker */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {coreHighlights.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1 rounded-full text-[11px] font-medium bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] transition-all hover:-translate-y-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://forms.gle/i6w9VHSbCut33AQ67"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6.5 py-3 rounded-full bg-[var(--text)] text-[var(--bg)] text-xs sm:text-sm font-semibold hover:opacity-90 active:scale-95 transition-all"
              >
                <span>Hire me</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/Dilip_kumar_teli_resume.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-xs sm:text-sm font-semibold hover:border-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] active:scale-95 transition-all"
              >
                <FileDown
                  size={14}
                  className="text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors"
                />
                <span>Resume</span>
              </a>

              {/* <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4.5 py-3 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition active:scale-95"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-[var(--text)]" />
                    <span className="font-semibold text-[var(--text)]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Email</span>
                  </>
                )}
              </button> */}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] transition-all active:scale-95"
                >
                  <social.Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Developer Console (5 cols) */}
          <div
            className="lg:col-span-5 opacity-0 animate-fadeUp"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-[var(--border)] relative overflow-hidden group hover:border-[var(--border-hover)] transition-all duration-300">
              {/* Card top banner with window dots */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)] ml-2 flex items-center gap-1.5">
                    <Terminal size={12} className="text-[var(--text-muted)]" />
                    dilip.config.ts
                  </span>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--bg)] text-[var(--text-muted)] border border-[var(--border)] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Active
                </span>
              </div>

              {/* Code Presentation: Simple and theme aligned */}
              <div className="font-mono text-xs leading-relaxed space-y-2 text-[var(--text-muted)]">
                <div>
                  <span className="text-[var(--text)] font-semibold">const</span>{" "}
                  <span>developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text)] font-medium">name</span>:{" "}
                  <span>"Dilip Kumar Teli"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text)] font-medium">location</span>:{" "}
                  <span>"Chennai, India"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text)] font-medium">role</span>:{" "}
                  <span>"Full Stack &amp; AI Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text)] font-medium">coreStack</span>: [
                  <span>"React"</span>,{" "}
                  <span>"React Native"</span>,{" "}
                  <span>"FastAPI"</span>,{" "}
                  <span>"LangChain"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text)] font-medium">currentlyBuilding</span>:{" "}
                  <span>"Smart Travel Alarms &amp; Voice AI"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--text)] font-medium">openToOpportunities</span>:{" "}
                  <span className="text-[var(--text)]">true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Stats Ribbon inside Terminal Card */}
              <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-[var(--border)] text-center">
                <div className="p-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all">
                  <p className="text-lg font-bold text-[var(--text)] font-Outfit leading-none">10+</p>
                  <p className="text-[10px] text-[var(--text-muted)] mt-1 font-medium">Projects</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all">
                  <p className="text-lg font-bold text-[var(--text)] font-Outfit leading-none">3+</p>
                  <p className="text-[10px] text-[var(--text-muted)] mt-1 font-medium">Years Exp.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all">
                  <p className="text-lg font-bold text-[var(--text)] font-Outfit leading-none">5+</p>
                  <p className="text-[10px] text-[var(--text-muted)] mt-1 font-medium">Core Stacks</p>
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5 text-[var(--text-muted)] font-medium">
                  <Cpu size={13} className="text-[var(--text)]" />
                  RAG &amp; Agentic AI Ready
                </span>
                <a
                  href="#work"
                  className="font-semibold text-[var(--text)] hover:underline inline-flex items-center gap-0.5 group/link"
                >
                  <span>View Work</span>
                  <span className="group-hover/link:translate-x-0.5 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className="relative z-10 flex justify-center pt-8">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition group focus:outline-none"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div> */}
    </div>
  );
}