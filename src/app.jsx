import { useState } from "react";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  let winner = calculateWinner(squares);
  let status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Draw`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleSquareClick(i) {
    if (squares[i] || winner) {
      return;
    }

    let nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
}

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
              <button type="button" onClick={() => jumpTo(move)}>
                {move > 0 ? `Go to move #${move}` : "Go to game start"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
