import MarkerButtonListWrapper from "./MarkerButtonListWrapper.tsx";
import generateTiles from "../ts/GenerateTiles.ts";
import { createTileClass } from "./TileCreateTileClass.tsx";
import { useEffect, useRef, useState, type JSX } from "react";
import type Player from "../ts/Player.ts";
import TileBasic from "../ts/TileBasic.ts";
import Tile from "./Tile.tsx";

export const tilesClassArray: TileBasic[] = [];

let hasInitialized = false;

export default function TileList({ player }: { player: Player }) {
  const [tilesReact, setTilesReact] = useState(tilesClassArray);
  const updateMe = () => {
    setTilesReact([...tilesReact]);
  };

  const [TILE_OBJECT, SET_TILE_OBJECT] = useState<{
    TILES_TO_GENERATE: number[];
    TILES_SURROUNDING_VALUE: number[];
    TILES_SURROUNDING_NEIGHBOURS: number[][];
  }>();

  const TILES_TO_GENERATE = TILE_OBJECT?.TILES_TO_GENERATE ?? [];
  const TILES_SURROUNDING_VALUE = TILE_OBJECT?.TILES_SURROUNDING_VALUE ?? [];
  const TILES_SURROUNDING_NEIGHBOURS =
    TILE_OBJECT?.TILES_SURROUNDING_NEIGHBOURS ?? [[]];

  // Marker to display on each Tile
  const [markerToShow, setMarkerToShow] = useState<number[]>(
    Array(TILES_TO_GENERATE.length).fill(0)
  );

  // Index of the Tile that wants to get its marker set
  const [markerButtonListIndex, setMarkerButtonListIndex] = useState<
    number | null
  >(null);

  // Grab ref of each Tile's HTML element to calculate the positioning of the popup menu for markers
  const tileRef = useRef<HTMLDivElement[]>([]);
  const setTileRef = (ref: HTMLDivElement) => {
    if (ref && !tileRef.current.includes(ref)) {
      tileRef.current.push(ref);
    }
  };

  let outputJSX: JSX.Element[] = [];

  useEffect(() => {
    if (hasInitialized) return;

    hasInitialized = true;
    SET_TILE_OBJECT(generateTiles());
  }, []);

  if (tilesClassArray.length === 0) {
    for (let i = 0; i < TILES_TO_GENERATE.length; i++) {
      createTileClass(
        i,
        TILES_TO_GENERATE[i],
        TILES_SURROUNDING_VALUE[i],
        TILES_SURROUNDING_NEIGHBOURS[i],
        player,
        tilesClassArray
      );
    }
  }

  for (let i = 0; i < tilesClassArray.length; i++) {
    outputJSX.push(
      <Tile
        tile={tilesReact[i]}
        key={tilesClassArray[i].uniqueId}
        updateMe={updateMe}
        markerToShow={markerToShow[i]}
        markerButtonListIndex={markerButtonListIndex}
        setMarkerButtonListIndex={setMarkerButtonListIndex}
        setRef={setTileRef}
      />
    );
  }

  return (
    <div className="tile-list">
      {outputJSX}
      <MarkerButtonListWrapper
        markerButtonListIndex={markerButtonListIndex}
        tileRef={tileRef}
        markerToShow={markerToShow}
        setMarkerToShow={setMarkerToShow}
        setMarkerButtonListIndex={setMarkerButtonListIndex}
      />
    </div>
  );
}
