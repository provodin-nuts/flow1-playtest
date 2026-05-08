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

const BUTTONS = [
  { icon: "/img/auth-google.png",    label: "Google"   },
  { icon: "/img/auth-email.png",     label: "Email"    },
  { icon: "/img/auth-whatsapp.png",  label: "WhatsApp" },
];

export default function SignUp() {
  return (
    <div style={{
      position: "relative", width: "100%", height: "100%",
      backgroundColor: "#161616", overflow: "hidden",
    }}>
      {/* Hero image */}
      <img alt="" src="/img/signup-hero.jpg"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 582, objectFit: "cover", display: "block" }}
      />

      {/* Gradient fade hero→dark */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 582,
        background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 65%, #161616 95%)",
      }} />

      {/* Status bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, paddingTop: 4 }}>
        <StatusBar />
      </div>

      {/* Content block */}
      <div style={{ position: "absolute", top: 517, left: 16, right: 16, zIndex: 5 }}>
        <p style={{
          fontFamily: "'Russo One', sans-serif", fontSize: 14, lineHeight: "16px",
          fontWeight: 400, color: "#ffffff", textAlign: "center", margin: 0,
        }}>
          Sign in or register to continue
        </p>

        <div style={{ height: 24 }} />

        {/* Auth buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
          {BUTTONS.map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <button
                style={{
                  width: 52, height: 52, borderRadius: 20, border: "none", cursor: "pointer",
                  background: "linear-gradient(0deg, rgba(255,255,255,1) 12%, rgba(255,255,255,0.72) 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center", padding: 0,
                }}
                onPointerDown={(e) => (e.currentTarget.style.opacity = "0.85")}
                onPointerUp={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <img alt={label} src={icon} style={{ width: 28, height: 28, display: "block" }} />
              </button>
              <span style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 12,
                lineHeight: "14px", color: "#ffffff", textAlign: "center",
              }}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{ height: 24 }} />

        {/* Checkbox + legal */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
          <img alt="" src="/img/checkbox-on.png" style={{ width: 24, height: 24, flexShrink: 0, marginTop: 1 }} />
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 12,
            lineHeight: "14px", color: "#ffffff", margin: 0,
          }}>
            I agree with the user agreement, terms of use and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
