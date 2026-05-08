import { useEffect, useRef } from "react";

// Figma-exported assets (hosted on flow2's S3 via Cloudflare — same CDN)
const imgAndroidBluetooth      = "https://www.figma.com/api/mcp/asset/57dc6fb8-c18e-4479-a70c-a718b54867ae";
const imgAndroidWiFi           = "https://www.figma.com/api/mcp/asset/f0c53ec5-6271-459f-af4d-ade0406cfbb3";
const imgAndroidCellularSignal = "https://www.figma.com/api/mcp/asset/3cf9b379-2ea2-427e-b79f-c72e5acef4e1";
const imgAndroidBattery        = "https://www.figma.com/api/mcp/asset/c016af1f-8e84-45fe-ab6c-982df4df8d23";
const imgAvatar                = "https://www.figma.com/api/mcp/asset/7e1b4304-78c7-4800-8fa8-9cf25564c4f3";
const imgMusicArt              = "https://www.figma.com/api/mcp/asset/e8cc44a1-daff-48df-8854-3ddebad0521e";
const imgBadge                 = "https://www.figma.com/api/mcp/asset/76588d59-5d05-4d09-beeb-c90e03b94789";
const imgCheck                 = "https://www.figma.com/api/mcp/asset/40b4c752-a467-4990-9157-b7b01b3aa15a";
const imgFollowPlus            = "https://www.figma.com/api/mcp/asset/0039f82b-2da4-4ae1-ad64-c0309f212c1a";
const imgLike                  = "https://www.figma.com/api/mcp/asset/a30918e4-c4fc-44f3-9d4e-2fd3232ea4e7";
const imgComment               = "https://www.figma.com/api/mcp/asset/66809f43-1f1c-4dac-8a38-28c054be9807";
const imgShare                 = "https://www.figma.com/api/mcp/asset/bf28221d-e73e-4a99-8d4d-90475345c2a7";
const imgMore                  = "https://www.figma.com/api/mcp/asset/4f15b9da-baa9-4602-9d03-26af7226e23d";
const imgMusicMask             = "https://www.figma.com/api/mcp/asset/a016432f-a0ac-4eed-8378-be20112ce9fb";
const imgMusicStroke           = "https://www.figma.com/api/mcp/asset/d789bfe5-e414-45aa-a067-6a1c30743791";
const imgMusicNote             = "https://www.figma.com/api/mcp/asset/2e393041-0e58-488e-9086-b3ff1cb91b81";
const imgTabFeed               = "https://www.figma.com/api/mcp/asset/b022cf06-9905-4097-beb5-aca8eccba7a9";
const imgTabCreate             = "https://www.figma.com/api/mcp/asset/7be1250c-b004-4e00-9a74-e25604eede74";
const imgTabEarn               = "https://www.figma.com/api/mcp/asset/cd3b0eb4-4de4-40b2-a3d6-42c19a5527cc";
const imgTabMarket             = "https://www.figma.com/api/mcp/asset/dc8ca80d-98d8-40c7-8b65-8096104c27f1";
const imgTabProfile            = "https://www.figma.com/api/mcp/asset/d12e21c5-12cf-4240-8d98-0a78caa35bd2";
const imgLive                  = "https://www.figma.com/api/mcp/asset/8771bf8b-3884-4b1b-968f-459e30969251";
const imgLiveDot               = "https://www.figma.com/api/mcp/asset/d3a3e56a-d41e-4079-9189-1cc0bd865552";
const imgDatingIcon            = "https://www.figma.com/api/mcp/asset/cbb5120b-ec70-4f55-b0b9-a2e4633d710d";
const imgSearch                = "https://www.figma.com/api/mcp/asset/a531f7ca-fa76-4135-975a-b78d3d1fb672";
const imgKindDoppy             = "https://www.figma.com/api/mcp/asset/93fa020b-fff6-44cc-82cc-190eab583b16";

const TAB_BAR_H = 78;

interface Slide {
  id: number;
  videoUrl: string;
  username: string;
  description: string;
  likes: string;
  comments: string;
  shares: string;
}

