import React from 'react';
import './ResumeButton.css';

const ResumeButton = () => {
    return (
        <a
            href="https://drive.google.com/file/d/1kaD4hdJRB3gFJhXIvlTed02kroBydokJ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
        >
            Resume <span>↗</span>
        </a>
    );
};

export default ResumeButton;
