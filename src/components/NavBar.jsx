import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  // { label: "Home",       id: "hero"       },
  { label: "About",      id: "about"      },
  { label: "Skills",      id: "skills"      },
  { label: "Experience", id: "experience" },
  { label: "Work",       id: "work"       },
  { label: "Education",   id: "education"       },
  { label: "Certifications",   id: "certifications"       },
  { label: "Services",   id: "services"   },
];

export default function Navbar() {
  const sideMenuRef = useRef(null);
  const [dark, setDark]       = useState(false);
  const [active, setActive]   = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!(("theme" in localStorage)) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Watch snap container scroll to update active dot
  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;
    const onScroll = () => {
      const sections = navItems.map((n) => document.getElementById(n.id));
      let current = navItems[0].id;
      sections.forEach((sec) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) current = sec.id;
      });
      setActive(current);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] ">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-3.5 flex items-center justify-between">

          <div className="flex items-center gap-6">

          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <path d="M60 12 Q68 12 74 18 L100 38 Q108 44 105 54 L92 94 Q89 106 76 106 L44 106 Q31 106 28 94 L15 54 Q12 44 20 38 L46 18 Q52 12 60 12 Z" fill="var(--logo-bg)" />
                <text x="60" y="72" textAnchor="middle" fill="var(--logo-text)" fontSize="34" fontWeight="900" fontFamily="sans-serif">DK</text>
              </svg>
            </div>
            <span className="sm:hidden block">Dilip Kumar</span>
          </button>

          

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-normal text-[var(--text-muted)]">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`transition-colors hover:text-[var(--text)] ${active === item.id ? "text-[var(--text)] font-medium" : ""}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            </ul>
            </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border)] hover:bg-[var(--bg-card)] transition"
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:opacity-80 transition"
            >
              Get in touch
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Section dots — desktop right side */}
      <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 flex-col gap-2.5 z-40">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            title={item.label}
            className={`rounded-full transition-all duration-300 ${
              active === item.id
                ? "w-2.5 h-2.5 bg-[var(--text)]"
                : "w-1.5 h-1.5 bg-[var(--border)] hover:bg-[var(--text-muted)]"
            }`}
          />
        ))}
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/30" onClick={() => setMenuOpen(false)} />
          <div className="w-64 bg-[var(--bg-card)] border-l border-[var(--border)] flex flex-col pt-6 px-6">
            <button onClick={() => setMenuOpen(false)} className="self-end mb-8">
              <X size={20} />
            </button>
            <ul className="flex flex-col gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`hover:text-[var(--text-muted)] transition ${active === item.id ? "text-[var(--text)] font-semibold" : ""}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
