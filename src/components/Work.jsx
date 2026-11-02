import { useState, useRef, useEffect } from "react";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Brain,
  Smartphone,
  Globe,
  Plus,
} from "lucide-react";

import EasyPayImg from "../assets/projects/easypay_img.png";
import gchatImg from "../assets/projects/gchat_img.png";
import converterImg from "../assets/projects/converter.png";
import ex2nextImg from "../assets/projects/ex2next_img.jpeg";
import mplayerImg from "../assets/projects/mplayer_img.png";
import tutdocsImg from "../assets/projects/tutdocs_img.png";
import Skillmate from "../assets/projects/skillmate_img.png";
import cropxImg from "../assets/projects/cropx_img.png";
import DilentImg from "../assets/projects/dilent_img.png";
import chetakImg from "../assets/projects/chetak.png";

const categoryMeta = {
  ai: {
    label: "AI & Agents",
    icon: Brain,
  },
  mobile: {
    label: "Mobile Apps",
    icon: Smartphone,
  },
  web: {
    label: "Full Stack Web",
    icon: Globe,
  },
};

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Agents", icon: Brain },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "web", label: "Full Stack Web", icon: Globe },
];

const projects = [
  {
    id: "chetak",
    name: "Chetak",
    subtitle: "Smart Travel Alarm App",
    date: "2026",
    category: "mobile",
    featured: true,
    description: "Smart alarm app that wakes you up at your destination with alert and voice commands.",
    image: chetakImg,
    github: "https://github.com/dilip12git/chetak",
    live: "https://drive.google.com/file/d/1xpiFtgdzqYJEeTSpxfB5kPsYTWfij3Pb/view?usp=sharing",
    liveLabel: "APK Demo",
    highlights: ["Destination geofence alarm", "Voice command recognition", "Google Maps live route"],
    tags: ["React-Native", "Kotlin", "Android", "Google Map"],
  },
  {
    id: "dilent",
    name: "Dilent",
    subtitle: "AI Mock Interview Assistant",
    date: "2026",
    category: "ai",
    featured: true,
    description: "AI-powered mock interview assistant. Upload a resume, configure by voice, and receive structured feedback.",
    image: DilentImg,
    github: "https://github.com/dilip12git/dilent-interview-ai",
    live: "https://dilent.web.app/",
    liveLabel: "Live App",
    highlights: ["Voice-guided interview config", "Real-time AI question scoring", "Structured performance report"],
    tags: ["React Js", "Python", "LangChain", "FastAPI"],
  },
  {
    id: "skillmate",
    name: "SkillMate",
    subtitle: "AI Skills Barter Platform",
    date: "2025",
    category: "ai",
    featured: true,
    description: "Freelance barter where users exchange skills — listings, messaging, and an intelligent matching engine.",
    image: Skillmate,
    github: "https://github.com/dilip12git/skillmate",
    live: "#",
    highlights: ["Intelligent matching engine", "Real-time barter messaging", "Peer reputation reviews"],
    tags: ["MERN", "AI Matching", "WebSockets"],
  },
  {
    id: "cropx",
    name: "CropX",
    subtitle: "AI Agricultural Marketplace",
    date: "2026",
    category: "ai",
    featured: true,
    description: "AI marketplace connecting farmers & buyers with smart recommendations and payment integration.",
    image: cropxImg,
    github: "https://github.com/dilip12git/cropx",
    live: "#",
    highlights: ["Farmer marketplace", "Smart recommendations", "Crop yield forecast"],
    tags: ["MERN", "AI", "Marketplace"],
  },
  {
    id: "gchat",
    name: "GChat",
    subtitle: "Real-Time Chat Web App",
    date: "2025",
    category: "web",
    featured: false,
    description: "Full-stack real-time chat with rooms, media uploads, and WebSocket messaging built on MERN.",
    image: gchatImg,
    github: "https://github.com/dilip12git/whatsapp-clone",
    live: "#",
    highlights: ["WebSocket rooms", "Typing indicators", "Encrypted attachments"],
    tags: ["MERN", "WebSocket", "Real-time"],
  },
  {
    id: "topupxcel",
    name: "TopUpXcel",
    subtitle: "Gift Card E-Commerce",
    date: "2026",
    category: "web",
    featured: false,
    description: "A gift card e-commerce platform with Cloudinary uploads, auth, and clean product management.",
    image: EasyPayImg,
    github: "https://github.com/dilip12git/easy-pay",
    live: "https://topupxcel.com",
    liveLabel: "Live Demo",
    highlights: ["Gift card inventory", "Cloudinary media pipe", "Instant voucher redemption"],
    tags: ["MERN", "E-Commerce", "Cloudinary"],
  },
  {
    id: "mplayer",
    name: "MPlayer",
    subtitle: "Music Player Mobile App",
    date: "2024",
    category: "mobile",
    featured: false,
    description: "A modern music player with playlist management, playback controls, and audio visualization.",
    image: mplayerImg,
    github: "https://github.com/dilip12git/music_player",
    live: "#",
    highlights: ["Equalizer spectrum", "Playlist queue", "Background playback"],
    tags: ["React-Native", "Audio", "Mobile"],
  },
  {
    id: "tutdocs",
    name: "TutDocs",
    subtitle: "Study Material Portal",
    date: "2022",
    category: "web",
    featured: false,
    description: "A portal for students to upload, browse, and download academic notes and study materials.",
    image: tutdocsImg,
    github: "https://github.com/dilip12git/tutdocs",
    live: "#",
    highlights: ["Semester syllabus notes", "PDF document preview", "Faculty upload engine"],
    tags: ["Angular", "PHP", "MySQL"],
  },
  {
    id: "ex2next",
    name: "Ex2Next",
    subtitle: "Resale Marketplace Platform",
    date: "2023",
    category: "web",
    featured: false,
    description: "A Resale platform with item listing, browsing, and category filtering.",
    image: ex2nextImg,
    github: "https://github.com/dilip12git/EX2NEXT-resale-marketplace",
    live: "#",
    highlights: ["Listing creation flow", "Category filtering", "Buyer contact portal"],
    tags: ["MERN", "E-Commerce", "Resale"],
  },
  {
    id: "converter",
    name: "Unit Converter",
    subtitle: "Android Measurement Converter",
    date: "2025",
    category: "mobile",
    featured: false,
    description: "A modern unit converter application with support for various measurement units and quick conversions.",
    image: converterImg,
    github: "https://github.com/dilip12git/converter_android_app",
    live: "#",
    highlights: ["Multi-unit arithmetic", "History & favorites", "Offline Android core"],
    tags: ["Java", "Android", "Studio"],
  },
];

