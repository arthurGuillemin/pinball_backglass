import { useEffect, useRef, useState } from "react";
import LetterColumn from "../components/LetterColumn";
import { useSpriteLoop } from "../hooks/useSpriteLoop";
import "../style/SelectPlayer.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const createPingPongFrames = (basePath, prefix) => {
  const forward = Array.from({ length: 14 }, (_, i) =>
    `${basePath}/${prefix}_${String(i + 1).padStart(4, "0")}.png`
  );
  const backward = [...forward].slice(0, -1).reverse();
  return [...forward, ...backward];
};

const characters = [
  {
    name: "CUPHEAD",
    frames: createPingPongFrames(
      "/assets/SelectPlayer/Cuphead",
      "cuphead_title_screen"
    ),
    background:
      "/assets/IntroScreen/title_screen_background.png",
    color: "rgb(204, 74, 74)",
  },
  {
    name: "MUGMAN",
    frames: createPingPongFrames(
      "/assets/SelectPlayer/Mugman",
      "mugman_title_screen"
    ),
    background:
      "/assets/IntroScreen/title_screen_background_mugman2.jpeg",
    color: "#88A9B6",
  },
  {
    name: "CHALICE",
    frames: createPingPongFrames(
      "/assets/SelectPlayer/Chalice",
      "chalice_title_screen"
    ),
     background:
      "/assets/IntroScreen/title_screen_background_chalice1.png",
    color: "#E5BD64",
  }
];

export default function SelectPlayer() {
  const [letters, setLetters] = useState([0, 0, 0]);
  const [selectedColumn, setSelectedColumn] = useState(0);
  const [isCharacterSelected, setIsCharacterSelected] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const refs = [ref0, ref1, ref2];

  useSpriteLoop(characters[0].frames, 12, ref0, true);
  useSpriteLoop(characters[1].frames, 12, ref1, true);
  useSpriteLoop(characters[2].frames, 12, ref2, true);

  const currentCharacter = characters[selectedCharacter];

  const changeLetter = (index, dir) => {
    setLetters((prev) => {
      const copy = [...prev];

      copy[index] =
        (copy[index] + dir + alphabet.length) % alphabet.length;

      return copy;
    });
  };

    useEffect(() => {
    const handleKeyDown = (e) => {

        if (e.code === "ArrowLeft") {
        if (!isCharacterSelected) {
            if (selectedColumn === 0) {
            setIsCharacterSelected(true);
            } else {
            setSelectedColumn((p) => p - 1);
            }
        }
        }
        
        if (e.code === "ArrowRight") {
        if (isCharacterSelected) {
            setIsCharacterSelected(false);
            setSelectedColumn(0);
        } else {
            setSelectedColumn((p) =>
            p === 2 ? 2 : p + 1
            );
        }
        }

        if (e.code === "ArrowDown") {
        if (isCharacterSelected) {
            setSelectedCharacter((p) =>
            p === characters.length - 1 ? 0 : p + 1
            );
        } else {
            changeLetter(selectedColumn, 1);
        }
        }

        if (e.code === "ArrowUp") {
        if (isCharacterSelected) {
            setSelectedCharacter((p) =>
            p === 0 ? characters.length - 1 : p - 1
            );
        } else {
            changeLetter(selectedColumn, -1);
        }
        }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
    }, [isCharacterSelected, selectedColumn]);

  const playerName = letters
    .map((i) => alphabet[i])
    .join("");

  return (
    <div
        className="select-player-screen"
        style={{
            backgroundImage: `url(${currentCharacter.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
      <div
        className={`character-side ${
            isCharacterSelected ? "character-active" : ""
        }`}
        >
        {characters.map((char, i) => (
          <img
            key={char.name}
            ref={refs[i]}
            src={char.frames[0]}
            alt={char.name}
            className="character-image"
            style={{
              display:
                i === selectedCharacter
                  ? "block"
                  : "none",

              transform:
                selectedCharacter === 1 ? "scaleX(-1)" : "scaleX(1)",
            }
        }
          />
        ))}
      </div>

      <div className="name-side">

        <div className="letters-container">
          {letters.map((val, index) => (
            <LetterColumn
              key={index}
              value={val}
              isActive={selectedColumn === index}
              onUp={() =>
                changeLetter(index, -1)
              }
              onDown={() =>
                changeLetter(index, 1)
              }
            />
          ))}
        </div>

        <div className="player-name">
          PLAYER : {playerName}
        </div>
      </div>
    </div>
  );
}