import TileBasic from "./TileBasic";
import * as CONST from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileMimic extends TileBasic {
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
      CONST.TILE_DATA[CONST.ID_MIMIC].image
    );
  }

  handleActivateExtended = () => {
    this.image = CONST.TILE_IMAGE_MIMIC_ACTIVE;
    return this.getDefaultReturnOnClick();
  };
}
