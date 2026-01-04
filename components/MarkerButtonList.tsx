import { type SET_FUNCTION } from "../ts/Player.ts";
import MarkerButton from "./MarkerButton.tsx";
import MarkerButtonCancel from "./MarkerButtonCancel.tsx";
import MarkerButtonRemove from "./MarkerButtonRemove.tsx";

export const VALUE_DISPLAY: number[] = [];
for (let i = 1; i < 12; i++) {
  VALUE_DISPLAY.push(i);
}
VALUE_DISPLAY.push(100);

export default function MarkerButtonList({
  isMarkerButtonListVisible,
  callback,
  callbackDisplay,
}: {
  isMarkerButtonListVisible: number;
  callback: SET_FUNCTION;
  callbackDisplay: SET_FUNCTION;
}) {
  if (!isMarkerButtonListVisible)
    return <div className="marker-button-list hidden"></div>;
  return (
    <div className="marker-button-list">
      {VALUE_DISPLAY.map((value) => {
        return (
          <MarkerButton
            key={value}
            value={value}
            callback={callback}
            callbackDisplay={callbackDisplay}
          />
        );
      })}
      <MarkerButtonRemove
        callback={callback}
        callbackDisplay={callbackDisplay}
      />
      <MarkerButtonCancel callbackDisplay={callbackDisplay} />
    </div>
  );
}
