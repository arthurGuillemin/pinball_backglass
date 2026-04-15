import { useRef } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";

const diceFrames = Array.from({ length: 48 }, (_, i) =>
  `/assets/DiceKing/intro/boss-battle-kingdice-intro_${String(i + 1).padStart(4, "0")}.png`
);

export default function DiceKingIntro() {
  const diceRef = useRef(null);

  useSpriteLoop(diceFrames, 35, diceRef);

  return (
      <img ref={diceRef} className="dice" src={diceFrames[0]} />
  );
}