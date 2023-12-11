import clsx from "clsx";
import PropTypes from "prop-types";

export function TimeTravel({ history, currentMove, onItemClick }) {
  return (
    <ul role="list" className="space-y-6">
      {history.map((_squares, move) => (
        <li key={move} className="relative flex gap-4">
          <div
            className={clsx(
              move === history.length - 1 ? "h-6" : "-bottom-6",
              "absolute left-0 top-0 flex w-6 justify-center",
            )}
          >
            <div className="w-px bg-gray-200" />
          </div>
          <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
          </div>
          {move === currentMove ? (
            <p className="flex-auto py-0.5 text-xs/5 text-gray-900">
              {move === 0
                ? "You are at game start"
                : `You are at move #${move}`}
            </p>
          ) : (
            <button
              type="button"
              onClick={() => onItemClick(move)}
              className="rounded bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-500/10 hover:bg-gray-100"
            >
              {move > 0 ? `Go to move #${move}` : "Go to game start"}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

TimeTravel.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf(["X", "O"])).isRequired,
  ).isRequired,
  currentMove: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
};
