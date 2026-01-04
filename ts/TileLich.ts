import TileBasic from "./TileBasic.ts";
import {
  TILE_DATA,
  ID_MINE,
  ID_MINE_SCROLL,
  ID_LICH,
} from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileLich extends TileBasic {
  allTiles: TileBasic[];
  hasSpawnedMineScroll = false;

  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileBasic[]
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_LICH].image);
    this.allTiles = allTiles;
  }

  handleVisionScroll = () => {
    console.log(this.allTiles.length);
    this.allTiles.forEach((tile) => {
      if (tile.id != ID_MINE) return;

      tile.surroundingTiles.forEach((surroundingTile) => {
        this.allTiles[surroundingTile].totalSurroundingDamage +=
          tile.energyChange;
      });

      tile.energyChange = 0;
    });

    this.setToEmpty();

    return this;
  };

  handleSpawnVisionScroll = () => {
    this.handleTransform(
      ID_MINE_SCROLL,
      TILE_DATA[ID_MINE_SCROLL].energyChange,
      TILE_DATA[ID_MINE_SCROLL].image
    );

    this.canCollectReward = false;
    this.hasCollectedReward = false;
    this.hasSpawnedMineScroll = true;

    return this;
  };

  handleCollectRewardExtended = () => {
    if (!this.hasSpawnedMineScroll) this.handleSpawnVisionScroll();

    return this;
  };

  handleActivateExtended = () => {
    if (this.id == ID_MINE_SCROLL) this.handleVisionScroll();

    return this;
  };
}
