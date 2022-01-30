import React from 'react'
import ClientCarousels from '../ClientCarousel/ClientCarousels'
import CarouselLap from '../CarouselLap/CarouselLap'
import NavBar from '../NavBar/NavBar'

export default function About() {
    return (
        <div>
            <NavBar pageName="About Us" navLink="/about"></NavBar>
            <div className="aboutus-cont aboutpage-acont">
                <div className="aboutus-head aboutpage-head">
                    <div className="about-heading">
                        <h3>About Us</h3>
                        <div></div>
                    </div>
                    <div className="about-content aboutpage-acontent">
                        <p>Grovita Technology is a well oriented IT company that has been extending exemplary services in various domains of Software and IT, since 2008.</p>
                        <p>Outsourcing services like IT Staffing, IT Infrastructure, App Development, Software QA, and Digital Marketing; reliability has been Grovita Technology ever-evolving forte. Expecting a streaming change in Digital World, Grovita Technology stood ahead with a customer-focused expert team who extended services into banking, insurance, retail, telecom, and manufacturing industries, captivating the transformation.</p>
                    </div>
                </div>
                <div className="caurosellap-cont">
                    <div className="carousellap-div">
                        <CarouselLap></CarouselLap>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont aboutpage-acont2">
                <div className="about-content aboutpage-acontent">
                    <p>Receiving accolades to the initiative and innovative approach, Grovita Technology embraced superior business standards in services to maintain the trust of their globally successful clientele, from 10+ years. As in today’s global market, service companies that provide flexibility, speed and efficiency are considered to be the foremost of priority. Having an impeccable team of Developers, Programmers, Recruiters, Digital Marketers, and other credible minds over the desk, Grovita Technology has been designated among the list from years.</p>
                    <p>While maintaining feasibility with on-going advanced technologies, Grovita Technology executive minds constantly streamline the team to latest software technologies like Blockchain, DevOps, IoT, DSaaS, etc to provide sustainable IT solutions to the client companies. So, delivering utmost proficient services with expertise on new technologies that are extending into various verticals, Grovita Technology is now aiming to escalate future business goals of small, medium and large companies into realities.</p>
                </div>
            </div>
            <div className="aboutpage-mission">
                <div className="aboutpage-div1">
                    <img src='/Images/aboutpage1.png' alt="about mission"></img>
                </div>
                <div className="aboutus-head" >
                    <div className="about-heading">
                        <h3>Mission</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        <p>“We provide expert services for various business needs, bestowing satisfying results.”</p>
                        <p>With a splendid vision over the most influencing technology solutions, our people have been the success spirit of innovation since years.</p>
                        <p>As we believe in having a strategic and loyal approach for our client's businesses, we focus on the ultimate results that transform their business goals into reality.</p>
                    </div>
                </div>
            </div>
            <div className="aboutpage-mission aboutpage-overview">
                <div className="aboutus-head" >
                    <div className="about-heading">
                        <h3>Overview</h3>
                        <div></div>
                    </div>
                    <div className="aboutpage-over-cont">
                        <ul>
                            <li><p>Grovita Technology Pvt. Ltd is an IT Company that's established in 2008.</p></li>
                            <li><p>We outsource services like IT Staffing, IT Infrastructure, App Development, Software QA, and Digital Marketing.</p></li>
                            <li><p>We are extending technology solutions for banking, insurance, retail, telecom, and manufacturing industries.</p></li>
                            <li><p>We are focusing on maintaining a streamline with latest technology verticals like Blockchain, DevOps, IoT, AI, DSaaS, etc.</p></li>
                            <li><p>We are sustaining a global level competition from 10+ years with successful loyal clients.</p></li>
                            <li><p>We progressively improved us, aiming to escalate client’s business goals to realistic results.</p></li>
                        </ul>
                    </div>
                </div>
                <div className="aboutpage-div1">
                    <img src='/Images/aboutpage2.png' alt="about overview"></img>
                </div>
            </div>
            <ClientCarousels></ClientCarousels>
        </div>
    )
}
