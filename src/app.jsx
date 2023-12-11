import { useState } from "react";
import { Board } from "./components/board.jsx";
import { TimeTravel } from "./components/time-travel.jsx";
import { calculateWinner } from "./utils.js";

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
    <div className="flex min-h-full flex-col justify-center bg-gray-50 px-6 py-12">
      <div className="mx-auto w-full max-w-sm">
        <p className="inline-block rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
          {status}
        </p>
      </div>
      <div className="mx-auto mt-10 w-full max-w-sm">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="mx-auto mt-10 w-full max-w-sm">
        <details className="open:rounded-lg open:bg-white open:p-6 open:shadow-lg open:ring-1 open:ring-black/5">
          <summary className="select-none text-sm/6 font-semibold text-gray-900">
            History
          </summary>
          <div className="mt-3">
            <TimeTravel
              currentMove={currentMove}
              history={history}
              onItemClick={jumpTo}
            />
          </div>
        </details>
      </div>
    </div>
  );
}
