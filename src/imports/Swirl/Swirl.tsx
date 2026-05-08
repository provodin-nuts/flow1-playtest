// Screen 3: psychedelic swirl — full-screen, baked-in status bar + tab bar
// Image exported from Figma node 2032-7345 (720×1600)

export default function Swirl({ onNavigate: _onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      background: "#000",
    }}>
      <style>{`
        @keyframes swirlPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.03); }
        }
      `}</style>
      <img
        alt="swirl"
        src="/img/swirl-screen.png"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          animation: "swirlPulse 4s ease-in-out infinite",
        }}
      />
    </div>
  );
}
