import Tile from "./Tile.tsx";
import generateTiles from "../ts/GenerateTiles.ts";
import * as CONST from "../constants/Constants.ts";
import { useEffect, useState, type JSX } from "react";
import TileBasic from "../ts/TileBasic.ts";
import TileVision from "../ts/TileVision.ts";
import TileRatKing from "../ts/TileRatKing.ts";
import TileTitan from "../ts/TileTitan.ts";
import TileDragon from "../ts/TileDragon.ts";

export const tilesClassArray: TileBasic[] = [];

const createTileClass = (
  index: number,
  tileId: number,
  surroundingValue: number,
  myNeighbours: number[],
  tilesReact: TileBasic[],
  updateMe: () => void
) => {
  const x = index % CONST.TILES_WIDTH;
  const y = Math.floor(index / CONST.TILES_WIDTH);
  const energyChange = CONST.TILE_DATA[tileId].energyChange;
  const image = CONST.TILE_DATA[tileId].image;

  let tile: TileBasic;
  switch (tileId) {
    case CONST.ID_VISION:
      tile = new TileVision(tileId, energyChange, x, y, tilesClassArray);
      break;
    case CONST.ID_RAT_KING:
      tile = new TileRatKing(tileId, energyChange, x, y, tilesClassArray);
      break;
    case CONST.ID_TITAN:
      tile = new TileTitan(tileId, energyChange, x, y);
      break;
    case CONST.ID_DRAGON:
      tile = new TileDragon(tileId, energyChange, x, y);
      break;
    default:
      tile = new TileBasic(tileId, energyChange, x, y, image);
  }
  tile.totalSurroundingDamage = surroundingValue;
  tile.setSurroundingTiles(myNeighbours);

  tilesClassArray.push(tile);
  return (
    <Tile tile={tilesReact[index]} key={tile.uniqueId} updateMe={updateMe} />
  );
};

let ifInitialized = false;

export default function TileList() {
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

  for (let i = 0; i < TILES_TO_GENERATE.length; i++) {
    outputJSX.push(
      createTileClass(
        i,
        TILES_TO_GENERATE[i],
        TILES_SURROUNDING_VALUE[i],
        TILES_SURROUNDING_NEIGHBOURS[i],
        tilesReact,
        updateMe
      )
    );
  }

  return <div className="tile-list">{outputJSX}</div>;
}
