import React from 'react';
import Marquee from './Marquee';

const Footer = () => {
    return (
        <footer>
            <Marquee />
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--color-text-light)' }}>
                <p>&copy; {new Date().getFullYear()} Jenna Eve. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
