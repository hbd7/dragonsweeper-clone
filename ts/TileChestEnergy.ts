import TileBasic from "./TileBasic.ts";
import {
  TILE_DATA,
  ID_CHEST,
  ID_ENERGY_SCROLL,
} from "../constants/TileData.ts";
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
    this.isVisible = true;
  }

  handleCollectRewardExtended = () => {
    if (!this.hasSpawnedEnergyScroll) {
      this.handleTransform(
        ID_ENERGY_SCROLL,
        TILE_DATA[ID_ENERGY_SCROLL].energyChange,
        TILE_DATA[ID_ENERGY_SCROLL].image
      );

      this.canCollectReward = false;
      this.hasCollectedReward = false;
      this.hasSpawnedEnergyScroll = true;
    }

    return this;
  };
}
