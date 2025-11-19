import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Jenna</h1>
                <div style={{ maxWidth: '800px', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Jenna Eve is a designer based in the US. She believes that big ideas bloom from the tiniest details.
                    </p>
                    <p>
                        Her work is fueled by curiosity and a desire to create meaningful experiences.
                        (More content to be added...)
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
