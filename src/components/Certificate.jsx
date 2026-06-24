// src/components/Certifications.jsx

import { FileText, Notebook } from "lucide-react";

const internships = [
    {
        title: "Java Full Stack Development",
        org: "EduSkill-AICTE Virtual Internship",
        year: "17 May 2025",
        desc: "Learned Java Full Stack development with Spring Boot, REST APIs, and database integration through hands-on projects.",
        link: "Dilip_java_certificate.pdf",
    },
    {
        title: "Full Stack Web Development Intern",
        org: "Cognifyz Technologies",
        year: "Sep - Oct 2024",
        desc: "Built responsive web applications and REST APIs while working with modern frontend and backend technologies.",
        link: "Dilip_web_certificate.pdf",
    },
    {
        title: "Introduction To Internet Of Things",
        org: "SWAYAM - NPTEL Online Certification",
        year: "Jan-Apr 2025",
        desc: "Explored IoT fundamentals, smart devices, sensors, communication protocols, and real-world IoT applications.",
        link: "Dilip_iot_certificate.pdf",
    },
];

function CertCard({ logo, emoji, title, org, year, desc, tags, link }) {
    return (
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1 transition-transform cursor-default">
            <div className="flex items-start justify-between gap-2">
                
                <span className="text-[11px] text-[var(--text-muted)] border border-[var(--border)] rounded-full px-3 py-0.5 whitespace-nowrap">
                    {year}
                </span>
            </div>
            <div>
                <p className="text-sm font-medium leading-snug">{title}</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{org}</p>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</p>
           
            <a href={link} download target="_blank" rel="noreferrer"
                className="self-start flex items-center gap-1 text-[11px] text-[var(--bg)] border border-[var(--border)] rounded-full px-3 py-1 bg-[var(--text)] hover:opacity-80 transition-colors">
                <FileText size={12} />
               
                <span> View Certificate</span>
            </a>
        </div>
    );
}

export default function Certifications() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--bg)]">
            <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-8 py-20">

                <div className="mb-10">
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">Credentials</p>
                    <h2 className="text-4xl font-Ovo">My Certifications</h2>
                </div>

                <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-4">Internships &amp; Programs</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {internships.map((c) => <CertCard key={c.title} {...c} />)}
                </div>
            </div>
        </div>
    );
}