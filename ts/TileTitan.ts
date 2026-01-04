import TileBasic from "./TileBasic";
import {
  TILE_DATA,
  ID_TITAN,
  ID_ENERGY_SCROLL,
} from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileTitan extends TileBasic {
  hasSpawnedEnergyScroll = false;

  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_TITAN].image);
  }

  // Collecting Reward from Titan changes the tile into an Energy Scroll
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
