  import { useEffect } from "react";
  import { useBackglassGame } from "./hooks/useBackglassGame";

  import IntroScreen from "./pages/IntroScreen";
  import VideoScreen from "./pages/RunNGun";
  import DuelDiceKing from "./pages/DuelDiceKing";
  import Result from "./pages/Result";

  import "./style/IntroScreen.css";
  import "./style/RunNGun.css";
  import "./App.css";
  import "./style/DuelDiceKing.css";

function App() {
  const { screen, setScreen, gameState, startGame } = useBackglassGame();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "KeyK") setScreen("duel")      
      if (e.code === "KeyX") setScreen("video")     
      if (e.code === "KeyR") setScreen("result") 
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setScreen]);

  return (
    <>
      {screen === "intro" && <IntroScreen onStart={startGame} />}
      {screen === "video" && <VideoScreen gameState={gameState} />}
      {screen === "duel" && <DuelDiceKing gameState={gameState} />}
      {screen === "result" && <Result gameState={gameState} />}
    </>
  );
}

  export default App;