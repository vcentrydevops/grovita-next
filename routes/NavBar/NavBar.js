import React from 'react'
import Link from 'next/link'

export default function NavBar(props) {
    const pageName = props.pageName
    const navLink = props.navLink
    const scrollUp = () => {
        window.scrollTo({ top: 0 })
    }
    return (
        <div className="navbar-back">
            <div>
                <p>{pageName}</p>
            </div>
            <div>
                <ul>
                    <li><Link href="/" onClick={scrollUp}>Home</Link></li>
                    <p>/</p>
                    <li><Link href={navLink} onClick={scrollUp}>{pageName}</Link></li>
                </ul>
            </div>
        </div>
    )
}
