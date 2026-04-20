import { useState, useEffect } from "react";


export default function LeaderBoard() {
    const [isBling, setIsBling] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsBling((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
    <div className="leaderboard">
        <div className="placement">
            <img
                src={isBling
                    ? "/assets/IntroScreen/leaderboard1-bling.png"
                    : "/assets/IntroScreen/leaderboard1.png"
                }
                alt="leaderboard"
                className="leaderboard-piece"
                />
            <p>test</p>
        </div>
        <div className="placement">
            <img
                src={isBling
                    ? "/assets/IntroScreen/leaderboard2-bling.png"
                    : "/assets/IntroScreen/leaderboard2.png"
                }
                alt="leaderboard"
                className="leaderboard-piece"
                />
            <p>test</p>
        </div>
        <div className="placement">
            <img
                src="/assets/IntroScreen/leaderboard3.png"
                alt="leaderboard"
                className="leaderboard-piece"
            />
            <p>test</p>
        </div>
        <div className="placement">
            <img
                src="/assets/IntroScreen/leaderboard4.png"
                alt="leaderboard"
                className="leaderboard-piece"
            />
            <p>test</p>
        </div>
        <div className="placement">
            <img
                src="/assets/IntroScreen/leaderboard5.png"
                alt="leaderboard"
                className="leaderboard-piece"
            />
            <p>test</p>
        </div>

    </div>
     
    
  );
}

