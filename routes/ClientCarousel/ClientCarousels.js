import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ClientCarousels() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div className="serv-cont">
            <div className="serv-head client-head">
                <p>Client Says</p>
                <div className="hr-tag"></div>
            </div>
            <div className="clientcarousel-cont">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="clientCarousel-div">
                            <p>I have many potential vendors contacting me each week, but Grovita Technology stood out from the crowd. They work hard to understand our needs and always responded in a timely fashion. Grovita Technology is well networked in the industry and helps us succeed in meeting our client's needs</p>
                            <div>
                                <img src='/Images/client.png'alt="client slider2"></img>
                                <p>Kristen Box</p>
                                <p>-TCA consulting group,Inc-</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="clientCarousel-div">
                            <p>Grovita Technology has provided me with qualified candidates which my direct clients are in need of. They produce consultants that have the entire skills sets my clients need. I especially like the way there is full and open communication with Grovita Technology, which makes the recruiting process smoother and easier</p>
                            <div>
                                <img src='/Images/client.png' alt="client slider2"></img>
                                <p>Tina Hill</p>
                                <p>-TCA consulting group,Inc-</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
}
