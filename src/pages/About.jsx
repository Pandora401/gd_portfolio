import { motion } from 'framer-motion';
import profileImage from '../assets/images/pfp.jpeg';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>About <span className="gradient-text">Me</span></h1>
                        <p>Designer, Creator, Problem Solver</p>
                    </motion.div>
                </div>
            </section>

            {/* About Content */}
            <section className="section about-content">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-image-wrapper"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={profileImage} alt="Bridey Mason" className="about-image" />
                        </motion.div>

                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Hello, I'm Bridey</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section skills-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>What I Do Best</h2>
                    </motion.div>

                    <div className="skills-grid">
                        {['Product Design', 'Logo Design', 'Social Media', 'Presentations', 'Labelling'].map((skill, index) => (
                            <motion.div
                                key={skill}
                                className="skill-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3>{skill}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section experience-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>My Journey</h2>
                    </motion.div>

                    <div className="experience-timeline">
                        <motion.div
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>2023 - Present</h3>
                                <h4>Freelance Designer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>2021 - 2023</h3>
                                <h4>Previous Experience</h4>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>2019 - 2021</h3>
                                <h4>Earlier Work</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
