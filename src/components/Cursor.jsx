import React from "react";
import { useMagneticCursor } from "../hooks/useMagneticCursor";

export default function Cursor() {
  const { cursorRingRef, cursorDotRef } = useMagneticCursor();

  return (
    <>
      <div
        ref={cursorRingRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 38, height: 38,
          border: "1.5px solid rgba(125,184,138,0.55)",
          borderRadius: "50%",
          pointerEvents: "none", zIndex: 99999,
          transition: "border-color 0.3s, background 0.3s, width 0.3s, height 0.3s",
          willChange: "transform",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={cursorDotRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 7, height: 7,
          background: "var(--amber)",
          borderRadius: "50%",
          pointerEvents: "none", zIndex: 100000,
          willChange: "transform",
        }}
      />
    </>
  );
}
