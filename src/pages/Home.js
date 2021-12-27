import React from 'react';
import './login.css'
import football from './football.jpg'
import cricket from './kohli.jpg'
import basketball from './basketball.jpg'
import f1 from './f1.jpg'
import {Link} from 'react-router-dom';

function Home(){
    return(

        <div className = "pages">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className = 'home'>
            
            <Link to="/football" style = {{textDecoration: 'none'}}>
            <div className = "article">
            <img src = {football} className = "image"></img>
            <p className = "article-text">Tottenham Hotspur Hit By COVID-19 Outbreak: Report</p>
            </div>
            </Link>
            <Link to="/cricket" style = {{textDecoration: 'none'}}>
            <div className = "article">
            <img src = {cricket} className = "image"></img>
            <p className = "article-text">Virat Kohli worships Test match cricket, says Ravi Shastri</p>
            </div>
            </Link>
            <br/>
            <br/>
            <Link to="/basketball" style = {{textDecoration: 'none'}}>
            <div className = "article">
            <img src = {basketball} className = "image"></img>
            <p className = "article-text">Lakers' LeBron James 'Absolutely' Still Thinks About Playing With Son Bronny in NBA</p>
            </div>
            </Link><Link to="/motorsports" style = {{textDecoration: 'none'}}>
            <div className = "article">
            <img src = {f1} className = "image"></img>
            <p className = "article-text">Verstappen handed further 10 second penalty for Lap 37 collision with Hamilton in Saudi Arabian GP</p>
            </div>
            </Link>
            </div>
        </div>
    );
}

export default Home;