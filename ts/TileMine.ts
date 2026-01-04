import TileBasic from "./TileBasic";
import { TILE_DATA, ID_MINE, REWARD_MINE } from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileMimic extends TileBasic {
  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_MINE].image);
  }

  handleActivateExtended = () => {
    this.energyChange = REWARD_MINE;

    return this;
  };
}
