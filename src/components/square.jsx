import PropTypes from "prop-types";

export function Square({ disabled, onClick, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-28 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:enabled:bg-gray-50"
    >
      {children}
    </button>
  );
}

Square.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};
