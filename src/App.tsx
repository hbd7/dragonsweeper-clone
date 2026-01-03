import "../css/App.css";
import * as CONST from "../constants/Constants.ts";
import TileList from "../components/TileList.tsx";
import { useState } from "react";
import StatsBar from "../components/StatsBar.tsx";

function App() {
  return (
    <>
      <h1>Dragonsweeper Clone</h1>
      <main>
        <TileList />
        <StatsBar />
      </main>
    </>
  );
}

export default App;
