import { useRef, useState, useEffect } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";

const cupheadFrames = Array.from({ length: 16 }, (_, i) =>
  `/assets/Cuphead/Run/cuphead_run_${String(i + 1).padStart(4, "0")}.png`
);

const cupheadJumpFrames = Array.from({ length: 8 }, (_, i) =>
  `/assets/Cuphead/Jump/cuphead_jump_${String(i + 1).padStart(4, "0")}.png`
);

export default function CupheadRun() {
  const cupheadRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);

  useSpriteLoop(
    isJumping ? cupheadJumpFrames : cupheadFrames,
    isJumping ? 30 : 15,
    cupheadRef
  );

  useEffect(() => {
    let timeout;

    const triggerJump = () => {
      setIsJumping(true);

      const jumpDuration = (cupheadJumpFrames.length / 10) * 1000;

      setTimeout(() => {
        setIsJumping(false);
      }, jumpDuration);

      const nextJump = Math.random() * 8000 + 4000;
      timeout = setTimeout(triggerJump, nextJump);
    };

    timeout = setTimeout(triggerJump, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <img
      ref={cupheadRef}
      className={`cuphead ${isJumping ? "jump" : ""}`}
      src={cupheadFrames[0]}
      alt="cuphead"
    />
  );
}