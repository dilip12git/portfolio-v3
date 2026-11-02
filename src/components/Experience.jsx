import { Blocks, Volleyball, Fan, SquaresExclude, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "10+", label: "Projects Finished", icon: Blocks, detail: "Web, Mobile & AI Solutions" },
  { value: "5+", label: "Tech Stacks Mastered", icon: Volleyball, detail: "MERN, React Native, Python" },
  { value: "3+", label: "Years Experience", icon: Fan, detail: "Building Production Systems" },
  { value: "2+", label: "Happy Clients", icon: SquaresExclude, detail: "Freelance & Consulting" },
];

const timeline = [
  {
    period: "2024 – Present",
    role: "Full Stack Developer",
    org: "Freelance / Open Source",
    desc: "Delivering end-to-end web and mobile solutions for clients using MERN, React Native, and AI integrations. Architecting scalable database schemas and high-throughput REST APIs.",
    current: true,
    tags: ["React Native", "MERN", "FastAPI", "AI Integration"],
  },
  {
    period: "2023",
    role: "AICTE Virtual Intern",
    org: "Java Full Stack",
    desc: "Completed intensive training in Java full-stack development covering Spring Boot, REST APIs, and database deployment with end-to-end project implementations.",
    current: false,
    tags: ["Java", "Spring Boot", "REST APIs", "Deployment"],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-[var(--bg-card)] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium flex items-center gap-2">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" /> */}
            Track record
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo tracking-tight text-[var(--text)]">
            Experience &amp; Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Vertical Timeline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border)] space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Node on Timeline */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--bg-card)] transition-transform duration-300 group-hover:scale-125 ${
                      item.current ? "bg-emerald-500" : "bg-[var(--text)]"
                    }`}
                  />

                  {/* Card Container */}
                  <div className="glass-card rounded-2xl p-6 sm:p-7 border border-[var(--border)] hover:border-[var(--border-hover)] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text)]">
                        <Calendar size={12} className="text-[var(--text-muted)]" />
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[var(--bg)] text-[var(--text)] border border-[var(--border)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-[var(--text)]">
                      {item.role}
                    </h3>
                    <p className="text-xs font-medium text-[var(--text-muted)] mb-3 flex items-center gap-1.5 mt-0.5">
                      <Briefcase size={12} className="text-[var(--text-muted)]" /> {item.org}
                    </p>

                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Metric Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-5 sm:p-6 border border-[var(--border)] flex flex-col justify-between hover:-translate-y-1 transition-all group hover:border-[var(--border-hover)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] mb-4 group-hover:scale-105 transition-transform">
                    <Icon size={19} />
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-bold font-Outfit text-[var(--text)] tracking-tight">
                      {st.value}
                    </span>
                    <p className="text-xs font-semibold text-[var(--text)] mt-1.5 leading-snug">
                      {st.label}
                    </p>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1">
                      {st.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}