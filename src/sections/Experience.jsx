import React, { useState, useEffect } from "react";
import { EXPERIENCE } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();
  const [hovered, setHovered] = useState(null);
  const [lineH, setLineH] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = null;
      const duration = 1200;
      const animate = (ts) => {
        if (!start) start = ts;
        const pct = Math.min((ts - start) / duration, 1);
        setLineH(pct * 100);
        if (pct < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible]);

  return (
    <section id="experience" ref={ref} style={{
      padding: "130px 60px",
      position: "relative", zIndex: 1,
      background: "var(--bg-main)",
    }}>
      {/* Ambient blobs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", right: "-4%", top: "15%",
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)",
          animation: "orbDrift 14s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", left: "-3%", bottom: "10%",
          width: 320, height: 320, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(90,138,106,0.06) 0%, transparent 70%)",
          animation: "orbDrift 18s ease-in-out infinite reverse",
        }} />
      </div>

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 4,
            color: "var(--coral)", textTransform: "uppercase", marginBottom: 14,
            opacity: isVisible ? 1 : 0, transition: "opacity 0.6s ease 0.1s",
          }}>
            — 04 / 07 —
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(42px,5.5vw,68px)", letterSpacing: -1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}>
            Work{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--coral), var(--amber))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Experience</em>
          </h2>
          <div style={{
            width: 60, height: 2,
            background: "linear-gradient(90deg, var(--coral), var(--amber))",
            borderRadius: 2, margin: "18px auto 0",
          }} />
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 36 }}>

          {/* Animated vertical line */}
          <div style={{
            position: "absolute", left: 27, top: 0, width: 2,
            height: `${lineH}%`,
            background: "linear-gradient(to bottom, var(--green-bright), var(--amber), transparent)",
            borderRadius: 2,
            transition: "height 0.05s linear",
            opacity: 0.4,
          }} />

          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex", gap: 44, alignItems: "flex-start",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-32px)",
                transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.14}s`,
              }}
            >
              {/* Timeline node */}
              <div style={{ flexShrink: 0, marginTop: 24, position: "relative" }}>
                {/* Pulsing ring */}
                {hovered === i && (
                  <div style={{
                    position: "absolute", inset: -8, borderRadius: "50%",
                    border: `2px solid ${exp.color}40`,
                    animation: "ringPulse 1.5s ease-in-out infinite",
                  }} />
                )}
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: hovered === i
                    ? `linear-gradient(135deg, ${exp.color}, ${exp.color}80)`
                    : "var(--bg-card)",
                  border: `2px solid ${hovered === i ? exp.color : exp.color + "50"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  boxShadow: hovered === i ? `0 0 28px ${exp.color}50` : "none",
                  zIndex: 1, position: "relative",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke={hovered === i ? "#fff" : exp.color} strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                  </svg>
                </div>
              </div>

              {/* Card */}
              <div style={{
                flex: 1,
                background: hovered === i
                  ? `linear-gradient(140deg, ${exp.color}0C, var(--bg-card) 60%)`
                  : "var(--bg-card)",
                border: `1px solid ${hovered === i ? exp.color + "45" : "var(--navy-border)"}`,
                borderRadius: "var(--radius)", padding: "30px 34px",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: hovered === i ? `0 16px 48px ${exp.color}12` : "none",
                transform: hovered === i ? "translateX(8px)" : "translateX(0)",
                cursor: "default",
                position: "relative", overflow: "hidden",
              }}>
                {/* Top accent line */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, ${exp.color}, ${exp.color}30)`,
                  transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                }} />

                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: 22, letterSpacing: -0.5,
                      color: hovered === i ? exp.color : "var(--text-main)",
                      marginBottom: 5, transition: "color 0.3s",
                    }}>
                      {exp.company}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-body)", fontWeight: 600,
                      fontSize: 13.5, color: exp.color, marginBottom: 6,
                      letterSpacing: 0.2,
                    }}>
                      {exp.role}
                    </p>
                    <span style={{
                      display: "inline-block",
                      fontFamily: "var(--font-mono)", fontSize: 9,
                      letterSpacing: 1.8, textTransform: "uppercase",
                      color: "var(--text-muted)", background: "var(--bg-main)",
                      border: "1px solid var(--navy-border)",
                      padding: "3px 10px", borderRadius: 4,
                    }}>
                      {exp.type}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 40, color: exp.color, opacity: 0.1,
                    lineHeight: 1, transition: "opacity 0.3s",
                    ...(hovered === i ? { opacity: 0.18 } : {}),
                  }}>
                    0{i + 1}
                  </div>
                </div>

                <div style={{
                  height: 1,
                  background: `linear-gradient(90deg, ${exp.color}35, transparent)`,
                  margin: "20px 0",
                }} />

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                      transition: `all 0.5s ease ${0.3 + i * 0.14 + j * 0.06}s`,
                    }}>
                      <span style={{
                        marginTop: 7, width: 5, height: 5, borderRadius: "50%",
                        background: exp.color, flexShrink: 0, opacity: 0.8,
                        boxShadow: hovered === i ? `0 0 6px ${exp.color}` : "none",
                        transition: "box-shadow 0.3s",
                      }} />
                      <span style={{
                        fontFamily: "var(--font-body)", fontWeight: 400,
                        fontSize: 14.5, color: "var(--text-dim)", lineHeight: 1.75,
                      }}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px) { section#experience { padding: 80px 24px !important; } }
      `}</style>
    </section>
  );
}
