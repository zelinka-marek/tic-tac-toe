import clsx from "clsx";
import PropTypes from "prop-types";
import { PlayerO } from "./player-o";
import { PlayerX } from "./player-x";

export function Logo({ className }) {
  return (
    <div className={clsx("inline-flex gap-0.5", className)}>
      <PlayerX className="h-6 w-6 fill-teal-400" />
      <PlayerO className="h-6 w-6 fill-amber-400" />
    </div>
  );
}
Logo.propTypes = {
  className: PropTypes.string,
};
