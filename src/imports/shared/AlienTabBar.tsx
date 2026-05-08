const TABS = [
  { icon: "/img/tab-watch.png",   label: "Watch",   active: true  },
  { icon: "/img/tab-create.png",  label: "Create",  active: false },
  { icon: "/img/tab-earn.png",    label: "Earn",    active: false },
  { icon: "/img/tab-market.png",  label: "Market",  active: false },
  { icon: "/img/tab-profile.png", label: "Profile", active: false },
];

export default function AlienTabBar({ bg = "transparent" }: { bg?: string }) {
  return (
    <div style={{ width: "100%", flexShrink: 0, display: "flex", flexDirection: "column", background: bg }}>
      <div style={{ paddingTop: 8, display: "flex", alignItems: "center", width: "100%" }}>
        {TABS.map(({ icon, label, active }) => (
          <div key={label} style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            paddingTop: 4,
            paddingBottom: 4,
            minWidth: 0,
          }}>
            <div style={{ width: 28, height: 28, flexShrink: 0, opacity: active ? 1 : 0.45 }}>
              <img alt={label} src={icon} style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "12px",
              color: "#ffffff",
              opacity: active ? 1 : 0.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              margin: 0,
            }}>{label}</p>
          </div>
        ))}
      </div>
      <div style={{ height: 14, position: "relative", width: "100%" }}>
        <div style={{ position: "absolute", left: "50%", top: 8, transform: "translateX(-50%)", width: 64, height: 2, borderRadius: 32, background: "#fff" }} />
      </div>
    </div>
  );
}
