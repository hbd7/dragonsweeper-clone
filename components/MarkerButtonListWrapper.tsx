import { useRef, useState } from "react";
import MarkerButtonList from "./MarkerButtonList.tsx";
import { TILES_WIDTH, TILES_HEIGHT } from "../constants/TileData.ts";

let currentMarkerButtonListIndex: number | null = null;

export default function MarkerListWrapper({
  markerButtonListIndex,
  tileRef,
  markerToShow,
  setMarkerToShow,
  setMarkerButtonListIndex,
}: {
  markerButtonListIndex: number | null;
  tileRef: React.RefObject<HTMLDivElement[]>;
  markerToShow: number[];
  setMarkerToShow: React.Dispatch<React.SetStateAction<number[]>>;
  setMarkerButtonListIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const reposition = () => {
    if (markerButtonListIndex !== null && wrapperRef !== null) {
      const rect =
        tileRef.current[markerButtonListIndex].getBoundingClientRect();
      const rectMarker = wrapperRef.current?.getBoundingClientRect();

      let top = 0;
      let left = 0;

      if (markerButtonListIndex % TILES_WIDTH <= TILES_WIDTH / 2) {
        left = rect.right;
      } else {
        left = rect.left - (rectMarker?.width ?? 0);
        console.log(`rect2 width=${rectMarker?.width}`);
      }

      if (markerButtonListIndex / TILES_HEIGHT <= TILES_HEIGHT / 2) {
        top = rect.top;
      } else {
        top = rect.bottom - (rectMarker?.height ?? 0);
        console.log(`rect2 height=${rectMarker?.height}`);
      }

      setPosition({ top: top, left: left });
    }
  };

  if (currentMarkerButtonListIndex != markerButtonListIndex) {
    currentMarkerButtonListIndex = markerButtonListIndex;
    reposition();
  }

  return (
    <div
      ref={wrapperRef}
      className="marker-button-list-wrapper"
      style={{ left: position.left, top: position.top }}
    >
      <MarkerButtonList
        markerToShow={markerToShow}
        setMarkerToShow={setMarkerToShow}
        markerButtonListIndex={markerButtonListIndex}
        setMarkerButtonListIndex={setMarkerButtonListIndex}
      />
    </div>
  );
}
