import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaDribbble, FaBehance, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        // Wait for HubSpot script to load (loaded globally in index.html)
        const initForm = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "ap1",
                    portalId: "442502758",
                    formId: "36dfe11b-c65f-4ec7-b7de-7ed02f2b9cac",
                    target: '#hubspot-form-container'
                });
            }
        };

        // If script already loaded, init immediately
        if (window.hbspt) {
            initForm();
        } else {
            // Otherwise wait for it to load
            window.addEventListener('load', initForm);
            return () => window.removeEventListener('load', initForm);
        }
    }, []);

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <motion.div
                        className="contact-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Lets Create Something <span className="gradient-text">Amazing</span></h1>
                        <p>
                            Ready to bring your vision to life? Fill out the form below and
                            I'll get back to you within 24 hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section contact-content-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2>Get in Touch</h2>
                            <p className="contact-intro">
                                I'm always excited to work on new projects and collaborate with
                                creative minds. Let's discuss how I can help bring your ideas to life.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon">
                                        <HiMail />
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <a href="mailto:brideymason@gmail.com">brideymason@gmail.com</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">
                                        <HiLocationMarker />
                                    </div>
                                    <div>
                                        <h4>Location</h4>
                                        <p>Melbourne, Australia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-social">
                                <h4>Follow Me</h4>
                                <div className="social-links">
                                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                                        <FaDribbble size={24} />
                                    </a>
                                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                                        <FaBehance size={24} />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={24} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={24} />
                                    </a>
                                </div>
                            </div>

                            <div className="availability-badge">
                                <div className="status-dot"></div>
                                <span>Available for new projects</span>
                            </div>
                        </motion.div>

                        {/* HubSpot Embedded Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div id="hubspot-form-container"></div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
