import PropTypes from "prop-types";
import { calculateWinner } from "../utils.js";
import { PlayerO } from "./player-o.jsx";
import { PlayerX } from "./player-x.jsx";

export function Status({ xIsNext, squares }) {
  const winner = calculateWinner(squares);
  const label = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <p
      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm/6 font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
      aria-label={label}
    >
      {winner ? (
        <>
          {winner === "X" ? (
            <PlayerX className="h-4 w-4 fill-teal-400" />
          ) : (
            <PlayerO className="h-4 w-4 fill-amber-400" />
          )}
          Winner
        </>
      ) : squares.every(Boolean) ? (
        "Scratch: Cat's game"
      ) : (
        <>
          {xIsNext ? (
            <PlayerX className="h-4 w-4 fill-teal-400" />
          ) : (
            <PlayerO className="h-4 w-4 fill-amber-400" />
          )}
          Next player
        </>
      )}
    </p>
  );
}
Status.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOf(["X", "O"])).isRequired,
};
