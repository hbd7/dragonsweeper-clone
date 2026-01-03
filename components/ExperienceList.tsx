import type { JSX } from "react";
import type { PLAYER_DATA } from "../ts/Player.ts";
import Experience from "./Experience.tsx";

export default function ExperienceList({
  playerData,
}: {
  playerData: PLAYER_DATA;
}) {
  let outputJSX: JSX.Element[] = [];

  for (let i = 0; i < playerData.experienceMax; i++) {
    outputJSX.push(<Experience key={i} isFull={i < playerData.experience} />);
  }
  if (playerData.experience >= playerData.experienceMax) {
    outputJSX.push(<span key="experiencePlusSign">+</span>);
  }

  return <div className="experience-bar">{outputJSX}</div>;
}
