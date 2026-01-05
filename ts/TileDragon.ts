import TileBasic from "./TileBasic";
import { TILE_DATA, ID_DRAGON } from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileDragon extends TileBasic {
  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_DRAGON].image);
    this.isVisible = true;
  }

  handleCollectRewardExtended = () => {
    this.player.weWon();

    return this;
  };
}
