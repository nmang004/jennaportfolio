import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FloatingDock.css';

const FloatingDock = () => {
    const location = useLocation();

    const links = [
        { path: '/', label: 'HOME' },
        { path: '/', label: 'WORK', hash: '#work' }, // Using hash for scrolling if on same page
        { path: '/about', label: 'ABOUT' },
        { path: '/contact', label: 'CONTACT' }
    ];

    return (
        <div className="dock-container">
            <motion.div
                className="dock"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                {links.map((link) => (
                    link.isExternal ? (
                        <a key={link.label} href={link.path} className="dock-item">
                            {link.label}
                        </a>
                    ) : (
                        <Link
                            key={link.label}
                            to={link.path}
                            className={`dock-item ${location.pathname === link.path && !link.hash ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    )
                ))}
            </motion.div>
        </div>
    );
};

export default FloatingDock;
