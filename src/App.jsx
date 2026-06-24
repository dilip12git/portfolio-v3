import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certificate";

function App() {
  return (
    <div className="font-Outfit bg-theme text-theme">
      <Navbar />
      {/* Snap scroll container */}
      <main className="h-screen overflow-y-scroll snap-container">
        <section className="snap-section" id="hero"><Hero /></section>
        <section className="snap-section" id="about"><About /></section>
        <section className="snap-section" id="skills"><Skills /></section>
        <section className="snap-section" id="experience"><Experience /></section>
        <section className="snap-section" id="work"><Work /></section>
        <section className="snap-section" id="education"><Education /></section>
        <section className="snap-section" id="certifications"><Certifications /></section>
        <section className="snap-section" id="services"><Services /></section>
        <section className="snap-section" id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
