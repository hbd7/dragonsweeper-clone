import type { JSX } from "react";
import type { PLAYER_DATA } from "../ts/Player.ts";
import Energy from "./StatsBarEnergy.tsx";

export default function EnergyList({
  playerData,
}: {
  playerData: PLAYER_DATA;
}) {
  let outputJSX: JSX.Element[] = [];

  for (let i = 0; i < playerData.energyMax; i++) {
    outputJSX.push(
      <Energy
        key={i}
        isFull={i < playerData.energy}
        isEveryFive={i > 0 && i % 5 == 0}
      />
    );
  }

  return <div className="energy-bar">{outputJSX}</div>;
}
