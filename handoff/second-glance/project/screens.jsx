// Second Glance — the four mobile screens.
// All screens are 390×844 (iOS reference) and meant to be wrapped in IOSDevice
// with dark={true}. Type system: Inter Tight (display) + JetBrains Mono (micro).

const SG_BG = "#0a0a0a";
const SG_FG = "#f4f1ea";
const SG_DIM = "#6b6b6b";
const SG_HAIR = "rgba(244, 241, 234, 0.12)";
const SG_GREEN = "oklch(0.78 0.18 145)";
const SG_AMBER = "oklch(0.78 0.12 70)";

// Mono micro-label — TE-flavored
function Micro({ children, style = {}, color = SG_DIM }) {
  return (
    <span style={{

      letterSpacing: "0.22em", textTransform: "uppercase",
      color, ...style, fontFamily: "\"Inter Tight\"", fontSize: "10px"
    }}>{children}</span>);

}

// Tick marks running along an edge — borrowed from museum guide / TE devices
function TickRow({ count = 24, color = SG_HAIR, style = {} }) {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "flex-end", ...style }}>
      {Array.from({ length: count }).map((_, i) =>
      <div key={i} style={{
        width: 1, height: i % 4 === 0 ? 8 : 4, background: color
      }} />
      )}
    </div>);

}

