import type { JSX } from "react";
import type { PLAYER_DATA } from "../ts/Player";
import Energy from "./Energy";

export default function EnergyBar({ playerData }: { playerData: PLAYER_DATA }) {
  let outputJSX: JSX.Element[] = [];

  for (let i = 0; i < playerData.energyMax; i++) {
    outputJSX.push(<Energy isFull={i < playerData.energy} />);
  }

  return <div className="energy-bar">{outputJSX}</div>;
}
