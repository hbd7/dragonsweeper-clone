import * as CONST from "../constants/TileData.ts";
import { tilesClassArray } from "../components/TileList.tsx";
import Player from "./Player.ts";

export default class TileBasic {
  id: number;
  energyChange: number;
  x: number;
  y: number;
  image: string;
  uniqueId: string;
  index: number;

  isVisible = false;
  canCollectReward = false;
  hasCollectedReward = false;
  isBlockedByGazer = false;
  totalSurroundingDamage = 0;
  surroundingTiles: number[] = [];
  surroundingTilesExtended: number[] = [];

  player: Player;
  wasVisibleBeforeThisClick = false;

  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number,
    image: string
  ) {
    this.id = id;
    this.energyChange = energyChange;
    this.image = image;
    this.x = x;
    this.y = y;
    this.uniqueId = `(${this.x},${this.y})`;
    this.index = y * CONST.TILES_WIDTH + x;
    this.player = player;

    if (!id) {
      this.hasCollectedReward = true;
    }
  }

  setSurroundingTiles = (tiles: number[]) => {
    this.surroundingTiles = [...tiles];
    this.surroundingTilesExtended = [...tiles];

    if (this.y >= 2)
      this.surroundingTilesExtended.push(this.index - CONST.TILES_WIDTH * 2);
    if (this.y < CONST.TILES_HEIGHT - 2)
      this.surroundingTilesExtended.push(this.index + CONST.TILES_WIDTH * 2);
    if (this.x >= 2) this.surroundingTilesExtended.push(this.index - 2);
    if (this.x < CONST.TILES_WIDTH - 2)
      this.surroundingTilesExtended.push(this.index + 2);
  };

  // Transform this tile into another tile type
  handleTransform = (id: number, energyChange: number, image: string) => {
    this.id = id;
    this.energyChange = energyChange;
    this.image = image;
    this.isVisible = true;
    this.canCollectReward = true;
    this.hasCollectedReward = false;

    return this;
  };

  setToEmpty = () => {
    this.id = 0;
    this.image = "";
    this.energyChange = 0;
    this.canCollectReward = false;
    this.hasCollectedReward = true;

    return this;
  };

  handleCollectRewardExtended = () => {
    return this;
  };

  handleCollectReward = () => {
    if (this.energyChange !== 0) this.player.gainExperience(this.energyChange);

    this.setToEmpty();
    this.canCollectReward = false;
    this.hasCollectedReward = true;

    return this.handleCollectRewardExtended();
  };

  handleActivateExtended = () => {
    return this;
  };

  handleActivate = () => {
    this.wasVisibleBeforeThisClick = this.isVisible;

    this.canCollectReward = true;
    this.isVisible = true;

    for (const neighbour of this.surroundingTiles) {
      tilesClassArray[neighbour].totalSurroundingDamage += this.energyChange; // Energy Change is always negative so += instead of -=
    }

    this.player.loseEnergy(this.energyChange);

    return this.handleActivateExtended();
  };

  handleClick = () => {
    if (this.id === CONST.ID_ENERGY_SCROLL) {
      if (this.isVisible) {
        this.player.heal();
        this.setToEmpty();

        return null;
      }

      this.isVisible = true;
      return null;
    }

    this.isVisible = true;
    if (this.hasCollectedReward) return null;

    let output;
    if (this.isVisible && this.canCollectReward) {
      output = this.handleCollectReward();
    } else {
      output = this.handleActivate();
    }

    return output;
  };
}
