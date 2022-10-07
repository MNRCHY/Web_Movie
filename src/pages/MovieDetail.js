import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import FooterSection from '../components/FooterSection'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function MovieDetail() {
    const [movieInfo, setMovieInfo] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`,{
            params: {
                api_key : process.env.REACT_APP_TMDB_KEY
            }
        }).then ((res) => {
            console.log(res.data)
            setMovieInfo(res.data)
        })
    },[])
  return (
    <div>
        <header>
            <Navigation/>
        </header>
        <div>
            <div className='p-4 d-flex'>
                <div className='detailSection p-3 border rounded'>
                <div className='d-flex p-3'>
                    <Card className='MoviePoster' style={{width:'1250px'}}>
                        <Card.Img src={`${process.env.REACT_APP_IMG_URL}/${movieInfo.poster_path}`}/>
                    </Card>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <h1 className='m-3 bgDarkText'> {movieInfo.original_title}  </h1>
                            <h1 className='Rating m-3'>{Math.round(movieInfo.vote_average)}</h1>
                        </div>
                        <div>
                            <p className='m-3 bgDarkText'><strong>Release date:</strong> <br/> {movieInfo.release_date}</p>
                        </div>
                        {/* <p className='ms-3 bgDarkText'> {movieInfo.overview} </p> */}
                        <p className='movieOverview ms-3 bgDarkText'><strong>Synopsis:</strong> <br/> {movieInfo.overview} </p>
                        <p className='movieOverview ms-3 bgDarkText'><strong>Runtime:</strong> <br/> {movieInfo.runtime} minutes </p>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
        <footer>
            <FooterSection/>
        </footer>
    </div>
  )
}

export default MovieDetail