// ─────────────────────────────────────────────────────────────
// SCREEN 1 — Landing / tap to scan
// ─────────────────────────────────────────────────────────────
function ScreenLanding({ accent = SG_GREEN, headline, sublead }) {
  const head = headline ?? "Point. Scan.\nDiscover what's inside.";
  const sub = sublead ?? "A second glance at the everyday objects you don't even care to look at.";
  return (
    <div style={{
      width: "100%", height: "100%", background: SG_BG, color: SG_FG,
      fontFamily: "'Inter Tight', system-ui, sans-serif",
      display: "flex", flexDirection: "column",
      padding: "76px 28px 44px",
      position: "relative", overflow: "hidden"
    }}>
      {/* corner ticks — editorial frame */}
      <div style={{ position: "absolute", top: 64, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 24px", color: SG_DIM }}>
        <Micro>SG · 001</Micro>
        <Micro>v0.4 · BETA</Micro>
      </div>

      {/* logo + wordmark */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 24, color: SG_FG }}>
        <Logo size={56} stroke={6} />
        <div style={{ height: 14 }} />
        <Micro color={SG_FG} style={{ letterSpacing: "0.32em" }}>SECOND&nbsp;GLANCE</Micro>
      </div>

      <div style={{ flex: 1, height: "154.069px" }} />

      {/* headline */}
      <div style={{ marginBottom: 18 }}>
        <Micro>FIELD GUIDE — №01</Micro>
      </div>
      <h1 style={{
        margin: 0, fontFamily: "'Inter Tight', system-ui, sans-serif",
        fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em",
        color: SG_FG, textWrap: "balance", whiteSpace: "pre-line", fontSize: "60px"
      }}>
        {head}
      </h1>
      <p style={{
        margin: "16px 0 0", lineHeight: 1.5, color: "rgba(244,241,234,0.55)",
        maxWidth: 300, textWrap: "pretty", fontSize: "16px"
      }}>
        {sub}
      </p>

      <div style={{ height: 36 }} />

      {/* CTA */}
      <button style={{
        appearance: "none", border: "none", cursor: "pointer",
        width: "100%", height: 60, borderRadius: 999,
        background: SG_FG, color: SG_BG,
        fontFamily: "'Inter Tight', system-ui, sans-serif",
        fontWeight: 600, fontSize: 15, letterSpacing: "0.34em", textTransform: "uppercase",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
        transition: "transform 200ms ease, background 200ms ease"
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.98)"}
      onMouseUp={(e) => e.currentTarget.style.transform = ""}
      onMouseLeave={(e) => e.currentTarget.style.transform = ""}>
        
        {/* viewfinder glyph */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M3 8V5a2 2 0 0 1 2-2h3" />
          <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
          <path d="M3 16v3a2 2 0 0 0 2 2h3" />
          <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
        </svg>
        Scan
      </button>

      <div style={{ marginTop: 20, display: "flex", alignItems: "center", color: SG_DIM, justifyContent: "space-between" }}>
        <Micro>SG · 001</Micro>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, boxShadow: `0 0 8px ${accent}` }} />
          <Micro color={SG_FG}>READY</Micro>
        </div>
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// SCREEN 2 — Loading
// ─────────────────────────────────────────────────────────────
function ScreenLoading() {
  return (
    <div style={{
      width: "100%", height: "100%", background: SG_BG, color: SG_FG,
      fontFamily: "'Inter Tight', system-ui, sans-serif",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "76px 28px 44px", position: "relative", overflow: "hidden"
    }}>
      {/* top tag */}
      <div style={{ position: "absolute", top: 64, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 24px" }}>
        <Micro>SG · 001</Micro>
        <Micro>INIT</Micro>
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ color: SG_FG }}>
        <AnimatedLogo size={120} stroke={5} />
      </div>

      <div style={{ height: 36 }} />

      <div style={{
        fontSize: 17, fontWeight: 400, letterSpacing: "-0.01em", color: SG_FG
      }}>
        Getting ready<span className="sg-dots" />
      </div>
      <style>{`
        @keyframes sg-d { 0%,20%{opacity:0} 50%{opacity:1} 100%{opacity:0} }
        .sg-dots::after { content: ' . . .'; letter-spacing: 0.1em; opacity: 0.7; animation: sg-d 1.4s infinite; }
      `}</style>

      <div style={{ height: 6 }} />

      <Micro>SG · 001</Micro>

      <div style={{ flex: 1 }} />

      {/* progress hairline */}
      <div style={{ width: "70%", height: 1, background: SG_HAIR, position: "relative", overflow: "hidden", borderRadius: 1 }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(90deg, transparent, ${SG_FG}, transparent)`,
          animation: "sg-shimmer 1.6s ease-in-out infinite"
        }} />
        <style>{`
          @keyframes sg-shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
      <div style={{ height: 14 }} />
      <Micro style={{ opacity: 0.6 }}>02 / 04 — AR ENGINE</Micro>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// SCREEN 3 — Active scan
// ─────────────────────────────────────────────────────────────
function ScreenScan({ detected = false, accent = SG_GREEN }) {
  const boxColor = detected ? accent : "rgba(244,241,234,0.7)";
  const glow = detected ? `0 0 32px ${accent}, inset 0 0 24px rgba(120, 220, 150, 0.18)` : "none";

  return (
    <div style={{
      width: "100%", height: "100%", background: "#1a1a1a",
      color: SG_FG, fontFamily: "'Inter Tight', system-ui, sans-serif",
      position: "relative", overflow: "hidden"
    }}>
      {/* faux camera feed — gradient + grain. A drawn sticker sits in frame. */}
      <CameraFeed detected={detected} />

      {/* Top chrome — back + tag */}
      <div style={{
        position: "absolute", top: 60, left: 0, right: 0,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 18px", zIndex: 5
      }}>
        <button style={{
          width: 38, height: 38, borderRadius: 19, background: "rgba(10,10,10,0.55)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.12)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: SG_FG, cursor: "pointer"
        }} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div style={{
          padding: "8px 14px", borderRadius: 999, background: "rgba(10,10,10,0.55)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.12)",
          display: "flex", alignItems: "center", gap: 8
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: detected ? accent : "#ff4646",
            boxShadow: detected ? `0 0 8px ${accent}` : "0 0 8px #ff4646",
            animation: detected ? "none" : "sg-rec 1.2s ease-in-out infinite"
          }} />
          <Micro color={SG_FG} style={{ letterSpacing: "0.28em" }}>{detected ? "LOCKED" : "SCANNING"}</Micro>
          <style>{`@keyframes sg-rec {0%,100%{opacity:1}50%{opacity:0.35}}`}</style>
        </div>
      </div>

      {/* Bounding box centered */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -54%)",
        width: 244, height: 244, zIndex: 4, pointerEvents: "none"
      }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: 22,
          border: `1.5px solid ${boxColor}`,
          boxShadow: glow,
          transition: "border-color 240ms ease, box-shadow 320ms ease"
        }} />
        {/* 4 corner brackets — heavier weight for that scanner feel */}
        {[
        { top: -2, left: -2, borderTop: 1, borderLeft: 1 },
        { top: -2, right: -2, borderTop: 1, borderRight: 1 },
        { bottom: -2, left: -2, borderBottom: 1, borderLeft: 1 },
        { bottom: -2, right: -2, borderBottom: 1, borderRight: 1 }].
        map((pos, i) => {
          const s = {};
          if (pos.borderTop) s.borderTop = `2.5px solid ${boxColor}`;
          if (pos.borderLeft) s.borderLeft = `2.5px solid ${boxColor}`;
          if (pos.borderRight) s.borderRight = `2.5px solid ${boxColor}`;
          if (pos.borderBottom) s.borderBottom = `2.5px solid ${boxColor}`;
          const corner = {};
          if (pos.borderTop && pos.borderLeft) corner.borderTopLeftRadius = 22;
          if (pos.borderTop && pos.borderRight) corner.borderTopRightRadius = 22;
          if (pos.borderBottom && pos.borderLeft) corner.borderBottomLeftRadius = 22;
          if (pos.borderBottom && pos.borderRight) corner.borderBottomRightRadius = 22;
          return <div key={i} style={{
            position: "absolute", width: 26, height: 26,
            top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom,
            ...s, ...corner,
            transition: "border-color 240ms ease"
          }} />;
        })}

        {/* Scanning sweep line — only when not locked */}
        {!detected &&
        <>
            <div style={{
            position: "absolute", left: 8, right: 8, height: 1,
            background: `linear-gradient(90deg, transparent, ${SG_FG}, transparent)`,
            animation: "sg-sweep 2.2s ease-in-out infinite",
            opacity: 0.7
          }} />
            <style>{`@keyframes sg-sweep {
              0% { top: 12px; opacity: 0; }
              15% { opacity: 0.9; }
              85% { opacity: 0.9; }
              100% { top: calc(100% - 12px); opacity: 0; }
            }`}</style>
          </>
        }

        {/* center crosshair — only when locked */}
        {detected &&
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          color: accent
        }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12l4 4 10-10" />
            </svg>
          </div>
        }
      </div>

      {/* Instructional label */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 110, zIndex: 5,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        color: SG_FG, textAlign: "center"
      }}>
        <div style={{
          fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em",
          color: detected ? accent : SG_FG,
          transition: "color 240ms ease"
        }}>
          {detected ? "Locked. Hold for a second longer." : "Hold steady to scan."}
        </div>
        <Micro color={detected ? accent : SG_DIM}>
          {detected ? "DECODING SCENE" : "SG · 001"}
        </Micro>
      </div>
    </div>);

}

// Faux camera feed — grainy taupe wall + a hand-drawn sticker subject
function CameraFeed({ detected }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {/* base — warm desk surface, slight vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(120% 80% at 50% 60%, #2a2620 0%, #1a1714 55%, #0a0907 100%)"
      }} />
      {/* subtle grain */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18, mixBlendMode: "overlay" }}>
        <filter id="sg-grain">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#sg-grain)" />
      </svg>

      {/* the sticker subject — a drawn coffee mug, off-center, slightly rotated */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: `translate(-50%, -52%) rotate(-4deg) scale(${detected ? 1.02 : 1})`,
        transition: "transform 600ms cubic-bezier(.2,.8,.2,1)",
        width: 168, height: 168, background: "#efeae0",
        boxShadow: "0 16px 30px rgba(0,0,0,0.55), 0 2px 0 rgba(255,255,255,0.04) inset",
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: 4
      }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* mug */}
          <path d="M28 42 L28 86 Q28 96 38 96 L74 96 Q84 96 84 86 L84 42 Z" />
          <path d="M84 52 Q98 52 98 64 Q98 76 84 76" />
          {/* steam */}
          <path d="M44 32 Q40 24 46 18" strokeWidth="2.5" />
          <path d="M58 32 Q54 22 60 14" strokeWidth="2.5" />
          <path d="M72 32 Q68 24 74 18" strokeWidth="2.5" />
        </svg>
      </div>

      {/* AR overlay — animated stars & paths revealing on detect */}
      {detected && <ARReveal />}
    </div>);

}

