import React from "react";
import { PERSONAL } from "../data/content";
import { scrollTo } from "../utils/helpers";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--navy-border)",
      padding: "36px 60px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      flexWrap: "wrap", gap: 16,
      background: "var(--green-dark)",
    }}>
      <button onClick={() => scrollTo("hero")} style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic",
        fontSize: 20, color: "var(--green-neon)", cursor: "none",
      }}>
        Ramya<span style={{ color: "var(--amber)", fontStyle: "normal" }}>.</span>
      </button>

      <p style={{
        fontFamily: "var(--font-mono)", fontSize: 10,
        color: "var(--text-muted)", letterSpacing: 1.5, textTransform: "uppercase",
      }}>
        © {new Date().getFullYear()} {PERSONAL.name} — MERN Stack Developer
      </p>

      <button onClick={() => scrollTo("hero")} style={{
        border: "1px solid var(--navy-border)", color: "var(--text-dim)",
        padding: "9px 20px", fontFamily: "var(--font-mono)", fontSize: 10,
        letterSpacing: 2, textTransform: "uppercase", cursor: "none", borderRadius: 6,
        transition: "border-color 0.3s, color 0.3s",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--green-neon)"; e.currentTarget.style.color = "var(--green-neon)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--navy-border)"; e.currentTarget.style.color = "var(--text-dim)"; }}
      >
        Back to Top ↑
      </button>
    </footer>
  );
}
