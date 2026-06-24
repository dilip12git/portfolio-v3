import AndroidStudioSvg from "../assets/tools/android_studio_img.svg";
import MongoDbImg       from "../assets/tools/mongodb_img.png";
import VsCodeImg from "../assets/tools/vscode_img.svg";
import LargeImg from "../assets/dilip-large-img.jpeg";



export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-card)]">
      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 lg:px-8 py-20">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2">Introduction</p>
          <h2 className="text-4xl font-Ovo">About me</h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-15">

          {/* LEFT — bio */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
              I'm <strong className="text-[var(--text)]">Dilip Kumar Teli</strong>, I'm a Full Stack Developer passionate about building intelligent, scalable and user-centric digital products. With experience spanning web development, mobile applications and AI-powered solutions, I enjoy transforming complex ideas into seamless, impactful experiences.
             </p> <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
              My expertise includes developing responsive web applications, cross-platform mobile apps and AI-driven systems using modern technologies such as React, React Native, Node.js, Express.js, MongoDB, FastAPI, LangChain and Agentic AI frameworks. I focus on creating high-performance, maintainable and accessible solutions that balance technical excellence with exceptional user experience.
               </p> <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
              Whether I'm architecting full-stack platforms, designing intuitive user interfaces or integrating AI capabilities into real-world applications, my goal is to build innovative products that solve meaningful problems and deliver measurable value.
            </p>

    
           
          </div>

          {/* RIGHT — tools */}
          <div className=" flex flex-col gap-6">
            <img src={LargeImg} alt="Dilip Kumar" className="rounded-2xl border border-[var(--border)] object-cover aspect-square w-xs " />
      

          </div>

         
          </div>
        </div>
      </div>
    
  );
}
