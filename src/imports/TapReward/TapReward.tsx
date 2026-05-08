const imgAndroidBluetooth      = "https://www.figma.com/api/mcp/asset/57dc6fb8-c18e-4479-a70c-a718b54867ae";
const imgAndroidWiFi           = "https://www.figma.com/api/mcp/asset/f0c53ec5-6271-459f-af4d-ade0406cfbb3";
const imgAndroidCellularSignal = "https://www.figma.com/api/mcp/asset/3cf9b379-2ea2-427e-b79f-c72e5acef4e1";
const imgAndroidBattery        = "https://www.figma.com/api/mcp/asset/c016af1f-8e84-45fe-ab6c-982df4df8d23";

const imgTabFeed    = "https://www.figma.com/api/mcp/asset/b022cf06-9905-4097-beb5-aca8eccba7a9";
const imgTabCreate  = "https://www.figma.com/api/mcp/asset/7be1250c-b004-4e00-9a74-e25604eede74";
const imgTabEarn    = "https://www.figma.com/api/mcp/asset/cd3b0eb4-4de4-40b2-a3d6-42c19a5527cc";
const imgTabMarket  = "https://www.figma.com/api/mcp/asset/dc8ca80d-98d8-40c7-8b65-8096104c27f1";
const imgTabProfile = "https://www.figma.com/api/mcp/asset/d12e21c5-12cf-4240-8d98-0a78caa35bd2";

const TAB_BAR_H = 78;

function StatusBar() {
  return (
    <div style={{ height: 24, position: "relative", width: "100%", flexShrink: 0 }}>
      <div style={{ position: "absolute", display: "flex", fontFamily: "sans-serif", fontSize: 12, color: "white", left: 16, top: 5, whiteSpace: "nowrap" }}>
        <span>09:30</span>
      </div>
      <span style={{ position: "absolute", fontFamily: "sans-serif", fontSize: 12, color: "white", left: 49, top: 5 }}>PM</span>
      <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ position: "relative", flexShrink: 0, width: 14, height: 14 }}>
          <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgAndroidBluetooth} />
        </div>
        <div style={{ height: 14, position: "relative", flexShrink: 0, width: 15 }}>
          <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgAndroidWiFi} />
        </div>
        <div style={{ height: 16, position: "relative", flexShrink: 0, width: 18 }}>
          <span style={{ position: "absolute", fontSize: 6, color: "white", top: 0, left: 0 }}>5G</span>
          <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgAndroidCellularSignal} />
        </div>
        <div style={{ height: 11, position: "relative", flexShrink: 0, width: 18.5 }}>
          <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgAndroidBattery} />
        </div>
      </div>
    </div>
  );
}

function TabBar() {
  return (
    <div style={{
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingTop: 8,
      borderRadius: "28px 28px 0 0",
      width: "100%",
      background: "rgba(22,22,22,0.75)",
    }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", width: "100%" }}>
        {[
          { icon: imgTabFeed,    label: "Watch" },
          { icon: imgTabCreate,  label: "Create" },
          { icon: imgTabEarn,    label: "Earn" },
          { icon: imgTabMarket,  label: "Market" },
          { icon: imgTabProfile, label: "Profile" },
        ].map(({ icon, label }) => (
          <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, alignItems: "center", padding: "4px 0" }}>
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={icon} />
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 12, color: "white", textAlign: "center", margin: 0, whiteSpace: "nowrap" }}>
              {label}
            </p>
          </div>
        ))}
      </div>
      <div style={{ height: 14, position: "relative", width: "100%" }}>
        <div style={{ position: "absolute", background: "white", height: 2, left: "50%", transform: "translateX(-50%)", borderRadius: 32, top: 8, width: 64 }} />
      </div>
    </div>
  );
}

export default function TapReward({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div
      onClick={() => onNavigate("swirl")}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <style>{`
        @keyframes ufoFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes ufoGlow {
          from { filter: drop-shadow(0 0 24px rgba(110,255,70,0.35)) drop-shadow(0 0 48px rgba(200,80,255,0.25)); }
          to   { filter: drop-shadow(0 0 40px rgba(110,255,70,0.6)) drop-shadow(0 0 80px rgba(200,80,255,0.5)); }
        }
        @keyframes tapPulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50%       { opacity: 0.8;  transform: scale(1.1); }
        }
        @keyframes vortexSpin {
          from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          to   { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
        }
      `}</style>

      {/* Dark vortex background */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 45%, #180028 0%, #0a0010 45%, #000 80%)",
      }} />
      {/* Swirl glow overlay */}
      <img
        alt=""
        src="/img/glow.png"
        style={{
          position: "absolute",
          left: "50%",
          top: "42%",
          transform: "translate(-50%, -50%)",
          width: "105%",
          height: "auto",
          filter: "saturate(5) hue-rotate(200deg) contrast(1.4) brightness(0.7)",
          opacity: 0.45,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* Status bar */}
      <div style={{ width: "100%", paddingTop: 4, flexShrink: 0, position: "relative", zIndex: 10 }}>
        <StatusBar />
      </div>

      {/* UFO image */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "relative",
        zIndex: 5,
      }}>
        <img
          alt="UFO"
          src="/img/boxes.png"
          style={{
            width: "90%",
            maxWidth: 340,
            height: "auto",
            objectFit: "contain",
            animation: "ufoFloat 3.2s ease-in-out infinite, ufoGlow 2.8s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Tap icon + text */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        paddingBottom: TAB_BAR_H + 28,
        flexShrink: 0,
        position: "relative",
        zIndex: 5,
      }}>
        <img
          alt="tap"
          src="/img/tap-icon.png"
          style={{
            width: 48,
            height: 48,
            animation: "tapPulse 1.6s ease-in-out infinite",
          }}
        />
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 20,
          fontWeight: 400,
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          letterSpacing: 0.2,
        }}>
          Tap to catch reward
        </p>
      </div>

      {/* Tab bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 50 }}>
        <TabBar />
      </div>
    </div>
  );
}
