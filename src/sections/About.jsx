import React, { useState, useEffect, useRef } from "react";
import { ABOUT } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FACTS = [
  { number: "4+", label: "Internships", color: "#7DB88A" },
  { number: "5+", label: "Projects", color: "#C8A96E" },
  { number: "12+", label: "Technologies", color: "#B07A5E" },
  { number: "3rd", label: "Year B.Tech", color: "#8FAF8A" },
];

const TRAITS = ["Problem Solver", "Team Player", "Quick Learner", "Detail Oriented", "Open Source"];

// CV Path — Update this with your CV file location
const CV_PATH = "/resume.pdf";

function AnimatedCounter({ value, suffix = "" }) {
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const num = parseInt(value.replace(/\D/g, ""));
    const isSuffix = value.includes("+");
    const isOrdinal = value.includes("rd");
    let frame = 0;
    const total = 40;
    const id = setInterval(() => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);
      setDisplay(`${current}${isSuffix ? "+" : isOrdinal ? "rd" : ""}`);
      if (frame >= total) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [started, value]);

  return <span ref={ref}>{display}</span>;
}

// CV Modal Component
function CVModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(4px)",
        padding: "20px",
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(125,184,138,0.4)",
          borderRadius: "12px",
          padding: "32px",
          maxWidth: "900px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          position: "relative",
          animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid var(--navy-border)",
            background: "var(--bg-surface)",
            color: "var(--text-main)",
            fontSize: "24px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(125,184,138,0.2)";
            e.target.style.borderColor = "rgba(125,184,138,0.6)";
            e.target.style.color = "#7DB88A";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "var(--bg-surface)";
            e.target.style.borderColor = "var(--navy-border)";
            e.target.style.color = "var(--text-main)";
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
          }}>
            <span style={{ fontSize: "32px" }}>📄</span>
            <div>
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "20px",
                color: "#7DB88A",
                margin: "0 0 4px 0",
              }}>
                Resume / CV
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-dim)",
                margin: 0,
              }}>
                Professional background and experience
              </p>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div style={{ marginBottom: "24px" }}>
          {CV_PATH ? (
            <div style={{
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(125,184,138,0.3)",
              background: "var(--bg-surface)",
            }}>
              <iframe
                src={`${CV_PATH}#toolbar=0`}
                width="100%"
                height="600px"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  display: "block",
                }}
                title="Resume/CV"
              />
            </div>
          ) : (
            <div style={{
              width: "100%",
              height: "400px",
              borderRadius: "8px",
              border: "2px dashed rgba(125,184,138,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(125,184,138,0.05)",
              color: "var(--text-dim)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              textAlign: "center",
              flexDirection: "column",
              gap: "12px",
            }}>
              <span style={{ fontSize: "32px" }}>📋</span>
              CV coming soon
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{
          display: "flex",
          gap: "12px",
          paddingTop: "20px",
          borderTop: "1px solid var(--navy-border)",
        }}>
          {CV_PATH && (
            <>
              <a
                href={CV_PATH}
                download
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: "6px",
                  background: "rgba(125,184,138,0.15)",
                  border: "1px solid rgba(125,184,138,0.4)",
                  color: "#7DB88A",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "13px",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(125,184,138,0.25)";
                  e.target.style.borderColor = "rgba(125,184,138,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(125,184,138,0.15)";
                  e.target.style.borderColor = "rgba(125,184,138,0.4)";
                }}
              >
                ↓ Download Resume
              </a>
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: "6px",
                  background: "rgba(125,184,138,0.15)",
                  border: "1px solid rgba(125,184,138,0.4)",
                  color: "#7DB88A",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "13px",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(125,184,138,0.25)";
                  e.target.style.borderColor = "rgba(125,184,138,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(125,184,138,0.15)";
                  e.target.style.borderColor = "rgba(125,184,138,0.4)";
                }}
              >
                ↗ Open in New Tab
              </a>
            </>
          )}
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "12px 20px",
              borderRadius: "6px",
              background: "var(--bg-surface)",
              border: "1px solid var(--navy-border)",
              color: "var(--text-main)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(125,184,138,0.6)";
              e.target.style.color = "#7DB88A";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "var(--navy-border)";
              e.target.style.color = "var(--text-main)";
            }}
          >
            Close
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  const [activeCard, setActiveCard] = useState(null);
  const [lineVisible, setLineVisible] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    if (isVisible) setTimeout(() => setLineVisible(true), 600);
  }, [isVisible]);

  const cards = [
    {
      icon: "🎓",
      title: "Education",
      body: "B.Tech — Information Technology (3rd Year), building a strong foundation in software engineering and intelligent systems.",
      color: "#7DB88A",
      accent: "rgba(125,184,138,0.08)",
      border: "rgba(125,184,138,0.22)",
    },
    {
      icon: "💡",
      title: "Core Skills",
      body: "Python · Java · MERN Stack · Cloud Computing · Machine Learning · CUDA · AWS S3",
      color: "#C8A96E",
      accent: "rgba(200,169,110,0.08)",
      border: "rgba(200,169,110,0.22)",
    },
    {
      icon: "🚀",
      title: "Career Goal",
      body: "To become a skilled Full Stack Developer & ML Engineer, building scalable systems that create real-world impact.",
      color: "#B07A5E",
      accent: "rgba(176,122,94,0.08)",
      border: "rgba(176,122,94,0.22)",
    },
  ];

  return (
    <section id="about" ref={ref} style={{
      padding: "130px 60px",
      position: "relative", zIndex: 1,
      overflow: "hidden",
    }}>
      {/* Organic blobs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "8%", left: "-8%",
          width: 520, height: 520, borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          background: "radial-gradient(circle, rgba(90,138,106,0.07) 0%, transparent 70%)",
          animation: "orbDrift 12s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", right: "-5%",
          width: 380, height: 380, borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
          background: "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)",
          animation: "orbDrift 16s ease-in-out infinite reverse",
        }} />
      </div>

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 4,
            color: "var(--green-bright)", textTransform: "uppercase", marginBottom: 14,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.1s",
          }}>
            — 02 / 06 —
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(42px,5.5vw,72px)", lineHeight: 1.0,
            letterSpacing: -1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}>
            About{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--green-neon) 0%, var(--sage) 50%, var(--amber) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Me</em>
          </h2>
          <div style={{
            width: lineVisible ? 80 : 0,
            height: 2,
            background: "linear-gradient(90deg, var(--green-bright), var(--amber))",
            borderRadius: 2,
            margin: "18px auto 0",
            transition: "width 0.8s cubic-bezier(0.16,1,0.3,1)",
          }} />
        </div>

        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }} className="about-grid">

          {/* LEFT col — bio + traits */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}>
            {/* Lead sentence — bigger, italic display font */}
            <p style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(18px, 2vw, 22px)",
              color: "var(--text-main)",
              lineHeight: 1.7,
              marginBottom: 24,
              borderLeft: "3px solid var(--green-bright)",
              paddingLeft: 20,
            }}>
              {ABOUT.bio1}
            </p>

            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 400,
              fontSize: 15.5, color: "var(--text-dim)", lineHeight: 1.9,
              marginBottom: 20,
            }}>
              {ABOUT.bio2}
            </p>

            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 400,
              fontSize: 15, color: "rgba(216,232,212,0.42)", lineHeight: 1.85,
              marginBottom: 40,
            }}>
              {ABOUT.bio3}
            </p>

            {/* Animated trait pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 52 }}>
              {TRAITS.map((tag, i) => (
                <span key={tag} style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 1.8,
                  textTransform: "uppercase",
                  color: "var(--green-neon)",
                  border: "1px solid rgba(125,184,138,0.25)",
                  background: "rgba(125,184,138,0.05)",
                  padding: "6px 14px", borderRadius: 40,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                  transition: `all 0.5s ease ${0.5 + i * 0.07}s`,
                  cursor: "default",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats row with animated counters */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              paddingTop: 28,
              borderTop: "1px solid var(--navy-border)",
            }}>
              {FACTS.map((f, i) => (
                <div key={i} style={{
                  textAlign: "center",
                  padding: "0 8px",
                  borderRight: i < 3 ? "1px solid var(--navy-border)" : "none",
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.6s ease ${0.7 + i * 0.1}s`,
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "clamp(22px, 2.5vw, 30px)",
                    color: f.color, lineHeight: 1.1, marginBottom: 5,
                  }}>
                    {isVisible ? <AnimatedCounter value={f.number} /> : "0"}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 9,
                    color: "var(--text-muted)", letterSpacing: 1.8,
                    textTransform: "uppercase",
                  }}>
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT col — stacked cards with hover reveals */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 16,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s",
          }}>
            {cards.map((c, i) => (
              <div
                key={c.title}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  position: "relative",
                  background: activeCard === i ? c.accent : "var(--bg-card)",
                  border: `1px solid ${activeCard === i ? c.border : "var(--navy-border)"}`,
                  borderRadius: "var(--radius)",
                  padding: "28px 30px",
                  cursor: "default",
                  transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                  transform: activeCard === i ? "translateY(-4px) translateX(4px)" : "translateY(0)",
                  boxShadow: activeCard === i ? `0 16px 40px rgba(0,0,0,0.3), inset 0 0 0 1px ${c.border}` : "none",
                  overflow: "hidden",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: activeCard === i ? "0s" : `${0.4 + i * 0.12}s`,
                }}
              >
                {/* Animated accent line at top */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, ${c.color}, transparent)`,
                  transform: activeCard === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                }} />

                {/* Corner glow */}
                <div style={{
                  position: "absolute", top: -20, right: -20,
                  width: 80, height: 80, borderRadius: "50%",
                  background: `radial-gradient(circle, ${c.color}20 0%, transparent 70%)`,
                  opacity: activeCard === i ? 1 : 0,
                  transition: "opacity 0.4s",
                }} />

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, position: "relative" }}>
                  {/* Icon with animated ring */}
                  <div style={{ position: "relative", flexShrink: 0, marginTop: 2 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: `${c.color}14`,
                      border: `1.5px solid ${c.color}35`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20,
                      transition: "transform 0.35s, box-shadow 0.35s",
                      transform: activeCard === i ? "scale(1.15) rotate(-8deg)" : "scale(1)",
                      boxShadow: activeCard === i ? `0 0 16px ${c.color}40` : "none",
                    }}>
                      {c.icon}
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
                      color: activeCard === i ? c.color : "var(--text-main)",
                      marginBottom: 8,
                      transition: "color 0.3s",
                      letterSpacing: 0.3,
                    }}>
                      {c.title}
                    </div>
                    <p style={{
                      fontFamily: "var(--font-body)", fontWeight: 400,
                      fontSize: 14, color: "var(--text-dim)", lineHeight: 1.7,
                    }}>
                      {c.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CV Download Button Card */}
            <button
              onClick={() => setCvModalOpen(true)}
              style={{
                position: "relative",
                background: "var(--bg-card)",
                border: "1px solid var(--navy-border)",
                borderRadius: "var(--radius)",
                padding: "28px 30px",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                overflow: "hidden",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${0.4 + 3 * 0.12}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(125,184,138,0.08)";
                e.currentTarget.style.border = "1px solid rgba(125,184,138,0.22)";
                e.currentTarget.style.transform = "translateY(-4px) translateX(4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(125,184,138,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-card)";
                e.currentTarget.style.border = "1px solid var(--navy-border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Animated accent line at top */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, #7DB88A, transparent)",
                transformOrigin: "left",
                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, position: "relative" }}>
                {/* Icon */}
                <div style={{ position: "relative", flexShrink: 0, marginTop: 2 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "rgba(125,184,138,0.14)",
                    border: "1.5px solid rgba(125,184,138,0.35)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20,
                    transition: "transform 0.35s, box-shadow 0.35s",
                  }}>
                    📄
                  </div>
                </div>

                <div style={{ flex: 1, textAlign: "left" }}>
                  <div style={{
                    fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
                    color: "var(--text-main)",
                    marginBottom: 8,
                    transition: "color 0.3s",
                    letterSpacing: 0.3,
                  }}>
                    Download Resume
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body)", fontWeight: 400,
                    fontSize: 14, color: "var(--text-dim)", lineHeight: 1.7,
                  }}>
                    View and download my complete resume, experience, and qualifications.
                  </p>
                </div>

                {/* Arrow indicator */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "1px solid var(--navy-border)",
                  color: "var(--text-muted)",
                  fontSize: 14,
                  transition: "all 0.3s",
                  flexShrink: 0,
                }}>
                  ↗
                </div>
              </div>
            </button>

            {/* Bottom floating quote */}
            <div style={{
              marginTop: 8,
              padding: "20px 24px",
              background: "rgba(90,138,106,0.06)",
              border: "1px dashed rgba(90,138,106,0.2)",
              borderRadius: "var(--radius-sm)",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.8s ease 0.8s",
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontStyle: "italic",
                fontWeight: 300, fontSize: 14.5,
                color: "var(--text-muted)", lineHeight: 1.65,
              }}>
                "Passionate about clean UI, performance, and real-world problem solving — from GPU acceleration to scalable web apps."
              </p>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 2,
                color: "var(--green-bright)", textTransform: "uppercase", marginTop: 10,
              }}>— S. Ramya</div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      <style>{`
        @media(max-width:900px){
          #about { padding: 80px 24px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}