import React, { useState } from "react";
import { PERSONAL } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Graceful fallback if credentials are not configured yet
    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials not fully configured in .env file. Running in simulator mode.");
      setTimeout(() => {
        setSending(false);
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      }, 1500);
      return;
    }

    const templateParams = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSending(false);
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        console.error("Failed to send message via EmailJS:", error);
        setSending(false);
        alert("Failed to send the message. Please try again or email directly.");
      });
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: focused === field ? "rgba(90,138,106,0.07)" : "var(--bg-card)",
    border: `1.5px solid ${focused === field ? "var(--green-bright)" : "var(--navy-border)"}`,
    borderRadius: 10, padding: "14px 18px",
    fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 15,
    color: "var(--text-main)", outline: "none",
    transition: "border-color 0.3s, background 0.3s",
    cursor: "none",
  });

  const socials = [
    { label: "LinkedIn", href: PERSONAL.socials.linkedin, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
    { label: "GitHub", href: PERSONAL.socials.github, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg> },
    { label: "Email", href: `mailto:${PERSONAL.email}`, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  ];

  return (
    <section id="contact" ref={ref} style={{
      padding: "130px 60px 90px",
      background: "var(--bg-main)",
      position: "relative", zIndex: 1, overflow: "hidden",
    }}>
      {/* Ghost text */}
      <div aria-hidden style={{
        position: "absolute", bottom: -30, right: -20,
        fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic",
        fontSize: "clamp(100px,14vw,200px)",
        color: "transparent",
        WebkitTextStroke: "1px rgba(90,138,106,0.05)",
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
        letterSpacing: -4,
      }}>
        HELLO
      </div>

      {/* Blobs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", left: "-5%", top: "15%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(90,138,106,0.08) 0%, transparent 70%)", animation: "orbDrift 16s ease-in-out infinite" }} />
        <div style={{ position: "absolute", right: "5%", bottom: "10%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)", animation: "orbDrift 12s ease-in-out infinite reverse" }} />
      </div>

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 4, color: "var(--amber)", textTransform: "uppercase", marginBottom: 14, opacity: isVisible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}>
            — 07 / 07 —
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(42px,5.5vw,68px)", letterSpacing: -1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}>
            Get In{" "}
            <em style={{ fontStyle: "italic", background: "linear-gradient(135deg, var(--amber), var(--coral))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Touch</em>
          </h2>
          <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, var(--amber), var(--coral))", borderRadius: 2, margin: "18px auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72, alignItems: "start" }} className="contact-grid">
          {/* Left */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(-28px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic", fontSize: 28, lineHeight: 1.25, marginBottom: 20, color: "var(--text-main)", letterSpacing: -0.5 }}>
              Let's build something<br />
              <span style={{ color: "var(--green-neon)" }}>great together.</span>
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 15.5, color: "var(--text-dim)", lineHeight: 1.9, marginBottom: 40 }}>
              Open to internship opportunities, freelance projects, and collaboration. Have an exciting project or just want to say hello? My inbox is always open!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
              {[
                { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, text: PERSONAL.email },
                { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, text: PERSONAL.location },
              ].map(({ icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(90,138,106,0.08)", border: "1px solid var(--navy-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-neon)", flexShrink: 0 }}>
                    {icon}
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "var(--text-dim)" }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {socials.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 13, color: "var(--text-dim)", background: "var(--bg-card)", border: "1px solid var(--navy-border)", borderRadius: 9, padding: "10px 16px", transition: "border-color 0.25s, color 0.25s, background 0.25s, transform 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--green-bright)"; e.currentTarget.style.color = "var(--green-neon)"; e.currentTarget.style.background = "rgba(90,138,106,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--navy-border)"; e.currentTarget.style.color = "var(--text-dim)"; e.currentTarget.style.background = "var(--bg-card)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(28px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s" }}>
            {sent ? (
              <div style={{ background: "rgba(90,138,106,0.07)", border: "1.5px solid rgba(90,138,106,0.28)", borderRadius: "var(--radius)", padding: "60px 40px", textAlign: "center" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic", fontSize: 28, color: "var(--green-neon)", marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 14.5, color: "var(--text-dim)" }}>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[["name","Name","Your name"],["email","Email","your@email.com"]].map(([n,l,p]) => (
                    <div key={n}>
                      <label style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: 1.8, textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: 7 }}>{l}</label>
                      <input name={n} type={n === "email" ? "email" : "text"} value={form[n]} onChange={handleChange} onFocus={() => setFocused(n)} onBlur={() => setFocused(null)} placeholder={p} required style={inputStyle(n)} />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: 1.8, textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: 7 }}>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} placeholder="What is this about?" required style={inputStyle("subject")} />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: 1.8, textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: 7 }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} placeholder="Tell me about your project or opportunity..." rows={6} required style={{ ...inputStyle("message"), resize: "vertical" }} />
                </div>
                <button type="submit" disabled={sending} style={{
                  background: sending ? "rgba(90,138,106,0.5)" : "linear-gradient(135deg, var(--green-bright), var(--green-mid))",
                  border: "none", color: "#D8E8D4", padding: "15px 36px",
                  borderRadius: 10, fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
                  cursor: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  boxShadow: "0 8px 28px rgba(90,138,106,0.28)",
                  transition: "opacity 0.3s, transform 0.2s", marginTop: 4,
                }}
                  onMouseEnter={e => { if (!sending) { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {sending ? (
                    <><span style={{ width: 16, height: 16, border: "2.5px solid rgba(216,232,212,0.3)", borderTopColor: "#D8E8D4", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />Sending...</>
                  ) : (
                    <>Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px) { section#contact { padding: 80px 24px !important; } .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
