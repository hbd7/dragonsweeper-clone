import type { JSX } from "react";
import type { PLAYER_DATA } from "../ts/Player.ts";
import Experience from "./StatsBarExperience.tsx";

export default function ExperienceList({
  playerData,
}: {
  playerData: PLAYER_DATA;
}) {
  let outputJSX: JSX.Element[] = [];

  for (let i = 0; i < playerData.experienceMax; i++) {
    outputJSX.push(
      <Experience
        key={i}
        isFull={i < playerData.experience}
        isEven={i % 2 == 0}
        isEveryFive={i > 0 && i % 5 == 0}
      />
    );
  }
  if (playerData.experience > playerData.experienceMax) {
    outputJSX.push(<span key="experiencePlusSign">+</span>);
  }

  return <div className="experience-bar">{outputJSX}</div>;
}
