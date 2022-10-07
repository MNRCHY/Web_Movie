import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function PopularMovie() {
    const [movies, setMovies] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/movie/week`,{
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((res) => {
            // console.log(res.data.results)
            setMovies(res.data.results)
        })
    },[])
  return (
    <div className='PopularMovieSection p-3'>
        <div className='mb-3 d-flex justify-content-between'>
            <h3 className='text-white'>Popular Movies</h3>
            <Link className='seeAllLink'> See all </Link>
        </div>
        <div>
            <Row>
                {movies?.map((result, index) => {
                    return(
                        <Col className='cardSection m-1' key={index}>
                            <Link to={`/detail/${result.id}`} className='MovieList'>
                            <Card className='p-1' style={{width: '250px'}}>
                                <img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} style={{width: 'auto'}} alt={result.original_title}/>
                                {/* <div className='p-1'>
                                    <Card.Title> {result.original_title} </Card.Title>
                                    <Card.Text> <strong>Release date:</strong> <br/> {result.release_date} </Card.Text>
                                </div> */}
                            </Card>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </div>
    </div>
  )
}

export default PopularMovie