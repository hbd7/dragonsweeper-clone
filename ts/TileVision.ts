import TileBasic from "./TileBasic";
import * as CONST from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileVision extends TileBasic {
  allTiles: TileBasic[];

  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileBasic[]
  ) {
    super(
      player,
      id,
      energyChange,
      x,
      y,
      CONST.TILE_DATA[CONST.ID_VISION].image
    );
    this.allTiles = allTiles;
    this.isVisible = true;
  }

  handleActivateExtended = () => {
    this.allTiles.forEach((tile) => {
      if (this.surroundingTilesExtended.includes(tile.index)) {
        tile.isVisible = true;
      }
    });

    this.setToEmpty();

    return this.getDefaultReturnOnClick();
  };
}
