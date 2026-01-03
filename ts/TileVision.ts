import TileBasic from "./TileBasic";
import * as CONST from "../constants/Constants.ts";

export default class TileVision extends TileBasic {
  allTiles: TileBasic[];

  constructor(
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileBasic[]
  ) {
    super(id, energyChange, x, y, CONST.TILE_DATA[CONST.ID_VISION].image);
    this.allTiles = allTiles;
    this.isVisible = true;
  }

  handleCollectRewardExtended = () => {
    const defaultReturn = this.getDefaultReturnOnClick();

    return defaultReturn;
  };
}
