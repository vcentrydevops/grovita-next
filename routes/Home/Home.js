import React from 'react'
import { FaDesktop, FaMobileAlt, FaBullhorn, FaBriefcase, FaUsers } from 'react-icons/fa'
import { BsFillGearFill } from 'react-icons/bs'
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel'
// import { NavLink } from 'react-router-dom'
import Link from 'next/Link'
import CarouselLap from '../CarouselLap/CarouselLap'
import ClientCarousels from '../ClientCarousel/ClientCarousels'

export default function Home() { 
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    return (
        <React.Fragment>
            <ControlledCarousel></ControlledCarousel>
            <div className="serv-cont">
                <div className="serv-head">
                    <p>Our Services</p>
                    <div className="hr-tag"></div>
                </div>
                <div className="serv-div">
                    <div>
                        <div className="icon-div">
                            <i><FaDesktop></FaDesktop></i>
                        </div>
                        <div>
                            <h4>Application Development</h4>
                            <Link href="/services/application_development" onClick={scrollUp}><p>As competition to innovate and integrate through an agile platform (App) is growing, Grovita Technology turns impeccable with 10+ year expertise.</p></Link>
                        </div>
                    </div>
                    <div>
                        <div className="icon-div">
                            <i><FaMobileAlt></FaMobileAlt></i>
                        </div>
                        <div>
                            <h4>Mobile App Development</h4>
                            <Link href="/services/mobile_app_development" onClick={scrollUp}><p>Handling every level of complexity in Mobile App Development using .NET, Java, PHP, Node.js on various platforms, Grovita Technology is reliable.</p></Link>
                        </div>
                    </div>
                    <div>
                        <div className="icon-div">
                            <i><BsFillGearFill></BsFillGearFill></i>
                        </div>
                        <div>
                            <h4>Testing and QA Services</h4>
                            <Link href="/services/software_testing" onClick={scrollUp}><p>Believing in a customer-centric approach, Grovita Technology is delivering superior services with utmost priority to their Testing & QA.</p></Link>
                        </div>
                    </div>
                    <div>
                        <div className="icon-div">
                            <i><FaBullhorn></FaBullhorn></i>
                        </div>
                        <div>
                            <h4>Digital Marketing</h4>
                            <Link href="/services/digital_marketing" onClick={scrollUp}><p>Digital Marketing has turned up a boon for branding now. Offering it with aggressive trends in the market, Grovita Technology is your next stop.</p></Link>
                        </div>
                    </div>
                    <div>
                        <div className="icon-div">
                            <i><FaBriefcase></FaBriefcase></i>
                        </div>
                        <div>
                            <h4>IT Infrastructure</h4>
                            <Link href="/services/it_infrastructure" onClick={scrollUp}><p>With multiple domain experience of Infrastructure services, Grovita Technology promises operational excellence to reach customer’s resilience expectations.</p></Link>
                        </div>
                    </div>
                    <div>
                        <div className="icon-div">
                            <i><FaUsers></FaUsers></i>
                        </div>
                        <div>
                            <h4>IT Staffing Services</h4>
                            <Link href="/services/it_staffing" onClick={scrollUp}><p>Companies are looking for the most competent & credible professionals to sustain in Industry. At Grovita Technology, we bridge you with a right source.</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutus-cont">
                <div className="aboutus-head aboutus-home-div1">
                    <div className="about-heading">
                        <h3>About Us</h3>
                        <div></div>
                    </div>
                    <div className="about-content">
                        <p>We Integrate Innovation with Technology</p>
                        <p>As an IT company, Grovita Technology has been extending services in various domains of Software/IT development, innovation and optimization premises since 2008.</p>
                        <p>As in today's global market, companies that offer flexible, agile and efficient services are preferred the most.</p>
                        <p>Thus, with an impeccable team over the desk, Grovita Technology has renowned all the fame of it.</p>
                        <div><Link href="/about" onClick={scrollUp}>Read More</Link></div>
                    </div>
                </div>
                <div className="caurosellap-cont">
                    <div className="carousellap-div">
                        <CarouselLap></CarouselLap>
                    </div>
                </div>
            </div>
            <div className="serv-cont">
                <div className="serv-head">
                    <p>Our Technologies</p>
                    <div className="hr-tag"></div>
                </div>
                <div className="tech-cont">
                    <div className="techn-div">
                        <div>
                            <img src='/Images/blockChain.png' alt="block chain logo"></img>
                        </div>
                        <div>
                            <p>Block Chain</p>
                        </div>
                    </div>
                    <div className="techn-div">
                        <div>
                            <img src='/Images/Devops.png' alt="Devops logo"></img>
                        </div>
                        <div>
                            <p>Devops</p>
                        </div>
                    </div>
                    <div className="techn-div">
                        <div>
                            <img src='/Images/Iot.png' alt="IOT logo"></img>
                        </div>
                        <div>
                            <p>Internet of Things (IOT)</p>
                        </div>
                    </div>
                    <div className="techn-div">
                        <div>
                            <img src='/Images/Datas.png' alt="Data Science logo"></img>
                        </div>
                        <div>
                            <p>Data Science (DSaSS)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carrer-cont">
                <div className="carrer-div1">
                    <p>Career Opportunities</p>
                    <p>To give the best, we have a Vision". Join us in our Mission!</p>
                </div>
                <div className="carrer-div2">
                    <Link href="/contactus" onClick={scrollUp}>Apply now</Link>
                </div>
            </div>
            <ClientCarousels></ClientCarousels>

        </React.Fragment>
    )
}
