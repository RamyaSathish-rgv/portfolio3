import React, { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CERTS = [
  {
    title: "Deployment of CUDA Python on NVIDIA Boards",
    issuer: "ADVI Group of Companies",
    date: "2025",
    color: "#7DB88A",
    icon: "⚡",
    badge: "Internship",
    link: "#",
    desc: "GPU acceleration, parallel computing, CUDA drivers",
    // Add your certificate PDF URL here
    certificatePDF: "/certificates/cuda-nvidia.pdf",
  },
  {
    title: "Storage in Virtual Private Cloud using S3",
    issuer: "Livewire, Salem",
    date: "2025",
    color: "#C8A96E",
    icon: "☁️",
    badge: "Completed",
    link: "#",
    desc: "AWS S3, VPC, bucket policies, access control",
    certificatePDF: "/certificates/aws-s3.pdf",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "2025",
    color: "#B07A5E",
    icon: "🧠",
    badge: "Certified",
    link: "#",
    desc: "Cloud fundamentals, OCI services, infrastructure",
    certificatePDF: "/certificates/oracle.pdf",
  },
  {
    title: "Machine Learning Virtual Internship",
    issuer: "CodSoft",
    date: "2025",
    color: "#8FAF8A",
    icon: "🤖",
    badge: "Selected",
    link: "#",
    desc: "ML models, data science, Python, model building",
    certificatePDF: "/certificates/ml-codsoft.pdf",
  },
  {
    title: "Associate Software Engineer Intern",
    issuer: "KrishNova LLP",
    date: "2026",
    color: "#A385C8",
    icon: "💻",
    badge: "Current",
    link: "#",
    desc: "Real-world software dev, scalable solutions, industry workflows",
    certificatePDF: "/certificates/krishnova-intern.pdf",
  },
];

const ACHIEVEMENTS = [
  {
    icon: "🚀",
    title: "3 Industry Internships",
    desc: "Completed hands-on internships at ADVI Group, Livewire, and currently at KrishNova LLP as an Associate Software Engineer Intern.",
    color: "#7DB88A",
  },
  {
    icon: "💡",
    title: "5+ Projects Built",
    desc: "Developed ML, NLP, and full-stack web applications using modern technologies and frameworks.",
    color: "#C8A96E",
  },
  {
    icon: "☁️",
    title: "Cloud & GPU Computing",
    desc: "Hands-on with AWS S3, VPC environments, CUDA Python, and NVIDIA GPU board deployments.",
    color: "#B07A5E",
  },
  {
    icon: "🤖",
    title: "Machine Learning & NLP",
    desc: "Built spam detection, churn prediction, and movie genre classification models from scratch.",
    color: "#8FAF8A",
  },
];

// Certificate Modal Component
function CertificateModal({ cert, isOpen, onClose }) {
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
          border: `1px solid ${cert.color}40`,
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
            border: `1px solid var(--navy-border)`,
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
            e.target.style.background = cert.color + "20";
            e.target.style.borderColor = cert.color + "60";
            e.target.style.color = cert.color;
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
            <span style={{ fontSize: "32px" }}>{cert.icon}</span>
            <div>
              <h3 style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "20px",
                color: cert.color,
                margin: "0 0 4px 0",
              }}>
                {cert.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-dim)",
                margin: 0,
              }}>
                {cert.issuer}
              </p>
            </div>
          </div>
          <div style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: cert.color,
              background: `${cert.color}14`,
              border: `1px solid ${cert.color}30`,
              padding: "4px 12px",
              borderRadius: "20px",
            }}>
              {cert.badge}
            </span>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "1px",
            }}>
              {cert.date}
            </span>
          </div>
        </div>

        {/* Certificate PDF Viewer */}
        <div style={{ marginBottom: "24px" }}>
          {cert.certificatePDF ? (
            <div style={{
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              border: `1px solid ${cert.color}30`,
              background: "var(--bg-surface)",
            }}>
              <iframe
                src={`${cert.certificatePDF}#toolbar=0`}
                width="100%"
                height="600px"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  display: "block",
                }}
                title={cert.title}
              />
            </div>
          ) : (
            <div style={{
              width: "100%",
              height: "400px",
              borderRadius: "8px",
              border: `2px dashed ${cert.color}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `${cert.color}05`,
              color: "var(--text-dim)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              textAlign: "center",
              flexDirection: "column",
              gap: "12px",
            }}>
              <span style={{ fontSize: "32px" }}>📄</span>
              Certificate PDF coming soon
            </div>
          )}
        </div>

        {/* Description */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            lineHeight: "1.6",
            color: "var(--text-muted)",
            margin: 0,
          }}>
            <strong style={{ color: "var(--text-main)" }}>Skills & Topics:</strong><br />
            {cert.desc}
          </p>
        </div>

        {/* Download / Action Buttons */}
        <div style={{
          display: "flex",
          gap: "12px",
          paddingTop: "20px",
          borderTop: "1px solid var(--navy-border)",
        }}>
          {cert.certificatePDF && (
            <>
              <a
                href={cert.certificatePDF}
                download
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: "6px",
                  background: `${cert.color}15`,
                  border: `1px solid ${cert.color}40`,
                  color: cert.color,
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "13px",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `${cert.color}25`;
                  e.target.style.borderColor = `${cert.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `${cert.color}15`;
                  e.target.style.borderColor = `${cert.color}40`;
                }}
              >
                ↓ Download PDF
              </a>
              <a
                href={cert.certificatePDF}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: "6px",
                  background: `${cert.color}15`,
                  border: `1px solid ${cert.color}40`,
                  color: cert.color,
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "13px",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `${cert.color}25`;
                  e.target.style.borderColor = `${cert.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `${cert.color}15`;
                  e.target.style.borderColor = `${cert.color}40`;
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
              e.target.style.borderColor = cert.color + "60";
              e.target.style.color = cert.color;
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

function CertCard({ cert, index, isVisible, onArrowClick }) {
  const [hovered, setHovered] = useState(false);
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setAppeared(true), index * 90);
      return () => clearTimeout(t);
    }
  }, [isVisible, index]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered
          ? `linear-gradient(140deg, ${cert.color}0F, var(--bg-card) 60%)`
          : "var(--bg-card)",
        border: `1px solid ${hovered ? cert.color + "50" : "var(--navy-border)"}`,
        borderRadius: "var(--radius)",
        padding: "22px 24px",
        display: "flex", alignItems: "center", gap: 18,
        opacity: appeared ? 1 : 0,
        transform: appeared
          ? "translateY(0) scale(1)"
          : "translateY(22px) scale(0.97)",
        transition: "opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1), background 0.3s, border-color 0.3s, box-shadow 0.3s",
        boxShadow: hovered ? `0 12px 32px rgba(0,0,0,0.3), 0 0 0 1px ${cert.color}30` : "none",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
        background: `linear-gradient(180deg, ${cert.color}, ${cert.color}40)`,
        transform: hovered ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        borderRadius: "3px 0 0 3px",
      }} />

      {/* Shimmer sweep on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(105deg, transparent 30%, ${cert.color}08 50%, transparent 70%)`,
        backgroundSize: "200% 100%",
        animation: hovered ? "shimmer 1.5s linear infinite" : "none",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <div style={{
        width: 50, height: 50, borderRadius: "50%", flexShrink: 0,
        background: `${cert.color}12`,
        border: `1.5px solid ${cert.color}35`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22,
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
        transform: hovered ? "scale(1.15) rotate(-8deg)" : "scale(1)",
        boxShadow: hovered ? `0 0 20px ${cert.color}40` : "none",
        position: "relative", zIndex: 1,
      }}>
        {cert.icon}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
        <div style={{
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13.5,
          color: hovered ? cert.color : "var(--text-main)",
          marginBottom: 3, transition: "color 0.3s",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          {cert.title}
        </div>
        <div style={{
          fontFamily: "var(--font-body)", fontSize: 12,
          color: "var(--text-dim)", marginBottom: 4,
        }}>
          {cert.issuer}
        </div>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 10,
          color: "var(--text-muted)", letterSpacing: 0.5,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(4px)",
          transition: "all 0.3s",
          marginBottom: 6,
        }}>
          {cert.desc}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 1.5,
            textTransform: "uppercase", color: cert.color,
            background: `${cert.color}14`, border: `1px solid ${cert.color}30`,
            padding: "2px 9px", borderRadius: 20,
          }}>
            {cert.badge}
          </span>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 9,
            color: "var(--text-muted)", letterSpacing: 1,
          }}>
            {cert.date}
          </span>
        </div>
      </div>

      {/* Arrow Button - Now clickable */}
      <button
        onClick={() => onArrowClick(cert)}
        style={{
          width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
          border: `1px solid ${hovered ? cert.color + "60" : "var(--navy-border)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: hovered ? cert.color : "var(--text-muted)",
          fontSize: 15,
          transition: "all 0.3s",
          transform: hovered ? "rotate(-45deg) scale(1.1)" : "rotate(0) scale(1)",
          position: "relative", zIndex: 1,
          background: "transparent",
          cursor: "pointer",
        }}>
        ↗
      </button>
    </div>
  );
}

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal();
  const [lineVisible, setLineVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (isVisible) setTimeout(() => setLineVisible(true), 500);
  }, [isVisible]);

  const handleArrowClick = (cert) => {
    setSelectedCert(cert);
  };

  return (
    <section id="certifications" ref={ref} style={{
      padding: "130px 60px",
      background: "var(--bg-surface)",
      position: "relative", zIndex: 1, overflow: "hidden",
    }}>
      {/* Background orbs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", right: "-6%", top: "5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 65%)",
          animation: "orbDrift 14s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", left: "-5%", bottom: "10%",
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(125,184,138,0.05) 0%, transparent 65%)",
          animation: "orbDrift 18s ease-in-out infinite reverse",
        }} />
      </div>

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 4,
            color: "var(--amber)", textTransform: "uppercase", marginBottom: 14,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.1s",
          }}>
            — 06 / 07 —
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(42px,5.5vw,68px)", lineHeight: 1.0,
            letterSpacing: -1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}>
            Certifications &{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, var(--amber) 0%, var(--coral) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Achievements</em>
          </h2>
          <div style={{
            width: lineVisible ? 80 : 0,
            height: 2,
            background: "linear-gradient(90deg, var(--amber), var(--coral))",
            borderRadius: 2,
            margin: "18px auto 0",
            transition: "width 0.8s cubic-bezier(0.16,1,0.3,1)",
          }} />
        </div>

        {/* Achievements grid — 4 cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))",
          gap: 16,
          marginBottom: 72,
        }}>
          {ACHIEVEMENTS.map((a, i) => (
            <AchievementCard key={i} a={a} i={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Divider */}
        <div style={{
          display: "flex", alignItems: "center", gap: 18, marginBottom: 36,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}>
          <div style={{ flex: 1, height: 1, background: "var(--navy-border)" }} />
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: 3,
            color: "var(--text-muted)", textTransform: "uppercase",
          }}>Certifications</span>
          <div style={{ flex: 1, height: 1, background: "var(--navy-border)" }} />
        </div>

        {/* Cert cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))",
          gap: 14,
        }}>
          {CERTS.map((cert, i) => (
            <CertCard 
              key={i} 
              cert={cert} 
              index={i} 
              isVisible={isVisible}
              onArrowClick={handleArrowClick}
            />
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        cert={selectedCert} 
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
      />

      <style>{`
        @media(max-width:600px){ section#certifications { padding:80px 24px!important; } }
      `}</style>
    </section>
  );
}

function AchievementCard({ a, i, isVisible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${a.color}0B` : "var(--bg-card)",
        border: `1px solid ${hovered ? a.color + "40" : "var(--navy-border)"}`,
        borderRadius: "var(--radius)",
        padding: "24px 22px",
        display: "flex", gap: 16, alignItems: "flex-start",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `translateY(0)`
          : `translateY(24px)`,
        transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, background 0.3s, border-color 0.3s`,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top border line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${a.color}, transparent)`,
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
      }} />

      {/* Icon */}
      <div style={{
        width: 44, height: 44, borderRadius: 10, flexShrink: 0,
        background: `${a.color}12`,
        border: `1px solid ${a.color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22,
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered ? "scale(1.15) rotate(-6deg)" : "scale(1)",
      }}>
        {a.icon}
      </div>

      <div>
        <div style={{
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14,
          color: hovered ? a.color : "var(--text-main)",
          marginBottom: 5,
          transition: "color 0.3s",
        }}>
          {a.title}
        </div>
        <div style={{
          fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 13,
          color: "var(--text-muted)", lineHeight: 1.6,
        }}>
          {a.desc}
        </div>
      </div>
    </div>
  );
}