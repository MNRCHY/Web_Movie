import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import FooterSection from '../components/FooterSection'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import CardPic from '../assets/yejiCard.jpg'

function SearchResult() {
    const [searchResult, setSearchResult] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f3877f25df0636a9666cd8bcc0b715da&language=en-US&query=${id}&page=1&include_adult=false`)
        .then((res) => {
            console.log(res.data.results)
            setSearchResult(res.data.results)
        })
    },[])
  return (
    <div>
    <header>
        <Navigation />
    </header>
    <div className='p-3'>
        <h2 className='text-white mb-3'>Search results for '{id}'</h2>
        <Row>
            {
                searchResult?.map((result,index) => {
                    return(
                    <Col className='mb-2' key={index}>
                        <Card className='p-2' style={{width:'250px', height:'auto'}}>
                            <Card.Img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}/>
                            <div>
                                <Card.Title>{result.original_title}</Card.Title>
                                <Card.Text> {result.release_date}</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    )
                })
            }
            {/* <Col>
                <Card className='p-2' style={{width:'250px'}}>
                    <Card.Img src={CardPic}/>
                    <div>
                        <Card.Title>Movie Title</Card.Title>
                        <Card.Text> Movie Info</Card.Text>
                    </div>
                </Card>
            </Col> */}
        </Row>
    </div>
    <footer>
        <FooterSection />
    </footer>
    </div>
  )
}

export default SearchResult