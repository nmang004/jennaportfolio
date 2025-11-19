import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './NotFound.css';

const NotFound = () => {
    return (
        <motion.div
            className="not-found"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Helmet>
                <title>404 | Jenna Eve</title>
                <meta name="description" content="Page not found." />
            </Helmet>

            <div className="nf-container">
                <h1 className="nf-code">
                    404
                    <span className="nf-symbol">✿</span>
                </h1>
                <p className="nf-message">
                    Oops! It looks like you've wandered into the void. Let's get you back to solid ground.
                </p>
                <Link to="/" className="nf-home-btn">
                    Return Home
                </Link>
            </div>
        </motion.div>
    );
};

export default NotFound;
