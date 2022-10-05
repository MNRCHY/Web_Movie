import React from 'react'
import { Carousel } from 'react-bootstrap'
import HeroPic1 from '../assets/yeji1.jpg'
import HeroPic2 from '../assets/yeji-ryujin.jpg'
import HeroPic3 from '../assets/yeji2.jpg'

function HeroCarousel() {
  return (
    <div>
        <Carousel >
            <Carousel.Item >
                <img src={HeroPic1} className='CarouselPic'/>
                <Carousel.Caption>
                    <h1 className='d-flex'> Slide 1 </h1>
                    <p className='d-flex'> Caption Slide 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img src={HeroPic2} className='CarouselPic'/>
                <Carousel.Caption>
                    <h1 className='d-flex'> Slide 2 </h1>
                    <p className='d-flex'> Caption Slide 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img src={HeroPic3} className='CarouselPic'/>
                <Carousel.Caption>
                    <h1 className='d-flex'> Slide 3 </h1>
                    <p className='d-flex'> Caption Slide 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HeroCarousel