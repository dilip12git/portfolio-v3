import { useState } from "react";
import { Globe, Smartphone, Server, Palette, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Globe,
    name: "Full Stack Web Development",
    short: "Fast, responsive, and scalable websites — React, Node.js, and the MERN stack.",
    full: "I build high-performance, responsive, and scalable web applications using React, Tailwind CSS, Node.js, Express, and MongoDB. Clean architecture, reusable components, SEO-friendly layouts, and optimised performance that delivers real results.",
    examples: ["E-Commerce Platforms","SaaS Dashboards","Portfolio Sites","REST API Integration"],
  },
  {
    icon: Smartphone,
    name: "Mobile App Development",
    short: "Cross-platform mobile apps with smooth UI and real-time features using React Native.",
    full: "I develop modern cross-platform mobile applications using React Native. From auth and real-time chat to push notifications and media uploads — fast, secure, and production-ready for both iOS and Android.",
    examples: ["Social Media Apps","Chat Applications","E-Commerce Apps","Utility Tools"],
  },
  {
    icon: Server,
    name: "Backend & API Development",
    short: "Secure, scalable backend systems and REST APIs built with Node.js and FastAPI.",
    full: "I build secure and efficient backend systems using Node.js, Express, MongoDB, Firebase, and FastAPI. Auth, database design, file uploads, and real-time data sync across web and mobile platforms.",
    examples: ["REST APIs","Authentication Systems","Database Design","Firebase Integration"],
  },
  {
    icon: Palette,
    name: "UI / UX Design",
    short: "Clean, intuitive, and user-centred interface designs that convert and retain users.",
    full: "I design modern UI/UX interfaces focused on usability, accessibility, and visual clarity. Using Tailwind CSS and component-driven design, I create intuitive user flows and polished interfaces for web and mobile.",
    examples: ["Web Interfaces","Mobile UI","Design Systems","Component Libraries"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-card)]">
      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-8 py-20">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">What I offer</p>
            <h2 className="text-4xl font-Ovo">I can help you with</h2>
          </div>
          <a href="#work" className="hidden sm:block text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition">
            See my work
          </a>
        </div>

        {/* Accordion */}
        <div className="flex flex-col border-y border-[var(--border)] divide-y divide-[var(--border)]">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = openIndex === i;
            return (
              <div key={service.name}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-5 py-5 text-left group"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition
                    ${isOpen
                      ? "bg-[var(--text)] text-[var(--bg)] border-transparent"
                      : "border-[var(--border)] group-hover:bg-[var(--text)] group-hover:text-[var(--bg)] group-hover:border-transparent"}`}>
                    <Icon size={17} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{service.name}</p>
                    {!isOpen && <p className="text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">{service.short}</p>}
                  </div>
                  <ChevronDown size={16}
                    className={`flex-shrink-0 text-[var(--text-muted)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
                  <div className="flex flex-col gap-4" style={{ paddingLeft: "3.75rem" }}>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">{service.full}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((ex) => (
                        <span key={ex}
                          className="px-3 py-1 rounded-full text-xs border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)]">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Availability band */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <p className="text-sm font-medium">Currently available for new projects</p>
          </div>
          <a href="#contact"
            className="px-6 py-2.5 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:opacity-80 transition">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
