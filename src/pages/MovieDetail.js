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
                    <div className='d-flex'>
                        <Card className='MoviePoster' style={{width:'18rem'}}>
                            <Card.Img src={PosterMovie}/>
                        </Card>
                        <div>
                            <h1 className='m-3 bgDarkText'> Title Here </h1>
                            <div>
                                <p className='m-3 bgDarkText'>Rating:</p>
                            </div>
                            <p className='m-3 bgDarkText'> Movie Synopsis </p>
                        </div>
                    </div>
                </div>
                <div className='RecomSection ms-3 px-4 rounded'>
                    <h5 className='m-3 bgDarkText'>Recommendations</h5>
                </div>
            </div>
        </body>
        <footer>
            <FooterSection/>
        </footer>
    </div>
  )
}

export default MovieDetail