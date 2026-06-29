import React, { useState, useEffect } from "react";
import { PERSONAL, ABOUT } from "../data/content";
import { scrollTo } from "../utils/helpers";
import ParticleCanvas from "../components/ParticleCanvas";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [typed, setTyped] = useState("");
  const fullRole = PERSONAL.role;

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(fullRole.slice(0, i + 1));
      i++;
      if (i >= fullRole.length) clearInterval(id);
    }, 80);
    return () => clearInterval(id);
  }, [fullRole]);

  const fadeStyle = (delay = 0, extra = {}) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    ...extra,
  });

  return (
    <section id="hero" style={{
      minHeight: "100vh", position: "relative",
      display: "flex", alignItems: "center",
      padding: "var(--nav-h) 60px 60px",
      overflow: "hidden",
    }}>
      <ParticleCanvas />

      {/* Forest atmosphere blobs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "8%", right: "3%",
          width: 560, height: 560, borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          background: "radial-gradient(circle, rgba(90,138,106,0.14) 0%, transparent 65%)",
          animation: "orbDrift 15s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "-3%",
          width: 400, height: 400, borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
          background: "radial-gradient(circle, rgba(31,56,40,0.6) 0%, transparent 70%)",
          animation: "orbDrift 20s ease-in-out infinite reverse",
        }} />
        {/* Subtle horizontal scan line */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(90,138,106,0.08), transparent)",
          animation: "scanline 8s linear infinite",
          pointerEvents: "none",
        }} />
      </div>

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }} className="hero-grid">

          {/* LEFT */}
          <div>
            {/* Status badge */}
            <div style={{ marginBottom: 30, ...fadeStyle(100) }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(90,138,106,0.08)",
                border: "1px solid rgba(90,138,106,0.25)",
                borderRadius: 50, padding: "7px 18px",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#4ade80", letterSpacing: 1.8 }}>
                  Available for Internship / Work
                </span>
              </div>
            </div>

            {/* Name — display font */}
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(54px,7.5vw,104px)",
              lineHeight: 0.95,
              marginBottom: 16,
              letterSpacing: -2,
              ...fadeStyle(180),
            }}>
              S.{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--green-neon) 0%, var(--sage) 50%, var(--amber) 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Ramya
              </em>
            </h1>

            {/* Typewriter */}
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "clamp(14px,1.8vw,20px)",
              color: "var(--green-neon)", marginBottom: 28,
              display: "flex", alignItems: "center", gap: 4,
              ...fadeStyle(350),
            }}>
              {typed}
              <span style={{ animation: "blink 1s infinite", color: "var(--amber)" }}>|</span>
            </div>

            {/* Subline */}
            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 16.5,
              color: "var(--text-dim)", lineHeight: 1.9, maxWidth: 520, marginBottom: 40,
              ...fadeStyle(450),
            }}>
              {PERSONAL.subline}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 34, ...fadeStyle(560) }}>
              <button onClick={() => scrollTo("projects")} style={{
                background: "linear-gradient(135deg, var(--green-bright), var(--green-mid))",
                color: "#D8E8D4", padding: "14px 34px", borderRadius: 10,
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, cursor: "none",
                boxShadow: "0 8px 32px rgba(90,138,106,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
                letterSpacing: 0.3,
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(90,138,106,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(90,138,106,0.3)"; }}
              >View Projects →</button>

              <button onClick={() => scrollTo("contact")} style={{
                background: "transparent", color: "var(--green-neon)",
                padding: "14px 34px", borderRadius: 10,
                border: "1.5px solid rgba(125,184,138,0.4)",
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, cursor: "none",
                transition: "background 0.25s, transform 0.2s, border-color 0.25s",
                letterSpacing: 0.3,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(125,184,138,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "rgba(125,184,138,0.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(125,184,138,0.4)"; }}
              >Contact Me</button>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: 12, ...fadeStyle(660) }}>
              {[
                {
                  href: PERSONAL.socials.linkedin, label: "LinkedIn",
                  icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                },
                {
                  href: PERSONAL.socials.github, label: "GitHub",
                  icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
                },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                  width: 42, height: 42, borderRadius: 10,
                  border: "1px solid var(--navy-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-dim)", transition: "all 0.25s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--green-bright)"; e.currentTarget.style.color = "var(--green-neon)"; e.currentTarget.style.background = "rgba(90,138,106,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--navy-border)"; e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
                >{icon}</a>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: "flex", gap: 40, marginTop: 48,
              paddingTop: 36, borderTop: "1px solid var(--navy-border)",
              flexWrap: "wrap", ...fadeStyle(760),
            }}>
              {ABOUT.facts.map((f, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32,
                    color: i === 0 ? "var(--green-neon)" : i === 1 ? "var(--amber)" : i === 2 ? "var(--coral)" : "var(--sage)",
                    lineHeight: 1,
                  }}>{f.number}</div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 9,
                    color: "var(--text-muted)", letterSpacing: 1.8,
                    textTransform: "uppercase", marginTop: 5,
                  }}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: photo */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
            ...fadeStyle(300, { transform: loaded ? "translateX(0)" : "translateX(44px)" }),
          }}>
            <div style={{ position: "relative" }}>
              {/* Organic spinning ring */}
              <div style={{
                position: "absolute", inset: -14, borderRadius: "50%",
                background: "conic-gradient(from 0deg, var(--green-neon), var(--amber), var(--coral), var(--green-bright), var(--green-neon))",
                animation: "spin 10s linear infinite", zIndex: 0,
              }} />
              <div style={{ position: "absolute", inset: -9, borderRadius: "50%", background: "var(--bg-main)", zIndex: 1 }} />
              <div style={{
                position: "relative", zIndex: 2,
                width: 260, height: 260, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--green-mid), var(--green-dark))",
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden", border: "4px solid var(--green-dark)",
              }}>
                <img src="/photo.jpg" alt="S. Ramya"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                />
                <div style={{ display: "none", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(90,138,106,0.45)" strokeWidth="1.2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-muted)", textAlign: "center", letterSpacing: 1 }}>
                    Add photo.jpg<br />to /public
                  </span>
                </div>
              </div>
            </div>

            {/* Floating info card */}
            <div style={{
              background: "var(--bg-card)", border: "1px solid var(--navy-border)",
              borderRadius: 12, padding: "14px 24px", textAlign: "center",
              boxShadow: "var(--shadow)", animation: "float 4s ease-in-out infinite",
            }}>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--green-neon)", marginBottom: 2 }}>
                B.Tech IT · 3rd Year
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: 1 }}>
                Salem, India
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.3 }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--green-bright), transparent)" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-dim)", letterSpacing: 3, textTransform: "uppercase" }}>scroll</span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
