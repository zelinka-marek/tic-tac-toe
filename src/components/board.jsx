import PropTypes from "prop-types";
import { calculateWinner } from "../utils.js";
import { Square } from "./square.jsx";

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
        let isDisabled =
          square !== null || winner !== null || squares.every(Boolean);

        return (
          <Square
            key={i}
            disabled={isDisabled}
            onClick={() => handleSquareClick(i)}
          >
            {square}
          </Square>
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
