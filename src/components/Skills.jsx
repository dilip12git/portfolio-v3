import { useState } from "react";
import { Sparkles, Brain, Cpu, Code2, Database, Wrench, Layers } from "lucide-react";

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Cpu },
  { id: "ai", label: "Agentic AI", icon: Brain },
  { id: "database", label: "Database", icon: Database },
  { id: "tools", label: "Tools & Others", icon: Wrench },
];

const allSkills = [
  // Frontend
  { name: "HTML5", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React JS", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular JS", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Tailwind CSS", category: "frontend", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Redux", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },

  // Backend
  { name: "Node.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertDark: true },
  { name: "FastAPI", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Python", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

  // Agentic AI
  { name: "LangChain", category: "ai", icon: "https://cdn.simpleicons.org/langchain", isAi: true },
  { name: "LangGraph", category: "ai", fallback: "🕸", isAi: true },
  { name: "RAG Systems", category: "ai", fallback: "⚡", isAi: true },

  // Database
  { name: "MySQL", category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },

  // Other Languages
  { name: "C++", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },

  // Tools
  { name: "GitHub", category: "tools", icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg", invertDark: true },
  { name: "Git", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Android Studio", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "Postman", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "VS Code", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Cloudinary", category: "tools", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-theme py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium flex items-center gap-2">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" /> */}
              What I know
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo tracking-tight text-[var(--text)]">
              Skills &amp; Technologies
            </h2>
          </div>

          {/* Clean Monochrome Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)] text-xs font-medium self-start md:self-auto">
            <Sparkles size={13} className="text-[var(--text)]" />
            <span>Specializing in AI-Driven Workflows &amp; Full Stack</span>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count =
              cat.id === "all"
                ? allSkills.length
                : allSkills.filter((s) => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[var(--text)] text-[var(--bg)] font-semibold"
                    : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)]"
                }`}
              >
                {cat.icon && <cat.icon size={13} className={isSelected ? "text-[var(--bg)]" : "text-[var(--text)]"} />}
                <span>{cat.label}</span>
                <span
                  className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? "bg-[var(--bg)] text-[var(--text)] font-bold" : "bg-[var(--bg)] text-[var(--text-muted)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group glass-card rounded-2xl p-4 flex flex-col items-center justify-center gap-2.5 relative transition-all duration-300 hover:-translate-y-1 border border-[var(--border)] hover:border-[var(--border-hover)]"
            >
              {skill.isAi && (
                <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-[var(--bg)] text-[var(--text-muted)] border border-[var(--border)]">
                  AI
                </span>
              )}

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform duration-300">
                {skill.icon ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-7 h-7 object-contain ${
                      skill.invertDark ? "dark:invert" : ""
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xl select-none">{skill.fallback}</span>
                )}
              </div>

              {/* Skill Name */}
              <span className="text-xs font-semibold text-[var(--text)] text-center tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-5 rounded-2xl glass-card border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] flex-shrink-0">
              <Layers size={17} />
            </div>
            <div>
              <p className="font-semibold text-[var(--text)] text-xs sm:text-sm">
                Clean Architecture &amp; Production Workflows
              </p>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                Experienced with Git branching, CI/CD pipelines, Docker containerization, and RESTful API engineering.
              </p>
            </div>
          </div>
          <a
            href="#work"
            className="flex-shrink-0 px-5 py-2.5 rounded-full bg-[var(--text)] text-[var(--bg)] font-semibold text-xs hover:opacity-90 transition active:scale-95"
          >
            See in action &rarr;
          </a>
        </div>

      </div>
    </div>
  );
}