import { useEffect, useRef } from "react";

export function useMagneticCursor() {
  const cursorRingRef = useRef(null);
  const cursorDotRef  = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform =
          `translate(${targetX - 4}px, ${targetY - 4}px)`;
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform =
          `translate(${currentX - 20}px, ${currentY - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    // Hover scale on interactive elements
    const handleEnter = () => {
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform += " scale(2)";
        cursorRingRef.current.style.borderColor = "var(--acid)";
        cursorRingRef.current.style.background = "rgba(200,255,0,0.08)";
      }
    };
    const handleLeave = () => {
      if (cursorRingRef.current) {
        cursorRingRef.current.style.borderColor = "rgba(200,255,0,0.6)";
        cursorRingRef.current.style.background = "transparent";
      }
    };

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { cursorRingRef, cursorDotRef };
}
