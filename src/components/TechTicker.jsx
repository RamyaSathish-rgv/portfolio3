import React from "react";
import { TECH_TICKER } from "../data/content";

export default function TechTicker() {
  const doubled = [...TECH_TICKER, ...TECH_TICKER];
  return (
    <div style={{
      overflow: "hidden",
      borderTop: "1px solid var(--navy-border)",
      borderBottom: "1px solid var(--navy-border)",
      padding: "13px 0",
      background: "rgba(90,138,106,0.03)",
    }}>
      <div style={{ display: "flex", width: "max-content", animation: "marquee 28s linear infinite" }}>
        {doubled.map((t, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-mono)", fontSize: 10,
            letterSpacing: 2.5, textTransform: "uppercase",
            color: i % 4 === 0 ? "var(--amber)" : i % 4 === 2 ? "var(--green-neon)" : "var(--text-muted)",
            paddingRight: 48, whiteSpace: "nowrap", userSelect: "none",
          }}>
            {i % 3 === 0 ? "◈" : "—"} {t}
          </span>
        ))}
      </div>
    </div>
  );
}
