import "../style/Results.css";

export default function WinscreenBoard({ name, score }) {
  return (
    <div className="board-container">
      <img
        src="/assets/Results/winscreen_board.png"
        alt="board"
        className="results-board"
      />

      <div className="board-content">
        <div className="result-row">
          <span>PLAYER</span>
          <span>{name}</span>
        </div>

        <div className="result-row">
          <span>SCORE</span>
          <span>{score}</span>
        </div>
      </div>
    </div>
  );
}
