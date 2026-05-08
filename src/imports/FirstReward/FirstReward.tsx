import AlienTabBar from "../shared/AlienTabBar";

const imgAndroidBluetooth      = "https://www.figma.com/api/mcp/asset/57dc6fb8-c18e-4479-a70c-a718b54867ae";
const imgAndroidWiFi           = "https://www.figma.com/api/mcp/asset/f0c53ec5-6271-459f-af4d-ade0406cfbb3";
const imgAndroidCellularSignal = "https://www.figma.com/api/mcp/asset/3cf9b379-2ea2-427e-b79f-c72e5acef4e1";
const imgAndroidBattery        = "https://www.figma.com/api/mcp/asset/c016af1f-8e84-45fe-ab6c-982df4df8d23";

function StatusBar() {
  return (
    <div style={{ height: 24, flexShrink: 0, position: "relative", width: "100%" }}>
      <div style={{ position: "absolute", left: 16, top: 5, fontFamily: "'Roboto', sans-serif", fontSize: 12, color: "white" }}>
        09:30 PM
      </div>
      <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", display: "flex", gap: 8, alignItems: "center" }}>
        <img alt="" style={{ width: 14, height: 14 }} src={imgAndroidBluetooth} />
        <img alt="" style={{ width: 15, height: 14 }} src={imgAndroidWiFi} />
        <div style={{ position: "relative", width: 18, height: 16 }}>
          <span style={{ position: "absolute", top: 0, left: 0, fontSize: 6, color: "white", fontFamily: "sans-serif" }}>5G</span>
          <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgAndroidCellularSignal} />
        </div>
        <img alt="" style={{ width: 18.5, height: 11 }} src={imgAndroidBattery} />
      </div>
    </div>
  );
}

export default function FirstReward({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#161616",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      <StatusBar />

      <div style={{ height: 45, flexShrink: 0 }} />

      {/* Carousel image */}
      <div style={{ width: "100%", height: 260, flexShrink: 0 }}>
        <img alt="Reward" src="/img/carousel.png"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>

      <div style={{ height: 12, flexShrink: 0 }} />

      {/* Reward texts */}
      <div style={{ width: "100%", flexShrink: 0, display: "flex", flexDirection: "column" }}>
        <p style={{
          fontFamily: "'Russo One', sans-serif", fontSize: 20, lineHeight: "24px",
          fontWeight: 400, color: "#ffffff", textAlign: "center", margin: 0, padding: "0 16px",
        }}>
          Sign up and get&nbsp;up to
        </p>
        <p style={{
          fontFamily: "'Russo One', sans-serif", fontSize: 36, lineHeight: "40px",
          fontWeight: 400, color: "#ffffff", textAlign: "center", margin: "8px 0 0", padding: "0 16px",
        }}>
          ≈$3.294
        </p>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#ffffff" }}>
            in DOPPY
          </span>
          <img alt="DOPPY" src="/img/coin.png" style={{ width: 20, height: 20, flexShrink: 0 }} />
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* Bottom block */}
      <div style={{ width: "100%", flexShrink: 0, padding: "0 16px" }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: "24px",
          color: "#ffffff", textAlign: "center", margin: 0,
        }}>
          Watch the feed, get DOPPY, withdraw to card
        </p>
        <p style={{
          fontFamily: "'Russo One', sans-serif", fontSize: 20, lineHeight: "24px",
          fontWeight: 400, color: "#ffffff", textAlign: "center", margin: "4px 0 0",
        }}>
          Sign up to pick up your reward!
        </p>

        <div style={{ height: 44 }} />

        <button
          onClick={() => onNavigate?.("sign-up")}
          style={{
            width: "100%", height: 52, borderRadius: 20, border: "none", cursor: "pointer",
            background: "radial-gradient(ellipse at 0% 100%, #ffffff 20%, #a3ff8b 60%, #ff9ff7 90%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          onPointerDown={(e) => (e.currentTarget.style.opacity = "0.85")}
          onPointerUp={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <span style={{
            fontFamily: "'Russo One', sans-serif", fontSize: 12,
            letterSpacing: 0.5, color: "#161616", fontWeight: 400,
          }}>
            SIGN UP
          </span>
        </button>
      </div>

      <div style={{ height: 20, flexShrink: 0 }} />

      <AlienTabBar bg="#161616" />
    </div>
  );
}
