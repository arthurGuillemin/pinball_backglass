import { useEffect, useState } from "react";
import { screensSocket } from "../services/socket";

export default function ScoreDisplay() {
  const [score, setScore] = useState(10);

  useEffect(() => {
    screensSocket.connect();

    screensSocket.on("state_update", (state) => {
      setScore(state.score);
    });

    return () => {
      screensSocket.off("state_update");
      screensSocket.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ color: "white", fontSize: 24, margin: 0 }}>SCORE</p>
      <p
        style={{ color: "white", fontSize: 120, fontWeight: "bold", margin: 0 }}
      >
        {score}
      </p>
    </div>
  );
}
