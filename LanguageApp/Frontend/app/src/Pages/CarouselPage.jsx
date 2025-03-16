import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import img1 from '../assets/img/bg-image.jpg';

function CarouselPage() {
  return (
    <div>
      <Carousel className='carousel'>
      <Carousel.Item className='carousel-1'>
        <img style={{height:'100vh'}}
        className='d-block w-100'
        src={img1}
        alt='First slide'
        />
        <Carousel.Caption className='caption-1'>
        <h1 className="main-heading">🚀 Empower Your Coding Journey with FluentCode</h1>
          <p className="subtext">Unlock your potential with interactive coding lessons, hands-on projects, and real-world applications. Whether you're a beginner or an advanced developer, our platform provides everything you need to master programming languages like Python, JavaScript, C++, and more.</p>
          <a href="/signup" className="cta-button">Start Learning Today</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-2'>
      <img style={{height:'100vh'}}
        className='d-block w-100'
        src={img1}
        alt='Second slide'
        />
        <Carousel.Caption className='caption-2'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-3'>
      <img style={{height:'100vh'}}
        className='d-block w-100'
        src={img1}
        alt='Third slide'
        />
        <Carousel.Caption className='caption-3'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselPage;
