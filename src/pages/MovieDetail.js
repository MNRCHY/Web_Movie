import React from 'react'
import { Card } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import PosterMovie from '../assets/yejiCard.jpg'
import FooterSection from '../components/FooterSection'

function MovieDetail() {
  return (
    <div>
        <header>
            <Navigation/>
        </header>
        <body>
            <div className='p-4 d-flex'>
                <div className='detailSection p-3 border rounded'>
                    <div className='d-flex p-3'>
                        <Card className='MoviePoster' style={{width:'1250px'}}>
                            <Card.Img src={PosterMovie}/>
                        </Card>
                        <div>
                            <h1 className='m-3 bgDarkText'> Movie Title </h1>
                            <div>
                                <p className='m-3 bgDarkText'>Rating:</p>
                            </div>
                            <p className='ms-3 bgDarkText'>Overview: </p>
                            <p className='movieOverview ms-3 bgDarkText'> It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve. </p>
                        </div>
                    </div>
                </div>
                {/* <div className='RecomSection ms-3 px-4 rounded'>
                    <h5 className='m-3 bgDarkText'>Recommendations</h5>
                    <Card>
                        <Card.Img src={PosterMovie}/>
                    </Card>
                </div> */}
            </div>
        </body>
        <footer>
            <FooterSection/>
        </footer>
    </div>
  )
}

export default MovieDetail