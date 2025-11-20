import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './About.css';
import headshot from '../assets/photos/headshot.webp';

const About = () => {
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
                            <motion.h1
                                className="about-title"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                hi.
                            </motion.h1>
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
                        className="experience-section"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h2>Experience</h2>
                        <div className="experience-list">

                            {/* National Vascular Associates - Nested Roles */}
                            <div className="experience-item nested-group">
                                <h3 className="exp-company">National Vascular Associates — Virginia Beach, VA</h3>

                                <div className="nested-role">
                                    <div className="role-marker"></div>
                                    <div className="role-content">
                                        <h4 className="exp-role">Digital Marketing Coordinator</h4>
                                        <span className="exp-date">NOV 2025 — Present</span>
                                        <ul className="role-description">
                                            <li>Create and manage social media content across multiple platforms, ensuring brand consistency and audience engagement</li>
                                            <li>Design comprehensive marketing materials including brochures, flyers, posters, and business cards while maintaining brand standards</li>
                                            <li>Manage website updates, Google Business Profiles, landing pages, and digital lead management systems</li>
                                            <li>Execute email marketing campaigns including newsletters and updates to boost engagement and conversions</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="nested-role">
                                    <div className="role-marker"></div>
                                    <div className="role-content">
                                        <h4 className="exp-role">Social Media & Design Associate</h4>
                                        <span className="exp-date">JUN 2025 — NOV 2025</span>
                                        <ul className="role-description">
                                            <li>Creates graphics, videos, and copy for social media and print, ensuring brand and HIPAA compliance</li>
                                            <li>Collaborates with leadership to refine and implement content strategies, maintains an organized content calendar, and incorporates feedback in an approval-based workflow</li>
                                            <li>Captures and analyzes engagement data using UTM tracking and performance insights, staying current with social media trends to optimize reach while maintaining consistent brand messaging</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* ODU Rec Center */}
                            <div className="experience-item">
                                <div className="exp-header">
                                    <h3 className="exp-company">Old Dominion University Student Recreation & Well-Being Center — Norfolk, VA</h3>
                                    <span className="exp-role">Graphic Designer</span>
                                </div>
                                <div className="exp-details">
                                    <span className="exp-date">AUG 2022 — MAY 2025</span>
                                    <ul className="role-description">
                                        <li>Designed and developed a diverse range of promotional materials including flyers, logos, brochures, t-shirts, posters, ad banners, social media content, and program guides that increased brand visibility, engagement, and conversions</li>
                                        <li>Optimized designs for digital and print, leading to increased student engagement and participation in campus activities</li>
                                    </ul>
                                </div>
                            </div>

                            {/* ODU Art Studio */}
                            <div className="experience-item">
                                <div className="exp-header">
                                    <h3 className="exp-company">Old Dominion University — Norfolk, VA</h3>
                                    <span className="exp-role">Art Studio Assistant</span>
                                </div>
                                <div className="exp-details">
                                    <span className="exp-date">JAN 2024 — MAY 2025</span>
                                    <ul className="role-description">
                                        <li>Assisted students with letterpress printing processes, including typesetting, inking, and press operation, supporting both technical execution and creative outcomes</li>
                                        <li>Maintained a clean, organized studio environment by preparing workspaces, restocking, and ensuring safe operation of equipment</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </motion.section>
                </div>

                <div className="education-section">
                    <motion.section
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Education</h2>
                        <div className="education-item">
                            <h3>Old Dominion University — Norfolk, Virginia</h3>
                            <p>Bachelors of Fine Arts in Graphic Design</p>
                            <p>Minor in Sociology</p>
                            <p className="edu-date">May 2025 — GPA: 3.94</p>
                        </div>
                    </motion.section>
                </div>


            </div>
        </motion.div>
    );
};

export default About;
