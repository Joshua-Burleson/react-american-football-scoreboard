import React, { useState } from "react";
import ReactDOM from 'react-dom';

import ScoreSection from './ScoreSection.js';
import Buttons from './Buttons.js';

import "./App.css";

function App(){
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const scoreIncrease = (team, val) => {
        const teams = {
            'home': {score: homeScore, setter: setHomeScore},
            'away': {score: awayScore, setter: setAwayScore},
        }

        teams[team].setter(teams[team].score + val);
    }
    
    return (
        <div className = "container">
        <ScoreSection awayScore = {awayScore} homeScore = {homeScore}/>
        <Buttons scoreIncrease = {scoreIncrease}/>
        </div>
    )
}

const rootElement = document.createElement('div');
ReactDOM.render(<App />, rootElement);