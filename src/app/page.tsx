import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import CurrentFocus from "@/components/CurrentFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-grid relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CodingProfiles />
      <Projects />
      <Achievements />
      <CurrentFocus />
      <Contact />
      <Footer />
    </main>
  );
}
