import { useRef, useState } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";

const diceHandsFrames = Array.from({ length: 17 }, (_, i) =>
  `/assets/DiceKing/introHands/boss-battle-kingdice-intro_${String(i + 1).padStart(4, "0")}.png`
);

const diceIntroFrames = Array.from({ length: 48 }, (_, i) =>
  `/assets/DiceKing/intro/boss-battle-kingdice-intro_${String(i + 1).padStart(4, "0")}.png`
);

export default function DiceKingIntro({ onFinish }) {
  const diceRef = useRef(null);
  const [phase, setPhase] = useState("hands");

  const frames = phase === "hands" ? diceHandsFrames : diceIntroFrames;

  useSpriteLoop(
    frames,
    35,
    diceRef,
    false,
    () => {
      if (phase === "hands") setPhase("intro");
      else if (phase === "intro") onFinish(); 
    }
  );

  return (
    <img
      ref={diceRef}
      className={`dice ${phase === "hands" ? "hands" : ""}`}
      src={frames[0]}
    />
  );
}