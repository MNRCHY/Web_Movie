import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import HeroPic1 from '../assets/yeji1.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'

function HeroCarousel() {
    const [todayMovies, setTodayMovies] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/movie/day`,{
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((res) => {
            // console.log('trending today =>',res.data.results)
            setTodayMovies(res.data.results)
        })
    },[])
  return (
    <div>
        <Carousel>
            {todayMovies.map((result, index) => {
                return(
                <Carousel.Item key={index}>
                    <img src={`${process.env.REACT_APP_IMG_URL}/${result.backdrop_path}`} className='CarouselPic' alt={result.original_title}/>
                    <Carousel.Caption>
                        <h1 className='d-flex'> {result.original_title} </h1>
                        <p className='d-flex me-5' style={{textAlign:'left'}}> {result.overview} </p>
                        <div className='d-flex my-3'>
                        <Link to={`/detail/${result.id}`} className='CarouselButton'>See more</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
  )
}

export default HeroCarousel