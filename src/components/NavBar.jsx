import { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
  CodeXml,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "work" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Services", id: "services" },
];

const mobileSocials = [
  { href: "https://github.com/dilip12git", Icon: Github, label: "GitHub" },
  { href: "https://leetcode.com/u/diliplitcode/", Icon: CodeXml, label: "LeetCode" },
  { href: "https://www.linkedin.com/in/dilipgpta/", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/dilipgupta_4u", Icon: Instagram, label: "Instagram" },
];

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPct);
      setScrolled(winScroll > 30);

      const sections = [{ id: "hero" }, ...navItems].map((n) =>
        document.getElementById(n.id)
      );
      let current = "hero";
      const scrollPosition = winScroll + 240;

      sections.forEach((sec) => {
        if (!sec) return;
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          current = sec.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.theme = next ? "dark" : "light";
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-purple-500 via-[var(--text)] to-emerald-500 z-[70] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Modern Floating Island Navbar */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto rounded-full glass-capsule px-3.5 sm:px-4 py-2 flex items-center justify-between gap-4 sm:gap-6 max-w-4xl w-full transition-all duration-300 ${
            scrolled ? "shadow-xl shadow-black/10 scale-[0.99]" : "shadow-md shadow-black/5"
          }`}
        >
          {/* Logo & Monogram */}
          <button
            onClick={() => scrollTo("hero")}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="Dilip Kumar - Home"
          >
            <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-purple-500/40 shadow-xs">
              <svg viewBox="0 0 120 120" className="w-full h-full p-0.5">
                <path
                  d="M60 12 Q68 12 74 18 L100 38 Q108 44 105 54 L92 94 Q89 106 76 106 L44 106 Q31 106 28 94 L15 54 Q12 44 20 38 L46 18 Q52 12 60 12 Z"
                  fill="var(--logo-bg)"
                />
                <text
                  x="60"
                  y="72"
                  textAnchor="middle"
                  fill="var(--logo-text)"
                  fontSize="34"
                  fontWeight="900"
                  fontFamily="sans-serif"
                >
                  DK
                </text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-[var(--text)] leading-tight">
                Dilip Kumar
              </span>
              <span className="text-[9px] sm:text-[10px] text-[var(--text-muted)] tracking-wider uppercase font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Full Stack &amp; AI
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-[var(--bg)]/70 dark:bg-[var(--bg)]/50 px-2 py-1 rounded-full border border-[var(--border)] shadow-inner">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[var(--accent-fg)] bg-[var(--accent)] shadow-xs font-semibold scale-102"
                      : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-card)]/80"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-8.5 sm:h-8.5 flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--text-muted)] hover:scale-105 active:scale-95 transition shadow-xs"
              aria-label="Toggle dark mode"
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? (
                <Sun size={14} className="text-amber-400 rotate-0 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon size={14} className="text-neutral-700 rotate-0 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* CTA Shimmer Button */}
            <button
              onClick={() => scrollTo("contact")}
              className="btn-shimmer hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--text)] text-[var(--bg)] text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm group"
            >
              <span>Get in touch</span>
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              className="lg:hidden w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-[var(--text)] hover:border-[var(--text-muted)] transition active:scale-95 shadow-xs"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Section Navigator (Desktop Left) */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-2.5 z-40 bg-[var(--bg-card)]/80 dark:bg-[var(--bg-card)]/55 backdrop-blur-xl p-2 rounded-full border border-[var(--border)] shadow-md">
        {[{ id: "hero", label: "Home" }, ...navItems].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            title={item.label}
            className="group relative flex items-center justify-center p-1"
            aria-label={`Scroll to ${item.label}`}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === item.id
                  ? "w-2.5 h-6 bg-[var(--text)] rounded-full shadow-xs"
                  : "w-2 h-2 bg-[var(--border-hover)] group-hover:bg-[var(--text-muted)] group-hover:scale-125"
              }`}
            />
            <span className="absolute left-8 px-2.5 py-1 bg-[var(--text)] text-[var(--bg)] text-[11px] font-medium rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap shadow-md">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Modern Slide-over Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[80] flex lg:hidden">
          {/* Backdrop with Frosted Blur */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Body */}
          <div className="relative ml-auto w-80 max-w-[85vw] h-full bg-[var(--bg-card)] border-l border-[var(--border)] flex flex-col p-6 shadow-2xl animate-slideLeft z-10">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-[var(--border)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-full h-full p-0.5">
                    <path
                      d="M60 12 Q68 12 74 18 L100 38 Q108 44 105 54 L92 94 Q89 106 76 106 L44 106 Q31 106 28 94 L15 54 Q12 44 20 38 L46 18 Q52 12 60 12 Z"
                      fill="var(--logo-bg)"
                    />
                    <text
                      x="60"
                      y="72"
                      textAnchor="middle"
                      fill="var(--logo-text)"
                      fontSize="34"
                      fontWeight="900"
                    >
                      DK
                    </text>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm leading-tight text-[var(--text)]">Dilip Kumar</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Full Stack &amp; AI</span>
                </div>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text)] hover:bg-[var(--bg)] transition"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            {/* Nav links */}
            <ul className="flex flex-col gap-1.5 mt-5 flex-1 overflow-y-auto no-scrollbar">
              {[{ id: "hero", label: "Home" }, ...navItems].map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                        isActive
                          ? "bg-[var(--text)] text-[var(--bg)] font-semibold shadow-xs"
                          : "text-[var(--text-muted)] hover:bg-[var(--bg)] hover:text-[var(--text)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={14} className={isActive ? "text-[var(--bg)]" : "opacity-40"} />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Drawer Footer */}
            <div className="pt-5 border-t border-[var(--border)] flex flex-col gap-3.5 mt-auto">
              <button
                onClick={() => scrollTo("contact")}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[var(--text)] text-[var(--bg)] text-xs font-semibold hover:opacity-90 active:scale-95 transition shadow-sm"
              >
                <span>Get in touch</span>
                <ArrowUpRight size={13} />
              </button>

              {/* Social links row in drawer */}
              <div className="flex items-center justify-center gap-2 pt-1">
                {mobileSocials.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] transition"
                  >
                    <item.Icon size={14} />
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] px-1">
                <span>© {new Date().getFullYear()} Dilip Kumar</span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for hire
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}