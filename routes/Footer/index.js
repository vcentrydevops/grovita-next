import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
// import { NavLink } from 'react-router-dom'
import Link from 'next/link'

export default function Footer() {
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    return (
        <footer className="foot-cont">
            <div className="footdiv-logo">
                <img src='/Images/comlogo.png' alt="company logo"></img>
                <div className="footer-icon">
                    <Link href="/contactus" onClick={scrollUp}><i><FaFacebookF></FaFacebookF></i></Link>
                    <Link href="/contactus" onClick={scrollUp}><i><FaTwitter></FaTwitter></i></Link>
                    <Link href="/contactus" onClick={scrollUp}><i><FaInstagram></FaInstagram></i></Link>
                    <Link href="/contactus" onClick={scrollUp}><i><FaLinkedinIn></FaLinkedinIn></i></Link>
                </div>
            </div>
            <div className="footdiv-serv">
                <div className="fs-head">
                    <p>Services</p>
                    <div className="fsh-hr"></div>
                </div>
                <div className="fs-list">
                    <ul>
                        <li><Link href="/services/application_development" onClick={scrollUp}>Application Development</Link></li>
                        <li><Link href="/services/mobile_app_development" onClick={scrollUp}>Mobile App Development</Link></li>
                        <li><Link href="/services/software_testing" onClick={scrollUp}>Software Testing and QA Services</Link></li>
                        <li><Link href="/services/digital_marketing" onClick={scrollUp}>Digital Marketing Services</Link></li>
                        <li><Link href="/services/it_infrastructure" onClick={scrollUp}>IT Infrastructure Services</Link></li>
                        <li><Link href="/services/it_staffing" onClick={scrollUp}>IT Staffing Services</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footdiv-serv">
                <div className="fs-head">
                    <p>Solutions</p>
                    <div className="fsh-hr"></div>
                </div>
                <div className="fs-list">
                    <ul>
                        <li><Link href="/solution/portals_social_collaboration" onClick={scrollUp}>Portal & Social Collaboration</Link></li>
                        <li><Link href="/solution/webcontentmanagement" onClick={scrollUp}>Web Content Management</Link></li>
                        <li><Link href="/solution/digital_asset_management" onClick={scrollUp}>Digital Asset Management</Link></li>
                        <li><Link href="/buisness_intel" onClick={scrollUp}>Buisness Intelligence</Link></li>
                        <li><Link href="/solution/appliction_security" onClick={scrollUp}>Application Security</Link></li>
                        <li><Link href="/solution/enterprise_it_consulting" onClick={scrollUp}>Enterprise IT Consulting</Link></li>
                        <li><Link href="/solution/quality_is_our_core" onClick={scrollUp}>Quality is our Core</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footdiv-serv">
                <div className="fs-head">
                    <p>CONTACT INFO</p>
                    <div className="fsh-hr"></div>
                </div>
                <div>
                    <div className="foot-adres">
                        <i><FaMapMarkerAlt></FaMapMarkerAlt></i>
                        <div className="adres-div">
                            <p>Grovita Technology</p>
                            <p>Old No.74, New No. 124,</p>
                            <p>Sri Balaji Tower,</p>
                            <p>Mount Road,</p>
                            <p>Guindy,</p>
                            <p>Chennai – 600032.</p>
                        </div>
                    </div>
                    <div className="foot-adres foot-phone">
                        <i><FaMobileAlt></FaMobileAlt></i>
                        <div>
                            <p>044-46310899</p>
                        </div>
                    </div>
                    <div className="foot-adres foot-phone">
                        <i><FaEnvelope></FaEnvelope></i>
                        <div>
                            <p>info@grovitatechnology.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-div">
                <p>Copyright 2019 © <Link href="/" onClick={scrollUp}>grovitatechnology</Link>. Designed by <Link href="/" onClick={scrollUp}>Grovita Technologies</Link></p>
            </div>
        </footer>
    )
}
