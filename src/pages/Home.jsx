import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight, HiSparkles, HiLightningBolt, HiStar } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import {
    FaPaintBrush,
    FaPalette,
    FaInstagram,
    FaFileAlt,
    FaTag
} from 'react-icons/fa';
import './Home.css';
import vineCorner from '../assets/images/vine-corner.png';
import profileImage from '../assets/images/pfp.jpeg';

const Home = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yVine = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const services = [
        {
            icon: <FaPaintBrush />,
            title: 'Product Design',
            description: 'User-centered product design that delights and converts.',
            color: 'var(--color-primary)'
        },
        {
            icon: <FaPalette />,
            title: 'Logo Design',
            description: 'Memorable brand identities that stand out.',
            color: 'var(--color-primary)'
        },
        {
            icon: <FaInstagram />,
            title: 'Social Media',
            description: 'Eye-catching posts that drive engagement.',
            color: 'var(--color-primary)'
        },
        {
            icon: <FaFileAlt />,
            title: 'Presentations',
            description: 'Professional decks that tell your story.',
            color: 'var(--color-primary)'
        },
        {
            icon: <FaTag />,
            title: 'Labelling',
            description: 'Product labels that capture attention.',
            color: 'var(--color-primary)'
        }
    ];

    return (
        <div className="home" ref={ref}>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background-texture"></div>

                <motion.div
                    className="vine-decoration top-left"
                    style={{ y: yVine }}
                >
                    <img src={vineCorner} alt="Decorative Vine" />
                </motion.div>

                <motion.div
                    className="vine-decoration bottom-right"
                    style={{ y: yVine }}
                >
                    <img src={vineCorner} alt="Decorative Vine" />
                </motion.div>

                <motion.div className="hero-content" style={{ y: yText }}>
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Est. 2024
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Bridey Mason
                        <span className="subtitle-script">Graphic Designer</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Crafting timeless visual narratives with a touch of modern elegance.
                        Specializing in brand identity, print design, and digital artistry.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
                        <Link to="/contact" className="btn btn-outline">Inquire Now</Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="scroll-line"></div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>My Expertise</h2>
                        <p>Bespoke design solutions for the modern era</p>
                    </motion.div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Me Section */}
            <section className="section why-section">
                <div className="container">
                    <div className="why-content">
                        <motion.div
                            className="why-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>The Art of Design</h2>
                            <p className="why-intro">
                                I believe in design that transcends trends—creating work that is
                                rooted in classic principles yet speaks to the contemporary world.
                            </p>

                            <div className="why-features">
                                <div className="why-feature">
                                    <HiLightningBolt className="why-icon" />
                                    <div>
                                        <h4>Timeless Aesthetic</h4>
                                        <p>Designs that age gracefully and maintain relevance.</p>
                                    </div>
                                </div>
                                <div className="why-feature">
                                    <HiStar className="why-icon" />
                                    <div>
                                        <h4>Meticulous Detail</h4>
                                        <p>Every pixel and curve considered with care.</p>
                                    </div>
                                </div>
                                <div className="why-feature">
                                    <HiSparkles className="why-icon" />
                                    <div>
                                        <h4>Personal Touch</h4>
                                        <p>A collaborative process tailored to your unique vision.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="why-visual"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="victorian-frame">
                                <img src={vineCorner} alt="" className="frame-vine top-left" />
                                <img src={vineCorner} alt="" className="frame-vine bottom-right" />
                                <div className="frame-content">
                                    <h3>Visionary</h3>
                                    <p>Design</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <motion.div
                    className="container cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Ready to Create Something Beautiful?</h2>
                    <p>Let's craft a visual identity that tells your unique story.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        Start Your Journey <HiArrowRight />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
