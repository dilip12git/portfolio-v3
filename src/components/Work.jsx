import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import EasyPayImg from "../assets/projects/easypay_img.png";
import gchatImg from "../assets/projects/gchat_img.png";
import converterImg from "../assets/projects/converter.png";
import ex2nextImg from "../assets/projects/ex2next_img.jpeg";
import mplayerImg from "../assets/projects/mplayer_img.png";
import tutdocsImg from "../assets/projects/tutdocs_img.png";
import Skillmate from "../assets/projects/skillmate_img.png";
import cropxImg from "../assets/projects/cropx_img.png";
import DilentImg from "../assets/projects/dilent_img.png";

const projects = [
  {
    name: "Dilent",
    subtitle: "AI-powered mock interview assistant",
    date: "2026",
    description: "AI-powered mock interview assistant. Upload a resume, configure the interview by voice, answer questions, and receive a structured performance report.",
    image: DilentImg, github: "https://github.com/dilip12git/dilent-interview-ai",
    live: "https://dilent.web.app/",
    tags: ["React Js", "Python", "RAG", "LangChain", "FASTAPI", "AI"]
  },
  {
    name: "SkillMate",
    subtitle: "AI-Powered Skills Barter Platform",
    date: "2025",
    description: "Freelance barter where users exchange skills — listings, messaging, and a matching engine.",
    image: Skillmate, github: "https://github.com/dilip12git/skillmate",
    live: "#", tags: ["MERN", "Freelance"]
  },
  {
    name: "CropX",
    subtitle: "AI Agricultural Marketplace",
    date: "2026",
    description: "AI marketplace connecting farmers & buyers with smart recommendations and payment integration.",
    image: cropxImg,
    github: "https://github.com/dilip12git/cropx", live: "#",
    tags: ["MERN", "AI", "Marketplace"]
  },
  {
    name: "GChat",
    subtitle: "Real-Time Chat Web App",
    date: "2025",
    description: "Full-stack real-time chat with rooms, media uploads, and WebSocket messaging built on MERN.", image: gchatImg, github: "https://github.com/dilip12git/whatsapp-clone", live: "#", tags: ["MERN", "WebSocket", "Real-time"]
  },
  {
    name: "TopUpXcel",
    subtitle: "Gift Card Platform",
    date: "2026",
    description: "A gift card e-commerce platform with Cloudinary uploads, auth, and clean product management.", image: EasyPayImg, github: "https://github.com/dilip12git/easy-pay", live: "https://topupxcel.com", tags: ["MERN", "E-Commerce", "Cloudinary"]
  },
  {
    name: "TutDocs",
    subtitle: "Study Material Sharing",
    date: "2022",
    description: "A portal for students to upload, browse, and download academic notes.", image: tutdocsImg, github: "https://github.com/dilip12git/tutdocs", live: "#", tags: ["Angular", "PHP", "MySQL"]
  },
  {
    name: "Ex2Next",
    subtitle: "Resale Marketplace",
    date: "2023",
    description: "A Resale platform with listing, browsing, and category filtering.", image: ex2nextImg, github: "https://github.com/dilip12git/EX2NEXT-resale-marketplace", live: "#", tags: ["MERN", "E-Commerce"]
  },
  {
    name: "MPlayer",
    subtitle: "Music Player App",
    date: "2024",
    description: "A modern music player with playlist management and audio visualization.",
    image: mplayerImg,
    github: "https://github.com/dilip12git/music_player",
    live: "#", tags: ["React-Native", "Audio", "Mobile"]
  },
  {
    name: "Unit Converter",
    subtitle: "Unit Converter App",
    date: "2025",
    description: "A modern unit converter with support for various measurement types.",
    image: converterImg,
    github: "https://github.com/dilip12git/converter_android_app",
    live: "#", tags: ["Java", "Android", "Android Studio"]
  },  

];

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)]">
      <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 lg:px-8 py-20 overflow-hidden">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-shrink-0">
          <div>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">Portfolio</p>
            <h2 className="text-4xl font-Ovo">Selected works</h2>
          </div>
          <a href="https://github.com/dilip12git" target="_blank" rel="noreferrer"
            className="hidden sm:flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition">
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Scrollable grid — overflows within the snap section */}
        <div className="overflow-y-auto flex-1 pr-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-4">
            {visible.map((project) => (
              <div key={project.name}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative overflow-hidden h-64">
                  <img src={project.image} alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-sm">{project.name}</h3>
                    <span className="text-xs text-[var(--text-muted)]">{project.date}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-1">{project.subtitle}</p>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-[10px] border border-[var(--border)] text-[var(--text-muted)]">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full bg-[var(--text)] text-[var(--bg)] hover:opacity-80 transition">
                      <Github size={11} /> Code
                    </a>
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-[var(--border)] hover:bg-[var(--bg)] transition">
                        <ExternalLink size={11} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && (
            <div className="flex justify-center mt-4 mb-2">
              <button onClick={() => setShowAll(true)}
                className="px-8 py-2.5 rounded-full border border-[var(--border)] text-sm hover:bg-theme transition">
                Show more projects
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
