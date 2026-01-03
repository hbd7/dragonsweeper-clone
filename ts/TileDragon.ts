import TileBasic from "./TileBasic";
import * as CONST from "../constants/TileData.ts";

export default class TileDragon extends TileBasic {
  constructor(id: number, energyChange: number, x: number, y: number) {
    super(id, energyChange, x, y, CONST.TILE_DATA[CONST.ID_DRAGON].image);
    this.isVisible = true;
  }

  handleCollectRewardExtended = () => {
    const defaultReturn = this.getDefaultReturnOnClick();

    // TODO: win
    // Check to make sure not dead first before giving win

    return defaultReturn;
  };
}
