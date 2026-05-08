import { useEffect } from "react";
import AlienTabBar from "../shared/AlienTabBar";

const imgAndroidBluetooth      = "https://www.figma.com/api/mcp/asset/57dc6fb8-c18e-4479-a70c-a718b54867ae";
const imgAndroidWiFi           = "https://www.figma.com/api/mcp/asset/f0c53ec5-6271-459f-af4d-ade0406cfbb3";
const imgAndroidCellularSignal = "https://www.figma.com/api/mcp/asset/3cf9b379-2ea2-427e-b79f-c72e5acef4e1";
const imgAndroidBattery        = "https://www.figma.com/api/mcp/asset/c016af1f-8e84-45fe-ab6c-982df4df8d23";

function StatusBar() {
  return (
    <div style={{ height: 24, position: "relative", width: "100%" }}>
      <div style={{ position: "absolute", left: 16, top: 5, fontFamily: "sans-serif", fontSize: 12, color: "white" }}>
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

export default function Swirl({ onNavigate }: { onNavigate: (screen: string) => void }) {
  // After delay 800ms → First_reward (Figma: Smart animate, Ease out, 300ms)
  useEffect(() => {
    const t = setTimeout(() => onNavigate("first-reward"), 800);
    return () => clearTimeout(t);
  }, [onNavigate]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#000" }}>
      <style>{`
        @keyframes swirlPulse {
          0%, 100% { transform: scale(1);    }
          50%       { transform: scale(1.06); }
        }
      `}</style>

      {/* ONLY the swirl image pulses */}
      <img
        alt=""
        src="/img/swirl-bg.jpg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          animation: "swirlPulse 4s ease-in-out infinite",
          transformOrigin: "center center",
        }}
      />

      {/* Status bar — static, z-50 */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 50,
        paddingTop: 4,
      }}>
        <StatusBar />
      </div>

      {/* Tab bar — static, z-50, opaque background */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 50,
        background: "#100820",
      }}>
        <AlienTabBar />
      </div>
    </div>
  );
}
