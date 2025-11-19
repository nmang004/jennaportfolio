import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
    const services = [
        "Brand Identity",
        "Web Design",
        "UI/UX Design",
        "Creative Strategy",
        "Art Direction"
    ];

    const experience = [
        { role: "Senior Designer", company: "Creative Studio", year: "2023 - Present" },
        { role: "Visual Designer", company: "Tech Startup", year: "2021 - 2023" },
        { role: "Freelance", company: "Self-Employed", year: "2019 - 2021" }
    ];

    return (
        <motion.div
            className="about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>About | Jenna Eve</title>
                <meta name="description" content="Learn more about Jenna Eve, her background, services, and experience." />
            </Helmet>

            <div className="about-container">
                <section className="about-hero">
                    <motion.h1
                        className="about-title"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        More than just <br /> <span className="serif-italic">pixels & code.</span>
                    </motion.h1>

                    <motion.div
                        className="about-bio"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <p>
                            I'm Jenna, a visual designer based in the US. I believe that big ideas bloom from the tiniest details.
                            My work is fueled by curiosity and a desire to create meaningful experiences that connect and uplift.
                        </p>
                        <p>
                            When I'm not designing, you can find me exploring local coffee shops, tending to my plants ✿,
                            or getting lost in a good book.
                        </p>
                    </motion.div>
                </section>

                <div className="about-grid">
                    <motion.section
                        className="services-section"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Services</h2>
                        <ul>
                            {services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        className="experience-section"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h2>Experience</h2>
                        <div className="experience-list">
                            {experience.map((exp, index) => (
                                <div key={index} className="experience-item">
                                    <span className="exp-role">{exp.role}</span>
                                    <span className="exp-company">{exp.company}</span>
                                    <span className="exp-year">{exp.year}</span>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                <motion.div
                    className="about-image-container"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="https://placehold.co/1200x600/EEE/31343C?text=Jenna+Eve" alt="Jenna Eve Workspace" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
