import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Helmet } from 'react-helmet-async';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const projectIndex = projects.findIndex(p => p.slug === slug);
    const project = projects[projectIndex];

    const nextProjectIndex = (projectIndex + 1) % projects.length;
    const nextProject = projects[nextProjectIndex];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="project-detail" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>Project not found</h1>
            </div>
        );
    }

    return (
        <motion.div
            className="project-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>{project.title} | Jenna Eve</title>
                <meta name="description" content={project.description} />
            </Helmet>

            <div className="detail-hero">
                <div className="detail-meta-top">
                    <span className="detail-category">{project.category}</span>
                    <span className="detail-year">{project.year}</span>
                </div>
                <h1 className="detail-title">{project.title}</h1>
            </div>

            <div className="detail-cover">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            <div className="detail-content-grid">
                <aside className="detail-info">
                    <div className="info-item">
                        <h3>Role</h3>
                        <p>{project.role}</p>
                    </div>
                    <div className="info-item">
                        <h3>Client</h3>
                        <p>{project.client}</p>
                    </div>
                    <div className="info-item">
                        <h3>Services</h3>
                        <p>{project.category}</p>
                    </div>
                </aside>

                <div className="detail-body">
                    {project.details?.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <div className="detail-gallery">
                        {project.details?.gallery.map((img, index) => (
                            <div className="gallery-image" key={index}>
                                <img src={img} alt={`${project.title} detail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className="next-project"
                onClick={() => navigate(nextProject.link)}
            >
                <span className="next-label">Next Project</span>
                <h2 className="next-title">{nextProject.title}</h2>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
