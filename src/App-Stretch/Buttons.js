import React from "react";

function Buttons(props){
    const {scoreIncrease} = props
    const {quarter, setQuarter} = props
    return (
      <section className="button-wrapper">
        <section className="buttons">
          <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className="homeButtons__touchdown" onClick={() => scoreIncrease('home', 7)}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={() => scoreIncrease('home', 3)}> Home Field Goal</button>
          </div>
          <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={() => scoreIncrease('away', 7)}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={() => scoreIncrease('away', 3)}>Away Field Goal</button>
          </div>
        </section>
        <div className="quarter-buttons">
          <button className="quarterUp" onClick={() => setQuarter(quarter < 4 ? quarter + 1 : 1)}>Quarter Up</button>
          <button className="quarterDown" onClick={() => setQuarter(quarter > 1 ? quarter - 1 : 1)}>Quarter Down</button>
        </div>
      </section>
    );
}

export default Buttons