import Tile from "./Tile.tsx";
import * as CONST from "../constants/TileData.ts";
import TileBasic from "../ts/TileBasic.ts";
import TileVision from "../ts/TileVision.ts";
import TileRatKing from "../ts/TileRatKing.ts";
import TileTitan from "../ts/TileTitan.ts";
import TileDragon from "../ts/TileDragon.ts";
import TileMimic from "../ts/TileMimic.ts";
import type Player from "../ts/Player.ts";
import type { Dispatch, SetStateAction } from "react";

export const createTileClass = (
  index: number,
  tileId: number,
  surroundingValue: number,
  myNeighbours: number[],
  player: Player,
  tilesClassArray: TileBasic[],
  updateMe: () => void,
  tilesReact: TileBasic[],
  markerToShow: number[],
  setMarkerButtonListIndex: Dispatch<SetStateAction<number | null>>
) => {
  const x = index % CONST.TILES_WIDTH;
  const y = Math.floor(index / CONST.TILES_WIDTH);
  const energyChange = CONST.TILE_DATA[tileId].energyChange;
  const image = CONST.TILE_DATA[tileId].image;

  let tile: TileBasic;
  switch (tileId) {
    case CONST.ID_VISION:
      tile = new TileVision(
        player,
        tileId,
        energyChange,
        x,
        y,
        tilesClassArray
      );
      break;
    case CONST.ID_RAT_KING:
      tile = new TileRatKing(
        player,
        tileId,
        energyChange,
        x,
        y,
        tilesClassArray
      );
      break;
    case CONST.ID_TITAN:
      tile = new TileTitan(player, tileId, energyChange, x, y);
      break;
    case CONST.ID_DRAGON:
      tile = new TileDragon(player, tileId, energyChange, x, y);
      break;
    case CONST.ID_MIMIC:
      tile = new TileMimic(player, tileId, energyChange, x, y);
      break;
    default:
      tile = new TileBasic(player, tileId, energyChange, x, y, image);
  }
  tile.totalSurroundingDamage = surroundingValue;
  tile.setSurroundingTiles(myNeighbours);

  tilesClassArray.push(tile);
  return (
    <Tile
      tile={tilesReact[index]}
      key={tile.uniqueId}
      updateMe={updateMe}
      markerToShow={markerToShow[index]}
      setMarkerButtonListIndex={setMarkerButtonListIndex}
    />
  );
};
