import { useRef, useState, useEffect} from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";


const diceHandsFrames = Array.from({ length: 17 }, (_, i) =>
  `/assets/DiceKing/introHands/boss-battle-kingdice-intro_${String(i + 1).padStart(4, "0")}.png`
);

const diceIntroFrames = Array.from({ length: 48 }, (_, i) =>
  `/assets/DiceKing/intro/boss-battle-kingdice-intro_${String(i + 1).padStart(4, "0")}.png`
);

const diceIdleFrames = Array.from({ length: 33 }, (_, i) =>
  `/assets/DiceKing/idle/boss-battle-kingdice-idle_${String(i + 1).padStart(4, "0")}.png`
);

export default function DiceKingIntro({ onAction }) {
  const diceRef = useRef(null);

  const [phase, setPhase] = useState("hands");

    const frames =
        phase === "hands"
            ? diceHandsFrames
            : phase === "intro"
            ? diceIntroFrames
            : diceIdleFrames;


  useSpriteLoop(
    frames,
    35,
    diceRef,
    phase === "idle",
    () => {
        if (phase === "hands")  return  setPhase("intro");
        if (phase === "intro") return setPhase("idle");
        }
    );

  return (
      <img ref={diceRef} 
      className={`dice ${phase === "hands" ? "hands" : ""}`}
      src={frames[0]} />
  );
}