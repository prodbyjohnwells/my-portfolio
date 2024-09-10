import React from 'react';
import './Navbar.css';

const Navbar = ({ setActiveSection, activeSection }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (section) => (event) => {
        event.preventDefault(); // Prevent default anchor scroll behavior
        setActiveSection(section);
        setIsOpen(false);

        // Optional: Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                        onClick={handleNavClick('home')}
                        className={activeSection === 'home' ? 'active' : ''}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#data-analytics"
                        onClick={handleNavClick('data-analytics')}
                        className={activeSection === 'data-analytics' ? 'active' : ''}
                        data-section="data-analytics"
                    >
                        Data Analysis
                    </a>
                </li>
                <li>
                    <a
                        href="#programming"
                        onClick={handleNavClick('programming')}
                        className={activeSection === 'programming' ? 'active' : ''}
                        data-section="programming"
                    >
                        Programming
                    </a>
                </li>
                <li>
                    <a
                        href="#music"
                        onClick={handleNavClick('music')}
                        className={activeSection === 'music' ? 'active' : ''}
                        data-section="music"
                    >
                        Music
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={handleNavClick('contact')}
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
