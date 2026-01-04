import TileBasic from "./TileBasic.ts";
import {
  TILE_DATA,
  ID_WALL,
  REWARD_WALL,
  TILE_IMAGE_WALL_2,
  TILE_IMAGE_WALL_3,
} from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileWall extends TileBasic {
  hasSpawnedEnergyScroll = false;
  clicksLeft = 3;

  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_WALL].image);
  }

  handleActivateExtended = () => {
    if (!this.wasVisibleBeforeThisClick) return this;

    this.clicksLeft--;
    switch (this.clicksLeft) {
      case 2:
        this.player.loseEnergy(-1);
        this.image = TILE_IMAGE_WALL_2;
        break;
      case 1:
        this.player.loseEnergy(-1);
        this.image = TILE_IMAGE_WALL_3;
        break;
      case 0:
        this.player.loseEnergy(-1);
        this.energyChange = REWARD_WALL;
        break;
    }

    if (this.clicksLeft > 0) {
      this.canCollectReward = false;
    }

    return this;
  };
}
