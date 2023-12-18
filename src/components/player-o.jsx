import PropTypes from "prop-types";

export function PlayerO({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M32 0a32 32 0 1 1 0 64 32 32 0 0 1 0-64Zm0 18.96a13.04 13.04 0 1 0 0 26.08 13.04 13.04 0 0 0 0-26.08Z" />
    </svg>
  );
}
PlayerO.propTypes = {
  className: PropTypes.string,
};
