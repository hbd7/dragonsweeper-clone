import "./App.css";
import * as CONST from "../constants/Constants.ts";
import { useState } from "react";

function App() {
  return (
    <>
      <h1>Dragonsweeper Clone</h1>
      <p>Energy Scroll ID: {CONST.ID_ENERGY_SCROLL}</p>
      <p>Vision ID: {CONST.ID_VISION}</p>
      <p>Vision Scroll ID: {CONST.ID_VISION_SCROLL}</p>
      <p>Mine Scroll ID: {CONST.ID_MINE_SCROLL}</p>
      <p>Rat ID: {CONST.ID_RAT}</p>
      <p>Bat ID: {CONST.ID_BAT}</p>
      <p>Skeleton ID: {CONST.ID_SKELETON}</p>
      <p>Gargoyle ID: {CONST.ID_GARGOYLE}</p>
      <p>Green Slime ID: {CONST.ID_GREEN_SLIME}</p>
      <p>Troll ID: {CONST.ID_TROLL}</p>
      <p>Knight ID: {CONST.ID_KNIGHT}</p>
      <p>Purple Slime ID: {CONST.ID_PURPLE_SLIME}</p>
      <p>Titan ID: {CONST.ID_TITAN}</p>
      <p>Lich ID: {CONST.ID_LICH}</p>
      <p>Gazer ID: {CONST.ID_GAZER}</p>
      <p>Wizard ID: {CONST.ID_WIZARD}</p>
      <p>Mine ID: {CONST.ID_MINE}</p>
      <p>Dragon ID: {CONST.ID_DRAGON}</p>
      <p>Gnome ID: {CONST.ID_GNOME}</p>
      <p>Chest ID: {CONST.ID_CHEST}</p>
      <p>Mimic ID: {CONST.ID_MIMIC}</p>
    </>
  );
}

export default App;
