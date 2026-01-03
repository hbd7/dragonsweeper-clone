import TileBasic from "./TileBasic";
import * as CONST from "../constants/TileData.ts";
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
    super(
      player,
      id,
      energyChange,
      x,
      y,
      CONST.TILE_DATA[CONST.ID_TITAN].image
    );
  }

  // Collecting Reward from Titan changes the tile into an Energy Scroll
  handleCollectRewardExtended = () => {
    const defaultReturn = this.getDefaultReturnOnClick();

    if (!this.hasSpawnedEnergyScroll) {
      this.handleTransform(
        CONST.ID_ENERGY_SCROLL,
        CONST.TILE_DATA[CONST.ID_ENERGY_SCROLL].energyChange,
        CONST.TILE_DATA[CONST.ID_ENERGY_SCROLL].image
      );

      this.canCollectReward = false;
      this.hasCollectedReward = false;
      this.hasSpawnedEnergyScroll = true;
    }

    return defaultReturn;
  };
}
