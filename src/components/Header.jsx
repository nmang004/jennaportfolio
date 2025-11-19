import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="site-header">
            <Link to="/" className="logo-container">
                <div className="logo-icon">
                    <img src="https://placehold.co/40x40/333/FFF?text=J" alt="Logo" />
                </div>
                <div className="logo-text">
                    <span className="logo-name">Jenna Eve</span>
                    <span className="logo-role">GRAPHIC DESIGNER ⌘ ⊹</span>
                </div>
            </Link>
        </header>
    );
};

export default Header;
