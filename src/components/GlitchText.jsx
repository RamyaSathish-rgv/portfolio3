import React from "react";

export default function GlitchText({ text, style = {}, className = "" }) {
  return (
    <span
      className={className}
      data-text={text}
      style={{
        position: "relative",
        display: "inline-block",
        ...style,
      }}
    >
      {text}
      {/* Glitch layer 1 */}
      <span
        aria-hidden="true"
        style={{
          content: `"${text}"`,
          position: "absolute",
          top: 0,
          left: 0,
          color: "var(--electric)",
          opacity: 0.7,
          animation: "glitch 3.5s infinite steps(1)",
          pointerEvents: "none",
          userSelect: "none",
          clipPath: "inset(0 0 98% 0)",
        }}
      >
        {text}
      </span>
      {/* Glitch layer 2 */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "var(--plasma)",
          opacity: 0.5,
          animation: "glitch2 4.2s infinite steps(1)",
          animationDelay: "0.5s",
          pointerEvents: "none",
          userSelect: "none",
          clipPath: "inset(40% 0 40% 0)",
        }}
      >
        {text}
      </span>
    </span>
  );
}