// Alternating tilt for the carousel: left tilted, centre straight, right tilted
const tiltClasses = ["-rotate-[2.5deg]", "rotate-0", "rotate-[2.5deg]"];

function ProjectCard({ project, className = "" }) {
  const meta = categoryMeta[project.category];
  const Icon = meta.icon;

  return (
    <div
      className={`group/card rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 transform-gpu hover:border-[var(--border-hover)] ${className}`}
    >
      <div>
        {/* Preview Container */}
        <div className="rounded-xl p-3 h-48 sm:h-52 mb-4 overflow-hidden bg-[var(--bg)] border border-[var(--border)]">
          <div className="h-full rounded-lg bg-[var(--bg-card)] border border-[var(--border)] p-2.5 flex flex-col gap-1.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border)]">
              <h3 className="font-Ovo text-xs sm:text-sm text-[var(--text)] tracking-tight">{project.name}</h3>
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-hover)]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-hover)]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-hover)]" />
              </span>
            </div>

            <div className="relative flex-1 min-h-0 rounded overflow-hidden bg-[var(--bg)] border border-[var(--border)]">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex items-center justify-between gap-2 text-[10px] text-[var(--text-muted)]">
              <span className="truncate font-medium">{project.subtitle}</span>
              <span className="font-mono shrink-0">{project.date}</span>
            </div>
          </div>
        </div>

        {/* Category row */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-[var(--bg)] border border-[var(--border)] text-[var(--text)]">
            <Icon size={14} />
          </span>
          <span className="text-sm font-medium text-[var(--text)] tracking-wide">{meta.label}</span>
          {project.featured && (
            <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] flex items-center gap-1">
              <Sparkles size={9} /> Featured
            </span>
          )}
        </div>

        <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">{project.description}</p>

        {/* "+" highlights */}
        <div className="space-y-1.5 my-3">
          {project.highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] group-hover/card:text-[var(--text)] transition-colors"
            >
              <Plus size={13} strokeWidth={2.5} className="shrink-0 text-[var(--text)]" />
              <span className="truncate">{h}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2.5 pt-4 border-t border-[var(--border)]">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-[var(--text)] text-[var(--bg)] hover:opacity-90 active:scale-95 transition-all"
        >
          <Github size={13} />
          <span>Source Code</span>
        </a>

        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] hover:border-[var(--text-muted)] hover:bg-[var(--bg)] active:scale-95 transition-all"
          >
            <ExternalLink size={13} />
            <span>{project.liveLabel || "Live Demo"}</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isHovered, setIsHovered] = useState(false);

  const trackRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    isPausedRef.current = isHovered;
  }, [isHovered]);

  const filtered =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Repeat items so the track is long enough to loop seamlessly
  const repeatCount = filtered.length <= 3 ? 4 : 3;
  const carouselItems = Array.from({ length: repeatCount }, () => filtered).flat();

  // Auto-scroll loop: runs automatically and stops immediately on hover
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let reqId;
    let lastTimestamp = performance.now();

    const step = (time) => {
      const elapsed = Math.min(time - lastTimestamp, 80);
      lastTimestamp = time;

      if (!isPausedRef.current && el) {
        el.scrollLeft += (elapsed / 1000) * 45; // ~45px per second

        const oneSetWidth = el.scrollWidth / repeatCount;
        if (oneSetWidth > 0 && el.scrollLeft >= oneSetWidth * 2) {
          el.scrollLeft -= oneSetWidth;
        }
      }

      reqId = requestAnimationFrame(step);
    };

    reqId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(reqId);
  }, [selectedCategory, repeatCount]);

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-theme py-20 lg:py-28 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 px-2">
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium flex items-center gap-2">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" /> */}
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo tracking-tight text-[var(--text)]">
              Selected Works
            </h2>
          </div>

          <a
            href="https://github.com/dilip12git"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition group self-start sm:self-auto"
          >
            <span>Explore all on GitHub</span>
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Clean Category filter pills - no extra controllers */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 border-b border-[var(--border)]">
          {filterCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count =
              cat.id === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;

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
                <span className="px-1.5 rounded-full bg-[var(--bg)] text-[var(--text)] text-[10px] leading-4">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Automatic carousel that pauses immediately on hover */}
        <div className="relative w-full">
          {/* Edge fades */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-20"
            style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-20"
            style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
          />

          <div
            ref={trackRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            className="flex items-stretch gap-6 overflow-x-auto no-scrollbar py-8 px-4"
            style={{ scrollBehavior: "auto" }}
          >
            {carouselItems.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                className={`flex-shrink-0 w-[295px] sm:w-[325px] md:w-[340px] ${tiltClasses[index % 3]} hover:rotate-0 hover:scale-[1.03] hover:z-30`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}