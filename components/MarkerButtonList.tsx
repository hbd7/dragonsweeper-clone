import type { Dispatch, SetStateAction } from "react";
import MarkerButton from "./MarkerButton.tsx";
import MarkerButtonCancel from "./MarkerButtonCancel.tsx";
import MarkerButtonRemove from "./MarkerButtonRemove.tsx";

export const VALUE_DISPLAY: number[] = [];
for (let i = 1; i < 12; i++) {
  VALUE_DISPLAY.push(i);
}
VALUE_DISPLAY.push(100);

export default function MarkerButtonList({
  markerToShow,
  setMarkerToShow,
  markerButtonListIndex,
  setMarkerButtonListIndex,
}: {
  markerToShow: number[];
  setMarkerToShow: Dispatch<SetStateAction<number[]>>;
  markerButtonListIndex: number | null;
  setMarkerButtonListIndex: Dispatch<SetStateAction<number | null>>;
}) {
  if (markerButtonListIndex === null)
    return <div className="marker-button-list hidden"></div>;

  return (
    <div className="marker-button-list">
      {VALUE_DISPLAY.map((value) => {
        return (
          <MarkerButton
            key={value}
            value={value}
            markerToShow={markerToShow}
            setMarkerToShow={setMarkerToShow}
            markerButtonListIndex={markerButtonListIndex}
            setMarkerButtonListIndex={setMarkerButtonListIndex}
          />
        );
      })}
      <MarkerButtonRemove
        markerToShow={markerToShow}
        setMarkerToShow={setMarkerToShow}
        markerButtonListIndex={markerButtonListIndex}
        setMarkerButtonListIndex={setMarkerButtonListIndex}
      />
      <MarkerButtonCancel setMarkerButtonListIndex={setMarkerButtonListIndex} />
    </div>
  );
}
