import React from 'react'
import basketball from './basketball.jpg'

function Basketball(){
    return(
            <div className = "page">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <p className = "page-title">
            Lakers' LeBron James 'Absolutely' Still Thinks About Playing With Son Bronny in NBA
            </p>
            <img src = {basketball} className = "img"></img>
            <p className = "page-text">Los Angeles Lakers star LeBron James has been open about his goal to one day play in the NBA at the same time as his son, LeBron "Bronny" James, Jr.</p>
            <p className = "page-text">On Monday, James reiterated his desire to share the floor with his son, telling reporters he "absolutely" thinks about playing alongside Bronny but he acknowledged they have "a long time" before that can happen.</p>
            <p className = "page-text">Bronny James is in his junior season at Sierra Canyon High School in California. 247Sports' composite ranks the 17-year-old as a four-star recruit and the No. 5 overall player in the state in the class of 2023. </p>
            <p className = "page-text">LeBron James was in attendance Saturday to watch his son and Sierra Canyon defeat his alma mater St. Vincent-St. Mary's in The Chosen-1’s Invitational at Staples Center on Saturday. Bronny James scored 19 points in the 71-53 win.</p>
            <p className = "page-text">James, who is in his 19th season in the NBA, is set to turn 37 on Dec. 30. He would likely have to continue playing into his 40s if he hopes to overlap with his son.</p>
            </div>
    );
}

export default Basketball