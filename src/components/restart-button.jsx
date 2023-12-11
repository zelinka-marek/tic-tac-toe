import { ArrowPathIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

export function RestartButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full bg-white p-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      aria-label="Restart game"
    >
      <ArrowPathIcon className="h-5 w-5" />
    </button>
  );
}

RestartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
