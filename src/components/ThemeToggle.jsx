import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{
        width: 44, height: 24,
        borderRadius: 12,
        background: isDark
          ? "linear-gradient(135deg, var(--teal-mid), var(--teal-dark))"
          : "linear-gradient(135deg, #fbbf24, #f59e0b)",
        border: `1.5px solid ${isDark ? "var(--teal-bright)" : "#f59e0b"}`,
        position: "relative", cursor: "none",
        transition: "background 0.4s, border-color 0.4s",
        flexShrink: 0,
      }}
    >
      {/* Sliding circle */}
      <span style={{
        position: "absolute",
        top: 2,
        left: isDark ? 2 : 20,
        width: 16, height: 16, borderRadius: "50%",
        background: isDark ? "var(--teal-bright)" : "#fff",
        transition: "left 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.3s",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 9,
      }}>
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
