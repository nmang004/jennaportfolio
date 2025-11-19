import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            style={{ perspective: 1000 }}
        >
            <Link to={project.link} className="card-inner">
                <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                    <div className="card-meta">
                        <span className="card-category">{project.category}</span>
                        <span className="card-year">2025</span>
                    </div>
                    <div className="card-button">View Project</div>
                </div>
                <div className="card-image-wrapper">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="card-image"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
