import React, {useState} from 'react';
import '../styles/Navigation.css';

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
    { href: '#blogs', label: 'Blogs'}

    ]

  return (
    <nav className="nav">
        <div className="nav-container">
            <div className="logo">aarya</div>
            <ul className={`nav-links ${isMenuOpen ? 'nav-links-mobile' : ''}`}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <button
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle-menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
  )
}

export default Navigation