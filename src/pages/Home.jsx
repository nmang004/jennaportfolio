import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Home.css';

const Home = () => {
    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>Jenna Eve | Graphic Designer</title>
                <meta name="description" content="Portfolio of Jenna Eve, a Graphic Designer and Digital Marketer." />
            </Helmet>

            <section className="hero container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="hero-title">
                        hi! i'm jenna eve <span className="star-icon">✦</span>
                    </h1>
                    <div className="hero-bio-container">
                        <p className="hero-bio">
                            graphic designer + digital marketer
                        </p>
                        <motion.p
                            className="hero-tagline"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.8
                                    }
                                }
                            }}
                        >
                            <span className="tagline-wrapper">
                                <motion.span
                                    className="tagline-highlight"
                                    style={{ transformOrigin: "left" }}
                                    initial={{ scaleX: 0, rotate: -1 }}
                                    animate={{ scaleX: 1, rotate: -1 }}
                                    transition={{ delay: 2.5, duration: 0.8, ease: "circOut" }}
                                />
                                {["Big", "ideas", "bloom", "from", "the", "tiniest", "details."].map((word, i) => (
                                    <React.Fragment key={i}>
                                        <motion.span
                                            style={{ display: "inline-block", position: "relative", zIndex: 1, fontStyle: "italic", fontFamily: "var(--font-serif)" }}
                                            variants={{
                                                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    filter: "blur(0px)",
                                                    transition: {
                                                        duration: 0.4,
                                                        ease: [0.2, 0.65, 0.3, 0.9]
                                                    }
                                                }
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                        {" "}
                                    </React.Fragment>
                                ))}
                            </span>
                            <motion.span
                                style={{ display: "inline-block", marginLeft: "0.5rem" }}
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: 1.9, type: "spring" }}
                            >
                                ˚✿｡˚
                            </motion.span>
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            <section className="work container">
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
