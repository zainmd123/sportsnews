import React from 'react'
import cricket from './kohli.jpg'

function Cricket(){
    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className = "page">
            <p className = "page-title">
                Virat Kohli worships Test match cricket, says Ravi Shastri
            </p>
            <p className = "page-text">Former India chief coach Ravi Shastri on Monday lavished praise on the national team and skipper Virat Kohli for embracing Test Cricket and being the "ambassador of the format over the last five years".</p>
            <img src = {cricket} className = "img"></img>
            <p className = "page-text">"I think if any team has been the ambassador for Test matches over the last five years, it is this Indian cricket team. Virat worships Test match cricket, as do most of the team, which might surprise the world because of the amount of one-day cricket India plays, then IPL."</p>
            <p className = "page-text">"If you ask anyone in the team, 99 percent of them would say they love Test Match cricket. That's why, what India have done in the last five years remain as the No. 1 team in the world at the end of every year", Shastri, who coached India for 4 years, told renowned author Jeffrey Archer on his podcast.</p>
            <p className = "page-text">Shastri listed out the achievements of the team in Tests during his reign as the head coach. He talked about the one-off World Test Championship final loss against New Zealand, India's fighting comeback to win two series in Australia along with the series against England this year.</p>
            </div>
        </div>
    );
}

export default Cricket