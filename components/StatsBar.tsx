import type { PLAYER_DATA } from "../ts/Player";
import type Player from "../ts/Player";
import EnergyBar from "../components/EnergyBar.tsx";

export default function StatsBar({
  player,
  playerData,
}: {
  player: Player;
  playerData: PLAYER_DATA;
}) {
  return (
    <div>
      <EnergyBar playerData={playerData} />
    </div>
  );
}