const SLIDES: Slide[] = [
  { id: 1, videoUrl: "/videos/v1.mp4", username: "@flower_vibes",   description: "Nature never gets old 🌸",                        likes: "21.6k", comments: "1.5k", shares: "8.1k" },
  { id: 2, videoUrl: "/videos/v2.mp4", username: "@friday_mood",    description: "Friday feeling hits different 🎉",                likes: "43.2k", comments: "3.2k", shares: "12.4k" },
  { id: 3, videoUrl: "/videos/v3.mp4", username: "@bunny_official", description: "The most wholesome content you will see today 🐰", likes: "156k",  comments: "8.4k", shares: "34.1k" },
  { id: 4, videoUrl: "/videos/v4.mp4", username: "@just_chill",     description: "Sometimes simple is perfect ✨",                  likes: "67.8k", comments: "4.1k", shares: "19.3k" },
  { id: 5, videoUrl: "/videos/v5.mp4", username: "@sintel_dreams",  description: "Epic journey begins here 🗡️",                    likes: "89.4k", comments: "6.2k", shares: "25.7k" },
  { id: 6, videoUrl: "/videos/v6.mp4", username: "@sample_vibes",   description: "Every frame tells a story 📽️",                   likes: "28.9k", comments: "2.7k", shares: "11.5k" },
];

// Static "Earn rewards" button — no progress ring, no animation
function EarnRewardsButton() {
  return (
    <div style={{
      height: 44,
      display: "flex",
      alignItems: "center",
      gap: 8,
      paddingLeft: 10,
      paddingRight: 16,
      background: "rgba(22,22,22,0.85)",
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    }}>
      {/* Neon green dollar icon */}
      <div style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #c2ef43 0%, #6eff46 100%)",
        boxShadow: "0 0 8px rgba(110,255,70,0.7), 0 0 18px rgba(110,255,70,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <text x="50%" y="13" textAnchor="middle"
            style={{ fontFamily: "'Russo One', sans-serif", fontSize: 14, fontWeight: 900, fill: "#0d2200" }}>
            $
          </text>
        </svg>
      </div>
      <p style={{
        fontFamily: "'Russo One', sans-serif",
        fontSize: 12,
        lineHeight: "14px",
        color: "white",
        letterSpacing: "0.12px",
        whiteSpace: "nowrap",
      }}>
        Earn rewards
      </p>
    </div>
  );
}

