import TileBasic from "./TileBasic";
import { TILE_DATA, ID_VISION_SCROLL } from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileVisionScroll extends TileBasic {
  allTiles: TileBasic[];

  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileBasic[]
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_VISION_SCROLL].image);
    this.allTiles = allTiles;
  }

  handleActivateExtended = () => {
    const notVisibleTiles: TileBasic[] = this.allTiles.filter((tile) => {
      return !tile.isVisible;
    });

    if (notVisibleTiles.length > 0) {
      const randomIndex = Math.floor(Math.random() * notVisibleTiles.length);

      this.allTiles[notVisibleTiles[randomIndex].index].isVisible = true;
      notVisibleTiles[randomIndex].surroundingTiles.forEach((tile) => {
        this.allTiles[tile].isVisible = true;
      });
    }

    this.setToEmpty();

    return this;
  };
}
