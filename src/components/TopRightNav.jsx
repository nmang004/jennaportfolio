import React from 'react';
import './TopRightNav.css';
import ResumeButton from './ResumeButton';
import { Instagram, Mail, Linkedin } from 'lucide-react';

const TopRightNav = () => {
    return (
        <div className="top-right-nav">
            <div className="social-icons">
                <a href="https://www.instagram.com/jenxeve" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Instagram size={20} />
                </a>
                <a href="mailto:jennaevebaloy@gmail.com" className="social-icon">
                    <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/jenna-eve-a-baloy-b6540726b/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Linkedin size={20} />
                </a>
            </div>
            <ResumeButton />
        </div>
    );
};

export default TopRightNav;
