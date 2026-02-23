import { useEffect, useState } from "react";
import { connectSocket, onScreenMessage } from "../services/socket";

export default function ScoreDisplay() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    connectSocket();

    onScreenMessage((data) => {
      if (data.type === "state_update") {
        setScore(data.state.score);
      }
      if (data.type === "game_over") {
        setGameOver(true);
      }
    });
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
      {gameOver && (
        <p style={{ color: "red", fontSize: 48, marginTop: 20 }}>GAME OVER</p>
      )}
    </div>
  );
}
