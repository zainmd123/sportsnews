import React from 'react'
import tennis from './tennis.jpg'

function Tennis(){
    return(
        <div className = "page">
            <p className = "page-title">
            Djokovic Celebrates 350th Week At World No. 1
            </p>
            <img src = {tennis} className = "img"></img>
            <p className = "page-text">Novak Djokovic today celebrates his 350th week atop the FedEx ATP Rankings, extending his record for the most weeks in top spot.</p>
            <p className = "page-text">It was a historic season for the Serbian star, who finished year-end No. 1 for the record-breaking seventh time, moving ahead of his idol, Pete Sampras (6). On 8 March he broke a tie with Roger Federer (310 weeks) for the most weeks at World No. 1 since the inception of the FedEx ATP Rankings in 1973. Djokovic has not looked back since.</p>
            <p className = "page-text">"It really excites me to walk the path of legends and giants of this sport," Djokovic said at the time. "To know that I have earned my place among them by following my childhood dream is a beautiful confirmation that when you do things out of love and passion, everything is possible."</p>
            <p className = "page-text">Djokovic finished 2021 with a 55-7 record, claiming major titles at the Australian Open, Roland Garros and Wimbledon, while also lifting trophies at the Belgrade Open and the Rolex Paris Masters. His current stint at World No. 1 began nearly two years ago, on 3 February 2020.</p>
            <p className = "page-text">The 34-year-old will have a chance to make more history next year. Djokovic can surpass WTA legend Stefanie Graf’s record for most weeks at World No. 1 in men's or women's tennis. The German held top spot for 377 weeks.</p>
            </div>
    );
}

export default Tennis