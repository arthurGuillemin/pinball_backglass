import { useRef } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";


const animationFrames = Array.from({ length: 34 }, (_, i) =>
  `/assets/IntroScreen/Cuphead & Mugman/cuphead_title_screen_${String(i + 1).padStart(4, "0")}.png`
);

export default function IntroScreen() {
  const animRef = useRef(null);

  useSpriteLoop( animationFrames, 20, animRef, true );

  return (
    <div className="intro-container">

      <img
        src="/assets/IntroScreen/title_screen_background.png"
        alt="background"
        className="intro-bg"
      />

      <img
        src="/assets/IntroScreen/title_chips_left_0001.png"
        alt="chips"
        className="intro-chips"
      />

      <img
        ref={animRef}
        src={animationFrames[0]}
        alt="cuphead animation"
        className="intro-animation"
      />


      <div className="press-any-button">
        Press Any Button
       </div>
    </div>
  );
}