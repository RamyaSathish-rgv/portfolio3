import React from "react";

export default function GridBackground() {
  return (
    <div aria-hidden style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(54,125,138,0.1) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
      }} />
      {/* Scan line */}
      <div style={{
        position: "absolute", left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(54,125,138,0.15), transparent)",
        animation: "scanline 12s linear infinite",
      }} />
      {/* Top-left corner bracket */}
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
        style={{ position: "absolute", top: 72, left: 0, opacity: 0.2 }}>
        <line x1="0" y1="36" x2="48" y2="36" stroke="#367D8A" strokeWidth="1"/>
        <line x1="36" y1="0" x2="36" y2="48" stroke="#367D8A" strokeWidth="1"/>
        <circle cx="36" cy="36" r="2.5" fill="#367D8A"/>
      </svg>
      {/* Bottom-right corner bracket */}
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
        style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.2, transform: "rotate(180deg)" }}>
        <line x1="0" y1="36" x2="48" y2="36" stroke="#FBBF24" strokeWidth="1"/>
        <line x1="36" y1="0" x2="36" y2="48" stroke="#FBBF24" strokeWidth="1"/>
        <circle cx="36" cy="36" r="2.5" fill="#FBBF24"/>
      </svg>
      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(13,27,42,0.7) 100%)",
      }} />
    </div>
  );
}
