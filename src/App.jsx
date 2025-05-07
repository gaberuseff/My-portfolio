import {Analytics} from "@vercel/analytics/react";
import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <BlurBackground />
      <Navbar />

      <main className="antialiased overflow-hidden max-w-7xl mx-auto">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contacts />
      </main>
      <Analytics />
    </>
  );
}

export default App;
