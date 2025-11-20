import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './About.css';
import headshot from '../assets/photos/headshot.webp';

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
                        hi.
                    </motion.h1>

                    <div className="about-content">
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <img src={headshot} alt="Jenna Eve" />
                        </motion.div>

                        <motion.div
                            className="about-bio"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <p>
                                My name is Jenna Eve and I am a graphic designer based in Virginia Beach, VA. I recently graduated from Old Dominion University with a degree in Graphic Design. I currently work for National Vascular Associates as a Digital Marketing Coordinator in Virginia Beach.
                            </p>
                            <p>
                                My passion for graphic design ignited when I realized its power to transform ideas into meaningful connections. As I continue to evolve, I’m especially drawn to the intersection of design and technology, focusing on creating interfaces that are not only visually compelling but also intuitive, purposeful, and impactful.
                            </p>
                            <p>
                                Outside of work, I’m either taking my dog on a totally “necessary” walk that just so happens to lead to a coffee shop for an iced matcha latte, convincing myself at 2AM that my room desperately needs a new layout… for the third time this month, or I end back up at my computer screen playing Minecraft until I notice it’s past my bed time.
                            </p>
                        </motion.div>
                    </div>
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


            </div>
        </motion.div>
    );
};

export default About;
