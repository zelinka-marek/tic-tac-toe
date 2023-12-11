import { useState } from "react";
import { Board } from "./components/board.jsx";
import { Logo } from "./components/logo.jsx";
import { RestartButton } from "./components/restart-button.jsx";
import { Status } from "./components/status.jsx";
import { TimeTravel } from "./components/time-travel.jsx";

const initialHistory = [Array(9).fill(null)];
const initialCurrentMove = 0;

export default function Game() {
  let [history, setHistory] = useState(() => initialHistory);
  let [currentMove, setCurrentMove] = useState(initialCurrentMove);

  let xIsNext = currentMove % 2 === 0;
  let currentSquares = history[currentMove];

  function handleRestart() {
    setHistory(initialHistory);
    setCurrentMove(initialCurrentMove);
  }

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
        <div className="flex items-center justify-between">
          <Logo />
          <Status xIsNext={xIsNext} squares={currentSquares} />
          <RestartButton onClick={handleRestart} />
        </div>
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
              history={history}
              currentMove={currentMove}
              onItemClick={jumpTo}
            />
          </div>
        </details>
      </div>
    </div>
  );
}
