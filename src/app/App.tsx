import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FeedScreen from "../imports/01Feed/01Feed";
import TapReward from "../imports/TapReward/TapReward";

type Screen = "feed" | "tap-reward";

const FRAME_W = 360;

export default function App() {
  const [screen, setScreen] = useState<Screen>("feed");
  const navigate = (s: string) => setScreen(s as Screen);

  return (
    <div className="size-full flex items-center justify-center bg-[#0a0a0a]" style={{ height: "100dvh" }}>
      <div
        className="relative overflow-hidden"
        style={{ width: "100%", maxWidth: FRAME_W, height: "100dvh", background: "#000" }}
      >
        <AnimatePresence mode="wait">
          {screen === "feed" && (
            <motion.div key="feed" className="absolute inset-0"
              initial={{ opacity: 1 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.4, ease: [0, 0, 0.58, 1] } }}
            >
              <FeedScreen onNavigate={navigate} />
            </motion.div>
          )}

          {screen === "tap-reward" && (
            <motion.div key="tap-reward" className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.45, ease: [0, 0, 0.58, 1] } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <TapReward onNavigate={navigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
