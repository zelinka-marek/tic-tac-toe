import PropTypes from "prop-types";

export function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.oneOf(["X", "O"]),
  onClick: PropTypes.func.isRequired,
};
