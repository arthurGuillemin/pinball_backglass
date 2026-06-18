import { useRef, useEffect, useState } from "react";
import LetterColumn from "../components/LetterColumn";
import { useSpriteLoop } from "../hooks/useSpriteLoop";
import { useSound } from "../hooks/useSound";
import "../style/SelectPlayer.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const createPingPongFrames = (basePath, prefix) => {
  const forward = Array.from(
    { length: 14 },
    (_, i) => `${basePath}/${prefix}_${String(i + 1).padStart(4, "0")}.png`,
  );
  const backward = [...forward].slice(0, -1).reverse();
  return [...forward, ...backward];
};

const characters = [
  {
    name: "CUPHEAD",
    sound: "cuphead",
    frames: createPingPongFrames(
      "/assets/SelectPlayer/Cuphead",
      "cuphead_title_screen",
    ),
    background: "/assets/IntroScreen/title_screen_background.png",
    color: "rgb(204, 74, 74)",
  },
  {
    name: "MUGMAN",
    sound: "mugman",
    frames: createPingPongFrames(
      "/assets/SelectPlayer/Mugman",
      "mugman_title_screen",
    ),
    background: "/assets/IntroScreen/title_screen_background_mugman2.jpeg",
    color: "#88A9B6",
  },
  {
    name: "CHALICE",
    sound: "chalice",
    frames: createPingPongFrames(
      "/assets/SelectPlayer/Chalice",
      "chalice_title_screen",
    ),
    background: "/assets/IntroScreen/title_screen_background_chalice1.png",
    color: "#E5BD64",
  },
];

const TOTAL_LETTERS = 3;

export default function SelectPlayer({ onStartGame }) {
  const { play } = useSound();

  const [step, setStep] = useState("character");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [letters, setLetters] = useState([0, 0, 0]);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const refs = [ref0, ref1, ref2];

  useSpriteLoop(characters[0].frames, 12, ref0, true);
  useSpriteLoop(characters[1].frames, 12, ref1, true);
  useSpriteLoop(characters[2].frames, 12, ref2, true);

  const currentCharacter = characters[selectedCharacter];

  const confirmCharacter = () => {
    play(currentCharacter.sound);
    setStep("name");
    setCurrentLetterIndex(0);
    setCurrentLetter(0);
  };

  const confirmLetter = () => {
    const newLetters = [...letters];
    newLetters[currentLetterIndex] = currentLetter;
    setLetters(newLetters);

    if (currentLetterIndex < TOTAL_LETTERS - 1) {
      setCurrentLetterIndex(currentLetterIndex + 1);
      setCurrentLetter(0);
    } else {
      // Les 3 lettres sont validées → start game avec playerName + avatar
      const playerName = newLetters.map((i) => alphabet[i]).join("");
      onStartGame?.(playerName, currentCharacter.name.toLowerCase());
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (step === "character") {
        if (e.code === "ArrowDown")
          setSelectedCharacter((p) =>
            p === characters.length - 1 ? 0 : p + 1,
          );
        if (e.code === "ArrowUp")
          setSelectedCharacter((p) =>
            p === 0 ? characters.length - 1 : p - 1,
          );
        if (e.code === "Enter") confirmCharacter();
        return;
      }

      if (e.code === "ArrowRight")
        setCurrentLetter((p) => (p + 1) % alphabet.length);
      if (e.code === "ArrowLeft")
        setCurrentLetter((p) => (p - 1 + alphabet.length) % alphabet.length);
      if (e.code === "Enter") confirmLetter();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step, currentLetterIndex, currentLetter, letters, selectedCharacter]);

  useEffect(() => {
    const onLeft = () => {
      if (step === "character") {
        setSelectedCharacter((p) => (p === 0 ? characters.length - 1 : p - 1));
      } else {
        setCurrentLetter((p) => (p - 1 + alphabet.length) % alphabet.length);
      }
    };

    const onRight = () => {
      if (step === "character") {
        setSelectedCharacter((p) => (p === characters.length - 1 ? 0 : p + 1));
      } else {
        setCurrentLetter((p) => (p + 1) % alphabet.length);
      }
    };

    const onGreen = () => {
      if (step === "character") {
        confirmCharacter();
      } else {
        confirmLetter();
      }
    };

    window.addEventListener("bg:left-down", onLeft);
    window.addEventListener("bg:right-down", onRight);
    window.addEventListener("bg:green-down", onGreen);

    return () => {
      window.removeEventListener("bg:left-down", onLeft);
      window.removeEventListener("bg:right-down", onRight);
      window.removeEventListener("bg:green-down", onGreen);
    };
  }, [step, currentLetterIndex, currentLetter, letters, selectedCharacter]);

  const displayLetters = letters.map((l, i) =>
    i === currentLetterIndex ? currentLetter : l,
  );

  const playerName = displayLetters.map((i) => alphabet[i]).join("");

  return (
    <div
      className={`select-player-screen ${step === "character" ? "character-only" : ""}`}
      style={{
        backgroundImage: `url(${currentCharacter.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`character-side ${
          step === "character" ? "character-side-full" : ""
        } character-active`}
      >
        {characters.map((char, i) => (
          <img
            key={char.name}
            ref={refs[i]}
            src={char.frames[0]}
            alt={char.name}
            className="character-image"
            style={{
              display: i === selectedCharacter ? "block" : "none",
              transform: selectedCharacter === 1 ? "scaleX(-1)" : "scaleX(1)",
            }}
          />
        ))}
      </div>

      {step === "name" && (
        <div className="name-side">
          <div className="letters-container">
            {displayLetters.map((val, index) => (
              <LetterColumn
                key={index}
                value={val}
                isActive={index === currentLetterIndex}
                onUp={() =>
                  index === currentLetterIndex &&
                  setCurrentLetter(
                    (p) => (p - 1 + alphabet.length) % alphabet.length,
                  )
                }
                onDown={() =>
                  index === currentLetterIndex &&
                  setCurrentLetter((p) => (p + 1) % alphabet.length)
                }
              />
            ))}
          </div>
          <div className="player-name">PLAYER : {playerName}</div>
        </div>
      )}
    </div>
  );
}
