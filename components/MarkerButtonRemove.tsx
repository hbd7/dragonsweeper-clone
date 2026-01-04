import { type SET_FUNCTION } from "../ts/Player.ts";

export default function MarkerButtonRemove({
  callback,
  callbackDisplay,
}: {
  callback: SET_FUNCTION;
  callbackDisplay: SET_FUNCTION;
}) {
  const handleClick = () => {
    callback(0);
    callbackDisplay(0);
  };

  return (
    <div
      className="marker-button button-remove"
      onClick={handleClick}
      title="Remove Marker"
    >
      ⊘
    </div>
  );
}
