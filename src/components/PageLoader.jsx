import React, { useState, useEffect } from "react";

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading | reveal | done
  const letters = "S. RAMYA".split("");

  useEffect(() => {
    // Animate progress bar 0→100 over ~1.6s
    const start = performance.now();
    const duration = 1600;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("reveal"), 200);
        setTimeout(() => {
          setPhase("done");
          onComplete?.();
        }, 1000);
      }
    };
    requestAnimationFrame(tick);
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 99999,
      background: "var(--navy-deep)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      opacity: phase === "reveal" ? 0 : 1,
      transform: phase === "reveal" ? "translateY(-100%)" : "translateY(0)",
      transition: "opacity 0.5s ease, transform 0.7s cubic-bezier(0.76,0,0.24,1)",
      pointerEvents: phase === "reveal" ? "none" : "all",
    }}>
      {/* Corner brackets */}
      {[
        { top: 32, left: 32, rotate: "0deg" },
        { top: 32, right: 32, rotate: "90deg" },
        { bottom: 32, right: 32, rotate: "180deg" },
        { bottom: 32, left: 32, rotate: "270deg" },
      ].map((pos, i) => (
        <svg key={i} width="36" height="36" viewBox="0 0 36 36" fill="none"
          style={{ position: "absolute", ...pos, transform: `rotate(${pos.rotate})`, opacity: 0.3 }}>
          <path d="M2 20 L2 2 L20 2" stroke="#367D8A" strokeWidth="2"/>
        </svg>
      ))}

      {/* Animated name */}
      <div style={{
        display: "flex", gap: 4, marginBottom: 48,
        overflow: "hidden",
      }}>
        {letters.map((l, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-body)", fontWeight: 900,
            fontSize: "clamp(36px, 6vw, 72px)",
            color: l === "." ? "var(--amber)" : "var(--text-main)",
            display: "inline-block",
            animation: `loaderLetter 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms both`,
          }}>
            {l === " " ? "\u00A0" : l}
          </span>
        ))}
      </div>

      {/* Role text */}
      <p style={{
        fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing: 4, textTransform: "uppercase",
        color: "var(--teal-bright)", marginBottom: 52,
        animation: "fadeIn 0.6s ease 0.5s both",
      }}>
       Frontend Developer
      </p>

      {/* Progress bar */}
      <div style={{ width: 260, position: "relative" }}>
        <div style={{
          height: 1, background: "rgba(54,125,138,0.2)",
          borderRadius: 1, overflow: "hidden",
        }}>
          <div style={{
            height: "100%", borderRadius: 1,
            background: "linear-gradient(90deg, var(--teal-bright), var(--amber))",
            width: `${progress}%`,
            transition: "width 0.05s linear",
            boxShadow: "0 0 12px rgba(54,125,138,0.6)",
          }} />
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          marginTop: 10,
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: 2 }}>
            LOADING
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--teal-bright)", letterSpacing: 1 }}>
            {progress}%
          </span>
        </div>
      </div>

      <style>{`
        @keyframes loaderLetter {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
