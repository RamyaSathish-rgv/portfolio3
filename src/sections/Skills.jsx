import React, { useState, useEffect } from "react";
import { SKILLS } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CATEGORIES = {
  "Languages": ["Python", "Java", "JavaScript"],
  "Frontend":  ["HTML", "CSS", "React"],
  "Backend":   ["Node.js", "MongoDB", "Flask"],
  "Tools":     ["GitHub", "AWS", "Machine\nLearning"],
};

const CAT_COLORS = {
  "Languages": "#7DB88A",
  "Frontend":  "#C8A96E",
  "Backend":   "#8FAF8A",
  "Tools":     "#B07A5E",
};

function FloatingOrb({ color, speed = 4 }) {
  return (
    <div style={{
      position: "absolute", inset: -14, borderRadius: "50%",
      border: `1px dashed ${color}50`,
      animation: `skillSpin ${speed}s linear infinite`,
      pointerEvents: "none",
    }}>
      <div style={{
        position: "absolute", top: -5, left: "calc(50% - 5px)",
        width: 10, height: 10, borderRadius: "50%",
        background: color,
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}60`,
      }} />
    </div>
  );
}

function SkillCard({ skill, index, isVisible }) {
  const [hovered, setHovered] = useState(false);
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setAppeared(true), index * 65);
      return () => clearTimeout(t);
    }
  }, [isVisible, index]);

  const category = Object.entries(CATEGORIES).find(
    ([, skills]) => skills.includes(skill.name)
  )?.[0] || "Tools";
  const catColor = CAT_COLORS[category];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "40px 16px 28px",
        borderRadius: 18,
        background: hovered
          ? `radial-gradient(ellipse at 50% 20%, ${skill.color}18 0%, var(--bg-card) 65%)`
          : "var(--bg-card)",
        border: `1.5px solid ${hovered ? skill.color + "65" : "var(--navy-border)"}`,
        cursor: "none", overflow: "hidden",
        opacity: appeared ? 1 : 0,
        transform: appeared ? "translateY(0) scale(1)" : "translateY(28px) scale(0.92)",
        transition: `opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1), background 0.4s, border-color 0.3s, box-shadow 0.4s`,
        boxShadow: hovered
          ? `0 20px 50px ${skill.color}1e, inset 0 1px 0 ${skill.color}22`
          : "0 2px 12px rgba(0,0,0,0.2)",
        minHeight: 178,
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: hovered ? 100 : 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
        transition: "width 0.5s ease", borderRadius: 1,
      }} />

      <div style={{
        position: "absolute", top: 13, right: 13,
        display: "flex", alignItems: "center", gap: 4,
      }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%",
          background: catColor,
          boxShadow: hovered ? `0 0 8px ${catColor}` : "none",
          transition: "box-shadow 0.3s",
        }} />
      </div>

      <div style={{
        position: "relative", width: 68, height: 68,
        marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: -8, borderRadius: "50%",
          background: `radial-gradient(circle, ${skill.color}28 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
        }} />
        {hovered && <FloatingOrb color={skill.color} speed={2.5} />}
        <div
          style={{
            width: 54, height: 54, position: "relative", zIndex: 1,
            transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), filter 0.4s",
            transform: hovered ? "scale(1.2) rotate(-6deg)" : "scale(1) rotate(0deg)",
            filter: hovered ? `drop-shadow(0 0 12px ${skill.color}90) brightness(1.1)` : "none",
          }}
          dangerouslySetInnerHTML={{ __html: skill.logo }}
        />
      </div>

      <span style={{
        fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13.5,
        textAlign: "center", lineHeight: 1.3,
        color: hovered ? skill.color : "var(--text-main)",
        transition: "color 0.3s", whiteSpace: "pre-line", marginBottom: 5,
      }}>
        {skill.name}
      </span>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5,
        textTransform: "uppercase",
        color: hovered ? catColor : "var(--text-muted)",
        transition: "color 0.3s",
      }}>
        {category}
      </span>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "center",
        transition: "transform 0.45s ease",
        borderRadius: "0 0 2px 2px",
      }} />
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" ref={ref} style={{
      padding: "120px 60px",
      background: "var(--bg-surface)",
      position: "relative", zIndex: 1, overflow: "hidden",
    }}>
      {/* Ambient blobs */}
      {[
        { c: "#7DB88A", t: "-8%",  l: "-4%",  s: 360 },
        { c: "#C8A96E", t: "55%",  r: "-4%",  s: 280 },
        { c: "#8FAF8A", t: "25%",  l: "38%",  s: 220 },
      ].map((b, i) => (
        <div key={i} aria-hidden style={{
          position: "absolute",
          width: b.s, height: b.s, borderRadius: "50%",
          top: b.t, left: b.l, right: b.r,
          background: `radial-gradient(circle, ${b.c}09 0%, transparent 70%)`,
          pointerEvents: "none",
          animation: `orbDrift ${15 + i * 4}s ease-in-out infinite alternate`,
        }} />
      ))}

      {/* Dot grid overlay */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, opacity: 0.12, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, var(--green-bright) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }} />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 4, color: "var(--amber)", textTransform: "uppercase", marginBottom: 12 }}>
            — 03 / 07 —
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(38px,5vw,64px)", letterSpacing: -1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease",
          }}>
            My{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--amber), var(--coral))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Tech Stack</em>
          </h2>
          <div style={{ width: 60, height: 2, background: "linear-gradient(90deg,var(--amber),var(--coral))", borderRadius: 2, margin: "16px auto 20px" }} />
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 15, color: "var(--text-muted)", marginBottom: 28 }}>
            Hover each skill to see it come alive
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            {Object.entries(CAT_COLORS).map(([cat, color]) => (
              <div key={cat} style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "6px 14px",
                background: `${color}0d`, border: `1px solid ${color}30`, borderRadius: 50,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: color, boxShadow: `0 0 5px ${color}` }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color }}>
                  {cat}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11, color, opacity: 0.75 }}>
                  ×{CATEGORIES[cat].length}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: 14 }}>
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes skillSpin { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        @media(max-width:768px) { section#skills { padding: 80px 24px !important; } }
      `}</style>
    </section>
  );
}
