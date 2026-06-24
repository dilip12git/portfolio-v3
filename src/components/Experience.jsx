import { Boxes, Volleyball, Fan, SquaresExclude,Blocks } from "lucide-react";

const icons = [{ Icon: Blocks }, { Icon: Volleyball }, { Icon: Fan }, { Icon: SquaresExclude }];
const stats = [
  { value: "10+", label: "Projects\nFinished" },
  { value: "5+", label: "Technologies\nMastered" },
  { value: "3+", label: "Years\nExperience" },
  { value: "2+", label: "Happy\nClients" },
];

const timeline = [
  {
    period: "2024 – Present",
    role: "Full Stack Developer",
    org: "Freelance / Open Source",
    desc: "Delivering end-to-end web and mobile solutions for clients using MERN, React Native, and AI integrations.",
  },
  {
    period: "2023",
    role: "AICTE Virtual Intern",
    org: "Java Full Stack",
    desc: "Completed intensive training in Java full-stack development covering Spring Boot, REST APIs, and deployment.",
  },
  // {
  //   period: "2022 – Present",
  //   role: "B.Tech CSE Student",
  //   org: "Bharath University, Chennai",
  //   desc: "Pursuing Computer Science & Engineering while actively building production projects and contributing to open source.",
  // },
];

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-card)]">
      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-8 py-20">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">Track record</p>
          <h2 className="text-4xl font-Ovo">Experience</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* LEFT — timeline */}
          <div className="flex-1 flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--text)] mt-1 flex-shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--border)] mt-1" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <p className="text-xs text-[var(--text-muted)] mb-1">{item.period}</p>
                  <p className="font-semibold text-sm">{item.role}</p>
                  <p className="text-xs text-[var(--text-muted)] mb-2">{item.org}</p>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — stat grid */}
          <div className="flex-1">
            <div className="grid grid-cols-4">
              {icons.map((ic, i) => {
                const isIconTop = i % 2 === 0;
                const borderClass = `border-b border-[var(--border)] ${i !== icons.length - 1 ? "border-r" : ""}`;

                return isIconTop ? (
                  <div key={`r1-icon-${i}`} className={`flex items-center justify-center aspect-square text-2xl text-[var(--text)] ${borderClass}`}>
                    <ic.Icon size={30} />
                  </div>
                ) : (
                  <div key={`r1-stat-${i}`} className={`flex flex-col items-center justify-center py-2 px-1 bg-[var(--bg)] ${borderClass}`}>
                    <span className="text-xl font-bold ">{stats[i].value}</span>
                      <span className="text-[11px] sm:text-xs text-[var(--text-muted)] text-center whitespace-pre-line leading-tight mt-0.5">
                      {stats[i].label}
                    </span>
                  </div>
                );
              })}

              {icons.map((ic, i) => {
                const isStatBottom = i % 2 === 0;
                const borderClass = `border-[var(--border)] ${i !== icons.length - 1 ? "border-r" : ""}`;
                return isStatBottom ? (
                  <div key={`r2-stat-${i}`} className={`flex flex-col items-center justify-center py-2 px-1 bg-[var(--bg)] ${borderClass}`}>
                    <span className="text-xl font-bold">{stats[i].value}</span>
                      <span className="text-[11px] sm:text-xs text-[var(--text-muted)] text-center whitespace-pre-line leading-tight mt-0.5">
                      {stats[i].label}
                    </span>
                  </div>
                ) : (
                  <div key={`r2-icon-${i}`} className={`flex items-center justify-center aspect-square text-2xl text-[var(--text)] ${borderClass}`}>
                    <ic.Icon size={30} />
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
