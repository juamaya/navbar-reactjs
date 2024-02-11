import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="navbar">
                <div className="nav_logo"><a href="https://juamaya.github.io/portafolio-juan" target='_blank' >JUAMAYA</a></div>
                <div className={`nav_items ${isOpen && "open"}`}>
                    <Link to="/home" className="item">HOME </Link>
                    <Link to="/about" className="item">ABOUT </Link>
                    <Link to="/blog" className="item">BLOG </Link>
                    <Link to="/api" className="item">API</Link>
                    <Link to="/contact" className="item">CONTACT</Link>
                </div>

                <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </>
    )
}

export default Navbar