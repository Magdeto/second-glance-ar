// Second Glance — logo + animated logo
// The mark: a circle, a calligraphic "m" with a tall left stem (suggesting an A/h),
// and three 4-point sparkles in the upper right of the circle.
// Hand-translated from the source raster into clean SVG paths so we can
// stroke-draw and recolor freely.

// Calligraphic "m" path. Drawn at viewBox 0 0 200 200, intended center (100,100).
// Tall ascender on the left rises out of the circle, then three humps trail right.
const LOGO_M_PATH = "M 78 28 C 70 60, 78 90, 84 120 C 86 138, 80 152, 74 156 C 68 158, 64 152, 68 142 C 76 122, 96 96, 108 102 C 116 108, 110 130, 112 144 C 114 154, 122 154, 130 142 C 138 128, 148 108, 156 110 C 162 114, 158 130, 162 142";

// Outer circle — slightly broken (open near bottom-right) like the source
const LOGO_CIRCLE_PATH = "M 168 102 A 70 70 0 1 0 154 148";

// Three 4-point sparkles, placed in the upper right
function Sparkle({ cx, cy, r, color = "currentColor" }) {
  const d = `M ${cx} ${cy - r} L ${cx + r * 0.28} ${cy - r * 0.28} L ${cx + r} ${cy} L ${cx + r * 0.28} ${cy + r * 0.28} L ${cx} ${cy + r} L ${cx - r * 0.28} ${cy + r * 0.28} L ${cx - r} ${cy} L ${cx - r * 0.28} ${cy - r * 0.28} Z`;
  return <path d={d} fill={color} />;
}

// Static logo — solid fill, sized via CSS width/height. color via currentColor.
function Logo({ size = 64, stroke = 6, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ color, display: "block", ...style, width: "80px", height: "80px" }}
      aria-label="Second Glance">
      
      <g fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        <path d={LOGO_CIRCLE_PATH} />
        <path d={LOGO_M_PATH} strokeWidth={stroke + 1.5} />
      </g>
      <g fill="currentColor">
        <Sparkle cx={138} cy={70} r={10} />
        <Sparkle cx={155} cy={58} r={7} />
        <Sparkle cx={148} cy={84} r={5} />
      </g>
    </svg>);

}

// Animated logo — used on the loading screen.
// Sequence over 2s:
//   0.00 – 0.70s : "m" path draws on (stroke-dashoffset)
//   0.55 – 1.30s : circle draws around it
//   1.10 – 1.60s : sparkles fade/scale in (staggered)
//   1.60 – 2.00s : full mark holds
// Loops.
function AnimatedLogo({ size = 96, stroke = 6, color = "currentColor" }) {
  return (
    <div style={{ width: size, height: size, color, position: "relative" }}>
      <style>{`
        @keyframes sg-draw-m {
          0%, 0% { stroke-dashoffset: 700; }
          35%   { stroke-dashoffset: 0; }
          100%  { stroke-dashoffset: 0; }
        }
        @keyframes sg-draw-circle {
          0%, 27.5%  { stroke-dashoffset: 460; }
          65%        { stroke-dashoffset: 0; }
          100%       { stroke-dashoffset: 0; }
        }
        @keyframes sg-pop {
          0%, 55%   { opacity: 0; transform: scale(0.4); }
          70%       { opacity: 1; transform: scale(1.15); }
          80%, 100% { opacity: 1; transform: scale(1); }
        }
        .sg-anim-m {
          stroke-dasharray: 700;
          animation: sg-draw-m 2.4s cubic-bezier(.65,.05,.36,1) infinite;
        }
        .sg-anim-circle {
          stroke-dasharray: 460;
          animation: sg-draw-circle 2.4s cubic-bezier(.65,.05,.36,1) infinite;
        }
        .sg-spk {
          transform-box: fill-box;
          transform-origin: center;
          animation: sg-pop 2.4s ease-out infinite;
        }
        .sg-spk-1 { animation-delay: 0s; }
        .sg-spk-2 { animation-delay: 0.08s; }
        .sg-spk-3 { animation-delay: 0.16s; }
      `}</style>
      <svg width={size} height={size} viewBox="0 0 200 200" style={{ display: "block" }}>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path className="sg-anim-circle" d={LOGO_CIRCLE_PATH} strokeWidth={stroke} />
          <path className="sg-anim-m" d={LOGO_M_PATH} strokeWidth={stroke + 1.5} />
        </g>
        <g fill="currentColor">
          <g className="sg-spk sg-spk-1"><Sparkle cx={138} cy={70} r={10} /></g>
          <g className="sg-spk sg-spk-2"><Sparkle cx={155} cy={58} r={7} /></g>
          <g className="sg-spk sg-spk-3"><Sparkle cx={148} cy={84} r={5} /></g>
        </g>
      </svg>
    </div>);

}

// Wordmark — logo + name, horizontal
function Wordmark({ height = 28, color = "currentColor" }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, color }}>
      <Logo size={height * 1.05} stroke={7} />
      <span style={{
        fontFamily: "'Inter Tight', system-ui, sans-serif",
        fontWeight: 500, fontSize: height * 0.6, letterSpacing: "0.12em",
        textTransform: "uppercase"
      }}>
        Second Glance
      </span>
    </div>);

}

Object.assign(window, { Logo, AnimatedLogo, Wordmark, Sparkle });