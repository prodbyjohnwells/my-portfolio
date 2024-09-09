import React from 'react';
import './Navbar.css';

// Import cursor images
import dataAnalytics from './assets/emoji_chart.png';
import programmingCursor from './assets/emoji_floppy.png';
import musicCursor from './assets/emoji_music.png';

const Navbar = ({ setActiveSection }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={() => setActiveSection('home')}>Home</a></li>
                <li>
                    <a
                        href="#data-analytics"
                        onClick={() => setActiveSection('data-analytics')}
                        style={{ cursor: `url(${dataAnalytics}), auto` }}
                    >
                        Data Analysis
                    </a>
                </li>
                <li>
                    <a
                        href="#programming"
                        onClick={() => setActiveSection('programming')}
                        style={{ cursor: `url(${programmingCursor}), auto` }}
                    >
                        Programming
                    </a>
                </li>
                <li>
                    <a
                        href="#music"
                        onClick={() => setActiveSection('music')}
                        style={{ cursor: `url(${musicCursor}), auto` }}
                    >
                        Music
                    </a>
                </li>
                <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
