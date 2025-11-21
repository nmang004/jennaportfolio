import React from 'react';
import './ResumeButton.css';

const ResumeButton = () => {
    return (
        <a
            href="https://drive.google.com/file/d/1Ux_Mze0mhd3xK0ZzH-XiEijVfMuM4z7q/view"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
        >
            Resume <span>↗</span>
        </a>
    );
};

export default ResumeButton;