function FeedSlide({ slide, isFirst }: { slide: Slide; isFirst?: boolean }) {
  const slideRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = slideRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else { video.pause(); video.currentTime = 0; }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={slideRef}
      style={{ height: "100dvh", scrollSnapAlign: "start" } as React.CSSProperties}
      className="relative overflow-hidden bg-[#0d0d0d]"
    >
      <video
        ref={videoRef}
        muted loop playsInline
        preload={isFirst ? "auto" : "metadata"}
        autoPlay={isFirst}
        className="absolute inset-0 size-full object-cover"
      >
        <source src={slide.videoUrl} type="video/mp4" />
      </video>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[215px] pointer-events-none"
           style={{ background: "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.8))", zIndex: 2 }} />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
           style={{ height: 340, background: "linear-gradient(to bottom, rgba(0,0,0,0), #000 65%)", zIndex: 2 }} />

      {/* Per-slide content */}
      <div className="absolute left-0 right-0" style={{ bottom: TAB_BAR_H + 18, zIndex: 3 }}>
        <div className="flex gap-[12px] items-end pl-[12px] pr-[8px]">

          {/* Left: about + donations */}
          <div className="flex flex-1 flex-col gap-[8px] items-start overflow-hidden min-w-0">
            <div className="flex flex-col gap-[8px] w-full">
              <div className="flex gap-[4px] items-center">
                <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic text-[14px] text-white drop-shadow-[0px_0px_2px_rgba(0,0,0,0.3)] tracking-[0.14px] whitespace-nowrap">
                  {slide.username}
                </p>
                <div className="relative shrink-0 size-[12px] overflow-clip drop-shadow-[0px_0px_1px_rgba(0,0,0,0.3)]">
                  <img alt="" className="absolute inset-0 max-w-none size-full" src={imgBadge} />
                  <img alt="" className="absolute left-1/2 top-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2 size-[7px]" src={imgCheck} />
                </div>
              </div>
              <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[16px] text-[12px] text-white drop-shadow-[0px_0px_2px_rgba(0,0,0,0.3)] tracking-[0.12px] w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {slide.description}
              </p>
            </div>

            {/* Donation chips */}
            <div className="flex gap-[8px] items-center overflow-hidden w-full shrink-0">
              <div className="bg-[#161616] border border-white flex gap-[8px] h-[32px] items-center px-[12px] rounded-[12px] shrink-0">
                <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic text-[12px] text-white tracking-[0.12px] whitespace-nowrap">Donate</p>
                <div className="flex gap-[2px] items-center">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgKindDoppy} />
                  </div>
                  <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic text-[12px] text-white tracking-[0.12px] whitespace-nowrap">0.1</p>
                </div>
              </div>
              {["0.5", "1,0", "10,0"].map(amt => (
                <div key={amt}
                     className="border border-[rgba(255,255,255,0.15)] flex gap-[2px] h-[32px] items-center px-[12px] rounded-[12px] shrink-0"
                     style={{ background: "linear-gradient(to right, rgba(22,22,22,0), rgba(22,22,22,0.7))" }}>
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgKindDoppy} />
                  </div>
                  <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic text-[12px] text-white tracking-[0.12px] whitespace-nowrap">{amt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right bar */}
          <div className="flex flex-col gap-[12px] items-center justify-end shrink-0 w-[40px]">
            {/* Avatar */}
            <div className="relative size-[44px] shrink-0">
              <img alt="" src={imgAvatar}
                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[30px] rounded-full object-cover drop-shadow-[0px_0px_0.909px_rgba(0,0,0,0.4)]" />
              <svg viewBox="0 0 36 36"
                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[36px]"
                   style={{ pointerEvents: "none" }}>
                <circle cx="18" cy="18" r="16.5" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
              </svg>
              <div className="absolute right-0 top-0 size-[16px] rounded-[100px] flex items-center justify-center drop-shadow-[0px_0px_1px_rgba(0,0,0,0.3)]"
                   style={{ background: "linear-gradient(135deg, rgb(194,239,67) 0%, rgb(110,255,70) 100%)" }}>
                <div className="relative size-[8px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFollowPlus} />
                </div>
              </div>
            </div>

            {/* Like */}
            <div className="flex flex-col items-center w-full">
              <div className="relative shrink-0 size-[32px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLike} />
              </div>
              <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic text-[12px] text-white text-center drop-shadow-[0px_0px_2px_rgba(0,0,0,0.3)] tracking-[0.12px] whitespace-nowrap">{slide.likes}</p>
            </div>

            {/* Comment */}
            <div className="flex flex-col items-center w-full">
              <div className="overflow-clip relative shrink-0 size-[32px]">
                <div className="absolute inset-[12.5%]">
                  <div className="absolute inset-[-4.23%]">
                    <img alt="" className="block max-w-none size-full" src={imgComment} />
                  </div>
                </div>
              </div>
              <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic text-[12px] text-white text-center drop-shadow-[0px_0px_2px_rgba(0,0,0,0.3)] tracking-[0.12px] whitespace-nowrap">{slide.comments}</p>
            </div>

            {/* Share */}
            <div className="flex flex-col items-center w-full">
              <div className="relative shrink-0 size-[32px]">
                <div className="-translate-x-1/2 absolute left-1/2 top-[20%] bottom-[20%]" style={{ aspectRatio: "18.9/15.3" }}>
                  <div className="absolute inset-[-10.47%_-8.46%]">
                    <img alt="" className="block max-w-none size-full" src={imgShare} />
                  </div>
                </div>
              </div>
              <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic text-[12px] text-white text-center drop-shadow-[0px_0px_2px_rgba(0,0,0,0.3)] tracking-[0.12px] whitespace-nowrap">{slide.shares}</p>
            </div>

            {/* More + Music */}
            <div className="flex flex-col gap-[6px] items-center w-full">
              <div className="relative shrink-0 size-[32px]">
                <div className="absolute top-1/2 -translate-y-1/2 left-[22%] right-[22%]" style={{ aspectRatio: "6/1" }}>
                  <div className="absolute inset-[-66.67%_-11.11%]">
                    <img alt="" className="block max-w-none size-full" src={imgMore} />
                  </div>
                </div>
              </div>
              <div className="drop-shadow-[0px_0px_1px_rgba(0,0,0,0.3)] overflow-clip relative shrink-0 size-[32px]">
                <div className="absolute left-[4px] top-[4px] size-[22px]"
                     style={{ maskImage: `url('${imgMusicMask}')`, WebkitMaskImage: `url('${imgMusicMask}')`, maskSize: "22px 22px", WebkitMaskSize: "22px 22px", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat" }}>
                  <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgMusicArt} />
                </div>
                <div className="absolute left-[4px] top-[4px] size-[22px]"
                     style={{ maskImage: `url('${imgMusicMask}')`, WebkitMaskImage: `url('${imgMusicMask}')`, maskSize: "22px 22px", WebkitMaskSize: "22px 22px", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat" }}>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMusicStroke} />
                </div>
                <div className="absolute drop-shadow-[0px_0px_1px_rgba(0,0,0,0.3)] right-[1px] bottom-[1px] size-[12px]">
                  <div className="absolute inset-[8.33%_20%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMusicNote} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="h-[24px] relative w-full">
      <div className="absolute flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-normal left-[16px] text-[12px] text-white top-[5px] whitespace-nowrap">
        <span style={{ fontVariationSettings: "'wdth' 100" }}>09</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>:</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>30</span>
      </div>
      <span className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-normal left-[49px] text-[12px] text-white top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>PM</span>
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
          <span className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[0_55.56%_56.25%_0] leading-normal text-[6px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>5G</span>
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

function TopNavbar() {
  return (
    <div className="flex flex-col w-full">
      {/* Navbar row */}
      <div className="flex items-center gap-[8px] px-[12px] w-full" style={{ height: 56 }}>
        {/* LIVE */}
        <div className="relative flex items-center justify-center shrink-0" style={{ width: 40, height: 40 }}>
          <div className="relative" style={{ width: 30, height: 30 }}>
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLive} />
          </div>
          <div className="absolute right-0 top-0 overflow-clip" style={{ width: 14, height: 14 }}>
            <div className="absolute inset-[-12.5%]">
              <img alt="" className="block max-w-none size-full" src={imgLiveDot} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-1 items-center gap-[8px] overflow-hidden pl-[4px]">
          <div className="flex flex-col items-center gap-[2px] py-[4px] shrink-0">
            <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic text-[14px] text-white drop-shadow-[0px_0px_2px_rgba(0,0,0,0.62)] tracking-[0.14px] whitespace-nowrap">
              For you
            </p>
            <div className="bg-white rounded-[100px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.62)]" style={{ height: 2, width: 32 }} />
          </div>
          <div className="flex items-center shrink-0 py-[4px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[16px] text-[14px] text-white drop-shadow-[0px_0px_2px_rgba(0,0,0,0.62)] tracking-[0.14px] whitespace-nowrap">
              Discovery
            </p>
          </div>
          <div className="flex items-center gap-[4px] shrink-0 py-[4px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[16px] text-[14px] text-white drop-shadow-[0px_0px_2px_rgba(0,0,0,0.62)] tracking-[0.14px] whitespace-nowrap">
              Dating
            </p>
            <div className="relative shrink-0 overflow-clip" style={{ width: 14, height: 14 }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDatingIcon} />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40 }}>
          <div className="relative" style={{ width: 30, height: 30 }}>
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
          </div>
        </div>
      </div>

      {/* Earn rewards button + WTF */}
      <div className="flex items-center justify-between px-[12px] w-full pb-[10px]">
        <EarnRewardsButton />
        <div className="flex items-center justify-center px-[12px] rounded-[16px]"
             style={{ height: 40, width: 65, background: "rgba(22,22,22,0.8)" }}>
          <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic text-[12px] text-white tracking-[0.12px] whitespace-nowrap">
            WTF!?
          </p>
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

export default function FeedScreen({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  // 8-second timer → navigate to "tap-reward"
  useEffect(() => {
    const id = setTimeout(() => onNavigate?.("tap-reward"), 8_000);
    return () => clearTimeout(id);
  }, [onNavigate]);

  return (
    <div className="relative overflow-hidden size-full bg-[#161616]">
      <style>{`.feed-scroll::-webkit-scrollbar { display: none; }`}</style>

      {/* Scrollable slides */}
      <div className="feed-scroll absolute inset-0"
           style={{ overflowY: "scroll", scrollSnapType: "y mandatory", scrollbarWidth: "none" } as React.CSSProperties}>
        {SLIDES.map((slide, i) => (
          <FeedSlide key={slide.id} slide={slide} isFirst={i === 0} />
        ))}
      </div>

      {/* Fixed: status bar + topbar */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ zIndex: 50 }}>
        <StatusBar />
        <TopNavbar />
      </div>

      {/* Fixed: tab bar */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 50 }}>
        <TabBar />
      </div>
    </div>
  );
}
