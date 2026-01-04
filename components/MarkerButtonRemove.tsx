import type { Dispatch, SetStateAction } from "react";

export default function MarkerButtonRemove({
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
  const handleClick = () => {
    if (markerButtonListIndex !== null) {
      const tempArr = [...markerToShow];
      tempArr[markerButtonListIndex] = 0;
      setMarkerToShow(tempArr);
      setMarkerButtonListIndex(null);
    }
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
