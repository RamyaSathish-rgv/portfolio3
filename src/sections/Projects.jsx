import React, { useState, useEffect, useRef, useCallback } from "react";
import { PROJECTS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PROJECT_PHOTOS = {
  "01": ["/projects/spam1.jpg","/projects/spam2.jpg","/projects/spam3.jpg"],
  "02": ["/projects/food1.jpg","/projects/food2.jpg","/projects/food3.jpg"],
  "03": ["/projects/currency1.jpg","/projects/currency2.jpg","/projects/currency3.jpg"],
  "04": ["/projects/movie1.jpg","/projects/movie2.jpg","/projects/movie3.jpg"],
  "05": ["/projects/Moviee1.jpg","/projects/Moviee2.jpg","/projects/Moviee3.jpg"],
  "06": ["/projects/tour1.jpg","/projects/tour2.jpg","/projects/tour3.jpg"],
  "07": ["/projects/blood1.jpg","/projects/blood2.jpg","/projects/blood3.jpg"],
    "08": ["/projects/w1.jpeg","/projects/w2.jpeg","/projects/w3.jpeg"],
        "09": ["/projects/t1.jfif","/projects/t2.jfif","/projects/t3.jfif"]




};

const EMOJI_MAP = { "01": "🤖", "02": "🍔", "03": "💱", "04": "🎬" };
const FILTERS   = ["All", "ML","Frontend"];

function PhotoSlider({ projectId, color, isHovered, title }) {
  const photos  = PROJECT_PHOTOS[projectId] || [];
  const [current, setCurrent]   = useState(0);
  const [prev,    setPrev]      = useState(null);
  const [fading,  setFading]    = useState(false);
  const [errors,  setErrors]    = useState({});
  const timerRef = useRef(null);

  const goTo = useCallback((next) => {
    if (next === current || fading) return;
    setPrev(current); setFading(true);
    setTimeout(() => { setCurrent(next); setPrev(null); setFading(false); }, 500);
  }, [current, fading]);

  useEffect(() => {
    if (isHovered && photos.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrent(c => {
          const next = (c + 1) % photos.length;
          setPrev(c); setFading(true);
          setTimeout(() => { setPrev(null); setFading(false); }, 500);
          return next;
        });
      }, 2200);
    }
    return () => clearInterval(timerRef.current);
  }, [isHovered, photos.length]);

  const hasImg = (idx) => photos[idx] && !errors[idx];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: `linear-gradient(135deg, ${color}18, ${color}06)`, overflow: "hidden" }}>
      {prev !== null && hasImg(prev) && (
        <img src={photos[prev]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: fading ? 0 : 1, transition: "opacity 0.5s ease", pointerEvents: "none" }} />
      )}
      {hasImg(current) ? (
        <img src={photos[current]} alt={title} onError={() => setErrors(e => ({ ...e, [current]: true }))} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: fading ? 0 : 1, transition: "opacity 0.5s ease, transform 6s ease", transform: isHovered ? "scale(1.07)" : "scale(1)" }} />
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, background: `linear-gradient(135deg, ${color}15, ${color}05)` }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <span style={{ fontSize: 52, zIndex: 1, filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.3))", transition: "transform 0.4s", transform: isHovered ? "scale(1.18) rotate(-6deg)" : "scale(1)" }}>{EMOJI_MAP[projectId]}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, zIndex: 1, color: color, letterSpacing: 1.5, textTransform: "uppercase", opacity: 0.65 }}>Add images to /public/projects/</span>
        </div>
      )}
      {photos.length > 1 && (
        <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, zIndex: 10 }}>
          {photos.map((_, i) => (
            <button key={i} onClick={e => { e.stopPropagation(); goTo(i); }} style={{ width: i === current ? 20 : 7, height: 7, borderRadius: 4, border: "none", background: i === current ? color : "rgba(255,255,255,0.35)", cursor: "none", padding: 0, transition: "width 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.3s", boxShadow: i === current ? `0 0 8px ${color}` : "none" }} />
          ))}
        </div>
      )}
      {photos.length > 1 && (
        <div style={{ position: "absolute", top: 12, right: 12, zIndex: 10, fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(255,255,255,0.8)", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", padding: "3px 9px", borderRadius: 20, letterSpacing: 1 }}>
          {current + 1} / {photos.length}
        </div>
      )}
      {photos.length > 1 && isHovered && (
        <>
          <button onClick={e => { e.stopPropagation(); goTo((current - 1 + photos.length) % photos.length); }} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: `1px solid ${color}60`, color: "#fff", fontSize: 14, cursor: "none", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = `${color}80`} onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.55)"}>‹</button>
          <button onClick={e => { e.stopPropagation(); goTo((current + 1) % photos.length); }} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: `1px solid ${color}60`, color: "#fff", fontSize: 14, cursor: "none", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = `${color}80`} onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.55)"}>›</button>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, index, isVisible, onSelect }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 18, overflow: "hidden",
        background: hovered ? `linear-gradient(160deg, ${project.color}0e, var(--bg-card))` : "var(--bg-card)",
        border: `1px solid ${hovered ? project.color + "55" : "var(--navy-border)"}`,
        cursor: "none",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.75s ease ${index * 0.14}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${index * 0.14}s, background 0.4s, border-color 0.35s, box-shadow 0.4s`,
        boxShadow: hovered ? `0 24px 64px ${project.color}1c, 0 0 0 1px ${project.color}18` : "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ height: 220, position: "relative" }}>
        <PhotoSlider projectId={project.id} color={project.color} isHovered={hovered} title={project.title} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 70, background: `linear-gradient(to top, var(--bg-card), transparent)`, pointerEvents: "none", zIndex: 5 }} />
        <span style={{ position: "absolute", top: 12, left: 12, zIndex: 8, fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: project.color, background: "rgba(13,21,16,0.85)", backdropFilter: "blur(10px)", border: `1px solid ${project.color}45`, padding: "5px 12px", borderRadius: 20 }}>
          {project.category}
        </span>
      </div>

      <div style={{ padding: "22px 24px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: -0.3, color: hovered ? project.color : "var(--text-main)", transition: "color 0.3s", lineHeight: 1.2 }}>
            {project.title}
          </h3>
          <button onClick={e => { e.stopPropagation(); onSelect(); }} style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, border: `1.5px solid ${hovered ? project.color : "var(--navy-border)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: hovered ? project.color : "var(--text-muted)", fontSize: 16, transform: hovered ? "rotate(-45deg)" : "rotate(0deg)", transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)", background: hovered ? `${project.color}12` : "transparent", cursor: "none" }}>
            →
          </button>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 14, color: "var(--text-dim)", lineHeight: 1.75, marginBottom: 18 }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 22 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: 0.8, textTransform: "uppercase", color: project.color, background: `${project.color}10`, border: `1px solid ${project.color}28`, padding: "4px 10px", borderRadius: 5 }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ height: 1, marginBottom: 20, background: `linear-gradient(90deg, ${project.color}28, transparent)` }} />
        <div style={{ display: "flex", gap: 10 }}>
          <a href={project.github || "#"} target="_blank" rel="noreferrer" onClick={e => { e.stopPropagation(); if (project.github === "#") e.preventDefault(); }} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--text-dim)", background: "var(--bg-main)", border: "1px solid var(--navy-border)", borderRadius: 10, padding: "11px", transition: "border-color 0.25s, color 0.25s, transform 0.2s, background 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = project.color; e.currentTarget.style.color = project.color; e.currentTarget.style.background = `${project.color}0c`; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--navy-border)"; e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.background = "var(--bg-main)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            GitHub
          </a>
          <a href={project.demo || "#"} target="_blank" rel="noreferrer" onClick={e => { e.stopPropagation(); if (project.demo === "#") e.preventDefault(); }} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "#0D1510", background: project.color, border: `1px solid ${project.color}`, borderRadius: 10, padding: "11px", transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s", boxShadow: `0 4px 16px ${project.color}40` }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${project.color}60`; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 16px ${project.color}40`; }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = PROJECTS.filter(p => {
    if (activeFilter === "All")        return true;
    if (activeFilter === "ML")         return p.category === "Machine Learning";
    if (activeFilter === "Full Stack") return p.category === "Full Stack";
    if (activeFilter === "Frontend")   return p.category === "Frontend";
    return true;
  });

  const getCount = (f) => PROJECTS.filter(p =>
    f === "ML"         ? p.category === "Machine Learning" :
    f === "Full Stack" ? p.category === "Full Stack" :
    p.category === "Frontend"
  ).length;

  return (
    <section id="projects" ref={ref} style={{
      padding: "130px 60px",
      background: "var(--bg-surface)",
      position: "relative", zIndex: 1, overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", left: "50%", top: "40%",
        width: 700, height: 700, borderRadius: "50%",
        transform: "translate(-50%,-50%)",
        background: "radial-gradient(circle, rgba(90,138,106,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 4, color: "var(--green-neon)", textTransform: "uppercase", marginBottom: 14 }}>
            — 05 / 07 —
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(42px,5.5vw,68px)", letterSpacing: -1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}>
            My{" "}
            <em style={{ fontStyle: "italic", background: "linear-gradient(135deg, var(--green-neon), var(--amber))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</em>
          </h2>
          <div style={{ width: 60, height: 2, background: "linear-gradient(90deg,var(--green-bright),var(--amber))", borderRadius: 2, margin: "18px auto 20px" }} />
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 15, color: "var(--text-muted)" }}>
            Hover a card — photos cycle automatically ✦ Click arrows to browse
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 44, flexWrap: "wrap" }}>
          {FILTERS.map(f => {
            const active = activeFilter === f;
            return (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 1.8, textTransform: "uppercase",
                padding: "10px 22px", borderRadius: 50,
                border: `1.5px solid ${active ? "var(--green-bright)" : "var(--navy-border)"}`,
                background: active ? "linear-gradient(135deg, var(--green-bright), var(--green-mid))" : "transparent",
                color: active ? "#D8E8D4" : "var(--text-dim)",
                cursor: "none",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: active ? "0 4px 20px rgba(90,138,106,0.35)" : "none",
                transform: active ? "scale(1.05)" : "scale(1)",
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = "var(--green-neon)"; e.currentTarget.style.color = "var(--green-neon)"; }}}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = "var(--navy-border)"; e.currentTarget.style.color = "var(--text-dim)"; }}}
              >
                {f}
                {f !== "All" && <span style={{ marginLeft: 7, opacity: 0.65, fontFamily: "var(--font-body)", fontSize: 11 }}>({getCount(f)})</span>}
              </button>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: 1.5 }}>
            SHOWING {filtered.length} / {PROJECTS.length} PROJECTS
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: 28 }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isVisible={isVisible} onSelect={() => setSelectedProject(project)} />
          ))}
        </div>

        {selectedProject && (
          <div style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(6,15,28,0.85)", backdropFilter: "blur(18px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, animation: "fadeIn 0.3s",
          }} onClick={() => setSelectedProject(null)}>
            <div style={{
              background: "var(--bg-card)",
              border: `1.5px solid ${selectedProject.color}45`,
              borderRadius: 20, width: "100%", maxWidth: 840,
              maxHeight: "90vh", overflowY: "auto",
              position: "relative", padding: "40px",
              boxShadow: `0 24px 80px ${selectedProject.color}1e`,
              animation: "fadeUp 0.4s cubic-bezier(0.16,1,0.3,1)",
              cursor: "auto",
            }} onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} style={{
                position: "absolute", top: 20, right: 24,
                fontSize: 28, color: "var(--text-dim)", cursor: "none",
                background: "none", border: "none",
                transition: "color 0.2s",
              }} onMouseEnter={e => e.currentTarget.style.color="var(--green-neon)"}
                 onMouseLeave={e => e.currentTarget.style.color="var(--text-dim)"}>
                &times;
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 2,
                  textTransform: "uppercase", color: selectedProject.color,
                  background: `${selectedProject.color}12`, border: `1px solid ${selectedProject.color}28`,
                  padding: "4px 12px", borderRadius: 20, display: "inline-block"
                }}>
                  {selectedProject.category}
                </span>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)",
                  letterSpacing: 1
                }}>
                  Project #{selectedProject.id}
                </span>
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "clamp(28px,4vw,42px)", letterSpacing: -1,
                color: "var(--text-main)", marginBottom: 24, lineHeight: 1.15
              }}>
                {selectedProject.title}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {/* Overview */}
                <div>
                  <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>Project Overview</h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--text-main)", lineHeight: 1.85 }}>
                    {selectedProject.details?.overview || selectedProject.desc}
                  </p>
                </div>

                {/* Key Features */}
                {selectedProject.details?.features && (
                  <div>
                    <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>Key Features</h4>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 12, paddingLeft: 0, listStyle: "none" }}>
                      {selectedProject.details.features.map((feat, idx) => (
                        <li key={idx} style={{ display: "flex", gap: 12, fontFamily: "var(--font-body)", fontSize: 14.5, color: "var(--text-dim)", lineHeight: 1.7 }}>
                          <span style={{ color: selectedProject.color, fontSize: 16 }}>✦</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges & Accomplishments */}
                {selectedProject.details?.challenges && (
                  <div>
                    <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>Engineering Challenges & Accomplishments</h4>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 12, paddingLeft: 0, listStyle: "none" }}>
                      {selectedProject.details.challenges.map((ch, idx) => (
                        <li key={idx} style={{ display: "flex", gap: 12, fontFamily: "var(--font-body)", fontSize: 14.5, color: "var(--text-dim)", lineHeight: 1.7 }}>
                          <span style={{ color: "var(--amber)", fontSize: 16 }}>⚡</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>Technologies Used</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {selectedProject.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: 0.8, textTransform: "uppercase", color: selectedProject.color, background: `${selectedProject.color}10`, border: `1px solid ${selectedProject.color}28`, padding: "5px 12px", borderRadius: 6 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: 14, borderTop: "1px solid var(--navy-border)", paddingTop: 28, marginTop: 12 }}>
                  <a href={selectedProject.github || "#"} onClick={e => selectedProject.github === "#" && e.preventDefault()} target="_blank" rel="noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13.5, color: "var(--text-dim)", background: "var(--bg-main)", border: "1px solid var(--navy-border)", borderRadius: 10, padding: "13px", transition: "all 0.25s", cursor: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = selectedProject.color; e.currentTarget.style.color = selectedProject.color; e.currentTarget.style.background = `${selectedProject.color}0c`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--navy-border)"; e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.background = "var(--bg-main)"; }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                    GitHub Code
                  </a>
                  <a href={selectedProject.demo || "#"} onClick={e => selectedProject.demo === "#" && e.preventDefault()} target="_blank" rel="noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13.5, color: "#0D1510", background: selectedProject.color, border: `1px solid ${selectedProject.color}`, borderRadius: 10, padding: "13px", transition: "all 0.2s", cursor: "none", boxShadow: `0 4px 16px ${selectedProject.color}40` }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.boxShadow = `0 8px 24px ${selectedProject.color}60`; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.boxShadow = `0 4px 16px ${selectedProject.color}40`; }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        
      </div>

      <style>{`@media(max-width:768px) { section#projects { padding: 80px 24px !important; } }`}</style>
    </section>
  );
}
