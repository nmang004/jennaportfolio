import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="hero-title">
                        hi! i'm jenna <span className="star-icon">✦</span>
                    </h1>
                    <div className="hero-bio-container">
                        <p className="hero-bio">
                            visual designer <span className="serif-italic">based in the us</span>
                            <span className="flower-icon"> ✿ </span> crafting experiences that
                            <span className="highlight"> connect</span> & <span className="highlight">uplift</span>.
                        </p>
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
        </div>
    );
};

export default Home;
