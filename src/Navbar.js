import React from 'react';
import './Navbar.css';

// Import cursor images
import dataAnalytics from './assets/emoji_chart.png';
import programmingCursor from './assets/emoji_floppy.png';
import musicCursor from './assets/emoji_music.png';

const Navbar = ({ setActiveSection, activeSection }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={toggleMenu} aria-expanded={isOpen}>
                ☰
            </button>

            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <li>
                    <a
                        href="#home"
                        onClick={() => {
                            setActiveSection('home');
                            setIsOpen(false);
                        }}
                        className={activeSection === 'home' ? 'active' : ''}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#data-analytics"
                        onClick={() => {
                            setActiveSection('data-analytics');
                            setIsOpen(false);
                        }}
                        className={activeSection === 'data-analytics' ? 'active' : ''}
                        style={{ cursor: `url(${dataAnalytics}), pointer, auto` }}
                    >
                        Data Analysis
                    </a>
                </li>
                <li>
                    <a
                        href="#programming"
                        onClick={() => {
                            setActiveSection('programming');
                            setIsOpen(false);
                        }}
                        className={activeSection === 'programming' ? 'active' : ''}
                        style={{ cursor: `url(${programmingCursor}), pointer, auto` }}
                    >
                        Programming
                    </a>
                </li>
                <li>
                    <a
                        href="#music"
                        onClick={() => {
                            setActiveSection('music');
                            setIsOpen(false);
                        }}
                        className={activeSection === 'music' ? 'active' : ''}
                        style={{ cursor: `url(${musicCursor}), pointer, auto` }}
                    >
                        Music
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={() => {
                            setActiveSection('contact');
                            setIsOpen(false);
                        }}
                        className={activeSection === 'contact' ? 'active' : ''}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
