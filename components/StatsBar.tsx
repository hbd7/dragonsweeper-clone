import type { PLAYER_DATA } from "../ts/Player";
import type Player from "../ts/Player";
import EnergyList from "./EnergyList.tsx";

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
    </div>
  );
}
