import { type JSX } from "react";
import { TileBasic } from "../ts/TileTypes.js";
import * as CONST from "../constants/Constants.ts";

let canCollect = false;

const handleKeyDown = () => {};
const handleKeyUp = () => {};
const handleMouseMove = () => {};

const generateButtonInner = (tile: TileBasic) => {
  let imageJSX: JSX.Element | null = null;
  let textJSX: JSX.Element | null = null;

  if (!tile.isVisible) {
    return <div></div>;
  }

  if (tile.image !== "") {
    imageJSX = <img src={tile.image} alt={CONST.TILE_DATA[tile.id].name} />;
  }

  if (tile.energyChange < 0) {
    textJSX = <span>{Math.abs(tile.energyChange)}</span>;
  } else if (canCollect && tile.energyChange !== 0) {
    textJSX = (
      <span>
        <img
          src={CONST.TILE_DATA[CONST.ID_CAN_COLLECT_REWARD].image}
          alt={CONST.TILE_DATA[CONST.ID_CAN_COLLECT_REWARD].name}
        />{" "}
        {tile.energyChange}
      </span>
    );
  } else if (tile.image == "" && tile.totalSurroundingDamage > 0) {
    textJSX = (
      <span className="surrounding">{tile.totalSurroundingDamage}</span>
    );
  }

  return (
    <div className={canCollect ? "can-collect" : ""}>
      {imageJSX}
      {textJSX}
    </div>
  );
};

export default function Tile({ tile }: { tile: TileBasic }) {
  canCollect = tile.canCollectReward && !tile.hasCollectedReward;
  tile.isVisible = true;

  return (
    <div className="tile" onClick={tile.handleClick}>
      {generateButtonInner(tile)}
      {tile.totalSurroundingDamage}
    </div>
  );
}
