import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiCheck } from 'react-icons/hi';
import { FaDribbble, FaBehance, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        referral: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectType: '',
                budget: '',
                timeline: '',
                description: '',
                referral: ''
            });
        }, 3000);
    };

    const projectTypes = [
        'Product Design',
        'Web Design',
        'Logo Design',
        'Social Media Design',
        'Presentation Design',
        'Label Design',
        'Other'
    ];

    const budgetRanges = [
        'Under $500',
        '$500 - $1,000',
        '$1,000 - $2,500',
        '$2,500 - $5,000',
        '$5,000 - $10,000',
        'Over $10,000'
    ];

    const timelines = [
        'ASAP (Rush)',
        '1-2 weeks',
        '2-4 weeks',
        '1-2 months',
        '2-3 months',
        'Flexible'
    ];

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
                        <h1>Let's Create Something <span className="gradient-text">Amazing</span></h1>
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
                                        <a href="mailto:hello@designstudio.com">hello@designstudio.com</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">
                                        <HiPhone />
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <a href="tel:+15551234567">+1 (555) 123-4567</a>
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

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {isSubmitted ? (
                                <div className="success-message">
                                    <div className="success-icon">
                                        <HiCheck />
                                    </div>
                                    <h3>Thank You!</h3>
                                    <p>Your message has been received. I'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="company">Company/Organization</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="projectType">Project Type *</label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a service</option>
                                                {projectTypes.map((type) => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="budget">Budget Range *</label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select budget</option>
                                                {budgetRanges.map((range) => (
                                                    <option key={range} value={range}>{range}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="timeline">Project Timeline *</label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select timeline</option>
                                            {timelines.map((time) => (
                                                <option key={time} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="description">Project Description *</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            placeholder="Tell me about your project, goals, target audience, and any specific requirements..."
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="referral">How did you hear about me?</label>
                                        <input
                                            type="text"
                                            id="referral"
                                            name="referral"
                                            value={formData.referral}
                                            onChange={handleChange}
                                            placeholder="Google, Referral, Social Media, etc."
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-full btn-lg">
                                        Send Message
                                    </button>

                                    <p className="form-note">
                                        * Required fields. Your information is kept confidential.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
