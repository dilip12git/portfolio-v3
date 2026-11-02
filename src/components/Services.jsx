import { useState } from "react";
import { Globe, Smartphone, Server, Palette, ChevronDown, CheckCircle, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    name: "Full Stack Web Development",
    short: "Fast, responsive, and scalable websites — React, Node.js, and the MERN stack.",
    full: "I build high-performance, responsive, and scalable web applications using React, Tailwind CSS, Node.js, Express, and MongoDB. Clean architecture, reusable components, SEO-friendly layouts, and optimised performance that delivers real results.",
    examples: ["E-Commerce Platforms", "SaaS Dashboards", "Portfolio Sites", "REST API Integration"],
  },
  {
    icon: Smartphone,
    name: "Mobile App Development",
    short: "Cross-platform mobile apps with smooth UI and real-time features using React Native.",
    full: "I develop modern cross-platform mobile applications using React Native. From auth and real-time chat to push notifications and media uploads — fast, secure, and production-ready for both iOS and Android.",
    examples: ["Social Media Apps", "Chat Applications", "E-Commerce Apps", "Utility Tools"],
  },
  {
    icon: Server,
    name: "Backend & API Development",
    short: "Secure, scalable backend systems and REST APIs built with Node.js and FastAPI.",
    full: "I build secure and efficient backend systems using Node.js, Express, MongoDB, Firebase, and FastAPI. Auth, database design, file uploads, and real-time data sync across web and mobile platforms.",
    examples: ["REST APIs", "Authentication Systems", "Database Design", "Firebase Integration"],
  },
  {
    icon: Palette,
    name: "UI / UX Design",
    short: "Clean, intuitive, and user-centred interface designs that convert and retain users.",
    full: "I design modern UI/UX interfaces focused on usability, accessibility, and visual clarity. Using Tailwind CSS and component-driven design, I create intuitive user flows and polished interfaces for web and mobile.",
    examples: ["Web Interfaces", "Mobile UI", "Design Systems", "Component Libraries"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default for rich first impression
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-[var(--bg-card)] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium flex items-center gap-2">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" /> */}
              What I offer
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo tracking-tight text-[var(--text)]">
              I can help you with
            </h2>
          </div>
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition group self-start sm:self-auto"
          >
            <span>See my projects</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Interactive Accordion Cards */}
        <div className="flex flex-col gap-3.5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = openIndex === i;

            return (
              <div
                key={service.name}
                className={`glass-card rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[var(--text)] bg-[var(--bg-card-hover)]"
                    : "border-[var(--border)] hover:border-[var(--border-hover)]"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left group focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[var(--text)] text-[var(--bg)]"
                          : "bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] group-hover:scale-105"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-base sm:text-lg text-[var(--text)]">
                        {service.name}
                      </p>
                      {!isOpen && (
                        <p className="text-xs text-[var(--text-muted)] mt-0.5 truncate hidden sm:block">
                          {service.short}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[var(--text-muted)] hidden md:inline-block font-mono">
                      0{i + 1}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-[var(--text-muted)] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[var(--text)] border-[var(--text)]" : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[var(--border)] animate-fadeUp">
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-3xl pt-4">
                      {service.full}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-5">
                      <span className="text-xs font-semibold text-[var(--text)] mr-1">
                        Deliverables:
                      </span>
                      {service.examples.map((ex) => (
                        <span
                          key={ex}
                          className="px-3.5 py-1 rounded-full text-[11px] font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)] flex items-center gap-1.5"
                        >
                          <CheckCircle size={11} className="text-[var(--text-muted)]" />
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Availability Spotlight Card */}
        <div className="mt-12 glass-card rounded-3xl p-6 sm:p-8 border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[var(--border-hover)] transition-all">
          <div className="flex items-center gap-4 text-center sm:text-left">
            {/* <div className="relative flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--text)] block animate-pulse" />
            </div> */}
            <div>
              <p className="text-sm sm:text-base font-semibold text-[var(--text)]">
                Available for freelance &amp; full-time positions
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Have an idea, project, or open role? Let's discuss requirements and turn your vision into reality.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-shimmer flex-shrink-0 inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[var(--text)] text-[var(--bg)] text-xs font-semibold hover:opacity-90 active:scale-95 transition"
          >
            <span>Let's collaborate</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

      </div>
    </div>
  );
}