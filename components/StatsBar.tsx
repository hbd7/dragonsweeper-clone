import type { PLAYER_DATA } from "../ts/Player.ts";
import type Player from "../ts/Player.ts";
import EnergyList from "./EnergyList.tsx";
import ExperienceList from "./ExperienceList.tsx";
import Hero from "./Hero.tsx";

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
