import { useState, useEffect, useCallback } from "react";
import socketService from "../services/socket.service";

export function useBackglassGame() {
  const [screen, setScreen] = useState("intro");
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    socketService.connect();

    const handleMessage = (data) => {
      console.log("[Backglass] Message reçu:", data);
      if (data.state) setGameState(data.state);
      if (data.type === "state_update" && data.state?.isRunning)
        setScreen("video");
      if (data.type === "game_over") setScreen("result");
    };

    socketService.onScreenMessage(handleMessage);
    return () => socketService.disconnect();
  }, []);

  const startGame = useCallback(
    (playerName = "Player 1", avatar = "cuphead") => {
      socketService.send("start_game", { playerName, avatar });
    },
    [],
  );

  return {
    screen,
    setScreen,
    gameState: gameState || { score: 0, balls: 3, isRunning: false },
    startGame,
  };
}
