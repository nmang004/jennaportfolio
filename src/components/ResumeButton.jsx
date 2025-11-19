import React from 'react';
import './ResumeButton.css';

const ResumeButton = () => {
    return (
        <a 
            href="https://drive.google.com/file/d/1MApRLOkxlTdECCpF8hcf8b9To86BG_hB/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-button"
        >
            Resume <span>↗</span>
        </a>
    );
};

export default ResumeButton;
