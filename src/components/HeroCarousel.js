import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import HeroPic1 from '../assets/yeji1.jpg'
import axios from 'axios'

function HeroCarousel() {
    const [todayMovies, setTodayMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/movie/day`,{
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((res) => {
            console.log('trending today =>',res.data.results)
            setTodayMovies(res.data.results)
        })
    },[])
  return (
    <div>
        <Carousel >
            {todayMovies.map((result, index) => {
                return(
                    <Carousel.Item >
                    <img src={HeroPic1} className='CarouselPic' alt={result.original_title}/>
                    <Carousel.Caption>
                        <h1 className='d-flex justify-content-center'> {result.original_title} </h1>
                        <p className='d-flex'> {result.overview} </p>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
  )
}

export default HeroCarousel