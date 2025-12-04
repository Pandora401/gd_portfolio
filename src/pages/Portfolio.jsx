import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import './Portfolio.css';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');

    const projects = [
        // {
        //     id: 1,
        //     title: 'E-Commerce Platform',
        //     category: 'web',
        //     description: 'Modern e-commerce platform with seamless checkout experience',
        //     fullDescription: 'A comprehensive e-commerce platform featuring intuitive navigation, advanced filtering, and a streamlined checkout process. Built with user experience at the forefront.',
        //     tags: ['UI/UX', 'Web Design', 'E-Commerce'],
        //     color: 'hsl(260, 85%, 65%)'
        // },
        {
            id: 2,
            title: 'Fitness App Redesign',
            category: 'product',
            description: 'Complete redesign of a fitness tracking mobile application',
            fullDescription: 'Reimagined user experience for a fitness tracking app, focusing on motivation, progress visualization, and social features to keep users engaged.',
            tags: ['Mobile', 'Product Design', 'Health'],
            color: 'hsl(140, 85%, 60%)'
        },
        {
            id: 3,
            title: 'Organic Brand Identity',
            category: 'branding',
            description: 'Natural and eco-friendly brand identity for organic products',
            fullDescription: 'Complete brand identity system for an organic food company, including logo, packaging, and marketing materials that reflect their sustainable values.',
            tags: ['Branding', 'Logo', 'Packaging'],
            color: 'hsl(100, 65%, 55%)'
        },
        {
            id: 4,
            title: 'Social Media Campaign',
            category: 'social',
            description: 'Engaging social media graphics for product launch',
            fullDescription: 'A cohesive social media campaign across Instagram, Facebook, and LinkedIn, designed to maximize engagement and drive conversions for a product launch.',
            tags: ['Social Media', 'Marketing', 'Graphics'],
            color: 'hsl(320, 85%, 65%)'
        },
        {
            id: 5,
            title: 'SaaS Dashboard',
            category: 'product',
            description: 'Analytics dashboard for B2B SaaS platform',
            fullDescription: 'Intuitive analytics dashboard that transforms complex data into actionable insights, with customizable widgets and real-time updates.',
            tags: ['Dashboard', 'SaaS', 'Data Viz'],
            color: 'hsl(200, 85%, 60%)'
        },
        {
            id: 6,
            title: 'Coffee Shop Branding',
            category: 'branding',
            description: 'Complete branding package for artisan coffee shop',
            fullDescription: 'Full brand identity including logo, menu design, packaging, and interior signage for a premium artisan coffee shop.',
            tags: ['Branding', 'Print', 'Hospitality'],
            color: 'hsl(30, 75%, 55%)'
        },
        // {
        //     id: 7,
        //     title: 'Real Estate Website',
        //     category: 'web',
        //     description: 'Luxury real estate website with virtual tours',
        //     fullDescription: 'High-end real estate platform featuring immersive property galleries, virtual tours, and advanced search functionality.',
        //     tags: ['Web Design', 'Real Estate', 'Luxury'],
        //     color: 'hsl(180, 85%, 60%)'
        // },
        {
            id: 8,
            title: 'Startup Pitch Deck',
            category: 'presentation',
            description: 'Investor pitch deck for tech startup',
            fullDescription: 'Compelling pitch deck that helped secure Series A funding, combining data visualization with storytelling.',
            tags: ['Presentation', 'Startup', 'Investment'],
            color: 'hsl(40, 85%, 60%)'
        },
        {
            id: 9,
            title: 'Product Label Design',
            category: 'label',
            description: 'Premium label design for craft beverage',
            fullDescription: 'Eye-catching label design for a craft beverage brand, balancing regulatory requirements with creative expression.',
            tags: ['Label', 'Packaging', 'Print'],
            color: 'hsl(280, 75%, 60%)'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        // { id: 'web', name: 'Web Design' },
        { id: 'product', name: 'Product Design' },
        { id: 'branding', name: 'Branding' },
        { id: 'social', name: 'Social Media' },
        { id: 'presentation', name: 'Presentations' },
        { id: 'label', name: 'Labels' }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="portfolio-page">
            {/* Hero */}
            <section className="portfolio-hero">
                <div className="container">
                    <motion.div
                        className="portfolio-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>My <span className="gradient-text">Portfolio</span></h1>
                        <p>
                            A collection of my recent work across various design disciplines.
                            Each project tells a unique story.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter */}
            <section className="section portfolio-content">
                <div className="container">
                    <motion.div
                        className="portfolio-filters"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                                onClick={() => setFilter(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </motion.div>

                    {/* Portfolio Grid */}
                    <motion.div
                        className="portfolio-grid"
                        layout
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="portfolio-item"
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={() => setSelectedProject(project)}
                                    whileHover={{ y: -8 }}
                                >
                                    <div
                                        className="portfolio-item-image"
                                        style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}
                                    >
                                        <div className="portfolio-item-overlay">
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                    <div className="portfolio-item-footer">
                                        <div className="portfolio-tags">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="project-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="project-modal"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="modal-close"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close modal"
                            >
                                <HiX />
                            </button>

                            <div
                                className="modal-image"
                                style={{ background: `linear-gradient(135deg, ${selectedProject.color}, ${selectedProject.color}dd)` }}
                            />

                            <div className="modal-content">
                                <h2>{selectedProject.title}</h2>
                                <p className="modal-description">{selectedProject.fullDescription}</p>

                                <div className="modal-tags">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="modal-note">
                                    <p>💡 This is a portfolio showcase. Contact me to see the full case study and project details.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;
