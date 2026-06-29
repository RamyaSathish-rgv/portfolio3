import React from "react";

export default function SectionLabel({ text, color = "var(--acid)" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 24,
      }}
    >
      <div
        style={{
          width: 28,
          height: 1,
          background: color,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: 3,
          textTransform: "uppercase",
          color,
        }}
      >
        {text}
      </span>
    </div>
  );
}
