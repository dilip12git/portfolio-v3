import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail, MapPin, Clock,CodeXml } from "lucide-react";

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time}</span>;
}

const socials = [
  { href: "https://github.com/dilip12git", Icon: Github, label: "GitHub" },
  { href: "https://leetcode.com/u/diliplitcode/", Icon: CodeXml, label: "LeetCode" },
  { href: "https://www.linkedin.com/in/dilipgpta/", Icon: Linkedin,  label: "LinkedIn"  },
  { href: "https://instagram.com/dilipgupta_4u",    Icon: Instagram, label: "Instagram" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const body = `Hi Dilip,%0A%0AMy name is ${encodeURIComponent(name)}.%0A%0A${encodeURIComponent(message)}%0A%0AReply to: ${encodeURIComponent(email)}`;
    window.location.href = `mailto:dilipkumarteli06@gmail.com?subject=Portfolio contact from ${encodeURIComponent(name)}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)]">
      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-8 py-20">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-Ovo">Let's build something<br />
            <span className="italic text-[var(--text-muted)]">together.</span>
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-12">

          {/* LEFT — info */}
          <div className="lg:w-80 flex flex-col gap-6">
            {/* Cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3">
                <Mail size={15} className="text-[var(--text-muted)]" />
                <a href="mailto:dilipkumarteli06@gmail.com" className="text-sm hover:underline">dilipkumarteli06@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3">
                <MapPin size={15} className="text-[var(--text-muted)]" />
                <span className="text-sm">Chennai, India</span>
              </div>
              <div className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-4 py-3">
                <Clock size={15} className="text-[var(--text-muted)]" />
                <span className="text-sm"><LiveClock /> IST</span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ href, Icon, label }) => (
                  <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center hover:bg-[var(--bg)] transition">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer brand */}
            <div className="mt-auto pt-6 border-t border-[var(--border)]">
              <p className="text-xs text-[var(--text-muted)]">© {new Date().getFullYear()} Dilip Kumar Teli</p>
              <p className="text-xs text-[var(--text-muted)]">All rights reserved.</p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="flex-1">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <span className="text-5xl">🎉</span>
                <p className="text-xl font-Ovo">Message sent!</p>
                <p className="text-sm text-[var(--text-muted)]">Your email client should have opened. I'll get back to you soon.</p>
                <button onClick={() => setSent(false)}
                  className="mt-2 text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition underline">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-[var(--text-muted)]">Your name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Dilip Kumar"
                      value={form.name}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-sm outline-none focus:border-[var(--text)] transition placeholder:text-[var(--border)]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-[var(--text-muted)]">Email address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-sm outline-none focus:border-[var(--text)] transition placeholder:text-[var(--border)]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[var(--text-muted)]">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project…"
                    value={form.message}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-sm outline-none focus:border-[var(--text)] transition resize-none placeholder:text-[var(--border)]"
                  />
                </div>
                <button
                  type="submit"
                  className="self-start px-8 py-3 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:opacity-80 transition"
                >
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
