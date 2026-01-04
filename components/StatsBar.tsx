import type { PLAYER_DATA } from "../ts/Player.ts";
import type Player from "../ts/Player.ts";
import EnergyList from "./StatsBarEnergyList.tsx";
import ExperienceList from "./StatsBarExperienceList.tsx";
import Hero from "./StatsBarHero.tsx";

export default function StatsBar({
  player,
  playerData,
}: {
  player: Player;
  playerData: PLAYER_DATA;
}) {
  return (
    <div className="stats-bar">
      <Hero playerData={playerData} player={player} />
      <EnergyList playerData={playerData} />
      <ExperienceList playerData={playerData} />
    </div>
  );
}
