import LargeImg from "../assets/dilip-large-img.jpeg";
import { Globe, Cpu, Layers, MapPin } from "lucide-react";

const focusAreas = [
  {
    icon: Globe,
    title: "Web & Mobile",
    desc: "Responsive, scalable applications with intuitive user flows.",
  },
  {
    icon: Cpu,
    title: "Intelligent Systems",
    desc: "Smart automation and AI-driven capabilities built for everyday use.",
  },
  {
    icon: Layers,
    title: "Design & UX",
    desc: "Clean architecture, performance, and accessible design.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-[var(--bg-card)] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium flex items-center gap-2">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" /> */}
            Introduction
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo tracking-tight text-[var(--text)]">
            About me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              I'm <strong className="text-[var(--text)] font-semibold">Dilip Kumar Teli</strong>, a developer passionate about building clean, scalable, and user-centric digital products. I enjoy turning complex ideas into seamless web and mobile experiences.
            </p>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              My focus is on crafting thoughtful solutions that balance clean engineering with great design — solving real-world problems and delivering meaningful user experiences.
            </p>

            {/* 3 Value Pillars - Simple & Theme Aligned */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--border-hover)] transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] mb-3 group-hover:scale-105 transition-transform">
                      <Icon size={16} />
                    </div>
                    <p className="text-xs font-semibold text-[var(--text)] leading-snug">
                      {area.title}
                    </p>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Photo with Clean Glass Accents (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg)] aspect-square">
                <img
                  src={LargeImg}
                  alt="Dilip Kumar Teli"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                  loading="lazy"
                />

                {/* Top Corner Pill */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[var(--bg-card)]/90 backdrop-blur-md text-[var(--text)] border border-[var(--border)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>B.Tech CSE '26</span>
                </div>

                {/* Bottom Glass Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl glass-pill bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border)] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[var(--text)] leading-tight">
                      Dilip Kumar Teli
                    </p>
                    <p className="text-[10px] text-[var(--text-muted)] flex items-center gap-1 mt-0.5">
                      <MapPin size={10} className="text-[var(--text-muted)]" /> Chennai, India
                    </p>
                  </div>
                  <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[var(--text)] text-[var(--bg)]">
                    Full Stack &amp; AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}