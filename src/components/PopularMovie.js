import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardPic1 from '../assets/yejiCard.jpg'
import CardPic2 from '../assets/ryujinCard.jpg'
import CardPic3 from '../assets/chaerCard.jpg'
import CardPic4 from '../assets/yunaCard.jpg'
import CardPic5 from '../assets/liaCard.jpg'

function PopularMovie() {
  return (
    <div>
        <div className='m-4 d-flex justify-content-between'>
            <h5> Popular Now </h5>
            <Link>See all</Link>
        </div>
        <div className='px-4 d-flex justify-content-between'>
        <Card>
            <Card.Img src={CardPic1} style={{width:'15rem'}}/>
            <Card.Body>
                <Link to='/detail' className='cardLink'>
                    <Card.Title> Card 1 </Card.Title>
                </Link>
                <Card.Text>
                    Card caption 1
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img src={CardPic2} style={{width:'15rem'}}/>
            <Card.Body>
                <Link to='/detail' className='cardLink'>
                <Card.Title> Card 2 </Card.Title>
                </Link>
                <Card.Text>
                    Card caption 2
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img src={CardPic3} style={{width:'15rem'}}/>
            <Card.Body>
                <Link to='/detail' className='cardLink'>
                <Card.Title> Card 3 </Card.Title>
                </Link>
                <Card.Text>
                    Card caption 3
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img src={CardPic4} style={{width:'15rem'}}/>
            <Card.Body>
                <Link to='/detail' className='cardLink'>
                <Card.Title>
                    Card 4
                </Card.Title>
                </Link>
                <Card.Text>
                    Card caption 4
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img src={CardPic5} style={{width:'15rem'}}/>
            <Card.Body>
                <Link to='/detail' className='cardLink'>
                <Card.Title>
                    Card 5
                </Card.Title>
                </Link>
                <Card.Text>
                    Card caption 5
                </Card.Text>
            </Card.Body>
        </Card>
        </div>

    </div>
  )
}

export default PopularMovie