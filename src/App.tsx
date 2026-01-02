import "./App.css";
import * as CONST from "../constants/Constants.ts";
import { useState } from "react";

function App() {
  return (
    <>
      <h1>Dragonsweeper Clone</h1>
      <p>
        Energy Scroll ID: {CONST.ID_ENERGY_SCROLL}{" "}
        <img src={CONST.TILE_IMAGE_ENERGY_SCROLL} alt="Energy Scroll" />
      </p>
      <p>
        Vision ID: {CONST.ID_VISION}{" "}
        <img src={CONST.TILE_IMAGE_VISION} alt="Vision" />
      </p>
      <p>
        Vision Scroll ID: {CONST.ID_VISION_SCROLL}{" "}
        <img src={CONST.TILE_IMAGE_VISION_SCROLL} alt="Vision Scroll" />
      </p>
      <p>
        Mine Scroll ID: {CONST.ID_MINE_SCROLL}{" "}
        <img src={CONST.TILE_IMAGE_MINE_SCROLL} alt="Mine Scroll" />
      </p>
      <p>
        Rat ID: {CONST.ID_RAT} <img src={CONST.TILE_IMAGE_RAT} alt="Rat" />
      </p>
      <p>
        Bat ID: {CONST.ID_BAT} <img src={CONST.TILE_IMAGE_BAT} alt="Bat" />
      </p>
      <p>
        Skeleton ID: {CONST.ID_SKELETON}{" "}
        <img src={CONST.TILE_IMAGE_SKELETON} alt="Skeleton" />
      </p>
      <p>
        Gargoyle ID: {CONST.ID_GARGOYLE}{" "}
        <img src={CONST.TILE_IMAGE_GARGOYLE} alt="Gargoyle" />
      </p>
      <p>
        Green Slime ID: {CONST.ID_GREEN_SLIME}{" "}
        <img src={CONST.TILE_IMAGE_GREEN_SLIME} alt="Green Slime" />
      </p>
      <p>
        Troll ID: {CONST.ID_TROLL}{" "}
        <img src={CONST.TILE_IMAGE_TROLL} alt="Troll" />
      </p>
      <p>
        Knight ID: {CONST.ID_KNIGHT}{" "}
        <img src={CONST.TILE_IMAGE_KNIGHT} alt="Knight" />
      </p>
      <p>
        Purple Slime ID: {CONST.ID_PURPLE_SLIME}{" "}
        <img src={CONST.TILE_IMAGE_PURPLE_SLIME} alt="Purple Slime" />
      </p>
      <p>
        Titan ID: {CONST.ID_TITAN}{" "}
        <img src={CONST.TILE_IMAGE_TITAN} alt="Titan" />
      </p>
      <p>
        Lich ID: {CONST.ID_LICH} <img src={CONST.TILE_IMAGE_LICH} alt="Lich" />
      </p>
      <p>
        Gazer ID: {CONST.ID_GAZER}{" "}
        <img src={CONST.TILE_IMAGE_GAZER} alt="Gazer" />
      </p>
      <p>
        Wizard ID: {CONST.ID_WIZARD}{" "}
        <img src={CONST.TILE_IMAGE_WIZARD} alt="Wizard" />
      </p>
      <p>
        Mine ID: {CONST.ID_MINE} <img src={CONST.TILE_IMAGE_MINE} alt="Mine" />
      </p>
      <p>
        Dragon ID: {CONST.ID_DRAGON}{" "}
        <img src={CONST.TILE_IMAGE_DRAGON} alt="Dragon" />
      </p>
      <p>
        Gnome ID: {CONST.ID_GNOME}{" "}
        <img src={CONST.TILE_IMAGE_GNOME} alt="Gnome" />
      </p>
      <p>
        Chest ID: {CONST.ID_CHEST}{" "}
        <img src={CONST.TILE_IMAGE_CHEST} alt="Chest" />
      </p>
      <p>
        Mimic ID: {CONST.ID_MIMIC}{" "}
        <img src={CONST.TILE_IMAGE_MIMIC} alt="Mimic" />
      </p>
    </>
  );
}

export default App;
