import TileBasic from "./TileBasic";
import { TILE_DATA, ID_VISION } from "../constants/TileData.ts";
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
    super(player, id, energyChange, x, y, TILE_DATA[ID_VISION].image);
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

    return this;
  };
}
