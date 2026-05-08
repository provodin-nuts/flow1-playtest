const imgUfo     = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05c7f3f9-43f4-4bd5-b274-b25517a2ab10";
const imgTapIcon = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0891dbb3-f1dc-4388-83fd-34c7ee7c4f82";

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
    <div className="h-[24px] relative w-full" style={{ flexShrink: 0 }}>
      <div className="absolute flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-normal left-[16px] text-[12px] text-white top-[5px] whitespace-nowrap">
        <span style={{ fontVariationSettings: "'wdth' 100" }}>09</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>:</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>30</span>
      </div>
      <span className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-normal left-[49px] text-[12px] text-white top-[5px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}>PM</span>
      <div className="-translate-y-1/2 absolute flex gap-[8px] items-center justify-end right-[16px] top-1/2 w-[89px]">
        <div className="relative shrink-0 size-[14px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAndroidBluetooth} />
        </div>
        <div className="h-[14px] relative shrink-0 w-[15px]">
          <div className="absolute inset-[0_-6.67%_-1.73%_-6.67%]">
            <img alt="" className="block max-w-none size-full" src={imgAndroidWiFi} />
          </div>
        </div>
        <div className="h-[16px] overflow-clip relative shrink-0 w-[18px]">
          <span className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[0_55.56%_56.25%_0] leading-normal text-[6px] text-white whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}>5G</span>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAndroidCellularSignal} />
        </div>
        <div className="h-[11px] relative shrink-0 w-[18.5px]">
          <div className="absolute inset-[-4.55%_-2.7%]">
            <img alt="" className="block max-w-none size-full" src={imgAndroidBattery} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TabBar() {
  return (
    <div className="backdrop-blur-[10px] flex flex-col gap-[4px] items-start justify-end pt-[8px] rounded-tl-[28px] rounded-tr-[28px] w-full"
         style={{ background: "rgba(22,22,22,0.75)" }}>
      <div className="flex gap-[8px] items-center w-full">
        {[
          { icon: imgTabFeed,    label: "Watch" },
          { icon: imgTabCreate,  label: "Create" },
          { icon: imgTabEarn,    label: "Earn" },
          { icon: imgTabMarket,  label: "Market" },
          { icon: imgTabProfile, label: "Profile" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex flex-1 flex-col gap-[2px] items-center min-w-0 py-[4px]">
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
            </div>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[12px] text-[12px] text-white text-center tracking-[0.12px] whitespace-nowrap">
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="h-[14px] relative w-full">
        <div className="absolute bg-white h-[2px] left-1/2 -translate-x-1/2 rounded-[32px] top-[8px] w-[64px]" />
      </div>
    </div>
  );
}

export default function TapReward({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div
      onClick={() => onNavigate("tap-reward")}
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
          50%       { transform: translateY(-14px); }
        }
        @keyframes ufoGlow {
          from { filter: drop-shadow(0 0 20px rgba(110,255,70,0.3)) drop-shadow(0 0 40px rgba(180,80,255,0.2)); }
          to   { filter: drop-shadow(0 0 36px rgba(110,255,70,0.55)) drop-shadow(0 0 70px rgba(180,80,255,0.42)); }
        }
        @keyframes tapPulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50%       { opacity: 0.75; transform: scale(1.08); }
        }
      `}</style>

      {/* Status bar */}
      <div style={{ width: "100%", paddingTop: 4, flexShrink: 0 }}>
        <StatusBar />
      </div>

      {/* UFO image — centered, takes flex space */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}>
        <img
          alt="UFO"
          src={imgUfo}
          style={{
            width: "100%",
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
      }}>
        <img
          alt="tap"
          src={imgTapIcon}
          style={{
            width: 44,
            height: 44,
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
