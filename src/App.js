//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Buttons from './App-Stretch/Buttons';
import ScoreSection from "./App-Stretch/ScoreSection";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const scoreIncrease = (team, val) => {
    const teams = {
        'home': {score: homeScore, setter: setHomeScore},
        'away': {score: awayScore, setter: setAwayScore},
    }
    teams[team].setter(teams[team].score + val);
}

  return (
    <div className="container">
      <ScoreSection quarter={quarter} homeScore={homeScore} awayScore={awayScore}/>
      <Buttons scoreIncrease={scoreIncrease} quarter={quarter} setQuarter={setQuarter} />
    </div>
  );
}

export default App;
