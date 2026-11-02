import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Clock,
  CodeXml,
  Send,
  Check,
  Copy,
  ArrowUp,
} from "lucide-react";

function getISTTime() {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

function LiveClock() {
  const [time, setTime] = useState(getISTTime);
  useEffect(() => {
    const id = setInterval(() => setTime(getISTTime()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums font-mono font-medium">{time}</span>;
}

const socials = [
  { href: "https://github.com/dilip12git", Icon: Github, label: "GitHub" },
  { href: "https://leetcode.com/u/diliplitcode/", Icon: CodeXml, label: "LeetCode" },
  { href: "https://www.linkedin.com/in/dilipgpta/", Icon: Linkedin, label: "LinkedIn" },
  // { href: "https://instagram.com/dilipgupta_4u", Icon: Instagram, label: "Instagram" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCopy = () => {
    navigator.clipboard.writeText("dilipkumarteli06@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const body = `Hi Dilip,%0A%0AMy name is ${encodeURIComponent(
      name
    )}.%0A%0A${encodeURIComponent(message)}%0A%0AReply to: ${encodeURIComponent(email)}`;
    window.location.href = `mailto:dilipkumarteli06@gmail.com?subject=Portfolio contact from ${encodeURIComponent(
      name
    )}&body=${body}`;
    setSent(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col bg-theme pt-14 lg:pt-20 pb-2 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 font-medium flex items-center gap-2">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" /> */}
            Get in touch
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-Ovo tracking-tight text-[var(--text)] leading-tight">
            Let's build something <br />
            <span className="italic font-normal text-[var(--text-muted)]">together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Contact Cards & Social Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-3">
              {/* Email Card with Copy Action */}
              <div className="glass-card rounded-3xl p-4 sm:p-5 border border-[var(--border)] flex items-center justify-between group hover:border-[var(--border-hover)]">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-[var(--text-muted)] font-medium">Direct Email</p>
                    <a
                      href="mailto:dilipkumarteli06@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-[var(--text)] hover:underline truncate block"
                    >
                      dilipkumarteli06@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)] hover:text-[var(--text)] transition ml-2 flex-shrink-0 active:scale-95"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={14} className="text-[var(--text)]" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-card rounded-3xl p-4 sm:p-5 border border-[var(--border)] flex items-center gap-3.5 hover:border-[var(--border-hover)]">
                <div className="w-11 h-11 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] flex-shrink-0">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-[11px] text-[var(--text-muted)] font-medium">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--text)]">
                    Chennai, India
                  </p>
                </div>
              </div>

              {/* Timezone Card */}
              <div className="glass-card rounded-3xl p-4 sm:p-5 border border-[var(--border)] flex items-center gap-3.5 hover:border-[var(--border-hover)]">
                <div className="w-11 h-11 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] flex-shrink-0">
                  <Clock size={17} />
                </div>
                <div>
                  <p className="text-[11px] text-[var(--text-muted)] font-medium">Local Time (IST)</p>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--text)] flex items-center gap-2">
                    <LiveClock />
                    <span className="w-2 h-2 rounded-full bg-[var(--text)] animate-pulse" />
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3 font-medium">
                Connect with me
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-xs font-medium text-[var(--text)] hover:border-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] transition hover:-translate-y-0.5"
                  >
                    <social.Icon size={14} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Modern Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[var(--border)]">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4 animate-scaleIn">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text)]">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-Ovo text-[var(--text)]">Message Ready!</h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-sm">
                    Your default email client should have opened with your draft. Thank you for reaching out — I'll respond promptly!
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-xs font-semibold text-[var(--text)] hover:underline"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-[var(--text-muted)]">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Dilip Kumar"
                        value={form.name}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-xs sm:text-sm text-[var(--text)] outline-none focus:border-[var(--text)] transition-colors placeholder:text-[var(--text-muted)]/50"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-[var(--text-muted)]">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-xs sm:text-sm text-[var(--text)] outline-none focus:border-[var(--text)] transition-colors placeholder:text-[var(--text-muted)]/50"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[var(--text-muted)]">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, or open role…"
                      value={form.message}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-xs sm:text-sm text-[var(--text)] outline-none focus:border-[var(--text)] transition-colors resize-none placeholder:text-[var(--text-muted)]/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--text)] text-[var(--bg)] text-xs sm:text-sm font-semibold hover:opacity-90 active:scale-95 transition-all mt-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Footer Bar */}
      <footer className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8 pt-8 pb-3 border-t border-[var(--border)] mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
        <div>
          <p>© {new Date().getFullYear()} Dilip Kumar Teli. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)] animate-pulse" />
            Designed &amp; Engineered with Care
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 p-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:text-[var(--text)] hover:border-[var(--text-muted)] transition active:scale-95"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </footer>
    </div>
  );
}