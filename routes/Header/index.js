import React, { useState, useEffect } from 'react'
import { BsList } from 'react-icons/bs'
import { BiCaretDown } from 'react-icons/bi'
import Link from 'next/Link'

export default function Header() {
    const [visible, setvisible] = useState(false)
    const [handelScroll, sethandelScroll] = useState()
    const [navbarVisible, setnavbarVisible] = useState(false)
    const visibility = () => {
        setvisible(!visible)
    }
    const scrolling = () => {
        const scroll = window.scrollY
        if (scroll > 200) {
            sethandelScroll(true)
        } else {
            sethandelScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrolling)
    }, [])

    const scrollUp = () => {
        window.scrollTo({ top: 0 })
        setnavbarVisible(true)
        if (visible) {
            setvisible(false)
        }
        setTimeout(() => {
            setnavbarVisible(false)
        }, 100);
    }

    return (
        <header>
            <nav className="nav-div" id={handelScroll ? "nav-div1" : "null"}>
                <div className="nav-cont">
                    <div className="nav-logo">
                        <Link href="/" onClick={scrollUp}>
                            <img className="com-logo" src='/Images/comlogo.png' alt="company logo"></img>
                        </Link>
                    </div>
                    <div className="nav-link-btn">
                        <div className="navlist-btn"><i onClick={visibility}><BsList className="icon"></BsList></i></div>
                    </div>
                </div>
                <div className="nav-links" id={visible ? "nav-links1" : "null"}>
                    <ul>
                        <li className="nav-about nav-btn-grov"><div><Link className="navlink-btn" href="/about" onClick={scrollUp}>About us</Link></div></li>
                        <li className="nav-service navlink-menu">
                            <div><p className="navlink-btn navlink-btn1">Services<i><BiCaretDown className="navlink-btn-icon"></BiCaretDown></i></p></div>
                            <div className="navlinks-div" id={navbarVisible ? "nav-visible" : ""}>
                                <Link href="/services/application_development" onClick={scrollUp}>Application Development</Link>
                                <Link href="/services/mobile_app_development" onClick={scrollUp}>Mobile App Development</Link>
                                <Link href="/services/software_testing" onClick={scrollUp}>Software Testing and QA Services</Link>
                                <Link href="/services/digital_marketing" onClick={scrollUp}>Digital Marketing Services</Link>
                                <Link href="/services/it_infrastructure" onClick={scrollUp}>IT Infrastructure Services</Link>
                                <Link href="/services/it_staffing" onClick={scrollUp}>IT Staffing Services</Link>
                            </div>
                        </li>
                        <li className="nav-solution navlink-menu">
                            <div><p className="navlink-btn navlink-btn1">Solutions<i><BiCaretDown className="navlink-btn-icon"></BiCaretDown></i></p></div>
                            <div className="navlinks-div" id={navbarVisible ? "nav-visible" : ""}>
                                <Link href="/solution/portals_social_collaboration" onClick={scrollUp}>Portal & Social Collaboration</Link>
                                <Link href="/solution/webcontentmanagement" onClick={scrollUp}>Web Content Management</Link>
                                <Link href="/solution/digital_asset_management" onClick={scrollUp}>Digital Asset Management</Link>
                                <Link href="/buisness_intel" onClick={scrollUp}>Buisness Intelligence</Link>
                                <Link href="/solution/appliction_security" onClick={scrollUp}>Application Security</Link>
                                <Link href="/solution/enterprise_it_consulting" onClick={scrollUp}>Enterprise IT Consulting</Link>
                                <Link href="/solution/quality_is_our_core" onClick={scrollUp}>Quality is our Core</Link>
                            </div>
                        </li>
                        <li className="nav-technology navlink-menu"><div><p className="navlink-btn navlink-btn1">Technologies<i><BiCaretDown className="navlink-btn-icon"></BiCaretDown></i></p></div>
                            <div className="navlinks-div" id={navbarVisible ? "nav-visible" : ""}>
                                <Link href="/tech/oracle" onClick={scrollUp}>Oracle</Link>
                                <Link href="/tech/sap" onClick={scrollUp}>SAP</Link>
                                <Link href="/tech/infor" onClick={scrollUp}>Infor</Link>
                                <Link href="/tech/microsoft" onClick={scrollUp}>Microsoft</Link>
                                <Link href="/tech/workday" onClick={scrollUp}>Workday</Link>
                                <Link href="/tech/peoplesoft" onClick={scrollUp}>Peoplesoft</Link>
                                <Link href="/tech/jdedwards" onClick={scrollUp}>JD Edwards</Link>
                                <Link href="/tech/hyperion" onClick={scrollUp}>Hyperion</Link>
                                <Link href="/buisness_intel" onClick={scrollUp}>Buisness Intelligence</Link>
                                <Link href="/tech/siebel" onClick={scrollUp}>Silebel</Link>
                            </div>
                        </li>
                        <li className="nav-client nav-btn-grov"><div><Link className="navlink-btn" href="/client" onClick={scrollUp}>Client</Link></div></li>
                        <li className="nav-carrer nav-btn-grov"><div><Link className="navlink-btn" href="/careers" onClick={scrollUp}>Careers</Link></div></li>
                        <li className="nav-contact nav-btn-grov"><div><Link className="navlink-btn" href="/contactus" onClick={scrollUp}>Contact us</Link></div></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
