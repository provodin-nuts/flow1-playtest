import { useState } from "react";
import FeedScreen from "../imports/01Feed/01Feed";

type Screen = "feed";

const FRAME_W = 360;

export default function App() {
  const [screen] = useState<Screen>("feed");

  return (
    <div className="size-full flex items-center justify-center bg-[#0a0a0a]" style={{ height: "100dvh" }}>
      <div
        className="relative overflow-hidden"
        style={{ width: "100%", maxWidth: FRAME_W, height: "100dvh", background: "#000" }}
      >
        {screen === "feed" && <FeedScreen />}
      </div>
    </div>
  );
}
