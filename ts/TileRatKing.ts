import TileBasic from "./TileBasic";
import * as CONST from "../constants/TileData.ts";

export default class TileRatKing extends TileBasic {
  allTiles: TileBasic[];

  constructor(
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileBasic[]
  ) {
    super(id, energyChange, x, y, CONST.TILE_DATA[CONST.ID_RAT_KING].image);
    this.allTiles = allTiles;
  }

  // Clicking Rat King shows all rats on the board
  handleActivateExtended = () => {
    this.allTiles.forEach((tile) => {
      if (tile.id === CONST.ID_RAT) tile.isVisible = true;
    });

    return this.getDefaultReturnOnClick();
  };
}
