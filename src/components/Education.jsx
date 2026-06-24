
const degrees = [
    {
        degree: "B.Tech — Computer Science & Engineering",
        school: "Bharath University, Chennai",
        period: "2022 – 2026",
        desc: "Core focus on data structures, algorithms, software engineering, and networks. Actively built production projects alongside coursework.",
        tags: ["DSA", "OS", "DBMS", "Networks", "Software Eng."],
    },
    {
        degree: "Higher Secondary — Computer Science",
        school: "Shree Sunsanskrit Secondary School, Siddharathanagar, Nepal",
        period: "2020 – 2022",
        desc: "Physics, Chemistry, Mathematics and Computer Science stream. Developed strong analytical thinking and problem-solving foundations.",
        tags: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
];

export default function Education() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--bg-card)]">
            <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-8 py-20">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">Background</p>
                    <h2 className="text-4xl font-Ovo">Education</h2>
                </div>


                    {/* LEFT — timeline */}
                    <div className="flex-1 flex flex-col gap-0">
                        {degrees.map((item, i) => (
                            <div key={i} className="flex gap-6 relative">
                                {/* Line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--text)] mt-1 flex-shrink-0" />
                                    {i < degrees.length - 1 && (
                                        <div className="w-px flex-1 bg-[var(--border)] mt-1" />
                                    )}
                                </div>
                                {/* Content */}
                                <div className="pb-10">
                                    <p className="text-xs text-[var(--text-muted)] mb-1">{item.period}</p>
                                    <p className="font-semibold text-sm">{item.degree}</p>
                                    <p className="text-xs text-[var(--text-muted)] mb-2">{item.school}</p>
                                    <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-2xl">{item.desc}</p>
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {item.tags.map((t) => (
                                            <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] border border-[var(--border)] text-[var(--text-muted)]">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                   
            </div>
        </div>
    );
}
