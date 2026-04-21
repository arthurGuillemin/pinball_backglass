import { useRef, useEffect } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";

const diceIdleFrames = Array.from({ length: 33 }, (_, i) =>
  `/assets/DiceKing/idle/boss-battle-kingdice-idle_${String(i + 1).padStart(4, "0")}.png`
);

export default function DiceKingIdle({ onVictory, onDefeat }) {
  const ref = useRef(null);

  useSpriteLoop(diceIdleFrames, 35, ref, true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "p") {
        onVictory();
      }

      if (e.key.toLowerCase() === "m") {
        onDefeat();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onVictory, onDefeat]);

  return (
    <img
      ref={ref}
      className="dice idle"
      src={diceIdleFrames[0]}
    />
  );
}