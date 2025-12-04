import { motion } from 'framer-motion';
import { HiCheck, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import {
    FaPaintBrush,
    FaLaptopCode,
    FaPalette,
    FaInstagram,
    FaFileAlt,
    FaTag
} from 'react-icons/fa';
import './Services.css';
import './services-dark-mode.css';

const Services = () => {
    const services = [
        {
            icon: <FaPaintBrush />,
            title: 'Product Design',
            description: 'End-to-end product design from concept to high-fidelity prototypes.',
            features: [
                'User Research & Analysis',
                'Wireframing & Prototyping',
                'UI/UX Design',
                'Design System Creation',
                'Usability Testing'
            ],
            color: 'hsl(260, 85%, 65%)'
        },
        // {
        //     icon: <FaLaptopCode />,
        //     title: 'Web Design',
        //     description: 'Modern, responsive websites that engage users and drive conversions.',
        //     features: [
        //         'Responsive Design',
        //         'Landing Pages',
        //         'E-commerce Design',
        //         'Web Applications',
        //         'Figma to Code'
        //     ],
        //     color: 'hsl(320, 85%, 65%)'
        // },
        {
            icon: <FaPalette />,
            title: 'Logo Design',
            description: 'Unique brand identities that capture your essence and stand out.',
            features: [
                'Logo Concepts',
                'Brand Guidelines',
                'Multiple Variations',
                'Vector Files',
                'Social Media Kit'
            ],
            color: 'hsl(180, 85%, 60%)'
        },
        {
            icon: <FaInstagram />,
            title: 'Social Media Design',
            description: 'Eye-catching social media graphics that boost engagement.',
            features: [
                'Instagram Posts',
                'Story Templates',
                'Facebook Graphics',
                'LinkedIn Banners',
                'Content Calendar Design'
            ],
            color: 'hsl(40, 85%, 60%)'
        },
        {
            icon: <FaFileAlt />,
            title: 'Presentation Design',
            description: 'Professional presentations that captivate and persuade.',
            features: [
                'Pitch Decks',
                'Corporate Presentations',
                'Keynote/PowerPoint',
                'Custom Templates',
                'Infographics'
            ],
            color: 'hsl(140, 85%, 60%)'
        },
        {
            icon: <FaTag />,
            title: 'Label Design',
            description: 'Product labels that attract attention and communicate value.',
            features: [
                'Product Labels',
                'Packaging Design',
                'Print-Ready Files',
                'Multiple Sizes',
                'Brand Consistency'
            ],
            color: 'hsl(200, 85%, 60%)'
        }
    ];

    const pricingPlans = [
        {
            name: 'Standard',
            price: '$45',
            period: 'per hour',
            description: 'Perfect for small projects and quick deliverables',
            features: [
                '1 Design Concept',
                '2 Revisions',
                '3-5 Day Delivery',
                'Source Files',
                'Email Support'
            ],
            popular: false
        },
        {
            name: 'Enterprise',
            price: '$60',
            period: 'per hour',
            description: 'Ideal for comprehensive design projects',
            features: [
                '3 Design Concepts',
                'Unlimited Revisions',
                '7-10 Day Delivery',
                'Source Files',
                'Priority Support',
                'Brand Guidelines',
                'Social Media Kit'
            ],
            popular: true
        },
        {
            name: 'Premium',
            price: '$70',
            period: 'per hour',
            description: 'For large-scale projects and ongoing partnerships',
            features: [
                'Unlimited Concepts',
                'Unlimited Revisions',
                'Custom Timeline',
                'All Source Files',
                'Dedicated Support',
                'Complete Brand Package',
                'Monthly Retainer Option',
                'Design System'
            ],
            popular: false
        }
    ];

    return (
        <div className="services-page">
            {/* Hero */}
            <section className="services-hero">
                <div className="container">
                    <motion.div
                        className="services-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Services  and  <span className="gradient-text">Pricing</span></h1>
                        <p>
                            Comprehensive design solutions tailored to your needs.
                            From branding to digital products, I've got you covered.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section services-detail-section">
                <div className="container">
                    <div className="services-detail-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-detail-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div
                                    className="service-detail-icon"
                                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
                                >
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>
                                            <HiCheck className="check-icon" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section pricing-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Transparent Pricing</h2>
                        <p>Choose the package that fits your project needs</p>
                    </motion.div>

                    <div className="pricing-grid">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                {plan.popular && <div className="popular-badge">Most Popular</div>}

                                <h3>{plan.name}</h3>
                                <div className="price">
                                    <span className="price-amount">{plan.price}</span>
                                    <span className="price-period">/{plan.period}</span>
                                </div>
                                <p className="pricing-description">{plan.description}</p>

                                <ul className="pricing-features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>
                                            <HiCheck className="check-icon" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="pricing-note"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p>
                            💡 All packages include commercial usage rights and satisfaction guarantee.
                            Custom packages available for unique requirements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section services-cta-section">
                <motion.div
                    className="container services-cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Not Sure Which Package to Choose<span className="num">?</span></h2>
                    <p>Let's discuss your project and find the perfect solution together</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        Schedule a Consultation <HiArrowRight />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Services;
