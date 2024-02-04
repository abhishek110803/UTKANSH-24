import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './nav.css';
import logoImage from './svg_20230219_220137_0000.svg'; // Import SVG image

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setSticky(window.scrollY > 20);
        setShowScrollBtn(window.scrollY > 500);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    return (
        <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
            <div className="max-width">
                <div className="logo">
                    <img className="mainlogo" src={logoImage} alt="Logo" />
                </div>
                
                <ul className={isMenuActive ? 'menu active' : 'menu'}>
                    <li><Link to="/merchandise" className="menu-btn">Home</Link></li>
                    <li><Link to="/clubsandevent" className="menu-btn">Clubs and Events</Link></li>
                    <li><Link to="/merchandise" className="menu-btn">Merchandise</Link></li>
                    <li><Link to="/accomodationPage" className="menu-btn">Accommodation</Link></li>
                    <li><Link to="/TeamMembers" className="menu-btn">Team Members</Link></li>
                </ul>
                <div className="menu-btn" style={{ marginLeft: '20px' }} onClick={toggleMenu}>
                    <i className={isMenuActive ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
            <button className={showScrollBtn ? 'scroll-up-btn show' : 'scroll-up-btn'} onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </button>
        </nav>
    );
};

export default Navbar;
