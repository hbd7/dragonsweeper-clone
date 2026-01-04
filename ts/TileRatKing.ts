import TileBasic from "./TileBasic";
import { TILE_DATA, ID_RAT, ID_RAT_KING } from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileRatKing extends TileBasic {
  allTiles: TileBasic[];

  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileBasic[]
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_RAT_KING].image);
    this.allTiles = allTiles;
  }

  // Clicking Rat King shows all rats on the board
  handleActivateExtended = () => {
    this.allTiles.forEach((tile) => {
      if (tile.id === ID_RAT) tile.isVisible = true;
    });

    return this;
  };
}
