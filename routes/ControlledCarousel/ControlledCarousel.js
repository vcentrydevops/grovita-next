import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div>
            <Carousel className="carousel-div" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Carousel.Caption className="carousel-cap">
                        <div>
                            <p>Our Technologies</p>
                            <p>Grovita Technologies provides end-to-end solutions across a spectrum of business processes.</p>
                        </div>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src='/Images/Slide1.png'
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption className="carousel-cap">
                        <div>
                            <p>Application Development</p>
                            <p>We has been offering Application Development Services from 10+ years</p>
                        </div>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src='/Images/slide2.png'
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption className="carousel-cap">
                        <div>
                            <p>Mobile App Development</p>
                            <p>As the online market and the mobile business are on boom</p>
                        </div>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src='/Images/slide3.png'
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption className="carousel-cap">
                        <div>
                            <p>Software Testing</p>
                            <p>A Quality Assurance service usually known as QA & Testing service</p>
                        </div>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src='/Images/slide4.png'
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
