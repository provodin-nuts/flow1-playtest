import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FeedScreen from "../imports/01Feed/01Feed";
import TapReward from "../imports/TapReward/TapReward";
import Swirl from "../imports/Swirl/Swirl";
import FirstReward from "../imports/FirstReward/FirstReward";
import SignUp from "../imports/SignUp/SignUp";

type Screen = "feed" | "tap-reward" | "swirl" | "first-reward" | "sign-up";

const FRAME_W = 360;

const fade = (dur: number, ease: number[] = [0, 0, 0.58, 1]) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: dur, ease } },
  exit:    { opacity: 0, transition: { duration: 0.3 } },
});

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
            <motion.div key="tap-reward" className="absolute inset-0" {...fade(0.45)}>
              <TapReward onNavigate={navigate} />
            </motion.div>
          )}

          {/* Smart animate: scale + fade, 1200ms ease-out */}
          {screen === "swirl" && (
            <motion.div key="swirl" className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0, 0, 0.42, 1] } }}
              exit={{ opacity: 0, transition: { duration: 0.35 } }}
            >
              <Swirl onNavigate={navigate} />
            </motion.div>
          )}

          {screen === "first-reward" && (
            <motion.div key="first-reward" className="absolute inset-0" {...fade(0.3)}>
              <FirstReward onNavigate={navigate} />
            </motion.div>
          )}

          {screen === "sign-up" && (
            <motion.div key="sign-up" className="absolute inset-0" {...fade(0.4)}>
              <SignUp />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
