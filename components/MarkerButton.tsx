import type { Dispatch, SetStateAction } from "react";
import { type SET_FUNCTION } from "../ts/Player.ts";
import type TileBasic from "../ts/TileBasic.ts";

export default function MarkerButton({
  value,
  markerToShow,
  setMarkerToShow,
  markerButtonListIndex,
  setMarkerButtonListIndex,
}: {
  value: number;
  markerToShow: number[];
  setMarkerToShow: Dispatch<SetStateAction<number[]>>;
  markerButtonListIndex: number | null;
  setMarkerButtonListIndex: Dispatch<SetStateAction<number | null>>;
}) {
  const handleClick = () => {
    if (markerButtonListIndex !== null) {
      const tempArr = [...markerToShow];
      tempArr[markerButtonListIndex] = value;
      setMarkerToShow(tempArr);
      setMarkerButtonListIndex(null);
    }
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
