import { useState } from "react";
import { Player } from "../ts/Player.ts";

export default function StatsBar() {
  return (
    <div>
      <div className="energy-bar">{Player.energy}</div>
    </div>
  );
}
