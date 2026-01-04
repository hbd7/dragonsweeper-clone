import TileBasic from "./TileBasic.ts";
import {
  TILE_DATA,
  ID_DRAGON_EGG,
  REWARD_DRAGON_EGG,
} from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileDragonEgg extends TileBasic {
  hasSpawnedEnergyScroll = false;

  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_DRAGON_EGG].image);
  }

  handleActivateExtended = () => {
    this.energyChange = REWARD_DRAGON_EGG;

    return this;
  };
}
