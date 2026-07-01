import "../style/Results.css";
export default function WinscreenBoard() {
  return (
    <div className="board-container">
      <img
        src="/assets/Results/winscreen_board.png"
        alt="board"
        className="results-board"
      />

      <div className="board-content">
        <div className="result-row">
          <span>NAME PLAYER</span>
          <span>CUPHEAD</span>
        </div>

        <div className="result-row">
          <span>SCORE</span>
          <span>125000</span>
        </div>

        <div className="result-row">
          <span>TIME</span>
          <span>02:34</span>
        </div>

        <div className="result-row">
          <span>COMBO</span>
          <span>18</span>
        </div>

        <div className="result-row">
          <span>SKILL LEVEL</span>
          <span>EXPERT</span>
        </div>

        <div className="result-row grade">
          <span>GRADE</span>
          <span>A+</span>
        </div>
      </div>
    </div>
  );
}