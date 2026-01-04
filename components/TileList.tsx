import MarkerButtonList from "./MarkerButtonList.tsx";
import generateTiles from "../ts/GenerateTiles.ts";
import { createTileClass } from "./CreateTileClass.tsx";
import {
  useEffect,
  useState,
  type Dispatch,
  type JSX,
  type SetStateAction,
} from "react";
import type Player from "../ts/Player.ts";
import TileBasic from "../ts/TileBasic.ts";

export const tilesClassArray: TileBasic[] = [];

let ifInitialized = false;

export default function TileList({ player }: { player: Player }) {
  const [tilesReact, setTilesReact] = useState(tilesClassArray);
  const updateMe = () => {
    setTilesReact((arr) => [...arr]);
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

  let outputJSX: JSX.Element[] = [];

  useEffect(() => {
    if (ifInitialized) return;

    ifInitialized = true;
    SET_TILE_OBJECT(generateTiles());
  }, []);

  const [markerToShow, setMarkerToShow] = useState<number[]>(
    Array(TILES_TO_GENERATE.length).fill(0)
  );
  const [markerButtonListIndex, setMarkerButtonListIndex] = useState<
    number | null
  >(null);

  for (let i = 0; i < TILES_TO_GENERATE.length; i++) {
    outputJSX.push(
      createTileClass(
        i,
        TILES_TO_GENERATE[i],
        TILES_SURROUNDING_VALUE[i],
        TILES_SURROUNDING_NEIGHBOURS[i],
        player,
        tilesClassArray,
        updateMe,
        tilesReact,
        markerToShow,
        setMarkerButtonListIndex
      )
    );
  }

  return (
    <div className="tile-list">
      {outputJSX}
      <MarkerButtonList
        markerToShow={markerToShow}
        setMarkerToShow={setMarkerToShow}
        markerButtonListIndex={markerButtonListIndex}
        setMarkerButtonListIndex={setMarkerButtonListIndex}
      />
    </div>
  );
}
