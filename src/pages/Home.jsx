import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiSparkles, HiLightningBolt, HiStar } from 'react-icons/hi';
import {
    FaPaintBrush,
    FaLaptopCode,
    FaPalette,
    FaInstagram,
    FaFileAlt,
    FaTag
} from 'react-icons/fa';
import profileImage from '../assets/images/pfp.jpeg';
import './Home.css';
import './home-dark-mode.css';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const services = [
        {
            icon: <FaPaintBrush />,
            title: 'Product Design',
            description: 'User-centered product design that delights and converts.',
            color: 'hsla(0, 85%, 65%, 1.00)'
        },
        // {
        //     icon: <FaLaptopCode />,
        //     title: 'Web Design',
        //     description: 'Modern, responsive websites that make an impact.',
        //     color: 'hsl(320, 85%, 65%)'
        // },
        {
            icon: <FaPalette />,
            title: 'Logo Design',
            description: 'Memorable brand identities that stand out.',
            color: 'hsl(180, 85%, 60%)'
        },
        {
            icon: <FaInstagram />,
            title: 'Social Media',
            description: 'Eye-catching posts that drive engagement.',
            color: 'hsl(40, 85%, 60%)'
        },
        {
            icon: <FaFileAlt />,
            title: 'Presentations',
            description: 'Professional decks that tell your story.',
            color: 'hsl(140, 85%, 60%)'
        },
        {
            icon: <FaTag />,
            title: 'Labelling',
            description: 'Product labels that capture attention.',
            color: 'hsl(200, 85%, 60%)'
        }
    ];

    // dynamic years expirience starting from july 2023 
    const today = new Date();
    const july2023 = new Date('2023-07-01');
    const yearsExperience = today.getFullYear() - july2023.getFullYear();

    const stats = [
        { number: '8', label: 'Projects Completed' },
        { number: '4', label: 'Happy Clients' },
        { number: yearsExperience, label: 'Years Experience' },
        { number: '100%', label: 'Satisfaction Rate' }
    ];

    return (
        <div className="home">
            {/* Animated Cloud Background */}
            <motion.div
                style={{
                    position: 'fixed',
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    opacity: 0.15,
                    zIndex: -1,
                    background: 'radial-gradient(circle, hsl(35, 80%, 65%), hsl(25, 75%, 55%))',
                    top: '-200px',
                    left: '-200px',
                }}
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, 50, 100, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                style={{
                    position: 'fixed',
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    opacity: 0.15,
                    zIndex: -1,
                    background: 'radial-gradient(circle, hsl(15, 70%, 60%), hsl(35, 80%, 55%))',
                    bottom: '-300px',
                    right: '-300px',
                }}
                animate={{
                    x: [0, -80, 60, 0],
                    y: [0, -60, -100, 0],
                    scale: [1, 1.05, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                style={{
                    position: 'fixed',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    opacity: 0.12,
                    zIndex: -1,
                    background: 'radial-gradient(circle, hsl(25, 70%, 60%), transparent)',
                    top: '20%',
                    right: '10%',
                }}
                animate={{
                    x: [0, -120, 0],
                    y: [0, 80, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Hero Section with Parallax */}
            <section className="hero">
                <motion.div
                    className="hero-bg-element element-1"
                    style={{ y: y1 }}
                />
                <motion.div
                    className="hero-bg-element element-2"
                    style={{ y: y2 }}
                />

                <motion.div
                    className="container hero-content"
                    style={{ opacity }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-badge"
                    >
                        <HiSparkles /> Available for Freelance
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
                    >
                        Design That <span className="gradient-text">Transforms</span> Your Vision
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        I create stunning digital experiences through product design, web design,
                        branding, and more. Let's bring your ideas to life with exceptional design.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Link to="/contact" className="btn btn-primary">
                            Start Your Project <HiArrowRight />
                        </Link>
                        <Link to="/portfolio" className="btn btn-outline">
                            View Portfolio
                        </Link>
                    </motion.div>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <h4>{stat.number}</h4>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="scroll-indicator">
                    <motion.div
                        className="scroll-line"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
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
                        <h2>What I Do</h2>
                        <p>Comprehensive design services tailored to your needs</p>
                    </motion.div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileTap={{ scale: 0.6 }}
                                whileHover={{ y: -8 }}
                            >
                                <div
                                    className="service-icon"
                                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
                                >
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="services-cta"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link to="/services" className="btn btn-primary">
                            View All Services & Pricing <HiArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Profile Section */}
            <section className="section profile-section">
                <div className="container">
                    <div className="profile-grid">
                        <motion.div
                            className="profile-image-wrapper"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={profileImage} alt="Bridey Mason" className="profile-image" />
                        </motion.div>

                        <motion.div
                            className="profile-content"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Meet the Designer</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                            <Link to="/about" className="btn btn-outline">
                                Learn More About Me <HiArrowRight />
                            </Link>
                        </motion.div>
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
                            <h2>Lets work together</h2>
                            <p className="why-intro">
                                I combine creativity with strategic thinking to deliver designs
                                that not only look amazing but also achieve your business goals.
                            </p>

                            <div className="why-features">
                                <div className="why-feature">
                                    <HiLightningBolt className="why-icon" />
                                    <div>
                                        <h4>Fast Turnaround</h4>
                                        <p>Quick delivery without compromising on quality</p>
                                    </div>
                                </div>
                                <div className="why-feature">
                                    <HiStar className="why-icon" />
                                    <div>
                                        <h4>Premium Quality</h4>
                                        <p>Attention to detail in every pixel</p>
                                    </div>
                                </div>
                                <div className="why-feature">
                                    <HiSparkles className="why-icon" />
                                    <div>
                                        <h4>Unlimited Revisions</h4>
                                        <p>We'll refine until you're 100% satisfied</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="why-visual dark-text-light"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="visual-card card-1"
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="visual-content">
                                    <h3>Creative</h3>
                                    <p>Innovation</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="visual-card card-2"
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, -2, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            >
                                <div className="visual-content">
                                    <h3>Strategic</h3>
                                    <p>Thinking</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="visual-card card-3"
                                animate={{
                                    y: [0, -18, 0],
                                    rotate: [0, 1.5, 0]
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            >
                                <div className="visual-content">
                                    <h3>Results</h3>
                                    <p>Driven</p>
                                </div>
                            </motion.div>
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
                    <h2>Ready to Start Your Project<span className="num">?</span></h2>
                    <p>Lets collaborate and create something amazing together</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        Get in Touch <HiArrowRight />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
