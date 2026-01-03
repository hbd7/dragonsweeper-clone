import TileBasic from "./TileBasic";
import * as CONST from "../constants/TileData.ts";

export default class TileVision extends TileBasic {
  allTiles: TileBasic[];

  constructor(
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileBasic[]
  ) {
    super(id, energyChange, x, y, CONST.TILE_DATA[CONST.ID_VISION].image);
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
