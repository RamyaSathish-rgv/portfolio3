import React, { useState, useEffect } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollTo } from "../utils/helpers";
import { PERSONAL } from "../data/content";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

const LINKS = [
  { id: "about",          label: "About" },
  { id: "skills",         label: "Skills" },
  { id: "experience",     label: "Experience" },
  { id: "projects",       label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "contact",        label: "Contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark } = useTheme();

  const active = useActiveSection([
    "hero","about","skills","experience","projects","certifications","contact",
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const handleNav = (id) => { scrollTo(id); setMenuOpen(false); };

  const navBg = scrolled
    ? isDark ? "rgba(17,28,20,0.96)" : "rgba(240,237,230,0.96)"
    : "transparent";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: "var(--nav-h)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 60px",
        background: navBg,
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--navy-border)" : "none",
        transition: "all 0.4s ease",
      }}>
        {/* Logo — display font */}
        <button onClick={() => handleNav("hero")} style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic",
          fontSize: 22, color: "var(--green-neon)", cursor: "none", letterSpacing: -0.5,
        }}>
          Ramya<span style={{ color: "var(--amber)", fontStyle: "normal" }}>.</span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 26 }} className="desk-nav">
          {LINKS.map(({ id, label }) => (
            <button key={id} onClick={() => handleNav(id)} style={{
              fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 13.5,
              color: active === id ? "var(--green-neon)" : "var(--text-dim)",
              cursor: "none", position: "relative", padding: "4px 0",
              transition: "color 0.25s",
              letterSpacing: 0.2,
            }}>
              {label}
              {active === id && (
                <span style={{
                  position: "absolute", bottom: -2, left: 0, right: 0,
                  height: 2, borderRadius: 1,
                  background: "linear-gradient(90deg, var(--green-neon), var(--amber))",
                }} />
              )}
            </button>
          ))}
          <ThemeToggle />
          <a href={PERSONAL.socials.github} target="_blank" rel="noreferrer" style={{
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13,
            background: "linear-gradient(135deg, var(--green-bright), var(--green-mid))",
            color: "#D8E8D4", padding: "9px 20px", borderRadius: 8,
            transition: "opacity 0.2s, transform 0.2s",
            letterSpacing: 0.2,
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity="0.85"; e.currentTarget.style.transform="translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateY(0)"; }}
          >GitHub ↗</a>
        </div>

        {/* Mobile */}
        <div style={{ display: "none", alignItems: "center", gap: 12 }} className="mob-nav">
          <ThemeToggle />
          <button onClick={() => setMenuOpen(o => !o)} style={{
            background: "none", border: "1.5px solid var(--navy-border)",
            borderRadius: 8, padding: "8px 10px", cursor: "none",
            display: "flex", flexDirection: "column", gap: 5,
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: 20, height: 2,
                background: "var(--green-neon)", borderRadius: 1,
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? i === 0 ? "translateY(7px) rotate(45deg)"
                  : i === 2 ? "translateY(-7px) rotate(-45deg)" : "scaleX(0)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Glowing scroll progress bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0,
          width: `${scrollProgress}%`, height: 3,
          background: "linear-gradient(90deg, var(--green-neon), var(--amber), var(--coral))",
          boxShadow: "0 0 8px var(--green-neon), 0 0 16px var(--amber)",
          transition: "width 0.1s ease-out",
        }} />
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: "fixed", top: "var(--nav-h)", left: 0, right: 0, zIndex: 999,
        background: isDark ? "rgba(17,28,20,0.98)" : "rgba(240,237,230,0.98)",
        backdropFilter: "blur(24px)",
        borderBottom: menuOpen ? "1px solid var(--navy-border)" : "none",
        maxHeight: menuOpen ? "520px" : "0",
        overflow: "hidden",
        transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div style={{ padding: "24px 28px 32px", display: "flex", flexDirection: "column", gap: 4 }}>
          {LINKS.map(({ id, label }, i) => (
            <button key={id} onClick={() => handleNav(id)} style={{
              textAlign: "left", fontFamily: "var(--font-display)",
              fontWeight: 600, fontSize: 20,
              color: active === id ? "var(--green-neon)" : "var(--text-dim)",
              cursor: "none", padding: "13px 0",
              borderBottom: "1px solid var(--navy-border)",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
              transition: `color 0.2s, opacity 0.35s ease ${i*50}ms, transform 0.35s ease ${i*50}ms`,
            }}>
              <span style={{ color:"var(--green-bright)", fontFamily:"var(--font-mono)", fontSize:10, marginRight:14 }}>
                0{i+1}.
              </span>
              {label}
            </button>
          ))}
          <a href={PERSONAL.socials.github} target="_blank" rel="noreferrer" style={{
            marginTop: 18, textAlign: "center",
            background: "linear-gradient(135deg, var(--green-bright), var(--green-mid))",
            color: "#D8E8D4", padding: "14px", borderRadius: 10,
            fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
          }}>GitHub ↗</a>
        </div>
      </div>

      <style>{`
        @media (min-width: 901px) { .desk-nav{display:flex!important;} .mob-nav{display:none!important;} }
        @media (max-width: 900px)  { .desk-nav{display:none!important;} .mob-nav{display:flex!important;} nav{padding:0 24px!important;} }
      `}</style>
    </>
  );
}
