import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
    const socialLinks = [
        { name: "LinkedIn", url: "https://linkedin.com", handle: "Jenna Eve" },
        { name: "Instagram", url: "https://instagram.com", handle: "@jennaeve.design" },
        { name: "Twitter", url: "https://twitter.com", handle: "@jennaeve" }
    ];

    return (
        <motion.div
            className="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>Contact | Jenna Eve</title>
                <meta name="description" content="Get in touch with Jenna Eve for collaborations and inquiries." />
            </Helmet>

            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="contact-title">
                        Let's create something <br /> <span className="serif-italic">together.</span>
                    </h1>
                    <p className="contact-subtitle">
                        I'm currently open to new projects and collaborations.
                    </p>
                </motion.div>

                <motion.div
                    className="contact-main"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <a href="mailto:hello@jennaeve.com" className="email-link">
                        hello@jennaeve.com
                        <span className="arrow-icon">↗</span>
                    </a>
                </motion.div>

                <motion.div
                    className="social-section"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="social-title">Socials</h2>
                    <div className="social-grid">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-item">
                                <span className="social-name">{link.name}</span>
                                <span className="social-handle">{link.handle}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
