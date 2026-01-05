import * as CONST from "../constants/TileData.ts";
import { tilesClassArray } from "../components/TileList.tsx";
import Player from "./Player.ts";

export default class TileBasic {
  allTiles: TileBasic[] = [];

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
    image: string,
    allTiles?: TileBasic[]
  ) {
    this.id = id;
    this.energyChange = energyChange;
    this.image = image;
    this.x = x;
    this.y = y;
    this.uniqueId = `(${this.x},${this.y})`;
    this.index = y * CONST.TILES_WIDTH + x;
    this.player = player;

    if (allTiles) this.allTiles = allTiles;

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
    this.canCollectReward = true;
    this.isVisible = true;

    for (const neighbour of this.surroundingTiles) {
      tilesClassArray[neighbour].totalSurroundingDamage += this.energyChange; // Energy Change is always negative so += instead of -=
    }

    this.player.loseEnergy(this.energyChange);

    return this.handleActivateExtended();
  };

  handleEnergyScroll = () => {
    if (this.isVisible) {
      this.player.heal();
      this.setToEmpty();

      return null;
    }

    this.isVisible = true;
  };

  handleGnome = () => {
    if (this.isVisible && this.canCollectReward) {
      this.handleCollectReward();
      return;
    }

    this.isVisible = true;

    if (!this.allTiles) {
      console.error("Gnome object was not passed allTiles[]");
      return;
    }

    const emptyHiddenTiles = this.allTiles.filter((tile) => {
      return !tile.isVisible && tile.id == 0;
    });

    if (emptyHiddenTiles.length == 0) {
      this.canCollectReward = true;
      this.hasCollectedReward = false;
      this.energyChange = CONST.REWARD_GNOME;
      return;
    }

    this.id = 0;
    this.image = "";

    const newGnomeIndex = Math.floor(Math.random() * emptyHiddenTiles.length);
    emptyHiddenTiles[newGnomeIndex].id = CONST.ID_GNOME;
    emptyHiddenTiles[newGnomeIndex].image =
      CONST.TILE_DATA[CONST.ID_GNOME].image;
  };

  handleClick = () => {
    this.wasVisibleBeforeThisClick = this.isVisible;

    if (this.id === CONST.ID_ENERGY_SCROLL) {
      this.handleEnergyScroll();
      return null;
    }

    if (this.id === CONST.ID_GNOME && !this.canCollectReward) {
      this.handleGnome();
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
