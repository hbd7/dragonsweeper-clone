import TileBasic from "./TileBasic.ts";
import { TILE_DATA, ID_CHEST, REWARD_CHEST } from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileChestEnergy extends TileBasic {
  hasSpawnedEnergyScroll = false;

  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_CHEST].image);
  }

  handleActivateExtended = () => {
    this.energyChange = REWARD_CHEST;

    return this;
  };
}
