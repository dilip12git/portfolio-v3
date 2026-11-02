import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certificate";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.theme = next ? "dark" : "light";
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-50 w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] flex items-center justify-center hover:border-[var(--border-hover)] transition active:scale-95"
      aria-label="Toggle theme"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

function App() {
  return (
    <div className="font-Outfit bg-theme text-theme selection:bg-[var(--text)] selection:text-[var(--bg)] min-h-screen relative">
      <ThemeToggle />
      <main className="w-full relative">
        <section id="hero" className="scroll-mt-16">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>
        <section id="experience" className="scroll-mt-16">
          <Experience />
        </section>
        <section id="work" className="scroll-mt-16">
          <Work />
        </section>
        <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        <section id="certifications" className="scroll-mt-16">
          <Certifications />
        </section>
        <section id="services" className="scroll-mt-16">
          <Services />
        </section>
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;