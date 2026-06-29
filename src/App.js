import React, { useState } from "react";
import "./styles/global.css";

import { ThemeProvider }  from "./contexts/ThemeContext";
import PageLoader         from "./components/PageLoader";
import Cursor             from "./components/Cursor";
import GridBackground     from "./components/GridBackground";
import Navbar             from "./components/Navbar";
import TechTicker         from "./components/TechTicker";
import Footer             from "./components/Footer";

import Hero           from "./sections/Hero";
import About          from "./sections/About";
import Skills         from "./sections/Skills";
import Experience     from "./sections/Experience";
import Projects       from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact        from "./sections/Contact";

function PortfolioApp() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      {/* 📜 Smooth page loader */}
      <PageLoader onComplete={() => setLoaderDone(true)} />

      {/* Custom cursor */}
      <Cursor />

      {/* Animated dot grid background */}
      <GridBackground />

      {/* 🌗 Sticky nav — dark/light toggle + 📱 mobile hamburger */}
      <Navbar />

      {/* Page content — fade in after loader */}
      <main style={{
        opacity: loaderDone ? 1 : 0,
        transition: "opacity 0.6s ease 0.2s",
      }}>
        {/* ✨ Hero with particle/constellation background */}
        <Hero />

        <TechTicker />

        <About />

        {/* 📊 Skills with animated progress bars */}
        <Skills />

        <Experience />

        {/* 🎯 Projects with interactive filter tabs */}
        <Projects />

        {/* 🏆 Certifications & Achievements */}
        <Certifications />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
