import TileBasic from "./TileBasic";
import {
  TILE_DATA,
  ID_MIMIC,
  TILE_IMAGE_MIMIC_ACTIVE,
} from "../constants/TileData.ts";
import type Player from "./Player.ts";

export default class TileMimic extends TileBasic {
  constructor(
    player: Player,
    id: number,
    energyChange: number,
    x: number,
    y: number
  ) {
    super(player, id, energyChange, x, y, TILE_DATA[ID_MIMIC].image);
  }

  handleActivateExtended = () => {
    this.image = TILE_IMAGE_MIMIC_ACTIVE;
    return this;
  };
}
