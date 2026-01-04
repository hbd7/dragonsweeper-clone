import { type SET_FUNCTION } from "../ts/Player.ts";

export default function MarkerButton({
  value,
  callback,
  callbackDisplay,
}: {
  value: number;
  callback: SET_FUNCTION;
  callbackDisplay: SET_FUNCTION;
}) {
  const handleClick = () => {
    callback(value);
    callbackDisplay(0);
  };

  return (
    <div
      className={`marker-button${value == 100 ? " button-x" : ""}`}
      onClick={handleClick}
      title={`Mark this tile with ${value == 100 ? "*" : value}`}
    >
      {value == 100 ? "*" : value}
    </div>
  );
}
