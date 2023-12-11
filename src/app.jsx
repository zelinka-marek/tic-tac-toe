import { useState } from "react";
import { calculateWinner } from "./utils.js";
import { Board } from "./components/board.jsx";

export default function Game() {
  let [history, setHistory] = useState([Array(9).fill(null)]);
  let [currentMove, setCurrentMove] = useState(0);

  let xIsNext = currentMove % 2 === 0;
  let currentSquares = history[currentMove];
  let winner = calculateWinner(currentSquares);
  let status = winner
    ? `Winner: ${winner}`
    : currentSquares.every(Boolean)
    ? `Draw`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handlePlay(nextSquares) {
    let nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ul>
          {history.map((squares, move) => (
            <li key={move}>
              {move === currentMove && move === 0 ? (
                "You are at game start"
              ) : move === currentMove ? (
                `You are at move #${move}`
              ) : (
                <button type="button" onClick={() => jumpTo(move)}>
                  {move > 0 ? `Go to move #${move}` : "Go to game start"}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
