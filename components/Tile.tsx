import {
  type MouseEvent,
  type JSX,
  type Dispatch,
  type SetStateAction,
} from "react";
import TileBasic from "../ts/TileBasic.ts";
import * as CONST from "../constants/TileData.ts";
import { IMAGE_REWARD, IMAGE_REWARD_NAME } from "../constants/ImageData.ts";

let canCollect = false;

export default function Tile({
  tile,
  updateMe,
  markerToShow,
  setMarkerButtonListIndex,
}: {
  tile: TileBasic;
  updateMe: () => void;
  markerToShow: number;
  setMarkerButtonListIndex: Dispatch<SetStateAction<number | null>>;
}) {
  canCollect = tile.canCollectReward && !tile.hasCollectedReward;

  // DEBUG ONLY
  // tile.isVisible = true;

  const handleClick = () => {
    tile.handleClick();
    setMarkerButtonListIndex(null);
    updateMe();
  };

  const handleRightClick = (e: MouseEvent) => {
    // Do popup menu for marking
    e.preventDefault();

    if (tile.isVisible) return;

    setMarkerButtonListIndex(tile.index);
  };

  const generateButtonInner = () => {
    let imageJSX: JSX.Element | null = null;
    let textJSX: JSX.Element | null = null;

    if (!tile.isVisible) {
      return (
        <div className="tile-hidden">
          {markerToShow == 100 ? (
            <span>*</span>
          ) : markerToShow > 0 ? (
            markerToShow
          ) : (
            ""
          )}
        </div>
      );
    }

    if (tile.image !== "") {
      imageJSX = <img src={tile.image} alt={CONST.TILE_DATA[tile.id].name} />;
    }

    if (canCollect && tile.energyChange !== 0) {
      textJSX = (
        <span>
          <img src={IMAGE_REWARD} alt={IMAGE_REWARD_NAME} />{" "}
          {Math.abs(tile.energyChange)}
        </span>
      );
    } else if (tile.energyChange < 0) {
      if (tile.id != CONST.ID_MIMIC || tile.canCollectReward) {
        textJSX = <span>{Math.abs(tile.energyChange)}</span>;
      }
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

  return (
    <div
      className="tile"
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {generateButtonInner()}
    </div>
  );
}
