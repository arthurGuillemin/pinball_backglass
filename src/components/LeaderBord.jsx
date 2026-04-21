import { useState, useEffect } from "react";

export default function LeaderBoard() {
    const [isBling, setIsBling] = useState(true);
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBling((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetch("https://flipper-backend-app.azurewebsites.net/api/scores")
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "success") {
                    setScores(data.data);
                }
            console.log(data)
            });
    }, []);

    const images = [
        ["leaderboard1", "placement1"],
        ["leaderboard2", "placement"],
        ["leaderboard3", "placement"],
        ["leaderboard4", "placement"],
        ["leaderboard5", "placement"],
    ];

    return (
        <div className="leaderboard">
            {images.map(([name, className], index) => (
                <div key={index} className={className}>
                    <img
                        src={
                            isBling
                                ? `/assets/IntroScreen/${name}-bling.png`
                                : `/assets/IntroScreen/${name}.png`
                        }
                        alt="leaderboard"
                        className="leaderboard-piece"
                    />

                    <div className="score-row">
                        <img
                            src="/assets/IntroScreen/testChalice.png"
                            alt="player"
                            className="player-avatar"
                        />

                        <div className="score-value">
                            <span className="player-name">
                                {scores[index]?.player_name || "Loading..."}
                            </span>
                            <span className="player-score">
                                {scores[index]?.score || ""}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}