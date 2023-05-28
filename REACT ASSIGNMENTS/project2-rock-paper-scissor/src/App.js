import { useState } from "react";
import "./App.css";

function App() {
    const [compValue, setCompValue] = useState(null);
    const [userValue, setUserValue] = useState(null);
    const [winner, setWinner] = useState(null);

    const choices = ["🪨", "📜", "✂️"];

    const changeUserValue = (value) => {
        setUserValue(value);
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        setCompValue(computerChoice);

        if (value === computerChoice) {
            setWinner("TIE");
        } else if (
            (value === "🪨" && computerChoice === "✂️") ||
            (value === "📜" && computerChoice === "🪨") ||
            (value === "✂️" && computerChoice === "📜")
        ) {
            setWinner("YOU WON");
        } else {
            setWinner("COMPUTER WON");
        }
    };

    return (
        <div className="App">
            <h1>ROCK - PAPER - SCISSORS</h1>

            <h2>PICK ONE OF THEM</h2>
            <div className="controls">
                <button
                    onClick={() => {
                        changeUserValue("🪨");
                    }}
                >
                    <span>🪨</span>
                    <div>ROCK</div>
                </button>

                <button
                    onClick={() => {
                        changeUserValue("📜");
                    }}
                >
                    <span>📜</span>
                    <div>PAPER</div>
                </button>
                <button
                    onClick={() => {
                        changeUserValue("✂️");
                    }}
                >
                    <span>✂️</span>
                    <div>SCISSOR</div>
                </button>
            </div>

            <div className="player-container">
                <div className="player">
                    <h2>Computer</h2>
                    <div>{compValue}</div>
                </div>
                
                <div className="player">
                    <h2>You</h2>
                    <div>{userValue}</div>
                </div>
            </div>

            {winner && <h2 className="winner">{winner}</h2>}
        </div>
    );
}

export default App;
