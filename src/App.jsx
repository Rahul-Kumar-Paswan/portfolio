import AnimatedStarsBG from "./components/AnimatedStarsBG";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <AnimatedStarsBG />
      <div className="min-h-screen flex flex-col justify-between relative z-10 bg-transparent text-black dark:text-white">
        <Header />
        <main className="flex-1">
          <Hero />
          <Skills />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
