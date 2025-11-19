import React from 'react';
import { motion } from 'framer-motion';
import './Marquee.css';

const Marquee = () => {
    const marqueeVariants = {
        animate: {
            x: [0, -1035],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="marquee-container">
            <motion.div
                className="track"
                variants={marqueeVariants}
                animate="animate"
            >
                <h1 className="marquee-text">let's be friends ahaha ⸜(ˊᗜˋ)⸝ ! let's be friends ahaha ⸜(ˊᗜˋ)⸝ ! let's be friends ahaha ⸜(ˊᗜˋ)⸝ !</h1>
            </motion.div>
        </div>
    );
};

export default Marquee;
