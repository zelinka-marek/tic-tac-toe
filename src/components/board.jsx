import PropTypes from "prop-types";
import { calculateWinner } from "../utils.js";
import { PlayerO } from "./player-o.jsx";
import { PlayerX } from "./player-x.jsx";

export function Board({ xIsNext, squares, onPlay }) {
  let winner = calculateWinner(squares);

  function handleSquareClick(i) {
    if (squares[i] || winner) {
      return;
    }

    let nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {squares.map((square, i) => {
        let isFilled = square !== null;
        let isDisabled = isFilled || winner !== null || squares.every(Boolean);
        let label = square !== null ? square : "Empty";

        return (
          <button
            key={i}
            disabled={isDisabled}
            onClick={() => handleSquareClick(i)}
            className="group inline-flex h-28 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:enabled:bg-gray-50"
            aria-label={label}
          >
            {square === "X" ? (
              <PlayerX className="h-10 w-10 fill-teal-400" />
            ) : square === "O" ? (
              <PlayerO className="h-10 w-10 fill-amber-400" />
            ) : xIsNext ? (
              <PlayerX className="invisible h-10 w-10 fill-transparent stroke-teal-400 stroke-2 group-hover:group-enabled:visible" />
            ) : (
              <PlayerO className="invisible h-10 w-10 fill-transparent stroke-amber-400 stroke-2 group-hover:group-enabled:visible" />
            )}
          </button>
        );
      })}
    </div>
  );
}

Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O"])).isRequired,
  onPlay: PropTypes.func.isRequired,
};
