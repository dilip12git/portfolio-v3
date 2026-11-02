import { GraduationCap, Calendar, MapPin } from "lucide-react";

const degrees = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Bharath University, Chennai",
    period: "2022 – 2026",
    status: "Final Year",
    desc: "Core focus on data structures, algorithms, software engineering, databases and networks. Actively built production web, mobile, and AI projects alongside coursework.",
    tags: ["DSA", "OS", "DBMS", "Networks", "Software Eng."],
  },
  {
    degree: "Higher Secondary — Computer Science",
    school: "Shree Sunsanskrit Secondary School, Siddharathanagar, Nepal",
    period: "2020 – 2022",
    status: "Completed",
    desc: "Physics, Chemistry, Mathematics and Computer Science stream. Developed strong analytical thinking, mathematics and foundational computer programming skills.",
    tags: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
];

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-[var(--bg-card)] py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium flex items-center gap-2">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" /> */}
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo tracking-tight text-[var(--text)]">
            Education
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {degrees.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-[var(--border)] hover:border-[var(--border-hover)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] group-hover:scale-105 transition-transform">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text)]">
                      <Calendar size={11} className="text-[var(--text-muted)]" />
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--bg)] text-[var(--text)] border border-[var(--border)]">
                      {item.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] leading-snug">
                  {item.degree}
                </h3>
                <p className="text-xs font-medium text-[var(--text-muted)] mt-1.5 mb-3.5 flex items-center gap-1.5">
                  <MapPin size={12} className="text-[var(--text-muted)]" /> {item.school}
                </p>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Coursework Tags */}
              <div className="flex flex-wrap gap-1.5 pt-5 mt-6 border-t border-[var(--border)]">
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
          ))}
        </div>
      </div>
    </div>
  );
}