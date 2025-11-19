import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    Jenna Eve
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Work</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <a href="mailto:hello@jennaeve.com" className="nav-link">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
