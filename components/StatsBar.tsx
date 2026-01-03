import type { PLAYER_DATA } from "../ts/Player.ts";
import type Player from "../ts/Player.ts";
import EnergyList from "./EnergyList.tsx";
import ExperienceList from "./ExperienceList.tsx";

export default function StatsBar({
  player,
  playerData,
}: {
  player: Player;
  playerData: PLAYER_DATA;
}) {
  return (
    <div>
      <EnergyList playerData={playerData} />
      <ExperienceList playerData={playerData} />
    </div>
  );
}
