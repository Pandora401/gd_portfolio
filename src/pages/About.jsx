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
                            <h2>Hello<span className="num">,</span> I<span className="num">'</span>m Bridey</h2>
                            <p>
                                I work as a freelance designer specialising in packaging design, logo design and brand identity development.
                            </p>
                            <p>
                                I hold a Diploma of Graphic Design and currently studying towards a Bachelor of Design (Visual Communication) at Griffith University.
                            </p>
                            <p>
                                I have a passion for creating visually appealing and functional designs that help businesses communicate their message effectively. I enjoy working with a variety of clients and am always looking for new challenges to take on.
                            </p>
                            <p>
                                I am based on the beautiful Gold Coast, Queensland and am available for remote work or travel to Brisbane too!
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
                        {[
                            { skill: 'Product Design', description: 'Crafting intuitive and visually appealing product experiences from concept to execution.' },
                            { skill: 'Logo Design', description: 'Developing unique and memorable brand marks that effectively represent a company\'s identity.' },
                            { skill: 'Social Media', description: 'Creating engaging visual content and strategies for various social media platforms.' },
                            { skill: 'Presentations', description: 'Designing impactful and clear presentations that convey complex information effectively.' },
                            { skill: 'Labelling', description: 'Designing compliant and attractive labels for products, enhancing brand presence and consumer information.' }
                        ].map((item, index) => (
                            <motion.div
                                key={item.skill}
                                className="skill-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="dark-text-dark">{item.skill}</h3>
                                <p className="dark-text-dark">{item.description}</p>
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
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>2024 - Present</h3>
                                <h4>Freelance Graphic Designer</h4>
                                <p className="dark-text-dark">
                                    I have worked with a range of clients, including small businesses, startups, and
                                    established companies, to create a range of marketing materials, including product
                                    labels, social media graphics, and presentations.
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
                                <h3><span className="num">2024-2025</span></h3>
                                <h4>Graphic Designer</h4>
                                <h5>OzKleen Asia Pacific Pty Ltd</h5>
                                <p className="dark-text-dark">
                                    I was responsible for creating a range of product labels and marketing materials for OzKleen, including product labels, social media graphics, and presentations.
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
                                <h3><span className="num">2023-2024</span></h3>
                                <h4>Graphic Design Student</h4>
                                <h5>TAFE Queensland</h5>
                                <p className="dark-text-dark">
                                    Studied graphic design principles, software proficiency, and creative problem-solving, culminating in a Diploma of Graphic Design.
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
