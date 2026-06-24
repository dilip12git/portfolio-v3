// src/components/Skills.jsx

const frontendSkills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Angular JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
];

const backendSkills = [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const aiSkills = [
    { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", fallback: "🔗" },
    { name: "LangGraph", fallback: "🕸" },
    { name: "RAG", fallback: "🔍" },
];

const databaseSkills = [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const otherLanguages = [
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];

const tools = [
    { name: "GitHub", icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg", invert: true },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Cloudinary", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original.svg", fallback: "☁️" },
];

function SkillCard({ name, icon, fallback, invert }) {
    return (
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-3 flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform cursor-default">
            <div className="w-9 h-9 flex items-center justify-center">
                {icon
                    ? <img src={icon} alt={name} className={`w-9 h-9 object-contain dark:${invert ? "invert" : ""}`} />
                    : <span className="text-2xl">{fallback}</span>}
            </div>
            <span className="text-[11px] text-[var(--text-muted)] text-center leading-tight">{name}</span>
        </div>
    );
}

function Section({ label, skills }) {
    return (
        <>
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3">{label}</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-2 mb-6">
                {skills.map((s) => <SkillCard key={s.name} {...s} />)}
            </div>
            <div className="h-px bg-[var(--border)] mb-6" />
        </>
    );
}

export default function Skills() {
    return (
        <div className="flex flex-col min-h-screen bg-theme">
            <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-8 py-20">
                <div className="mb-10">
                    <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">What I know</p>
                    <h2 className="text-4xl font-Ovo">Skills</h2>
                </div>

                <Section label="Frontend" skills={frontendSkills} />
                <Section label="Backend" skills={backendSkills} />
                <Section label="Agentic AI" skills={aiSkills} />
                <Section label="Database" skills={databaseSkills} />
                <Section label="Other Languages" skills={otherLanguages} />

                <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3">Tools</p>
                <div className="flex flex-wrap gap-2">
                    {tools.map(({ name, icon, invert }) => (
                        <div key={name} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--text-muted)] transition-colors">
                            <img src={icon} alt={name} className={`w-4 h-4 object-contain dark:${invert ? "invert" : ""}`} />
                            <span className="text-xs text-[var(--text-muted)]">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}