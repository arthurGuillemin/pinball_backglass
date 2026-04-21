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

  useSpriteLoop(cupheadFrames, 15, cupheadRef);
  useSpriteLoop(
    isJumping ? cupheadJumpFrames : cupheadFrames,
    10,
    cupheadRef
  );

    useEffect(() => {
      const triggerJump = () => {
        setIsJumping(true);

        setTimeout(() => {
          setIsJumping(false);
        }, 600);

        const nextJump = Math.random() * 3000 + 1000;
        timeout = setTimeout(triggerJump, nextJump);
      };

      let timeout = setTimeout(triggerJump, 2000);

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
