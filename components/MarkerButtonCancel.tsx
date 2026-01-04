import { type SET_FUNCTION } from "../ts/Player.ts";

export default function MarkerButtonCancel({
  callbackDisplay,
}: {
  callbackDisplay: SET_FUNCTION;
}) {
  const handleClick = () => {
    callbackDisplay(0);
  };

  return (
    <div className="marker-button button-cancel" onClick={handleClick}>
      Cancel
    </div>
  );
}