function ARReveal() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <style>{`
        @keyframes sg-ar-fade { from { opacity: 0; transform: scale(.6); } to { opacity: 1; transform: scale(1); } }
        .sg-ar { animation: sg-ar-fade .6s cubic-bezier(.2,.8,.2,1) both; transform-box: fill-box; transform-origin: center; }
        .sg-ar-1 { animation-delay: .05s; } .sg-ar-2 { animation-delay: .18s; } .sg-ar-3 { animation-delay: .3s; } .sg-ar-4 { animation-delay: .42s; }
      `}</style>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 390 700" preserveAspectRatio="xMidYMid slice">
        <g stroke={SG_GREEN} fill={SG_GREEN} opacity={0.95}>
          <g className="sg-ar sg-ar-1"><Sparkle cx={250} cy={260} r={9} color={SG_GREEN} /></g>
          <g className="sg-ar sg-ar-2"><Sparkle cx={140} cy={300} r={6} color={SG_GREEN} /></g>
          <g className="sg-ar sg-ar-3"><Sparkle cx={270} cy={360} r={5} color={SG_GREEN} /></g>
          <g className="sg-ar sg-ar-4"><Sparkle cx={120} cy={400} r={7} color={SG_GREEN} /></g>
        </g>
        <g stroke={SG_GREEN} fill="none" strokeWidth="1.2" opacity="0.7">
          <path className="sg-ar sg-ar-2" d="M195 280 q 30 -20 60 -10" />
          <path className="sg-ar sg-ar-3" d="M195 380 q -30 20 -60 10" />
        </g>
      </svg>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// SCREEN 4 — Camera permission denied
