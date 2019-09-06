import React, { useState } from "react";
import ReactDOM from 'react-dom';

import ScoreSection from './ScoreSection.js';
import Buttons from './Buttons.js';

import "./App.css";

function App(){
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    
    return (
        <div className = "container">
        <ScoreSection />
        <Buttons />
        </div>
    )
}

const rootElement = document.createElement('div');
ReactDOM.render(<App />, rootElement);