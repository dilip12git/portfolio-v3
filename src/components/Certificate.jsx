import { FileText, Award, Download } from "lucide-react";

const internships = [
  {
    title: "Java Full Stack Development",
    org: "EduSkill - AICTE Virtual Internship",
    year: "May 2025",
    desc: "Learned Java Full Stack development with Spring Boot, REST APIs, and database integration through hands-on projects.",
    link: "/Dilip_java_certificate.pdf",
    badge: "Government / AICTE",
  },
  {
    title: "Full Stack Web Development Intern",
    org: "Cognifyz Technologies",
    year: "Sep – Oct 2024",
    desc: "Built responsive web applications and REST APIs while working with modern frontend and backend technologies.",
    link: "/Dilip_web_certificate.pdf",
    badge: "Industry Internship",
  },
  {
    title: "Introduction To Internet Of Things",
    org: "SWAYAM - NPTEL Online Certification",
    year: "Jan – Apr 2025",
    desc: "Explored IoT fundamentals, smart devices, sensors, communication protocols, and real-world IoT applications.",
    link: "/Dilip_iot_certificate.pdf",
    badge: "NPTEL Certified",
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-theme py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium flex items-center gap-2">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" /> */}
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo tracking-tight text-[var(--text)]">
            My Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {internships.map((c) => (
            <div
              key={c.title}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-[var(--border)] hover:border-[var(--border-hover)] transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] group-hover:scale-105 transition-transform">
                    <Award size={19} />
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)]">
                    {c.year}
                  </span>
                </div>

                <span className="inline-block text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)] mb-2.5">
                  {c.badge}
                </span>

                <h3 className="text-base font-semibold text-[var(--text)] leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs font-medium text-[var(--text-muted)] mt-1 mb-3">
                  {c.org}
                </p>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-[var(--border)] flex items-center justify-between gap-2.5">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-4 rounded-xl bg-[var(--text)] text-[var(--bg)] hover:opacity-90 active:scale-95 transition-all"
                >
                  <FileText size={13} />
                  <span>View Certificate</span>
                </a>

                <a
                  href={c.link}
                  download
                  title="Direct Download PDF"
                  aria-label="Direct Download Certificate PDF"
                  className="w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] transition active:scale-95"
                >
                  <Download size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}