// ─────────────────────────────────────────────────────────────
function ScreenDenied({ accent = SG_AMBER }) {
  return (
    <div style={{
      width: "100%", height: "100%", background: SG_BG, color: SG_FG,
      fontFamily: "'Inter Tight', system-ui, sans-serif",
      display: "flex", flexDirection: "column",
      padding: "76px 28px 44px", position: "relative"
    }}>
      {/* top */}
      <div style={{ position: "absolute", top: 64, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 24px" }}>
        <Micro>SG · 001</Micro>
        <Micro color={accent}>ERR · 04</Micro>
      </div>

      {/* close */}
      <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 10 }}>
        <button style={{
          width: 36, height: 36, borderRadius: 18, background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)", color: SG_FG,
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      <div style={{ flex: 1 }} />

      {/* crossed-out camera */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <div style={{ position: "relative", width: 88, height: 88, color: SG_FG }}>
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
            <circle cx="44" cy="44" r="42" stroke="rgba(244,241,234,0.18)" strokeWidth="1.5" strokeDasharray="3 5" />
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* camera body */}
              <path d="M22 36 L34 36 L38 30 L50 30 L54 36 L66 36 Q68 36 68 38 L68 60 Q68 62 66 62 L22 62 Q20 62 20 60 L20 38 Q20 36 22 36 Z" />
              <circle cx="44" cy="48" r="9" />
            </g>
            {/* slash */}
            <line x1="20" y1="22" x2="68" y2="68" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <Micro color={accent} style={{ textAlign: "center", display: "block" }}>CAMERA ACCESS REQUIRED</Micro>
      <div style={{ height: 12 }} />

      <h1 style={{
        margin: 0, textAlign: "center",
        fontWeight: 400, fontSize: 26, lineHeight: 1.15, letterSpacing: "-0.01em",
        color: SG_FG, textWrap: "balance"
      }}>
        We can't see what's in front of you yet.
      </h1>
      <p style={{
        margin: "14px auto 0", fontSize: 14, lineHeight: 1.55,
        color: "rgba(244,241,234,0.6)", textAlign: "center", maxWidth: 300, textWrap: "pretty"
      }}>
        Second Glance needs your camera to find stickers in the wild. Open Settings, switch the camera permission on, then come back.
      </p>

      <div style={{ height: 20 }} />

      {/* steps */}
      <div style={{
        margin: "0 auto", padding: "14px 16px",
        border: `1px solid ${SG_HAIR}`, borderRadius: 14, maxWidth: 320, width: "100%"
      }}>
        <Step n="01" label="Settings" />
        <Hairline />
        <Step n="02" label="Privacy & Security · Camera" />
        <Hairline />
        <Step n="03" label="Toggle Second Glance on" />
      </div>

      <div style={{ flex: 1 }} />

      {/* CTA */}
      <button style={{
        appearance: "none", border: "none", cursor: "pointer",
        width: "100%", height: 56, borderRadius: 999,
        background: SG_FG, color: SG_BG,
        fontFamily: "'Inter Tight', system-ui, sans-serif",
        fontWeight: 600, fontSize: 14, letterSpacing: "0.32em", textTransform: "uppercase"
      }}>
        Try again
      </button>
      <button style={{
        appearance: "none", background: "transparent", border: "none", cursor: "pointer",
        marginTop: 14, color: SG_DIM, fontSize: 13, letterSpacing: "0.04em"
      }}>
        Open device settings →
      </button>
    </div>);

}

function Step({ n, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 4px" }}>
      <Micro>{n}</Micro>
      <span style={{ fontSize: 13.5, color: SG_FG, letterSpacing: "-0.005em" }}>{label}</span>
    </div>);

}
function Hairline() {
  return <div style={{ height: 1, background: SG_HAIR }} />;
}

Object.assign(window, {
  ScreenLanding, ScreenLoading, ScreenScan, ScreenDenied,
  SG_BG, SG_FG, SG_DIM, SG_GREEN, SG_AMBER, Micro
});