import React from 'react'
import f1 from './f1.jpg'

function Motorsports(){
    return(
        <div className = "page">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <p className = "page-title">
            Verstappen handed further 10 second penalty for Lap 37 collision with Hamilton in Saudi Arabian GP
            </p>
            <img src = {f1} className = "img"></img>
            <p className = "page-text">Max Verstappen has been handed a 10-second penalty for causing a Turn 27 collision with Lewis Hamilton in the Saudi Arabian Grand Prix, plus two penalty points.</p>
            <p className = "page-text">The title protagonists were embroiled in a bizarre incident on Lap 37 of the Saudi Arabian Grand Prix when Verstappen, who was asked to return the lead to Hamilton having been deemed to gain an advantage going off track earlier at Turn 1, slowed to let his rival past.</p>
            <p className = "page-text">Hamilton, however, was caught off-guard by the slowing Red Bull and attempted to jink left in avoidance, clipping the car ahead and damaging his front wing. Verstappen received a five-second penalty for the earlier Turn 1 incident, with both drivers summoned to the stewards for this Turn 27 scrap.</p>
            <p className = "page-text">The stewards saw fit to hand Verstappen a further 10-second penalty and two penalty points (taking him to a total of seven over the 12-month period) with their report reading: "At Turn 21 the driver of car 33 [Verstappen] was given the instruction to give back a position to car 44 [Hamilton] and was told by the team to do so 'strategically'. Car 33 slowed significantly at Turn 26.</p>
            <p className = "page-text">Verstappen was therefore found to have breached Article 2, Chapter IV Appendix L of the FIA International Sporting Code, but keeps his second-place finish and enters the season finale level on points with Hamilton.</p>
        </div>
    );
}

export default Motorsports