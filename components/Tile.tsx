import { useState, type JSX } from "react";
import { TileBasic } from "../ts/TileTypes.ts";
import * as CONST from "../constants/Constants.ts";

let canCollect = false;

const generateButtonInner = (tile: TileBasic) => {
  let imageJSX: JSX.Element | null = null;
  let textJSX: JSX.Element | null = null;

  if (!tile.isVisible) {
    return <div className="tile-hidden"></div>;
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

export default function Tile({
  tile,
  updateMe,
}: {
  tile: TileBasic;
  updateMe: () => void;
}) {
  canCollect = tile.canCollectReward && !tile.hasCollectedReward;

  // DEBUG ONLY
  //   tile.isVisible = true;

  const handleClick = () => {
    tile.handleClick();
    updateMe();
  };

  return (
    <div className="tile" onClick={handleClick}>
      {generateButtonInner(tile)}
    </div>
  );
}
