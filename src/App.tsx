import "../css/App.css";
import TileList from "../components/TileList.tsx";
import { useState } from "react";
import StatsBar from "../components/StatsBar.tsx";
import Player, {
  BASE_ENERGY,
  EXPERIENCE_TO_NEXT_LEVEL,
  type PLAYER_DATA,
  type SET_FUNCTION,
  type SET_FUNCTIONS,
} from "../ts/Player.ts";

function App() {
  const [energy, setEnergy] = useState<number>(BASE_ENERGY);
  const [energyMax, setEnergyMax] = useState<number>(BASE_ENERGY);
  const [experience, setExperience] = useState<number>(0);
  const [experienceMax, setExperienceMax] = useState<number>(
    EXPERIENCE_TO_NEXT_LEVEL[0]
  );
  const [level, setLevel] = useState<number>(0);

  const funcs: SET_FUNCTIONS = {
    funcSetEnergy: setEnergy,
    funcSetEnergyMax: setEnergyMax,
    funcSetExperience: setExperience,
    funcSetExperienceMax: setExperienceMax,
  };
  const player = new Player(funcs);

  const playerData: PLAYER_DATA = {
    energy: energy,
    energyMax: energyMax,
    experience: experience,
    experienceMax: experienceMax,
  };

  return (
    <>
      <h1>Dragonsweeper Clone</h1>
      <main>
        <TileList player={player} />
        <StatsBar player={player} playerData={playerData} />
      </main>
    </>
  );
}

export default App;
