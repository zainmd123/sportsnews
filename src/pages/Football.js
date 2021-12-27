import React from 'react'
import './pages.css'
import football from './football.jpg'

function Football(){
    return(
        <div>
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className = "page">
            <p className = "page-title">
            Tottenham Hotspur Hit By COVID-19 Outbreak: Report
            </p>
            <p className = "page-text">Up to six Spurs first-team players and two members of backroom staff are believed to have tested positive for COVID-19.</p><p className = "page-text"> Tottenham Hotspur FC have been hit by a COVID-19 outbreak in their camp ahead of Thursday's Europa Conference League match against Rennes. Up to six Spurs' first-team players and two members of backroom staff are believed to have tested positive for COVID, as per Sky Sports.
            <img src = {football} className = "img"></img>
            </p><p className = "page-text">

This is a big blow to head coach Antonio Conte with so many crucial fixtures coming up. After playing Rennes in midweek, the north London team will travel to Brighton followed by Leicester, before hosting Liverpool and then West Ham in the Carabao Cup quarter-final in two weeks' time.
</p><p className = "page-text">

With the 10-day period of self-isolation for anyone who tests positive, Spurs' players hit by the outbreak could miss the next three games. </p><p className = "page-text">Last time when Spurs players were on the field they produced a strong performance to beat Norwich City 3-0 as they remain unbeaten under Conte in the league.</p>
        </div>
        </div>
    );
}

export default Football